import Lang from 'lodash';
import Collection from 'lodash';

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
	const endOfSentenceRegexp = new RegExp(`(.*)(${stopCharacters.join('|')})(${phraseDelimiters.join('|')})`, 'i')

	// Return the NLP hasgtag if there is one, else return nothing
	function getNLPHashtag() { 
		// Check the activeContexts for anything that is an instance of NLPHashtag
		return Collection.find(contextManager.getActiveContexts(), ((shortcut, i) => {
			return shortcutManager.isShortcutInstanceOfNLPHashtag(shortcut);	
		}))
	} 

	// Get a text representation of the sentence following the NLPHashtag
	function getSentenceContainingNLPHashtag(editorState, NLPShortcut) { 
		// Get the current block 
		const curBlock = editorState.startBlock;
		const nodesFollowingNLPShortcut = [];
		let seenNLPShortcut = false;
		// For every node of that block: 
		for (const node of curBlock.nodes) {
			if (node.key === NLPShortcut.key) { 
				// if key === shortcut.key, mark that we've seen the shortcuts
				// So we can accumulate all blocks after
				seenNLPShortcut = true;
			} else if (seenNLPShortcut) { 
				// If we've seent the shortcut, accumulate this node
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

	// Performs the transformations to the editor based on the return data
	function addNLPContentToEditor(data) { 
		// Placeholder - perform some changes on the editor.
		const editorValue = getEditorValue();
		const transformedEditorValue = getEditorValue().transform().insertText('Example of inserted NLP text?').apply()
		setEditorValue(transformedEditorValue)
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
		const NLPShortcutName = NLPShortcut.endpointName;
		fetch(`${API_ENDPOINT}?template=${NLPShortcutName}&sentence=${NLPHashtagPhrase}`)
		// fetch(`${API_ENDPOINT}`)
			.then((res) => res.json())
			.then(
				(data) => { 
					console.log('successful case here')
					isFetching = false;
					console.log(data);
					addNLPContentToEditor(data);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components. 
				(error) => {
					isFetching = false;
					console.log('error in request here -- expected')
					console.log(error)
					// addNLPContentToEditor(error);
				}
			)
			.catch((err) => { 
				console.log('Catch statement: error is')
				console.log(err)
			});
	}
	
	// Everytime a change is made to the editor, check to see if NLP should be parsed
	function onChange (editorState, editor) {
		// Check the structuredFieldMapManager for NLP Hashtags 
		const NLPShortcut = getNLPHashtag()
		// is there an NLP hashtag?
		if (!Lang.isUndefined(NLPShortcut)) {
			// Pull out NLP hashtag phrase if there is one
			const NLPHashtagPhrase = extractNLPHashtagFullPhrase(editorState, editor, NLPShortcut)
			// is there a stopCharacter followed by a finishedTokenSymbol
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