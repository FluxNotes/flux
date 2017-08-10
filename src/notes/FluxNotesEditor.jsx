import React from 'react';
import Slate from 'slate';
import Lang from 'lodash';
import ContextPortal from '../context/ContextPortal';
//import ContextManager from '../context/ContextManager';

// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import AutoReplace from 'slate-auto-replace'
import SuggestionsPlugin from './../lib/slate-suggestions-dist'

import StructuredFieldPlugin from './StructuredFieldPlugin';

// Styling
import './FluxNotesEditor.css';

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Raw.deserialize(
    {
        nodes: [
            {
                kind: 'block',
                type: 'inline',
                nodes: [
                    {
                        kind: 'text',
                        ranges: [
                            {
                                'text': ""
                            }
                        ]
                    }
                ]
            }
        ]
    }, {terse: true});

const schema = {
    nodes: {
        paragraph: props => <p {...props.attributes}>{props.children}</p>,
        heading: props => <h1 {...props.attributes}>{props.children}</h1>
    },
    marks: {
        bold: (props) => <strong>{props.children}</strong>
    }
};

const structuredFieldTypes = [
    {
        name: 'typeStructuredField',
        value: 'structured_field'
    },
    {
        name: 'typeSubfieldDropdown',
        value: 'sf_subfield_dropdown'
    },
    {
        name: 'typeSubfieldStaticText',
        value: 'sf_subfield_statictext'
    }
]

class FluxNotesEditor extends React.Component {
    constructor(props) {
        super(props);

		this.contextManager = this.props.contextManager;
		
		this.didFocusChange = false;
		
		this.onPortalSelection = this.onPortalSelection.bind(this);
		this.onChange = this.onChange.bind(this);
		
        // Set the initial state when the app is first constructed.
        this.state = {
            state: initialState,
			isPortalOpen: false,
			portalOptions: null,
			left: 0,
			top: 0
        }

        // setup structured field plugin
        const structuredFieldPluginOptions = {
            updateEditorState: this.onEditorUpdate,
            updateCurrentShortcutValues: this.onCurrentShortcutValuesUpdate,
            changeCurrentShortcut: props.changeCurrentShortcut
        };
        structuredFieldTypes.forEach((type) => {
            const typeName = type.name;
            const typeValue = type.value;
            structuredFieldPluginOptions[typeName] = typeValue;
        });

        this.structuredFieldPlugin = StructuredFieldPlugin(structuredFieldPluginOptions);

        // setup suggestions plugin (autocomplete)
        let suggestionsShortcuts = [];
        props.shortcutList.forEach((shortcutKey) => {
            suggestionsShortcuts.push({
                "key": shortcutKey,
                "value": "#" + shortcutKey + "[",
                "suggestion": shortcutKey
            });
        });
        
        this.suggestionsPluginShortcuts = SuggestionsPlugin({
            trigger: '#',
            capture: /#([\w]*)/,
            suggestions: suggestionsShortcuts,
            onEnter: (suggestion) => {
                //console.log("in onEnter");
                const { state } = this.state; 
                const { anchorText, anchorOffset } = state
                const text = anchorText.text

                let index = { start: anchorOffset - 1, end: anchorOffset }

                if (text[anchorOffset - 1] !== '#') {
                    index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, '#')
                }
                    
                const newText = `${text.substring(0, index.start)} `
                let transformBeforeInsert = state.transform().deleteBackward(anchorOffset).insertText(newText);
                let transformAfterInsert = this.insertStructuredFieldTransform(transformBeforeInsert, suggestion.key).focus();
                return transformAfterInsert.apply();
            }
        });

        // setup suggestions plugin (autocomplete)
        let suggestionsInsertions = [];
        //let insertersMap = {};
        props.inserters.forEach((inserter) => {
            //insertersMap[inserter.trigger] = inserter.value;
            suggestionsInsertions.push({
                "key": inserter.trigger,
                "value": "@" + inserter.trigger,
                "suggestion": inserter.trigger,
                "valueFunc" : inserter.value
            });
        });
        
        this.suggestionsPluginInsertions = SuggestionsPlugin({
            trigger: '@',
            capture: /@([\w]*)/,
            suggestions: suggestionsInsertions,
            onEnter: (suggestion) => {
                //console.log("in onEnter " + suggestion.key);
				let transform = this.handleInserter(true, suggestion.valueFunc);
				if (Lang.isNull(transform)) {
					return this.state.state;
				} else {
					return transform.apply();
				}
            }
        });
        
       // do not use onKeyDown, use auto-replace plugin, add to existing global 'plugins' list
        this.plugins = [
			this.suggestionsPluginShortcuts,
			this.suggestionsPluginInsertions,
			this.structuredFieldPlugin
		];
				
		// now add an AutoReplace plugin instance for each shortcut we're supporting as well
		props.shortcutList.forEach((shortcutKey) => {
			this.plugins.push(AutoReplace({
				"trigger": "[",
				"before": new RegExp("(#" + shortcutKey + ")", "i"),
				"transform": (transform, e, data, matches) => {
					// need to use Transform object provided to this method, which AutoReplace .apply()s after return.
					return this.insertStructuredFieldTransform(transform, shortcutKey);
				}
			}));
		});
		
		// now add an AutoReplace plugin instance for each inserter we're supporting
		props.inserters.forEach((inserter) => {
			this.plugins.push(AutoReplace({
				"trigger": 'space',
				"before": new RegExp("(@" + inserter.trigger + ")", "i"),
				"transform": (transform, e, data, matches) => {
					let newTransform = this.handleInserter(false, inserter.value, transform);
					if (Lang.isNull(newTransform)) {
						newTransform = transform;
					}
					return newTransform;
				}
			}));
		});
    }
	
	suggestionDeleteExistingTransform(transform = null) {
		const { state } = this.state;
		if (Lang.isNull(transform)) {
			transform = state.transform();
		}
		const { anchorText, anchorOffset } = state
		const text = anchorText.text

		let index = { start: anchorOffset - 1, end: anchorOffset }

		if (text[anchorOffset - 1] !== '@') {
			index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, '@')
		}
			
		const newText = `${text.substring(0, index.start)}`
		return transform
			.deleteBackward(anchorOffset)
			.insertText(newText)	
	}

	// debugging @condition which is case where valueFunc returns an array so we present a pick list via 
	// ContextPortal
	// autocomplete call to handleInserter:
	//		let transform = this.handleInserter(true, suggestion.valueFunc);
	//		works if click on condition in autocomplete then hit enter to choose 1st condition
	//		works if hit enter to choose condition autocomplete then hit enter to choose 1st condition
	// autoreplace call to handleInserter:
	//		let newTransform = this.handleInserter(false, inserter.value, transform);
	//		get extra enter in editor before text if:
	//			type @condition followed by a space then hit enter to choose 1st condition
	//   		solved by returning blur transform from array case
	//		now enter/enter case doesn't work (autcomplete with enter then enter to choose condition):
	//			doesn't get inserted but may because of crash in suggestions plugin
	//			remove setting menu to null on close of portal
	//		now losing state typed for autocomplete case
	//			looks like it happens if I just hit enter enter. Those enter keys are consumed as well as the @cond...
	//			maybe the get word functionality is getting confused when there is no space character to find? have an
	//			@ though which should be enough
	//			also, need to get rid of TypeErros from slate suggestions (which Dylan has done in our own version)
	
	handleInserter(needToDelete, valueFunc, transform = null) {
		let value = valueFunc(this.contextManager); //this.props.patient
		if (Lang.isArray(value)) {
			let portalOptions = [];
			value.forEach((item) => {
				portalOptions.push({key: item.entryId, context: item.specificType.coding.displayText, object: item});
			});
			let pos = position(this.state);
			
			let newTransform = transform;
			if (Lang.isNull(transform)) {
				newTransform = this.state.state.transform();
			}
			this.setState({
				isPortalOpen: true,
				portalOptions: portalOptions,
				needToDelete: needToDelete,
				left: pos.left,
				top: pos.top
			});
			return newTransform.blur();
		} else {
			value = "" + value;
			if (needToDelete) {
				return this.suggestionDeleteExistingTransform(transform).insertText(value).focus();
			} else {
				let newTransform = transform;
				if (Lang.isNull(transform)) {
					newTransform = this.state.state.transform();
				}
				return newTransform.insertText(value).focus();
			}
		}
	}
	
    insertStructuredFieldTransform(transform, shortcutType) {
        let shortcut = this.props.newCurrentShortcut(shortcutType);
		if (Lang.isNull(shortcut)) return transform.focus();
        let result = this.structuredFieldPlugin.transforms.insertStructuredField(transform, shortcut); //2nd param needs to be Shortcut Object, how to create?
        let transformAfterInsert = result[0];
        return transformAfterInsert;
    }

    onEditorUpdate = (newState) => {
		let curSelection = this.state.state.selection;
        //console.log(`Plugin updating state`);
        this.setState({
            state: newState
        });
		//console.log(newState);
		if (!Lang.isEqual(curSelection, newState.selection)) this.onSelectionChange(newState.selection, newState);
    }
    onCurrentShortcutValuesUpdate = (name, value) => {
        this.props.currentShortcut.updateValue(name, value, false);
    }

	componentDidMount = () => {
	}
	
    componentDidUpdate = (prevProps, prevState) => {
    }

    onChange = (state) => {
        //console.log("onChange: START");
        this.setState({
            state: state
        });
        //console.log("onChange: DONE");
    }

    onSelectionChange = (selection, state) => {
        this.didFocusChange = this.structuredFieldPlugin.transforms.onSelectionChange(selection, state);
		//console.log("onSelectionChange. did focus change = " + this.didFocusChange);
    }
	
	onBlur = (event, data, state, editor) => {
		//console.log("onBlur: state.selection.startKey=" + state.selection.startKey);
		if (this.didFocusChange) {
			this.didFocusChange = false;
			event.preventDefault();
			//console.log("onBlur: suppress blur. DONE");
			return state;
		}
		//console.log("onBlur: let core handle blur. DONE");
		return;
	}

    // This gets called when the before the component receives new properties
    componentWillReceiveProps = (nextProps) => {

        if (this.props.itemToBeInserted !== nextProps.itemToBeInserted) {
            this.handleSummaryUpdate(nextProps.itemToBeInserted);
        }
    }

    /*
     * Handle updates when we have a new
     */
    handleSummaryUpdate = (itemToBeInserted) => {
        const currentState = this.state.state;
        const state = currentState
            .transform()
            .insertText(itemToBeInserted)
            .focus()
            .apply();
        this.setState({state: state});
    }

    /**
     * Check if the current selection has a mark with `type` in it.
     */
    handleMarkCheck = (type) => {
        const {state} = this.state;
        return state.marks.some(mark => mark.type === type);
    }

    /**
     * Check if the any of the currently selected blocks are of `type`.
     */
    handleBlockCheck = (type) => {
        const {state} = this.state;
        return state.blocks.some(node => node.type === type);
    }
	
	// called from portal when an item is selected (context is not null) or if portal is closed without
	// selection (context is null)
	onPortalSelection = (state, context) => {
		//console.log("onPortalSelection for context portal. context is null: " + (Lang.isNull(context)));
		//try {
			this.setState({ isPortalOpen: false });
		//} catch (e) {
		//	console.log("TypeError consumed");
		//}
		if (Lang.isNull(context)) return state;
		//console.log("onPortalSelection for context portal " + context.context + " needToDelete some text first=" + this.state.needToDelete);
		this.contextManager.addContext(context.object);
		let transform;
		if (this.state.needToDelete) {
			transform = this.suggestionDeleteExistingTransform();
		} else {
			transform = this.state.state.transform();
		}
		return transform.insertText(context.context).focus().apply();
	}

    render = () => {
        //let {state} = this.state;
        //let isStructuredField = structuredFieldPlugin.utils.isSelectionInStructuredField(state);
        // Extract portal component from the plugin 
        const ShortcutsPortal = this.suggestionsPluginShortcuts.SuggestionPortal;
        const InsertionsPortal = this.suggestionsPluginInsertions.SuggestionPortal;
        let noteDescriptionContent = null;
        if (this.props.patient == null) {
            noteDescriptionContent = "";
        } else {
            noteDescriptionContent = (
                <div id="note-description">
                    <Row>
                        <Col xs={5}>
                            <h1 id="note-title">Pathology Assessment</h1>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Date</p>
                            <p className="note-description-detail-value">20 June 2017</p>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Source</p>
                            <p className="note-description-detail-value">Pathology Report</p>
                        </Col>
                        <Col xs={3}>
                            <p className="note-description-detail-name">Signed By</p>
                            <p className="note-description-detail-value">not signed</p>
                        </Col>
                    </Row>

                    <Divider className="divider"/>
                </div>
            );
        }
		let errorDisplay = "";
		if (this.props.errors && this.props.errors.length > 0) {
			errorDisplay = (
				<div>
                    <Divider className="divider"/>
					<h1 style={{color:'red'}}>{this.props.errors.join()}</h1>
					<Divider className="divider"/>
				</div>
			);
		}
		const callback = {}
        /**
         * Render the editor, toolbar, dropdown and description for note
         */
        return (
            <div id="clinical-notes" className="dashboard-panel">
                <Paper className="panel-content trio">
                    {noteDescriptionContent}
                    <div className="MyEditor-root">
                        <EditorToolbar
                            onMarkCheck={this.handleMarkCheck}
                            onBlockCheck={this.handleBlockCheck}

                            onMarkUpdate={this.handleMarkUpdate}
                            onBlockUpdate={this.handleBlockUpdate}
                            patient={this.props.patient}
                        />
                        <Slate.Editor
                            placeholder={'Enter your clinical note here or choose a template to start from...'}
                            plugins={this.plugins}
                            state={this.state.state}
                            onChange={this.onChange}
                            onSelectionChange={this.onSelectionChange}
                            onBlur={this.onBlur}
                            schema={schema}
                        />
						{errorDisplay}
						<ShortcutsPortal 
							state={this.state.state} />
						<InsertionsPortal
							state={this.state.state} />
						<ContextPortal
							left={this.state.left}
							top={this.state.top}
							state={this.state.state}
							callback={callback}
							onSelected={this.onPortalSelection}
							contexts={this.state.portalOptions}
							capture={/@([\w]*)/}
							trigger={"@"}
							onChange={this.onChange}
							isOpened={this.state.isPortalOpen}
						/>
					</div>
                </Paper>
            </div>
        );

    }
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {left: lx,top: ly};
}

function position(state) {
	let pos = {};
	pos.left = state.left;
	pos.top = state.top;
	
	const parentNode = state.state.document.getParent(state.state.selection.startKey);
	const el = Slate.findDOMNode(parentNode);
	return getPos(el);
}

function getIndexRangeForCurrentWord(text, index, initialIndex, initialChar) {
  if (index === initialIndex) {
    return { 	start: getIndexRangeForCurrentWord(text, index - 1, initialIndex, initialChar), 
				end: getIndexRangeForCurrentWord(text, index + 1, initialIndex, initialChar) 	}
  }
  //console.log("start?" + (index<initialIndex) + " char=" + text[index] + " initial char=" + initialChar);
  if (text[index] === " " || text[index] === initialChar || text[index] === undefined) {
    return index
  }
  if (index < initialIndex) {
    return getIndexRangeForCurrentWord(text, index - 1, initialIndex, initialChar)
  }
  if (index > initialIndex) {
    return getIndexRangeForCurrentWord(text, index + 1, initialIndex, initialChar)
  }
}

export default FluxNotesEditor;