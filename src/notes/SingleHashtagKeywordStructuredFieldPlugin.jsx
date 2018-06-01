import SingleHashtagKeyword from '../shortcuts/SingleHashtagKeyword'
import Lang from 'lodash';

function createOpts(opts) {
    opts = opts || {};
	return opts;
}

function SingleHashtagKeywordStructuredFieldPlugin(opts) {
    opts = createOpts(opts);
    const shortcutManager = opts.shortcutManager;
	const createShortcut = opts.createShortcut;
	const insertStructuredFieldTransform = opts.insertStructuredFieldTransform;
	const structuredFieldMapManager = opts.structuredFieldMapManager;

	function onBeforeInput (e, data, editorState) { 
		e.preventDefault()
		// Insert text and replace relevant keywords in results
		const curTransform  = editorState.transform().insertText(e.data);
		const curNode = curTransform.state.endBlock;
		// Apply transform operations -- if there are no relevant operations, effective noop
		return replaceAllRelevantKeywordsInBlock(curNode, curTransform, curTransform.state).apply()
	}

	function replaceAllRelevantKeywordsInBlock(curNode, curTransform, state) { 
		const listOfSingleHashtagKeywordShortcutMappings = getKeyToActiveSingleHashtagKeywordShortcutMappings();
		const curKey = curNode.key;
		let curText = curNode.text;
		// To track if additional operations are done later
		const startingNumberOfOperations = curTransform.operations.length;

		// get all shortcuts relevant for this block key 
		const relevantSingleHashtagKeywordMappings = getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, state, curKey)
		if (relevantSingleHashtagKeywordMappings.length !== 0) {
			// Get all relevant keywordShortcuts, 
			const listOfKeywordShortcutClasses = findRelevantKeywordShortcutClasses(listOfSingleHashtagKeywordShortcutMappings).reduce((accumulator, listOfKeywordsForShortcut) => accumulator.concat(listOfKeywordsForShortcut));
			for (const keywordClass of listOfKeywordShortcutClasses) {
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
					// Add shortcut to text; update curNode and curText
					curTransform = insertStructuredFieldTransform(curTransform, newKeywordShortcut)
					curNode = curTransform.state.endBlock
					curText = curNode.text;
				} 
			}
		}
		// If operations have been done, put selection at the end of recent insertion
		if (curTransform.operations.length > startingNumberOfOperations) { 
			curTransform = curTransform.collapseToEndOfNextText().focus()
		}
		return curTransform
	}

	// Get the slate Range of the freeText associated with a given keywordText
	function getRangeForKeyword (curNode, keywordText) { 
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

	// Given block-node's text & keywordObjects asso. w/ a SingleHashtagKeywordShortcut , return first keyword found in that text (if any)
	function scanTextForKeywordObject(text, keywordObjects) { 
		// return 
		for (const keywordObj of keywordObjects) { 
			if (text.toLowerCase().indexOf(keywordObj.name.toLowerCase()) !== -1) { 
				return keywordObj
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
			const shortcut = mapping[keys[0]]
			return shortcutManager.getValidChildShortcutsInContext(shortcut)
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