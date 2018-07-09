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
		'\\.',
		'\\?',
		'!',
	]
	const phraseDelimiters = [
		'\\s',
		'\\r',
		'\\n',
	]
	const endOfSentenceRegexp = new RegExp(`(.*)(${stopCharacters.join('|')})(${phraseDelimiters.join('|')})`, 'i')

	// Return the NLP hasgtag if there is one, else return nothing
	function getNLPHashtag() { 
		// Check the activeContexts for anything that is an instance of NLPHashtag
		return Collection.find(contextManager.getActiveContexts(), ((shortcut, i) => {
			return shortcutManager.isShortcutInstanceOfNLPHashtag(shortcut);	
		}))
	} 

	// Get a text representation of the sentence with the NLP hashtag
	function getSentenceContainingNLPHashtag(editorState, nlpShortcut) { 
		// Get the current block 
		const curBlock = editorState.startBlock;
		const nodesFollowingNLPShortcut = [];
		let seenNLPShortcut = false;
		// For every node of that block: 
		for (const node of curBlock.nodes) {
			// if key === shortcut.key, or if a previous key matched, accumulate this nodes
			if (node.key === nlpShortcut.key || seenNLPShortcut) { 
				seenNLPShortcut = true;
				nodesFollowingNLPShortcut.push(node.toJSON())
			}
		}
		// return all accumulated nodes converted to text
		return convertToText(nodesFollowingNLPShortcut)

	}

	// Given a list of Slate nodes, convert them to text
	function convertToText (nodes) { 
		let resultText = "";
		nodes.forEach((node) => { 
			if (node.type === 'structured_field') {
				let shortcut = node.data.shortcut;
                resultText += shortcut.getResultText();
			} else if (node.characters && node.characters.length > 0) {
				node.characters.forEach(char => {
					resultText += char.text;
				});
			} else { 
				console.error(`Do not currently handle a case for type: ${node.type}`)
			}
		})
		return resultText
	}
	
	// Extracts the fully-formed phrase for an NLP shortcut if there is one, else return nothing
	function extractNLPHashtagFullPhrase(editorState, editor, nlpShortcut) { 
		// Find the sentence that contains the NLP hashtag
		const nodes = getSentenceContainingNLPHashtag(editorState, nlpShortcut)
		// Check if that sentence contains a stopCharacter followed by a finishedTokenSymbol
		const matches = textRepresentation.match(endOfSentenceRegexp);
		if (matches) { 
			return matches[0]
		} 
	}

	// Performs the transformations to the editor based on the return data
	function addNLPContentToEditor(data) { 
		// Placeholder - perform some changes on the editor.
		const editorValue = getEditorValue();
		const transformedEditorValue = getEditorValue().transform().insertText('this is like adding NLP shit righT?').apply()
		setEditorValue(transformedEditorValue)
	}

	// Sends off a request to the NLP endpoint
	// Define a flag here so we don't send multiple requests while we're just waiting for a return value.
	let isFetching = false
	function fetchNLPExtraction(NLPHashtagPhrase) { 
		if (isFetching) {
			console.log('already fetching')
			return
		}
		// Else, we want to fetch data
		isFetching = true;
		console.log('call to fetchNLPExtraction')
		// fetch(`${API_ENDPOINT}?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}`)
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
	function onChange (editorState, editor) {
		// Check the structuredFieldMapManager for NLP Hashtags 
		const nlpShortcut = getNLPHashtag()
		console.log(nlpShortcut)
		// is there an nlp hashtag?
		if (!Lang.isUndefined(nlpShortcut)) { 
			console.log('contains NLP hashtag')
			// Pull out NLP hashtag phrase if there is one
			const NLPHashtagPhrase = extractNLPHashtagFullPhrase(editorState, editor, nlpShortcut)
			// is there a stopCharacter followed by a finishedTokenSymbol
			if (!Lang.isUndefined(NLPHashtagPhrase)) { 
				// send message out to NLPEndpoint 
				fetchNLPExtraction(NLPHashtagPhrase)
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