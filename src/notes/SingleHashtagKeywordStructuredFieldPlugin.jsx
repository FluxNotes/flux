import SingleHashtagKeyword from '../shortcuts/SingleHashtagKeyword'
import Lang from 'lodash';
import { Selection } from '../lib/slate';
import Collection from 'lodash';
import { list } from 'postcss';

function createOpts(opts) {
    opts = opts || {};
	return opts;
}

function SingleHashtagKeywordStructuredFieldPlugin(opts) {
    opts = createOpts(opts);
	let updateErrors = opts.updateErrors;
    const shortcutManager = opts.shortcutManager;
    const contextManager = opts.contextManager;
	const createShortcut = opts.createShortcut;
	const insertStructuredFieldTransform = opts.insertStructuredFieldTransform;
	const suggestionDeleteExistingTransform = opts.suggestionDeleteExistingTransform;
	const structuredFieldMapManager = opts.structuredFieldMapManager;

	function onBeforeInput (e, data, editorState) { 
		e.preventDefault()
		// Insert text and parse results
		const curTransform  = editorState.transform().insertText(e.data);
		const curKey = curTransform.state.endKey;
		const curNode = curTransform.state.endBlock;

		// Apply transform operations -- if there are no relevant operations, effective noop
		return replaceAllRelevantKeywordsInBlock(curNode, curTransform, curTransform.state).apply()
	}

	function replaceAllRelevantKeywordsInBlock(curNode, curTransform, state) { 
		const listOfSingleHashtagKeywordShortcutMappings = getKeyToActiveSingleHashtagKeywordShortcutMappings();
		const curKey = curNode.key;
		let curText = curNode.text;
		const startingNumberOfOperations = curTransform.operations.length;

		const keyToShortcutMap = structuredFieldMapManager.keyToShortcutMap;

		// get all shortcuts relevant for this block key 
		const relevantSingleHashtagKeywordMappings = getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, state, curKey)
		// console.log("relevantSingleHashtagKeywordMappings")
		// console.log(relevantSingleHashtagKeywordMappings)

		if (relevantSingleHashtagKeywordMappings.length !== 0) {
			// Get all relevant keywordShortcuts, 
			const listOfKeywordShortcutClasses = findRelevantKeywordShortcutClasses(listOfSingleHashtagKeywordShortcutMappings).reduce((accumulator, listOfKeywordsForShortcut) => accumulator.concat(listOfKeywordsForShortcut));
			for (const keywordClass of listOfKeywordShortcutClasses) {
				// console.log('for KeywordClass')
				// console.log(keywordClass)
				// console.log(curText)
				// Scan text to find any necessary replacements 
				const keywords = getKeywordsBasedOnShortcutClass(keywordClass)
				const keywordInClosetBlock = scanTextForKeywordObject(curText, keywords)
				if (!Lang.isUndefined(keywordInClosetBlock)) { 
					const keywordText = keywordInClosetBlock.name.toLowerCase()
					const newKeywordShortcut = createShortcut(null, keywordText)
					// KeywordRange never be null -- we've already confirmed the existance of the keyword
					let keywordRange;
					if(curNode.nodes) { 
						for (const childNode of curNode.nodes){
							keywordRange = getRangeForKeyword(childNode, keywordText)
							if (keywordRange) break;
						}
					} else {
						// console.log(curNode)
						keywordRange = getRangeForKeyword(curNode, keywordText)
					}
					// Remove keyword from block, using first character as the prefix
					curTransform = curTransform.select(keywordRange).delete();
					console.log('just deleted')
					console.log(curTransform)
					// Add shortcut to text; add 
					curTransform = insertStructuredFieldTransform(curTransform, newKeywordShortcut)
					curNode = curTransform.state.endBlock
					curText = curNode.text;
				} 
			}
		}
		if (curTransform.operations.length > startingNumberOfOperations) { 
			console.log('non-trivial transforms')
			console.log(curTransform.operations.length)
			curTransform = curTransform.collapseToEndOfNextText().focus()
		}
		return curTransform
	}

	// Get the slate Range of the freeText associated with a given keywordText
	function getRangeForKeyword (curNode, keywordText) { 
		// console.log("--- getRangeForKeyword")
		// console.log("keywordText")
		// console.log(keywordText)

		// Return nothing if text is not found in this node
		if (curNode.text.toLowerCase().indexOf(keywordText) === -1) {
			return;  
		} else { 
			const anchorKey = curNode.key;
			const anchorOffset = curNode.text.toLowerCase().indexOf(keywordText);
			const focusKey = anchorKey;
			const focusOffset = anchorOffset + keywordText.length;
			const isBackward = false;
			const isFocused = false;

			return {
				anchorKey: anchorKey,
				anchorOffset: anchorOffset,
				focusKey: focusKey,
				focusOffset: focusOffset,
				isFocused: isFocused,
				isBackward: isBackward,
			}
		}
	}
	// For all inline and text nodes, find the node with our keyword
	
	// Delete shortcut and remove traces from activeKeyword Map
	function deleteShortcut (keywordShortcut, curKey) { 
		const keyToShortcutMap = structuredFieldMapManager.keyToShortcutMap;
        const idToShortcutMap = structuredFieldMapManager.idToShortcutMap;
		if (keywordShortcut.onBeforeDeleted()) {
			keyToShortcutMap.delete(curKey);
			idToShortcutMap.delete(keywordShortcut.metadata.id)
			contextManager.contextUpdated();
		} else {
			updateErrors([ "Unable to delete " + keywordShortcut.getLabel() + " because " + keywordShortcut.getChildren().map((child) => { return child.getText(); }).join() + " " + ((keywordShortcut.getChildren().length > 1) ? "depend" : "depends") + " on it." ]);
		}
	}

	// Given block-node's text & keywordObjects asso. w/ a SingleHashtagKeywordShortcut , return first keyword found in that text (if any)
	function scanTextForKeywordObject(text, keywordObjects) { 
		// return 
		for (const keywordObj of keywordObjects) { 
			if (text.toLowerCase().indexOf(keywordObj.name.toLowerCase()) !== -1) { 
				return keywordObj
			}
		}
	}

	// Given block-node's text & Keyword hortcuts expected to be within it, find the first keyword missing (if any)
	function scanTextForMissingKeywordShortcut(text, keywordShortcuts) { 
		for (const shortcut of keywordShortcuts) { 
			if (text.toLowerCase().indexOf(shortcut.initiatingTrigger.toLowerCase()) === -1) { 
				return shortcut
			}
		}
	}

	// Given a list of singleHastagKeywordShortcut key:shortcut mappings, editor state and current text-node key,
	// Filter our mappings to only shorcuts who are directly next to our current text-node  
	function getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, state, currentNodeKey) {
		return listOfSingleHashtagKeywordShortcutMappings.filter((mapping) => { 
			// We want to get the closest block to the keyword's 
			return state.document.getClosestBlock(Object.keys(mapping)[0]).key === currentNodeKey;
		});
	}

	// Given a keywordShortcutClass, get all of the associated keywords
	function getKeywordsBasedOnShortcutClass(keywordShortcutClass) { 
		return shortcutManager.getKeywordsForShortcut(keywordShortcutClass)
	}

	// Given a list of singlehashtagkeyword shortcuts mappings, get all of the relevant keywords
	function findRelevantKeywordShortcutClasses(listOfSingleHashtagKeywordShortcutMappings) { 
		// Returns a list 
		return listOfSingleHashtagKeywordShortcutMappings.map((mapping) => { 
			// We know the mapping is a single k-v pair, just get all the keys, use the first
			const keys = Object.keys(mapping)
			if (keys.length !== 0) { 
				const shortcut = mapping[keys[0]]
				return shortcutManager.getValidChildShortcutsInContext(shortcut)
			}
		})
	}

	// Get a slateKey:shortcut mapping of all active single hashtag keyword shortcuts
	function getKeyToActiveSingleHashtagKeywordShortcutMappings() { 
		const listOfSingleHashtagKeywordShortcutMappings = [];
		
		structuredFieldMapManager.keyToShortcutMap.forEach((shortcut, key, map) => { 
			// Only list mappings for SingleHashtagKeyword shortcuts
			if (shortcut instanceof SingleHashtagKeyword) {
				const mapping = {};
				mapping[key] = shortcut;
				listOfSingleHashtagKeywordShortcutMappings.push(mapping)
			}
		})
		return listOfSingleHashtagKeywordShortcutMappings;
	}

	return {
		onBeforeInput,
		
        utils: {
			replaceAllRelevantKeywordsInBlock: replaceAllRelevantKeywordsInBlock
        },
    };
}

export default SingleHashtagKeywordStructuredFieldPlugin