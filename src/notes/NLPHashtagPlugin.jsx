import Lang from 'lodash';
import Collection from 'lodash';

const API_ENDPOINT = "http://localhost:8000/api"

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
		'.',
		'?',
		'!',
	]
	const phraseDelimiters = [
		'\s',
		'\r',
		'\n',
	]

	// Retur
	function containsNLPHashtag() { 
		// Check the activeContexts for anything that is an instance of NLPHashtag
		return Collection.some(contextManager.getActiveContexts(), ((shortcut, i) => {
			return shortcutManager.isShortcutInstanceOfNLPHashtag(shortcut);	
		}))
	} 
	
	// Extracts a NLP hashtag 
	function extractNLPHashtagFullPhrase(editorValue) { 
		// Find the sentence that contains the NLP hashtag
		// Check if that sentence contains a stopCharacter followed by a finishedTokenSymbol
		// If so: 
		// 	return a sliced string starting at NLP hashtag and ending at stopcharacter followed by finishedTokenSymbol
		// Else: 
		// 	return nothing
 

		// Given a list of singleHastagKeywordShortcut key:shortcut mappings, editor state and current text-node key,
		// Filter our mappings to only shorcuts who are directly next to our current text-node  
		// return listOfSingleHashtagKeywordShortcutMappings.filter((mapping) => {
		// 	let closestBlock;

		// 	// Added try catch statement to catch error when adding template after SingleHashtagKeyword shortcut
		// 	// returns false to filter out if error occurs
		// 	try {
		// 		closestBlock = state.document.getClosestBlock(Object.keys(mapping)[0]);
		// 	} catch (error) {
		// 		return false;
		// 	}

		// 	// We want to get the closest block to the keyword's 
		// 	return closestBlock.key === currentNodeKey;
		// });
	}

	// Performs the transformations to the editor based on the return data
	function addNLPContentToEditor(data) { 
		// perform some changes on the editor.
		const editorValue = getEditorValue();
		const transformedEditorValue = getEditorValue().transform().insertText('this is like adding NLP shit righT?').apply()
		setEditorValue(transformedEditorValue)
	}

	// Sends off a request to the NLP endpoint
	// Define a flag here so we don't send multiple requests while we're just waiting for a return value.
	let isFetching = false
	function fetchNLPExtraction(NLPHashtagPhrase) { 
		// fetch(`${API_ENDPOINT}?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}`)
		if (isFetching) {
			console.log('already fetching')
			return
		}
		// Else, we want to fetch data
		isFetching = true;
		console.log('call to fetchNLPExtraction')
		fetch(`${API_ENDPOINT}`)
			.then((res) => res.json())
			.then(
				(data) => { 
					isFetching = false;
					console.log('finsihed parsing here');
					addNLPContentToEditor(data);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components. 
				(error) => {
					isFetching = false;
					console.log('error in request here -- expected')
					console.log('NLPHashtagPhrase')
					console.log(NLPHashtagPhrase)
					console.log(getEditorValue().texts)
					addNLPContentToEditor(error);
				}
			);
	}
	
	// Everytime a change is made to the editor, check to see if NLP should be parsed
	function onChange (change) {
		// Check the structuredFieldMapManager for NLP Hashtags 
		if (containsNLPHashtag()) { 
			console.log('contains NLP hashtag')
			// Pull out NLP hashtag phrase if there is one
			const NLPHashtagPhrase = extractNLPHashtagFullPhrase(change.value)
			if (!Lang.isUndefined(NLPHashtagPhrase)) { 
				// send this data somewhere 
				// Somehow make the change after the fact. 
				fetchNLPExtraction(NLPHashtagPhrase)
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

	return {
		onChange,
		
        utils: {
			// replaceAllRelevantKeywordsInBlock: replaceAllRelevantKeywordsInBlock
        },
    };
}

export default SingleHashtagKeywordStructuredFieldPlugin