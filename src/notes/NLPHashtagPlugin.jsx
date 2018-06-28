import NLPHashtag from '../shortcuts/NLPHashtag'
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
	const stopCharacters = [
		'.',
		'?',
		'!',
	]
	const phraseDelimiters = [
		'\s',
		'\r',
		'\n',
	]

	let count = 0;
	function containsNLPHashtag(editorValue) { 
		return true
	} 
	function extractNLPHashtagFullPhrase(editorValue) { 
		count += 1;
		if (count > 30) { 
			return 'anything'
		} else { 
			return
		}
	}	
	function onChange (change) { 
		if (containsNLPHashtag(change.value)) { 
			// Pull out NLP hashtag phrase if there is one
			const NLPHashtagPhrase = extractNLPHashtagFullPhrase(change.value)
			if (!Lang.isUndefined(NLPHashtagPhrase)) { 
				// send this data somewhere 
				// Somehow make the change after the fact. 
				console.log('change')
				console.log(change)
				console.log('change.value')
				console.log(change.value)
				console.log('onChange')
			} else { 
				return
			}
		} else { 
			return
		}
		// is there an nlp hashtag?
		// yes: 
		// 	  is there a stopCharacter followed by a finishedTokenSymbol
		// 	  yes: 
		// 		  send that slice of text off to be processed -- promise
		// 		  once promise is fufilled, invoke a change on the editor based on the promise's return value.
		//	  no: 
		//		  nothing to do
		// no: 
		//	  exit -- no change to make
	}

	// // Get the slate Range of the freeText associated with a given keywordText
	// function getRangeForKeyword (curNode, keywordText) { 
	// 	// Return nothing if text is not found in this node
	// 	if (curNode.text.toLowerCase().indexOf(keywordText) === -1) {
	// 		return;  
	// 	} else { 
	// 		const anchorKey = curNode.key;
	// 		const anchorOffset = curNode.text.toLowerCase().indexOf(keywordText);
	// 		const focusKey = anchorKey;
	// 		const focusOffset = anchorOffset + keywordText.length;
	// 		const isBackward = false;
	// 		const isFocused = false;

	// 		return {
	// 			anchorKey: anchorKey,
	// 			anchorOffset: anchorOffset,
	// 			focusKey: focusKey,
	// 			focusOffset: focusOffset,
	// 			isFocused: isFocused,
	// 			isBackward: isBackward,
	// 		}
	// 	}
	// }

	// // Given block-node's text & keywordObjects asso. w/ a SingleHashtagKeywordShortcut , return first keyword found in that text (if any)
	// function scanTextForKeywordObject(text, keywordObjects) { 
	// 	const trailingCharacterRegex = /[\s\r\n.!?;,)}\]]/;
	// 	const textToMatch = text.toLowerCase();
	// 	// We only want to match if there is a 'phrase finishing' character at the end of the text
	// 	for (const keywordObj of keywordObjects) { 
	// 		const keywordTextToMatch = new RegExp(keywordObj.name.toLowerCase() + trailingCharacterRegex.source)
	// 		if (textToMatch.search(keywordTextToMatch) !== -1) { 
	// 			return keywordObj
	// 		}
	// 	}
	// }

	// // Given a list of singleHastagKeywordShortcut key:shortcut mappings, editor state and current text-node key,
	// // Filter our mappings to only shorcuts who are directly next to our current text-node  
	// function getRelevantSingleHashtagKeywordMappings(listOfSingleHashtagKeywordShortcutMappings, state, currentNodeKey) {
	// 	return listOfSingleHashtagKeywordShortcutMappings.filter((mapping) => {
	// 		let closestBlock;

	// 		// Added try catch statement to catch error when adding template after SingleHashtagKeyword shortcut
	// 		// returns false to filter out if error occurs
	// 		try {
	// 			closestBlock = state.document.getClosestBlock(Object.keys(mapping)[0]);
	// 		} catch (error) {
	// 			return false;
	// 		}

	// 		// We want to get the closest block to the keyword's 
	// 		return closestBlock.key === currentNodeKey;
	// 	});
	// }

	// // Sort keywords based on name length 
	// function _sortKeywordByNameLength(keywordA, keywordB) { 
	// 	return keywordB.name.length - keywordA.name.length;
	// }

	// // Given a keywordShortcutClass, get all of the associated keywords
	// function getKeywordsBasedOnShortcutClass(keywordShortcutClass) { 
	// 	return shortcutManager.getKeywordsForShortcut(keywordShortcutClass)
	// }

	// // Given a list of singlehashtagkeyword shortcuts mappings, get all of the relevant keywords
	// function findRelevantKeywordShortcutClasses(listOfSingleHashtagKeywordShortcutMappings) { 
	// 	// Returns a list 
	// 	return listOfSingleHashtagKeywordShortcutMappings.map((mapping) => { 
	// 		// We know the mapping is a single k-v pair, just get all the keys, use the first
	// 		const keys = Object.keys(mapping)
	// 		const shortcut = mapping[keys[0]]
	// 		return shortcutManager.getValidChildShortcutsInContext(shortcut)
	// 	})
	// }

	// // Get a slateKey:shortcut mapping of all active single hashtag keyword shortcuts
	// function getKeyToActiveSingleHashtagKeywordShortcutMappings() { 
	// 	const listOfSingleHashtagKeywordShortcutMappings = [];
		
	// 	structuredFieldMapManager.keyToShortcutMap.forEach((shortcut, key, map) => { 
	// 		// Only list mappings for SingleHashtagKeyword shortcuts
	// 		if (shortcut instanceof SingleHashtagKeyword) {
	// 			const mapping = {};
	// 			mapping[key] = shortcut;
	// 			listOfSingleHashtagKeywordShortcutMappings.push(mapping)
	// 		}
	// 	})
	// 	return listOfSingleHashtagKeywordShortcutMappings;
	// }

	return {
		onChange,
		
        utils: {
			// replaceAllRelevantKeywordsInBlock: replaceAllRelevantKeywordsInBlock
        },
    };
}

export default SingleHashtagKeywordStructuredFieldPlugin