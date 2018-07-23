import Lang from 'lodash';
import Collection from 'lodash';
import Shortcut from '../shortcuts/Shortcut';
// import Slate from '../lib/slate'
import { Selection } from '../lib/slate'

// const API_ENDPOINT = "http://heliotrope.mitre.org:8551/api/parse_sentence"
const DOMAIN = "http://127.0.0.1"
const PORT = "8551"
const API_ROUTE = "/api/parse_sentence"
const API_ENDPOINT = `${DOMAIN}:${PORT}${API_ROUTE}`

function createOpts(opts) {
	opts = opts || {};
	return opts;
}

function SingleHashtagKeywordStructuredFieldPlugin(opts) {
    opts = createOpts(opts);
    const shortcutManager = opts.shortcutManager;
    const contextManager = opts.contextManager;
	const createShortcut = opts.createShortcut;
	const insertStructuredFieldTransform = opts.insertStructuredFieldTransform;
	const structuredFieldMapManager = opts.structuredFieldMapManager;
	const getEditorValue = opts.getEditorValue;
	const setEditorValue = opts.setEditorValue;
	const stopCharacters = [
		'\\.',
		'\\?',
		'!',
	]
	const phraseDelimiters = [
		'\\s',
		'\\r',
		'\\n',
	]
	// '$' means this regexp only triggers when the phrase delimiter occurs at the end of the string.
	const endOfSentenceRegexp = new RegExp(`(.*)(${stopCharacters.join('|')})(${phraseDelimiters.join('|')})\$`, 'i')
	// Return the NLP hasgtag if there is one, else return nothing
	function getNLPHashtag() { 
		// Check the activeContexts for anything that is an instance of NLPHashtag
		return Collection.find(contextManager.getActiveContexts(), ((shortcut, i) => {
			return shortcutManager.isShortcutInstanceOfNLPHashtag(shortcut);	
		}))
	} 

	// Get the slate Range based on the NLPphrase
	function getRangeBasedOnPhrase (keyAfterNLPShortcut, NLPphrase) { 
		// Return nothing if text is not found in this node
		const anchorKey = keyAfterNLPShortcut;
		const anchorOffset = NLPphrase.orig_start;
		const focusKey = keyAfterNLPShortcut;
		const focusOffset = NLPphrase.orig_end;
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

	// Get the slate Range of the keywordText found within an Inline/Text Node
	function getRangeForText (curNode, keywordText) { 
		console.log(curNode)
		console.log(keywordText)
		// Return nothing if text is not found in this node
		if (curNode.text.toLowerCase().indexOf(keywordText.toLowerCase()) === -1) {
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

	// Get a text representation of the sentence following the NLPHashtag
	function getSentenceContainingNLPHashtag(editorState, NLPShortcut) { 
		// Get the block immediately following the NLPShortcut
		const nodeAfterNLPShortcut = editorState.document.getNextSibling(NLPShortcut.key);
		// Relevant selection is from the end of the shortcut to the end of my selection
		const relevantSelection = { 
			anchorKey: nodeAfterNLPShortcut.key,
			anchorOffset: 0,
			focusKey: editorState.endKey,
			focusOffset: editorState.endOffset,
			isFocused: false,
			isBackward: false,
		};
		const relevantFragment = editorState.document.getFragmentAtRange(new Selection(relevantSelection))
		// console.log(relevantFragment)
		// For every node of that block: 
		const nodesFollowingNLPShortcut = [];
		for (const node of relevantFragment.nodes) {
			// If we've seent the shortcut, accumulate this node
			nodesFollowingNLPShortcut.push(node.toJSON())
		}
		const textRepresentationOfNodes = convertToTextForNLPEngine(nodesFollowingNLPShortcut);
		// console.log(textRepresentationOfNodes)
		// return all accumulated nodes converted to text
		return convertToTextForNLPEngine(nodesFollowingNLPShortcut)
	}

	// Given a list of Slate nodes, convert them to text
	function convertToTextForNLPEngine (nodes) { 
		let resultText = "";
		nodes.forEach((node) => { 
			if (node.type === 'line') {
                resultText += `\n${convertToTextForNLPEngine(node.nodes)}`;
            } else if (node.type === 'structured_field') {
				// We don't want to parse already structured data -- ignore
				let shortcut = node.data.shortcut;
                // resultText += shortcut.getResultText();
			} else if (node.characters && node.characters.length > 0) {
				node.characters.forEach(char => {
					resultText += char.text;
				});
			} else if (Lang.isUndefined(node.type) && node.characters && node.characters.length === 0) {
				// Zero-width element -- skip
			} else {  
				console.error(`Do not currently handle a case for type: ${node.type}`)
			}
		})
		return resultText
	}
	
	// Extracts the fully-formed phrase for an NLP shortcut if there is one, else return nothing
	function extractNLPHashtagFullPhrase(editorState, editor, NLPShortcut) { 
		// Find the sentence that contains the NLP hashtag
		const textRepresentation = getSentenceContainingNLPHashtag(editorState, NLPShortcut)
		// Check if that sentence contains a stopCharacter followed by a finishedTokenSymbol
		const matches = textRepresentation.match(endOfSentenceRegexp);
		if (matches) { 
			return matches[0]
		} 
	}

	// Process the NLP HTTP Response so we can get the data we care about off of it
	function processNLPEngineResponse(res) { 
		// console.log(res)
		return res.json()
	}

	// Used when processNLPEngineResponse throws an error; handle gracefully and alert console to failure
	function failedToProcessNLPEngineResponse(error) { 
		isFetching = false;
		console.log('error in request here -- expected')
		console.log(error)
	}

	// Parse canonicalization to retrieve keyword 	
	function parseKeywordFromCanonicalizationBasedOnPhrase(canonicalization, typeOfPhrase) { 
		switch (typeOfPhrase) {
			case "ATTRIBUTION":
				return canonicalization.toLowerCase();
			case "CTCAE":
				return `#${canonicalization.ctcae.toLowerCase()}`;
			case "GRADE":
				return canonicalization.toLowerCase();
			default:
				const err = {
					name: "CanonicalizationParseError",
					msg: `Failed to get keyword from canonoicalization ${canonicalization} for typeOfPhrase ${typeOfPhrase}`,
				};
				console.error(err.msg);
				throw err;
		}
	}

	function parseArryOfPhrases(arrayOfPhrases, editorTransform, NLPShortcut) { 
		console.log(arrayOfPhrases);
		if (Lang.isUndefined(arrayOfPhrases)) { 
			return editorTransform; 
		} else { 
			let editorState = editorTransform.state;
			const nodeAfterNLPShortcut = editorState.document.getNextSibling(NLPShortcut.key);
			let originalTextRange;
			for (const phraseValue of arrayOfPhrases) { 
				const typeOfPhrase = phraseValue.name;
				const NLPKeyword = parseKeywordFromCanonicalizationBasedOnPhrase(phraseValue.canonicalization, typeOfPhrase);
				const NLPShortcut = createShortcut(null, NLPKeyword)
				// console.log(NLPShortcut)
				// get range for originalText
				originalTextRange = getRangeBasedOnPhrase(nodeAfterNLPShortcut.key, phraseValue)
				// Remove keyword from block, using first character as the prefix
				editorTransform = editorTransform.select(originalTextRange).delete();
				// Add shortcut to text; update relevantFragment and curText
				editorTransform = insertStructuredFieldTransform(editorTransform, NLPShortcut)
				editorState = editorTransform.state;
			}
			return editorTransform
		}
	}

	// Comparison function that sorts phrases in reverse order of original_start location
	// That is, orders them in reverse order of appearance in the sentence (last phrases come first)
	// This ensures that inserting phrase-1 won't mangle the indicies used when inserting phrase-2 
	// N.B. If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
	function sortPhrases(phraseA, phraseB) { 
		return phraseB.end - phraseA.end;
	}

	// Returns a single array containing all phrases, listed in reverse order of appearance. 
	function orderPhrasesForReverseInsertion(phrases) { 
		// console.log(phrases);
		return Collection.reduce(phrases, (result, value, key) => {
			// Value should be an array of phrases of type 'key' (e.g. of type 'ATTRIBUTION')
			return result.concat(value);
		  }, []).sort(sortPhrases)
	}

	// Given a list of phrases, parse them and insert them all in reverse order, changing editor state accordingly.
	function parsePhrases(phrases, data, NLPShortcut) { 
		const editorState = getEditorValue();
		let editorTransform = editorState.transform();
		const phrasesInOrder = orderPhrasesForReverseInsertion(phrases)
		editorTransform = parseArryOfPhrases(phrasesInOrder, editorTransform, NLPShortcut);
		if (editorTransform.operations.length > 0) { 
			setEditorValue(editorTransform.collapseToEnd().focus().apply())
		}
	}

	// Given data extracted from NLP engine, parse it for meaningful feedback and use that to perform necessary insertions.
	function processNLPEngineData(NLPShortcut, data) { 
		if (!(NLPShortcut instanceof Shortcut) && typeof NLPShortcut === 'object' && NLPShortcut !== null && data === undefined) { 
			// If we haven't bound a valid shortcut, and the first arg looks like data, we should define data as such
			data = NLPShortcut
		}
		isFetching = false;
		console.log('successful case here')
		const phrases = data.phrases;
		const success = data.success;
		if (!success) { 
			console.error('Engine Error: Response data from the NLP engine says an error occurred, provided this msg')
			console.error(data.error)
			return
		} else if (Lang.isEmpty(phrases)) { 
			// Quit if phrases is empty
			return  
		} else { 
			// There should be some phrases we want to insert.
			console.log(data)
			parsePhrases(phrases, data, NLPShortcut)	
		}
	}

	// Used when fetch throws an error; handle failure gracefully.
	function handleNLPEngineError(error) { 
		isFetching = false;
		console.log('Error in Processing Response -- Available error message is: ')
		console.log(error)
	}		
	
	// Sends off a request to the NLP endpoint
	// Define a flag here so we don't send multiple requests while we're just waiting for a return value.
	let isFetching = false
	function fetchNLPExtraction(NLPShortcut, NLPHashtagPhrase) { 
		if (isFetching) {
			console.log('already fetching')
			return
		}
		// Else, we want to fetch data
		isFetching = true;
		console.log('call to fetchNLPExtraction')
		const NLPShortcutName = NLPShortcut.nlpTemplate;
		fetch(`${API_ENDPOINT}?template=${NLPShortcutName}&sentence=${NLPHashtagPhrase}`)
		.then(processNLPEngineResponse)
			.then(
				processNLPEngineData.bind(null,NLPShortcut),
				// processNLPEngineData,
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components. 
				failedToProcessNLPEngineResponse
			)
			.catch(handleNLPEngineError);
		}

	// Everytime a change is made to the editor, check to see if NLP should be parsed
	function onChange (editorState, editor) {
		// Check the structuredFieldMapManager for NLP Hashtags 
		const NLPShortcut = getNLPHashtag()
		// is there an NLP hashtag?
		if (!Lang.isUndefined(NLPShortcut)) {
			// Pull out NLP hashtag FullPhrase (one ending in a stop character) if there is one
			const NLPHashtagPhrase = extractNLPHashtagFullPhrase(editorState, editor, NLPShortcut)
			if (!Lang.isUndefined(NLPHashtagPhrase)) { 
				// send message out to NLPEndpoint 
				fetchNLPExtraction(NLPShortcut, NLPHashtagPhrase)
			} else { 
				return
			}
		} else { 
			return
		}
	}

	return {
		onChange,
    };
}

export default SingleHashtagKeywordStructuredFieldPlugin