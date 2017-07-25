// Import React 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Other libraries
import { Editor, Block, Raw, Text, Plain } from 'slate'
import AutoReplace from 'slate-auto-replace'
import { List } from 'immutable'
import getOffsets from 'positions'
import { Row, Col } from 'react-flexbox-grid';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
// Application Components:
import EditorToolbar from './EditorToolbar';
// Shortcut components
import ProgressionShortcut from '../shortcuts/ProgressionShortcut';
import StagingShortcut from '../shortcuts/StagingShortcut';
// import ToxicityShortcut from '../shortcuts/ToxicityShortcut';
// Lookup libraries 
import progressionLookup from '../../lib/progression_lookup';
import stagingLookup from '../../lib/staging_lookup';
// Lodash component
import Lang from 'lodash'
// Styling
import './ClinicalNotes.css';

//TODO: make this a one line destructuring
import structuredDataRaw from './structuredDataRaw';
const staging = structuredDataRaw.find((element, index, array) => element.label === 'staging')
const stagingState = Raw.deserialize(staging.block, { terse: true });
const progression = structuredDataRaw.find((element, index, array) => element.label === 'progression')
const progressionState = Raw.deserialize(progression.block, { terse: true });

const initialState = Plain.deserialize('');

const DEFAULT_NODE = 'paragraph';

// Given a list of nodes and an id, check to see if there is a (shallow) node in that list with that id
// AGAIN: Not a deep search
function getNodeById(nodes, id) {
  return nodes.find(function(v, k, iter) {
    if (v.data) {
      return v.data.get('id') === id;
    } else {
      return false;
    }
  });
}

// Given a current node and an array of keys, add the key of this node and the keys of all its children
// to the array.
function addKeysForNode(curNode, keys) {
  // Get this key
  if(curNode.key) {
    keys.push(curNode.key)
  }
  //For all children
  if (curNode.nodes) {
    for(const child of curNode.nodes) {
      // update keys to include all the child's added to current collection
      keys = addKeysForNode(child, keys);
    }
  }
  return keys;
}

class ClinicalNotes extends Component {
  constructor(props) {
    super(props);

  if (!this.props.patient) {
    this.placeholder = "Create your data item here then copy and paste it into your EHR Notes entry area";
  } else {
    this.placeholder = "Enter your clinical note here identifying key data items using # shortcuts such as #progression or #toxicity...";
  }
  
    // Set the initial state when the app is first constructed.
    this.state = {
      // Autocomplete config
      inAutocomplete: false,
      autocompleteText: "",
      autocompleteMatches: [],
      currentAutocompleteMatch: null,
      autocompleteOptions: structuredDataRaw,
      // Shorthand config
      inShorthand: false,
      shorthandText: "",
      shorthandMatches: [],
      currentShorthandMatch: null,
      shorthandOptions: Object.keys(this.props.data.patient).map((elem) => {const newObj = {}; newObj["label"] = elem; newObj["value"] = this.props.data.patient[elem]; return newObj}) ,
      // Tracking progression
      statusOptions: progressionLookup.getStatusOptions(),
      reasonOptions: progressionLookup.getReasonOptions(),
      // Shortcut tracking 
      previousShortcut: null,
      // State of editor config
      state: initialState,
      schema: {
        nodes: {
          'paragraph':     props => <p {...props.attributes}>{props.children}</p>,
          'paragraph-span': (props) => {
            return (
              <span>
                <div className="clear"></div> 
                <p {...props.attributes}>{props.children}</p>
              </span>
              )
          },
          'structured-span':          (props) => {
            const id = (props.node) ? props.node.data.get('id') : '';
            return <span id={id} {...props.attributes}>{props.children}</span>;
          },
          'span':          props => <span {...props.attributes}>{props.children}</span>,
          'div':           props => <div {...props.attributes}>{props.children}</div>,
          'list-item':     props => <li {...props.attributes}>{props.children}</li>,
          'bulleted-list': props => <ul {...props.attributes}>{props.children}</ul>,
          'numbered-list': props => <ol {...props.attributes}>{props.children}</ol>,
          'block-quote':   props => <blockquote {...props.attributes}>{props.children}</blockquote>
        },
        marks: {
          bold: {
            fontWeight: 'bold'
          },
          code: {
            fontFamily: 'monospace',
            backgroundColor: '#eee',
            padding: '3px',
            borderRadius: '4px'
          },
          italic: {
            fontStyle: 'italic'
          },
          underlined: {
             textDecoration: 'underline'
          }
        }
      },
    }
  }

  /* 
   * Returns a new empty block  
   */
  createEmptyBlock = () => { 
    return Block.create({'type': 'span', 'nodes': List([Text.createFromString('​')])});
  }
  /**
   * Insert a block at a specified location or at the current location, and after insertion
   * either move the selection to the next block with offsets or leave selection as-is
   */
  insertBlockAtLocation  = (newStateTransform, block, nextBlock={}, nextBlockStartOffset=0, nextBlockEndOffset=0, location="") => { 
    if (location !== "") {
      //  Need to do something with location
      newStateTransform
        .insertBlock(block);
    } else { 
      newStateTransform
        .insertBlock(block);
    }

    if (nextBlock !== {}) { 
      newStateTransform.moveToRangeOf(nextBlock)
      .moveStart(nextBlockStartOffset)
      .moveEnd(nextBlockEndOffset);
    }

    return newStateTransform
  }

  // Add the plugin to your set of plugins...
  plugins = [
    AutoReplace({
      trigger: '[',
      before: /(#staging)/i,
      transform: (transform, e, data, matches) => {
        const stagingBlock = getNodeById(stagingState.blocks, 'staging')
        const tNode = getNodeById(stagingBlock.nodes, staging.firstSelection);
        const newTrans = this.insertBlockAtLocation(transform, stagingBlock, tNode, staging.selectionAnchorOffset, staging.selectionFocusOffset); 

        return newTrans;
      }
    }),
    AutoReplace({
      trigger: '[',
      before: /(#progression)/i,
      transform: (transform, e, data, matches) => {
        const progressionBlock = getNodeById(progressionState.blocks, 'progression')
        const nextSelection = getNodeById(progressionBlock.nodes, progression.firstSelection);
        const newTrans = this.insertBlockAtLocation(transform, progressionBlock, nextSelection, progression.selectionAnchorOffset, progression.selectionFocusOffset); 

        return newTrans;
      }
    }),
    AutoReplace({
      trigger: 'space',
      before: /(@NAME)/i,
      transform: (transform, e, data, matches) => {
        const newTrans = transform.insertText(`${this.props.data.patient.name} `);
        return newTrans;
      }
    }),
    AutoReplace({
      trigger: 'space',
      before: /(@AGE)/i,
      transform: (transform, e, data, matches) => {
        const newTrans = transform.insertText(`${this.props.data.patient.age}`);
        return newTrans;
      }
    }),
    AutoReplace({
      trigger: 'space',
      before: /(@GENDER)/i,
      transform: (transform, e, data, matches) => {
        const newTrans = transform.insertText(`${this.props.data.patient.gender} `);
        return newTrans;
      }
    })
  ];

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    const stagingNode = getNodeById(state.document.nodes, 'staging');
    const stagingKeys = (stagingNode) ? addKeysForNode(stagingNode, []) : [];

    const progressionNode = getNodeById(this.state.state.document.nodes, 'progression')
    const progressionKeys = (progressionNode)? addKeysForNode(progressionNode, []) : [];

    if (stagingNode && stagingKeys.includes(state.selection.startKey)) {
      this.handleStructuredFieldEntered('staging')
    } else if (progressionNode && progressionKeys.includes(state.selection.startKey))  {
      this.handleStructuredFieldEntered('progression')
    } else { 
      this.handleStructuredFieldExited(null)
    }
    this.setState({ state })
  }

  /*
   * Handle updates when we have a new
   */
  handleSummaryUpdate = (itemToBeInserted) => {
    const currentState = this.state.state;
    const state = currentState
        .transform()
        .insertText(itemToBeInserted)
        .apply();
    this.setState({ state: state })
  }

  /*
   * Handle when we enter our current structured field
   */
  handleStructuredFieldEntered = (currentFocus) => {
    this.props.onStructuredFieldEntered(currentFocus);
  }

  /*
   * Handle when we exit our current structured field
   */
  handleStructuredFieldExited = (currentFocus) => {
    this.props.onStructuredFieldExited(currentFocus);
  }
  
  /*
   * Handle when we make a new selection
   */
  handleSelectionChange = (selectedText) => {
    this.props.onSelectionChange(selectedText);
  }

  /*
   * Handle updates to the current T value based on newly typed values
   */
  handleStagingTUpdate = (newTValue, nextNode) => {
    if (stagingLookup.isValidT(newTValue)) { 
      // console.log(`is a valid T value; updating with new value ${newTValue}`)
      const newStaging = Lang.clone(this.props.currentShortcut.staging);
      newStaging['tumorSize'] = newTValue;  
      const stateTransform = this.state.state.transform();
      const newStateSelection = stateTransform.moveToRangeOf(nextNode).moveStart(1).moveEnd(-1).apply();
      this.setState({
        state: newStateSelection
      });
      this.state.previousShortcut.handleStagingUpdate(newStaging);
      this.props.currentShortcut.handleStagingUpdate(newStaging);
    } else { 
      console.error(`trying to update with invalid T value:${newTValue}`);
    }
  }
  /*
   * Handle updates to the current N value based on newly typed values
   */
  handleStagingNUpdate = (newNValue, nextNode) => {
    if (stagingLookup.isValidN(newNValue)) { 
      // console.log(`is a valid N value; updating with new value ${newNValue}`)
      const newStaging = Lang.clone(this.props.currentShortcut.staging);
      newStaging['nodeSize'] = newNValue;  
      const stateTransform = this.state.state.transform();
      const newStateSelection = stateTransform.moveToRangeOf(nextNode).moveStart(1).moveEnd(-1).apply();
      this.setState({
        state: newStateSelection
      });
      this.state.previousShortcut.handleStagingUpdate(newStaging);
      this.props.currentShortcut.handleStagingUpdate(newStaging);
    } else { 
      console.error(`trying to update with invalid N ${newNValue}`);
    }
  }
  /*
   * Handle updates to the current M value based on newly typed values
   */
  handleStagingMUpdate = (newMValue, editorState) => {
    if (stagingLookup.isValidM(newMValue)) { 
      // console.log(`is a valid M value; updating with new value ${newMValue}`)
      const newStaging = Lang.clone(this.props.currentShortcut.staging);
      const stagingNode = getNodeById(editorState.document.nodes, 'staging')

      newStaging['metastasis'] = newMValue;  
      const stateTransform = editorState.transform();
      const newStateSelection = stateTransform.collapseToEndOf(stagingNode).insertBlock(this.createEmptyBlock()).apply()
      this.setState({
        state: newStateSelection
      });
      this.state.previousShortcut.handleStagingUpdate(newStaging);
      this.props.currentShortcut.handleStagingUpdate(newStaging);
    } else { 
      console.error(`trying to update with invalid M ${newMValue}`);
    }
  }

  /*
   * Handle updates to the current progression status
   */
  handleProgressionStatusUpdate = (newStatusValue, nextNode) => {
    if (progressionLookup.isValidStatus(newStatusValue)) { 
      // console.log(`is a valid progression status; updating with new value ${newStatusValue}`)
      const newProgression = Lang.clone(this.props.currentShortcut.progression);
      newProgression['status'] = newStatusValue;  
      const stateTransform = this.state.state.transform();
      const newStateSelection = stateTransform.moveToRangeOf(nextNode).apply();

      this.setState({
        state: newStateSelection
      });

      this.state.previousShortcut.handleProgressionUpdate(newProgression);
      this.props.currentShortcut.handleProgressionUpdate(newProgression);
    } else { 
      console.error(`trying to update with invalid status ${newStatusValue}`);
    }
  }

  /*
   * Handle updates to the current progression reasons based on what's been typed
   */
  handleProgressionReasonUpdate = (newProgressionReasons, currentNode) => {
    // Avoid deep copy
    let newProgression = {...this.props.currentShortcut.progression};
    // get a list of new valid reasons, 
    const validNewProgressionReasons = this.validateProgressionReasons(newProgressionReasons)
    if(!this.arrayEquality(this.props.currentShortcut.progression.reason,validNewProgressionReasons)) { 
      newProgression['reason'] = validNewProgressionReasons;
      this.state.previousShortcut.handleProgressionUpdate(newProgression);
      this.props.currentShortcut.handleProgressionUpdate(newProgression);
    }
  }

  /*
   * Handle the completion of updates to progression
   */
  handleProgressionFinish = (state) => { 
    const progressionNode = getNodeById(this.state.state.document.nodes, 'progression')

    this.setState({ 
      state: state.state.transform().collapseToEndOf(progressionNode).insertBlock(this.createEmptyBlock()).apply()
    })
  }

  /*
   * Handle updates to the current progression reasons 
   */
  validateProgressionReasons = (possibleReasons) => { 
    return possibleReasons.filter(x => progressionLookup.isValidReason(x));
  }

  handleNewProgression = (newProgression) => {
    this.props.onNewProgression(newProgression);
  }
  /**
   * Check if the current selection has a mark with `type` in it.
   */
  handleMarkCheck = (type) => {
    const { state } = this.state;
    return state.marks.some(mark => mark.type === type);
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   */
  handleBlockCheck = (type) => {
    const { state } = this.state;
    return state.blocks.some(node => node.type === type);
  }

  /**
   * Handle any changes to the current mark type.
   */
  handleMarkUpdate = (type) =>  {
    let { state } = this.state
    state = state
      .transform()
      .toggleMark(type)
      .apply()
    this.setState({ state });
  }

  /**
   * Handle any changes to the current block type.
   */
  handlBlockUpdate = (type) =>  {
    let { state } = this.state;
    const transform = state.transform();
    const { document } = state;

    // Handle list buttons.
    if (type === 'bulleted-list' || type === 'numbered-list') {
      const isList = this.hasBlock('list-item')
      const isType = state.blocks.some((block) => {
        return !!document.getClosest(block.key, parent => parent.type === type)
      })

      if (isList && isType) {
        transform
          .setBlock(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        transform
          .unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list')
          .wrapBlock(type)
      } else {
        transform
          .setBlock('list-item')
          .wrapBlock(type)
      }
    } else {
      // We don't handle any other kinds of block style formatting right now, but if we did it would go here.
    }

    state = transform.apply()
    this.setState({ state });
    
  }

  /* 
   * For a given autocomplete block, use lookup table to find the next block to be selected
   */
  getNextSelectionBlock = (autocompleteBlock, autocompleteId) => {
    const currentAutocompleteOption = this.state.autocompleteOptions.find((element, index, array) => element.label === autocompleteId);
    return getNodeById(autocompleteBlock.nodes, currentAutocompleteOption.firstSelection)
  }

  /* 
   * For a given autocomplete id, use lookup table to find it and retrieve the offsets needed for selection
   */
  getNextSelectionOffsets = (autocompleteId) => {
    const currentAutocompleteOption = this.state.autocompleteOptions.find((element, index, array) => element.label === autocompleteId);
    return [currentAutocompleteOption.selectionAnchorOffset, currentAutocompleteOption.selectionFocusOffset];
  }
  
  /** 
   * Deletes a number of characters corresponding to the number of chars in 
   * the states autocomplete buffer plus one for the dot that triggered it
   */   
  deleteCurrentAutocompleteText = (newStateTransform) => {
      for(let i = 0; i < this.state.autocompleteText.length; i++) { 
        newStateTransform.deleteBackward();
      }
      // Delete once more for period
      newStateTransform.deleteBackward();
    return newStateTransform
  }

  /**
   * Inserts the current autocomplete match onto the page
   */
  insertCurrentAutocompleteMatch = () => {
    const autocompleteId = this.state.autocompleteMatches[this.state.currentAutocompleteMatch];
    const currentAutocompleteOption = this.state.autocompleteOptions.find((element, index, array) => element.label === autocompleteId);
    const autocompleteState = Raw.deserialize(currentAutocompleteOption.block,{terse:true});
    const autocompleteBlock = getNodeById(autocompleteState.blocks, autocompleteId);

    let newStateTransform = this.state.state.transform();
    newStateTransform = this.deleteCurrentAutocompleteText(newStateTransform); 
    const nextBlock = this.getNextSelectionBlock(autocompleteBlock, autocompleteId);
    const [startOffset, endOffset] = this.getNextSelectionOffsets(autocompleteId);
    newStateTransform = this.insertBlockAtLocation(newStateTransform, autocompleteBlock, nextBlock, startOffset, endOffset);

    const newState = newStateTransform.apply();
    this.setState({
      currentAutocompleteMatch : null,
      inAutocomplete: false,
      autocompleteText: "",
      autocompleteMatches: [],
      state: newState,
    });
    return newState;
  }

  /**
   * Updates the current autocomplete match based on the new key provided
   */
  updateCurrentAutocompleteMatch = (key) => { 
    this.setState({
      currentAutocompleteMatch: key
    });
  }

  /**
   * Determines new autocomplete matches based on the current 
   * autocomplete text typed
   */
  determineAutocompleteMatches = (autocompleteText) => {
    let matches = []; 
    const regexFromAutocompleteText = new RegExp(autocompleteText, 'i');
    if (autocompleteText !== "") { 
      for (const opt of this.state.autocompleteOptions) { 
        if(opt.label.match(regexFromAutocompleteText))  { 
          matches.push(opt.label);
        }
      }
    } 
    this.setState({ 
      currentAutocompleteMatch: 0
    })
    return matches.length > 5 ? matches.slice(0,5) : matches;
  }

  /** 
   * Deletes a number of characters corresponding to the number of chars in 
   * the states shorthand buffer plus one for the char that triggered it
   */   
  deleteCurrentShorthandText = (newStateTransform) => {
    for(let i = 0; i < this.state.shorthandText.length; i++) { 
      newStateTransform.deleteBackward();
    }
    // Delete once more for period
    newStateTransform.deleteBackward();
    return newStateTransform
  }

  /**
   * Inserts the current shorthand match onto the page
   */
  insertCurrentShorthandMatch = () => {
    const shorthandId = this.state.shorthandMatches[this.state.currentShorthandMatch];
    const currentShorthandOption = this.state.shorthandOptions.find((element, index, array) => element.label === shorthandId);

    let newStateTransform = this.state.state.transform();
    newStateTransform = this.deleteCurrentShorthandText(newStateTransform); 
    newStateTransform = newStateTransform.insertText(currentShorthandOption.value)

    const newState = newStateTransform.apply();
    this.setState({
      currentShorthandMatch : null,
      inShorthand: false,
      shorthandText: "",
      shorthandMatches: [],
      state: newState,
    });
    return newState;
  }

  /**
   * Updates the current shorthand match based on the new key provided
   */
  updateCurrentShorthandMatch = (key) => {
    this.setState({
      currentShorthandMatch: key
    });
  }

  /**
   * Determines new autocomplete matches based on the current 
   * autocomplete text typed
   */
  determineShorthandMatches = (shorthandText) => {
    let matches = []; 
    const regexFromShorthandText = new RegExp(shorthandText, 'i');
    if (shorthandText !== "") { 
      for (const opt of this.state.shorthandOptions) { 
        if(opt.label.match(regexFromShorthandText))  { 
          matches.push(opt.label);
        }
      }
    } 
    this.setState({ 
      currentShorthandMatch: 0
    })
    return matches.length > 5 ? matches.slice(0,5) : matches;
  }

  onSelectionChange = (selection, state) => {
    //console.log(selection.startOffset + " to " + selection.endOffset);
    if (selection.startOffset !== selection.endOffset) {
      var currentContentBlock = state.document.getClosestBlock(selection.anchorKey);
      var selectedText = currentContentBlock.getText().slice(selection.startOffset, selection.endOffset);
      this.handleSelectionChange(selectedText);
    } else {
      this.handleSelectionChange(null);
    }
  }
  
  onKeyDown = (event, data, state) => {
    // Continue handling autocompletes    
    if(this.state.inAutocomplete) {
      let newText = "";
      let matches = [];

      switch (event.keyCode) {
        // Left and up move up -- decrease index or wrap
        case 37: 
        case 38:
          event.preventDefault();
          if (this.state.autocompleteMatches.length > 0) { 
            this.setState({
              currentAutocompleteMatch: (this.state.autocompleteMatches.length + (this.state.currentAutocompleteMatch - 1)) % this.state.autocompleteMatches.length,
            });
          }
          break;
        // Right and down move down -- increase index or wrap  
        case 39: 
        case 40:
          event.preventDefault();
          if (this.state.autocompleteMatches.length > 0) { 
            this.setState({
              currentAutocompleteMatch: (this.state.currentAutocompleteMatch + 1) % this.state.autocompleteMatches.length,
            });
          } 
          break;
        case 32: // Deactivate on spacebar 
          this.setState({
            inAutocomplete: false, 
            autocompleteMatches: [],
            autocompleteText: "",
          });
          break;
        case 13: // Handle enter clicks to insert text
          if (this.state.autocompleteMatches.length > 0) {
            event.preventDefault(); 
            return this.insertCurrentAutocompleteMatch();
          }
          break;
        case 8:  // Handle deletions by updating the autocompleteText and suggestions
          const textLength = this.state.autocompleteText.length;
          newText = (textLength > 0) ? this.state.autocompleteText.slice(0, textLength -1) : "" ;
          matches = this.determineAutocompleteMatches(newText);
          this.setState({
              autocompleteText: newText,
              inAutocomplete: (textLength !== 0),
              autocompleteMatches: matches,
          })
          break;
        case 16: // Handle Ctrl, Alt, Shift, Caps Lock by doing nothing
        case 17:
        case 18:
        case 20:
          break; 
        default: // Continue growing autocompleteText and offering updated suggestions
          newText = this.state.autocompleteText +  String.fromCharCode(event.keyCode);  
          matches = this.determineAutocompleteMatches(newText);
          
          this.setState({
              autocompleteText: newText,
              autocompleteMatches: matches,
          })
          break;
      }
    } else if (this.state.inShorthand) {
      let newText = "";
      let matches = [];

      switch (event.keyCode) {
        // Left and up move up -- decrease index or wrap
        case 37: 
        case 38:
          event.preventDefault();
          if (this.state.shorthandMatches.length > 0) { 
            this.setState({
              currentShorthandMatch: (this.state.shorthandMatches.length + (this.state.currentShorthandMatch - 1)) % this.state.shorthandMatches.length,
            });
          }
          break;
        // Right and down move down -- increase index or wrap  
        case 39: 
        case 40:
          event.preventDefault();
          if (this.state.shorthandMatches.length > 0) { 
            this.setState({
              currentShorthandMatch: (this.state.currentShorthandMatch + 1) % this.state.shorthandMatches.length,
            });
          } 
          break;
        case 32: // Deactivate on spacebar 
          this.setState({
            inShorthand: false, 
            shorthandMatches: [],
            shorthandText: "",
          });
          break;
        case 13: // Handle enter clicks to insert text
          if (this.state.shorthandMatches.length > 0) {
            event.preventDefault(); 
            return this.insertCurrentShorthandMatch();
          }
          break;
        case 8:  // Handle deletions by updating the shorthandText and suggestions
          const textLength = this.state.shorthandText.length;
          newText = (textLength > 0) ? this.state.shorthandText.slice(0, textLength -1) : "" ;
          matches = this.determineShorthandMatches(newText);
          this.setState({
              shorthandText: newText,
              inShorthand: (textLength !== 0),
              shorthandMatches: matches,
          })
          break;
        case 16: // Handle Ctrl, Alt, Shift, Caps Lock by doing nothing
        case 17:
        case 18:
        case 20:
          break; 
        default: // Continue growing ShorthandText and offering updated suggestions
          newText = this.state.shorthandText +  String.fromCharCode(event.keyCode);  
          matches = this.determineShorthandMatches(newText);
          
          this.setState({
              shorthandText: newText,
              shorthandMatches: matches,
          })
          break;
      }
    } else { 
       if (data.isShift) { 
        let newState;
        let closestDOMElement;
        let menuEl;
        let offset;
        switch (data.key) {
          case '2': 
            newState = this.state.state.transform().setBlockAtRange(this.state.state.selection,{data: {"id": "autocomplete-block"}}).apply()
            closestDOMElement = window.document.querySelector(`[data-key="${this.state.state.anchorKey}"]`)
            menuEl = window.document.getElementsByClassName("shorthand-menu")[0]
            offset = getOffsets(menuEl, 'top left', closestDOMElement, 'bottom right')
            menuEl.style.top = `${offset.top}px`
            menuEl.style.left = `${offset.left}px`
            this.setState({
              state: newState, 
              inShorthand: true,
              shorthandText: ""
            });
            return;
          case '3': 
            // Trigger autocomplete mode if a '#' is typed 
            newState = this.state.state.transform().setBlockAtRange(this.state.state.selection,{data: {"id": "autocomplete-block"}}).apply()
            closestDOMElement = window.document.querySelector(`[data-key="${this.state.state.anchorKey}"]`)
            menuEl = window.document.getElementsByClassName("autocomplete-menu")[0]
            offset = getOffsets(menuEl, 'top left', closestDOMElement, 'bottom right')
            menuEl.style.top = `${offset.top}px`
            menuEl.style.left = `${offset.left}px`
              this.setState({
              state: newState, 
              inAutocomplete: true,
              autocompleteText: ""
            });
            return;
          default:
            return; 
        } 
      } else if (data.isMod) { 
        // Handle ctrl-b and other shortkeys for format switching 
        let mark
        switch (data.key) {
          case 'b':
            mark = 'bold'
            break
          case 'i':
            mark = 'italic'
            break
          case 'u':
            mark = 'underlined'
            break
          case '`':
            mark = 'code'
            break
          default:
            return
        }
        event.preventDefault()
        return state
          .transform()
          .toggleMark(mark)
          .apply()
      } else if (event.keyCode === 13 && !(state.blocks.some(node => (node.type === "list-item") || (node.type ==="bulleted-list") || (node.type ==="numbered-list")))) {
          // Handle new lines in the case where we aren't in a list 
          event.preventDefault();
          return state
          .transform()
          // Paste a block containing a zero width space 
          .insertBlock(Block.create({'type': 'paragraph-span', 'nodes': List([Text.createFromString('​')])}))
          .apply();
      } 
    }
  }
  

  /**
   * Lifecycle method that triggers after updates to the component
   */
  componentDidUpdate = (prevProps, prevState) => { 

    // Handle progression structured data
    for(const parentNode of this.state.state.document.nodes) {
      const curProgressionStatusNode = getNodeById(parentNode.nodes, 'progression-value');
      const curProgressionReasonNode = getNodeById(parentNode.nodes, 'progression-cause');     
      if (curProgressionStatusNode && curProgressionReasonNode) {
        let prevProgressionStatusNode = null; 
        let prevProgressionReasonNode = null;
        // Check to see if these nodes exists in old set
        for(const parentNode of prevState.state.document.nodes) {
          prevProgressionStatusNode = !!(getNodeById(parentNode.nodes, 'progression-value')) ? getNodeById(parentNode.nodes, 'progression-value') : prevProgressionStatusNode;
          prevProgressionReasonNode = !!(getNodeById(parentNode.nodes, 'progression-cause')) ? getNodeById(parentNode.nodes, 'progression-cause') : prevProgressionReasonNode;
        }          
        // If both of these nodes are new, make a new progression value 
        if (Lang.isNull(prevProgressionStatusNode) && Lang.isNull(prevProgressionReasonNode)) {
          console.log('first prog')
          this.props.changeCurrentShortcut("progression")
        } else {
          // If these nodes are old, update progression value if applicable
          if (prevProgressionStatusNode.text !== curProgressionStatusNode.text) {
            // Handle progression status update and pass off next node
            this.handleProgressionStatusUpdate(curProgressionStatusNode.text, curProgressionReasonNode) 
            return;
          } 
          if (prevProgressionReasonNode.text !== curProgressionReasonNode.text) {
            if (curProgressionReasonNode.text[curProgressionReasonNode.text.length - 1] === "]") {
              this.handleProgressionFinish(prevState);
            }  else { 
              console.log(`updating progression based on update because ${prevProgressionReasonNode.text} doesn't equal ${curProgressionReasonNode.text}`)
              this.handleProgressionReasonUpdate(curProgressionReasonNode.text.split(', '), curProgressionReasonNode) 
            }
          }  
        }
      }
      const curTNode = getNodeById(parentNode.nodes, 't-staging');
      const curNNode = getNodeById(parentNode.nodes, 'n-staging');
      const curMNode = getNodeById(parentNode.nodes, 'm-staging');

      if (curTNode && curNNode && curMNode) {
        let prevTNode = null; 
        let prevNNode = null; 
        let prevMNode = null;
        // Check to see if these nodes exists in old set
        for(const parentNode of prevState.state.document.nodes) {
          prevTNode = !!(getNodeById(parentNode.nodes, 't-staging')) ? getNodeById(parentNode.nodes, 't-staging') : prevTNode;
          prevNNode = !!(getNodeById(parentNode.nodes, 'n-staging')) ? getNodeById(parentNode.nodes, 'n-staging') : prevNNode;
          prevMNode = !!(getNodeById(parentNode.nodes, 'm-staging')) ? getNodeById(parentNode.nodes, 'm-staging') : prevMNode;
        }          
        // If all three of these nodes are new, make a new Staging value 
        if (Lang.isNull(prevTNode) && Lang.isNull(prevNNode) && Lang.isNull(prevMNode)) {
          console.log('first prog')
          this.props.changeCurrentShortcut("staging")
        } else {
          // If these nodes are old, update values where applicable
          if (curTNode.text !== prevTNode.text) { 
            this.handleStagingTUpdate(curTNode.text.trim(), curNNode) 
            return;
          }
          if (curNNode.text !== prevNNode.text) { 
            this.handleStagingNUpdate(curNNode.text.trim(), curMNode) 
            return;
          }
          if (curMNode.text !== prevMNode.text) { 
            this.handleStagingMUpdate(curMNode.text.trim(), this.state.state) 
            return;
          }
        }
      }
    }
  }

  // This gets called when the before the component receives new properties
  componentWillReceiveProps = (nextProps) => {

    if (this.props.itemToBeInserted !== nextProps.itemToBeInserted) {
      this.handleSummaryUpdate(nextProps.itemToBeInserted);
    }
    if (Lang.isNull(nextProps.currentShortcut) && Lang.isNull(this.state.previousShortcut)) { 
      //Do nothing 
    } else if (!Lang.isNull(nextProps.currentShortcut) && nextProps.currentShortcut.getShortcutType() === "progression" && (Lang.isNull(this.state.previousShortcut) || this.state.previousShortcut.getShortcutType() === "staging")) { 
      console.log('should trigger on first insert of progression')
      this.setState({
        previousShortcut: new ProgressionShortcut(() => {}, nextProps.currentShortcut.progression)
      })
    } else if (!Lang.isNull(nextProps.currentShortcut) && nextProps.currentShortcut.getShortcutType() === "staging" && (Lang.isNull(this.state.previousShortcut) || this.state.previousShortcut.getShortcutType() === "progression")) { 
      console.log('should trigger on first insert of staging')
      this.setState({
        previousShortcut: new StagingShortcut(() => {}, nextProps.currentShortcut.staging)
      })
    } else if (Lang.isNull(nextProps.currentShortcut) && !Lang.isNull(this.state.previousShortcut)) { 
      this.setState({
        previousShortcut: null
      });
    } else { 
      // Check if staging block exists in the editor and what shortcut we're in
      const stagingNode = getNodeById(this.state.state.document.nodes, 'staging');
      const progressionNode = getNodeById(this.state.state.document.nodes, 'progression');
      const isCurrentShortcut = (!Lang.isNull(this.props.currentShortcut));
      let isStagingShortcut = false;
      let isProgressionShortcut = false;
      if (isCurrentShortcut) {
          isStagingShortcut = (this.props.currentShortcut.getShortcutType() === "staging");
          isProgressionShortcut = (this.props.currentShortcut.getShortcutType() === "progression");
      }

      // If it exists, populate the fields with the updated staging values
      if (stagingNode && isStagingShortcut) {
        for(const parentNode of this.state.state.document.nodes) {
          const tNode = getNodeById(parentNode.nodes, 't-staging');
          const nNode = getNodeById(parentNode.nodes, 'n-staging');
          const mNode = getNodeById(parentNode.nodes, 'm-staging');

          // Set t value
          if (tNode && 
            !Lang.isEmpty(nextProps.currentShortcut.staging.tumorSize) && 
            (this.state.previousShortcut.staging.tumorSize !== nextProps.currentShortcut.staging.tumorSize)) { 
              const currentState = this.state.state;
              const state = currentState
                  .transform()
                  .moveToRangeOf(tNode)
                  .moveEnd(-1)
                  .deleteForward()
                  .insertText(nextProps.currentShortcut.staging.tumorSize)
                  .apply();
              this.setState({ 
                state: state,
                previousShortcut: new StagingShortcut(() => {}, nextProps.currentShortcut.staging)
              });
          }

          // Set n value
          if (nNode && !Lang.isEmpty(nextProps.currentShortcut.staging.nodeSize) && (this.state.previousShortcut.staging.nodeSize !== nextProps.currentShortcut.staging.nodeSize)) { 
            const currentState = this.state.state;
            const state = currentState
                .transform()
                .moveToRangeOf(nNode)
                .moveEnd(-1)
                .deleteForward()
                .insertText(nextProps.currentShortcut.staging.nodeSize)
                .apply();
            this.setState({ 
              state: state,
              previousShortcut: new StagingShortcut(() => {}, nextProps.currentShortcut.staging)
            });
          }

          // Set m value
          if (mNode && !Lang.isEmpty(nextProps.currentShortcut.staging.metastasis) && (this.state.previousShortcut.staging.metastasis !== nextProps.currentShortcut.staging.metastasis)) { 
            const currentState = this.state.state;
            const state = currentState
                .transform()
                .moveToRangeOf(mNode)
                .moveEnd(-1)
                .deleteForward()
                .insertText(nextProps.currentShortcut.staging.metastasis)
                .apply();
            this.setState({ 
              state: state,
              previousShortcut: new StagingShortcut(() => {}, nextProps.currentShortcut.staging)
            });
          }
        }
      } else if (progressionNode  && isProgressionShortcut) {  
        for(const parentNode of this.state.state.document.nodes) {
          const progressionStatusNode = getNodeById(parentNode.nodes, 'progression-value');
          const progressionReasonNode = getNodeById(parentNode.nodes, 'progression-cause');
          
          if (progressionStatusNode && !Lang.isEmpty(nextProps.currentShortcut.progression.status) && (this.state.previousShortcut.progression.status !== nextProps.currentShortcut.progression.status)) { 
            console.log('changed the Progression status')
            const currentState = this.state.state;
            const state = currentState
                .transform()
                .moveToRangeOf(progressionStatusNode)
                .insertText(nextProps.currentShortcut.progression.status)
                .moveToRangeOf(progressionReasonNode)
                .apply();
            this.setState(
              { 
                state: state, 
                previousShortcut: new ProgressionShortcut(() => {}, nextProps.currentShortcut.progression)
              }
            );
          } else if (progressionReasonNode && !this.arrayEquality(this.state.previousShortcut.progression.reason, nextProps.currentShortcut.progression.reason)) {  
            console.log(`changing progression reason`)
            // Process reason text into proper format
            let reasonText = "";
            const reasonLength = nextProps.currentShortcut.progression.reason.length;
            if (reasonLength > 0) { 
              for (let i = 0; i < reasonLength - 1; i++) {
                 reasonText += nextProps.currentShortcut.progression.reason[i];
                 reasonText += ', ';
               } 
              reasonText += nextProps.currentShortcut.progression.reason[reasonLength - 1];
            } else { 
              reasonText = "__ "
            }
            const currentState = this.state.state;
            const state = currentState
                .transform()
                .moveToRangeOf(progressionReasonNode)
                .insertText(reasonText)
                .apply();
            this.setState(
              { 
                state: state, 
                previousShortcut: new ProgressionShortcut(() => {}, nextProps.currentShortcut.progression)
              }
            );
          } 
        }
      }
    }
  }

  /**
   * Perform a rough equality check.
   */
  arrayEquality = (a1, a2) => { 
    if (a1.length !== a2.length) {
      return false;
    } else { 
      let isEqual = true;
      for(const arrElement of a1) { 
        isEqual = isEqual && a2.includes(arrElement);
      }
      return isEqual
    }
  }

  /**
   * Render the dropdown of suggestions.
   */
  renderDropdown = () => { 
    return (
      <div className="menu autocomplete-menu">
        {this.state.autocompleteMatches.map((match, index) => {
          const isActive = (this.state.currentAutocompleteMatch === index); 

          return (
              <div className="menu-item" key={index} data-active={isActive} onMouseOver={ () => { this.updateCurrentAutocompleteMatch(index)}} onClick={() => this.insertCurrentAutocompleteMatch()}>
                {match}
              </div>
          );}
        )}
      </div> 
    )
  }

  /**
   * Render the dropdown of shorthand suggestions.
   */
  renderShorthandDropdown = () => { 
    return (
      <div className="menu shorthand-menu">
        {this.state.shorthandMatches.map((match, index) => {
          const isActive = (this.state.currentShorthandMatch === index); 

          return (
              <div className="menu-item" key={index} data-active={isActive} onMouseOver={ () => { this.updateCurrentShorthandMatch(index)}} onClick={() => this.insertCurrentShorthandMatch()}>
                {match}
              </div>
          );}
        )}
      </div> 
    )
  }

  render() {
    
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
                <p className="note-description-detail-value">Dr. Brenda Zeiweger</p>
              </Col>
            </Row>
  
      <Divider className="divider" />
          </div>
        );
    }
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
          {this.renderDropdown()}
          {this.renderShorthandDropdown()}
          <Editor
            placeholder={this.placeholder}
            schema={this.state.schema}
            state={this.state.state}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            onSelectionChange={this.onSelectionChange}
            plugins={this.plugins}
          />
        </div>
      </Paper>
      </div>
    );
  }
}

ClinicalNotes.propTypes = {
    onStructuredFieldExited:  PropTypes.func.isRequired,
    onStructuredFieldEntered: PropTypes.func.isRequired,
}

export default ClinicalNotes;
