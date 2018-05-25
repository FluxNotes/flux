import SingleHashtagKeyword from '../shortcuts/SingleHashtagKeyword'
import Lang from 'lodash';
import Collection from 'lodash';

function createOpts(opts) {
    opts = opts || {};
	return opts;
}

function SingleHashtagKeywordStructuredFieldPlugin(opts) {
    opts = createOpts(opts);
    let shortcutManager = opts.shortcutManager;
    let contextManager = opts.contextManager;
	let createShortcut = opts.createShortcut;
	let updateErrors = opts.updateErrors;
	// maps keys to lists of active keywords
	let nodeKeyToActiveKeywords = {};

	//  On change, add/remove shortcuts for keywords
    function onChange(state, editor) {
		const docText = state.document.text;
		// console.log(docText)
		// console.log('---- getKeyToActives....')
		const listOfSingleHashtagKeywordShortcutMappings = getKeyToActiveSingleHashtagKeywordShortcutMappings();
		const nodes = state.document.getBlocks();
		nodes.forEach((node) => {
			const curKey = node.key;
			const curText = node.text;
			// Initialize the array of keywords if this is a new node.
			if (Lang.isUndefined(nodeKeyToActiveKeywords[curKey])) nodeKeyToActiveKeywords[curKey] = [];
			// get all shortcuts relevant for this block key 
			const relevantSingleHashtagKeywordMappings = getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, state, curKey)
			if (relevantSingleHashtagKeywordMappings.length !== 0) { 
				const listOfKeywordShortcutClasses = findRelevantKeywordShortcutClasses(listOfSingleHashtagKeywordShortcutMappings).reduce((accumulator, listOfKeywordsForShortcut) => accumulator.concat(listOfKeywordsForShortcut));
				listOfKeywordShortcutClasses.forEach((keywordClass, ...otherargs) =>{
					// Check all relevant keywords for new additions or removals
					const keywords = getKeywordsBasedOnShortcutClass(keywordClass)
					const foundKeywordInClosetBlock = scanTextForKeywordObject(curText, keywords)
					if (foundKeywordInClosetBlock) { 
						// either already detected or new
						const isNewKeyword = Lang.isUndefined(nodeKeyToActiveKeywords[curKey].find((keywordShortcut) => { 
							return foundKeywordInClosetBlock.name.toLowerCase() === keywordShortcut.initiatingTrigger.toLowerCase();
						}));
						if (isNewKeyword) { 
							const newKeywordShortcut = createShortcut(null, foundKeywordInClosetBlock.name)
							addActiveKeywordFromMap(newKeywordShortcut, curKey)
						} 
					} else { 
						// either deleted or sofar undetected
						const activeShortcutMissing = scanTextForMissingKeywordShortcut(curText, nodeKeyToActiveKeywords[curKey])
						if (activeShortcutMissing) { 
							deleteShortcut(activeShortcutMissing, curKey)
						}
					}
				})
			}	
		});

        return state;
	}
	
	// Delete shortcut and remove traces from activeKeyword Map
	function deleteShortcut (keywordShortcut, curKey) { 
		if (keywordShortcut.onBeforeDeleted()) {
			removeActiveKeywordFromMap(keywordShortcut, curKey)
			contextManager.contextUpdated();
		} else {
			updateErrors([ "Unable to delete " + keywordShortcut.getLabel() + " because " + keywordShortcut.getChildren().map((child) => { return child.getText(); }).join() + " " + ((keywordShortcut.getChildren().length > 1) ? "depend" : "depends") + " on it." ]);
		}
	}

	// Splice out keyword from array ofo values
	function removeActiveKeywordFromMap(keywordShortcut, key) { 
		const keywordArray = nodeKeyToActiveKeywords[key];
		const indexOfKeyword = keywordArray.indexOf(keywordShortcut);
		if (indexOfKeyword === -1) { 
			console.error('tried to remove a keyword from our map of nodeKey to keywords; no such keyword existed')
		} else { 
			keywordArray.splice(indexOfKeyword, 1)
		}
	}

	// add keyword to array of keywords for this nodeKey
	function addActiveKeywordFromMap(keyword, key) { 
		// console.log("addingActiveKeyword")
		// Create an array for key if needed
		let keywordArray = nodeKeyToActiveKeywords[key];
		if (Lang.isUndefined(keywordArray)) {
			nodeKeyToActiveKeywords[key] = [];
			keywordArray = nodeKeyToActiveKeywords[key];
		}
		keywordArray.push(keyword)
		// console.log(keywordArray)
	}

	// Given block-node's text & keywordObjects asso. w/ a SingleHashtagKeywordShortcut , return first keyword found in that text (if any)
	function scanTextForKeywordObject(text, keywordObjects) { 
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
		
		opts.structuredFieldMapManager.keyToShortcutMap.forEach((shortcut, key, map) => { 
			// console.log("map")
			// console.log(map)
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
        },
    };
}

export default SingleHashtagKeywordStructuredFieldPlugin