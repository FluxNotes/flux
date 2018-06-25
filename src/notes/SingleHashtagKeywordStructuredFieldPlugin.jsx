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
	const insertStructuredFieldChange = opts.insertStructuredFieldChange;
	const structuredFieldMapManager = opts.structuredFieldMapManager;

	function onChange (curChange) { 
		const curNode = curChange.value.endBlock;
		const editorValue = curChange.value
		// Apply change operations if there were matches; else nothing
		replaceAllRelevantKeywordsInBlock(curNode, curChange, editorValue)
	}

	function replaceAllRelevantKeywordsInBlock(curNode, curChange, editorValue) { 
		const listOfSingleHashtagKeywordShortcutMappings = getKeyToActiveSingleHashtagKeywordShortcutMappings();
		const curKey = curNode.key;
		// To track if additional operations are done later
		const startingNumberOfOperations = curChange.operations.size;

		// get all shortcuts relevant for this block key 
		const relevantSingleHashtagKeywordMappings = getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, editorValue, curKey)
		if (relevantSingleHashtagKeywordMappings.size !== 0) {
			// Get all relevant keywordShortcuts, 
			const listOfKeywordShortcutClasses = findRelevantKeywordShortcutClasses(listOfSingleHashtagKeywordShortcutMappings).reduce((accumulator, listOfKeywordsForShortcut) => accumulator.concat(listOfKeywordsForShortcut), []);
			for (const keywordClass of listOfKeywordShortcutClasses) {
				// Scan text to find any necessary replacements 
				const keywords = getKeywordsBasedOnShortcutClass(keywordClass)
				// Sort keywords based on length -- we want to match longest options first
				keywords.sort(_sortKeywordByNameLength);
				const keywordInClosetBlock = scanTextForKeywordObject(curNode.text, keywords)
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
						keywordRange = getRangeForKeyword(curNode, keywordText)
					}
					// Remove keyword from block, using first character as the prefix
					curChange = curChange.select(keywordRange).delete();
					// Add shortcut to text; update curNode and curText
					curChange = insertStructuredFieldChange(curChange, newKeywordShortcut)
					curNode = curChange.value.endBlock
				} 
			}
		}
		// If operations have been done, put selection at the end of recent insertion
		const isNewOperations = curChange.operations.size > startingNumberOfOperations
		if (isNewOperations) { 
			curChange = curChange.collapseToEndOf(curNode).focus()
		}
		return [curChange, isNewOperations]
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
		const trailingCharacterRegex = /[\s\r\n.!?;,)}\]]/;
		const textToMatch = text.toLowerCase();
		// We only want to match if there is a 'phrase finishing' character at the end of the text
		for (const keywordObj of keywordObjects) { 
			const keywordTextToMatch = new RegExp(keywordObj.name.toLowerCase() + trailingCharacterRegex.source)
			if (textToMatch.search(keywordTextToMatch) !== -1) { 
				return keywordObj
			}
		}
	}

	// Given a list of singleHastagKeywordShortcut key:shortcut mappings, editor editorValue and current text-node key,
	// Filter our mappings to only shorcuts who are directly next to our current text-node  
	function getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, editorValue, currentNodeKey) {
		return listOfSingleHashtagKeywordShortcutMappings.filter((mapping) => {
			let closestBlock;

			// Added try catch editorValuement to catch error when adding template after SingleHashtagKeyword shortcut
			// returns false to filter out if error occurs
			try {
				closestBlock = editorValue.document.getClosestBlock(Object.keys(mapping)[0]);
			} catch (error) {
				return false;
			}

			// We want to get the closest block to the keyword's 
			return closestBlock.key === currentNodeKey;
		});
	}

	// Sort keywords based on name length 
	function _sortKeywordByNameLength(keywordA, keywordB) { 
		return keywordB.name.length - keywordA.name.length;
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
		onChange,
		
        utils: {
			replaceAllRelevantKeywordsInBlock: replaceAllRelevantKeywordsInBlock
        },
    };
}

export default SingleHashtagKeywordStructuredFieldPlugin