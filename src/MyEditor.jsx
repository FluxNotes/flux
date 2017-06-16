// Import React and other libraries
import React from 'react'
import { Editor, Block , Raw, Text } from 'slate'
import AutoReplace from 'slate-auto-replace'
import { List } from 'immutable'
import getOffsets from 'positions'
// Styling
import './MyEditor.css';

//TODO: make this a one line destructuring 
import structuredDataRaw from './structuredDataRaw';
const staging = structuredDataRaw.find((element, index, array) => element.label === 'staging')
const stagingState = Raw.deserialize(staging.block, { terse: true });

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'Begin typing your clinical notes below.'
        }
      ]
    }, 
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'Add a space at the end of this line to trigger a inline template: .staging'
        }
      ]
    }
  ]
}, { terse: true })

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

// The list of special keys we want to trigger special beahvior
// TODO: link these keys with the specific changes in behavior
const stagingKeyChars = ['T','N','M'];

// Define our app...
class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    // Set the initial state when the app is first constructed.
    this.state = {
      inAutocomplete: false,
      autocompleteText: "",
      autocompleteMatches: [],
      currentAutocompleteMatch: null,
      state: initialState,
      // TODO: Clean up options and load them from an external source
      autocompleteOptions: structuredDataRaw,
      schema: {
        nodes: {
          'paragraph':     props => <p {...props.attributes}>{props.children}</p>,
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

  // This gets called when the state receives new updates 
  componentWillReceiveProps(nextProps) {
    // console.log("[componentDidUpdate] this.props.itemToBeInserted: " + this.props.itemToBeInserted);
    // console.log("[componentDidUpdate] nextProps.itemToBeInserted: " + nextProps.itemToBeInserted);

    if (this.props.itemToBeInserted !== nextProps.itemToBeInserted) {
      this.handleSummaryUpdate(nextProps.itemToBeInserted);
    }
  }


  // Add the plugin to your set of plugins...
  plugins = [
    AutoReplace({
      trigger: 'space',
      before: /(\.staging)/i,
      transform: (transform, e, data, matches) => {
        const stagingBlock = getNodeById(stagingState.blocks, 'staging')
        const tNode = getNodeById(stagingBlock.nodes, 't-staging');
        const newTrans = transform.insertBlock(stagingBlock).moveToRangeOf(tNode)
                .moveStart(1)
                .moveEnd(-1);
        return newTrans;
      }
    }),
    AutoReplace({
      trigger: 'space',
      before: /(\.NAME)/i,
      transform: (transform, e, data, matches) => {
        const newTrans = transform.insertText(`${this.props.data.patient.name} `);
        return newTrans;
      }
    }),
    AutoReplace({
      trigger: 'space',
      before: /(\.AGE)/i,
      transform: (transform, e, data, matches) => {
        const newTrans = transform.insertText(`${this.props.data.patient.age} year-old `);
        return newTrans;
      }
    }),
    AutoReplace({
      trigger: 'space',
      before: /(\.GENDER)/i,
      transform: (transform, e, data, matches) => {
        const newTrans = transform.insertText(`${this.props.data.patient.gender} `);
        return newTrans;
      }
    })
  ];

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    const stagingNode = getNodeById(state.document.nodes, 'staging');
    if(!stagingNode) { 
      this.handleStructuredFieldExited(null)
      this.setState({ state })
    } else { 
     const stagingKeys = addKeysForNode(stagingNode, []);
     (stagingKeys.includes(state.selection.startKey)) ?  this.handleStructuredFieldEntered('staging') : this.handleStructuredFieldExited('staging');
     this.setState({ state })
    }
  }

  handleStagingTUpdate = (newVal) => {
    this.props.onStagingTUpdate(newVal);
  }

  handleStagingNUpdate = (newVal) => {
    this.props.onStagingNUpdate(newVal);
  }

  handleStagingMUpdate = (newVal) => {
    this.props.onStagingMUpdate(newVal);
  }

  handleStageUpdate = (newVal) => {
    this.props.onStageUpdate(newVal);
  }

  handleSummaryUpdate = (itemToBeInserted) => {
    const currentState = this.state.state;
    const state = currentState
        .transform()
        .insertText(itemToBeInserted)
        .apply();
    this.setState({ state: state })
  }

  handleStructuredFieldEntered = (currentFocus) => { 
    this.props.onStructuredFieldEntered(currentFocus);
  }

  handleStructuredFieldExited = (currentFocus) => { 
    this.props.onStructuredFieldExited(currentFocus);
  }


  onKeyDown = (event, data, state) => {
    // Continue handling autocompletes    
    if(this.state.inAutocomplete) {
      let newText = "";
      let matches = [];

      switch (event.keyCode) { 
        case 32: // Deactivate on spacebar 
          this.setState({
            inAutocomplete: false, 
            autocompleteText: "",
          });
          break;
        case 13: // Handle enter clicks to insert text
          break;
        case 8:  // Handle deletions by updating the autocompleteText
          const textLength = this.state.autocompleteText.length;
          newText = (textLength > 0) ? this.state.autocompleteText.slice(0, textLength -1) : "" ;
          matches = this.determineAutocompleteMatches(newText);
          this.setState({
              autocompleteText: newText,
              inAutocomplete: (newText !== ""),
              autocompleteMatches: matches,
          })
          break;
        default: // Continue growing autocompleteText and offering updated suggestions
          newText = this.state.autocompleteText +  String.fromCharCode(event.keyCode);  
          matches = this.determineAutocompleteMatches(newText);
          const closestDOMElement = window.document.querySelector(`[data-key="${this.state.state.anchorKey}"]`)
          const menuEl = window.document.getElementsByClassName("autocomplete-menu")[0]
          const offset = getOffsets(menuEl, 'top left', closestDOMElement, 'bottom left')
          menuEl.style.top = `${offset.top}px`
          menuEl.style.left = `${offset.left}px`
          
          this.setState({
              autocompleteText: newText,
              autocompleteMatches: matches,
          })
          break;

      }
    } else { 
      if (event.keyCode === 190) {
        // Trigger autocomplete mode if a '.' is typed 
        this.setState({
          inAutocomplete: true,
          autocompleteText: ""
        });
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
          .insertBlock(Block.create({'type': 'paragraph', 'nodes': List([Text.createFromString(' ')])}))
          .apply();
      } else {
        // Search all nodes to find if structured nodes that need checking 
        for(const parentNode of state.document.nodes) { 
          const tNode = getNodeById(parentNode.nodes, 't-staging');
          const nNode = getNodeById(parentNode.nodes, 'n-staging');
          const mNode = getNodeById(parentNode.nodes, 'm-staging');

          if(tNode && nNode && mNode) { 
            const tKeys = addKeysForNode(tNode, []);
            const nKeys = addKeysForNode(nNode, []);
            const mKeys = addKeysForNode(mNode, []);
            if (tKeys.includes(state.selection.startKey)) { 
              if(event.keyCode >= 48 && event.keyCode <=57) {
                const val = event.keyCode - 48;
                this.handleStagingTUpdate(val)
                this.handleStageUpdate(this.props.calculateStage(val, this.props.nodeSize, this.props.metastasis))

                event.preventDefault()
                return state
                  .transform()
                  .moveToRangeOf(tNode)
                  .moveStart(1)
                  .moveEnd(-1)
                  .deleteForward()
                  .insertText(String.fromCharCode(event.keyCode))
                  .moveToRangeOf(nNode)
                  .moveStart(1)
                  .moveEnd(-1)
                  .apply();
              } else if (stagingKeyChars.includes(String.fromCharCode(event.keyCode))) {
                event.preventDefault();
                switch(String.fromCharCode(event.keyCode)) { 
                  case "T": 
                    return state
                     .transform()
                     .moveToRangeOf(tNode)
                     .moveStart(1)
                     .moveEnd(-1)
                     .apply();
                  case "N":
                    return state
                      .transform()
                      .moveToRangeOf(nNode)
                      .moveStart(1)
                      .moveEnd(-1)
                      .apply();
                  case "M":
                    return state
                      .transform()
                      .moveToRangeOf(mNode)
                      .moveStart(1)
                      .moveEnd(-1)
                      .apply();
                  default: 
                    return state;
                } 
              }
            } else if (nKeys.includes(state.selection.startKey)) { 
              if(event.keyCode >= 48 && event.keyCode <=57) {
                const val = event.keyCode - 48;
                this.handleStagingNUpdate(val)
                this.handleStageUpdate(this.props.calculateStage(this.props.tumorSize, this.props.nodeSize, this.props.metastasis))

                event.preventDefault()
                return state
                  .transform()
                  .moveToRangeOf(nNode)
                  .moveStart(1)
                  .moveEnd(-1)
                  .deleteForward()
                  .insertText(String.fromCharCode(event.keyCode))
                  .moveToRangeOf(mNode)
                  .moveStart(1)
                  .moveEnd(-1)
                  .apply();
              } else if (stagingKeyChars.includes(String.fromCharCode(event.keyCode))) {
                event.preventDefault();
                switch(String.fromCharCode(event.keyCode)) { 
                  case "T": 
                    return state
                     .transform()
                     .moveToRangeOf(tNode)
                     .moveStart(1)
                     .moveEnd(-1)
                     .apply();
                  case "N":
                    return state
                      .transform()
                      .moveToRangeOf(nNode)
                      .moveStart(1)
                      .moveEnd(-1)
                      .apply();
                  case "M":
                    return state
                      .transform()
                      .moveToRangeOf(mNode)
                      .moveStart(1)
                      .moveEnd(-1)
                      .apply();
                  default: 
                    return state;
                } 
              }
            } else if (mKeys.includes(state.selection.startKey))  { 
              if(event.keyCode >= 48 && event.keyCode <=57) {
                const val = event.keyCode - 48;
                this.handleStagingMUpdate(val)
                this.handleStageUpdate(this.props.calculateStage(this.props.tumorSize, this.props.nodeSize, val))
                const emptyBlock = Block.create({'type': 'span', 'nodes': List([Text.createFromString('')])});
                const emptyBlockKey = emptyBlock.key;
                const afterEmpty = parseInt(emptyBlockKey, 10) + 2;
                event.preventDefault()
                return state
                  .transform()
                  .moveToRangeOf(mNode)
                  .moveStart(1)
                  .moveEnd(-1)
                  .deleteForward()
                  .insertText(String.fromCharCode(event.keyCode))
                  .collapseToEndOf(mNode)
                  .insertBlock(emptyBlock)
                  .removeNodeByKey(afterEmpty.toString())
                  .apply();
              } else if (stagingKeyChars.includes(String.fromCharCode(event.keyCode))) {
                event.preventDefault();
                switch(String.fromCharCode(event.keyCode)) { 
                  case "T": 
                    return state
                     .transform()
                     .moveToRangeOf(tNode)
                     .moveStart(1)
                     .moveEnd(-1)
                     .apply();
                  case "N":
                    return state
                      .transform()
                      .moveToRangeOf(nNode)
                      .moveStart(1)
                      .moveEnd(-1)
                      .apply();
                  case "M":
                    return state
                      .transform()
                      .moveToRangeOf(mNode)
                      .moveStart(1)
                      .moveEnd(-1)
                      .apply();
                  default: 
                    return state;
                } 
              }
            }
          }
        } 
      }
    }
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   */
  hasMark = (type) => {
    const { state } = this.state
    return state.marks.some(mark => mark.type === type)
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   */
  hasBlock = (type) => {
    const { state } = this.state
    return state.blocks.some(node => node.type === type)
  }

  /**
   * When a mark button is clicked, toggle the current mark.
   */
  onClickMark = (e, type) => {
    e.preventDefault()
    let { state } = this.state
    state = state
      .transform()
      .toggleMark(type)
      .apply()
    this.setState({ state })
  }

  /**
   * When a block button is clicked, toggle the block type.
   */
  onClickBlock = (e, type) => {
    e.preventDefault()
    let { state } = this.state
    const transform = state.transform()
    const { document } = state

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
    this.setState({ state })
  }

  /**
   *  Lifecycle Methods
   */
  // componentDidUpdate = (prevProps, prevState) => { 
  //   window.state = this.state.state;
  //   console.log(this.state.state);
  //   var re2 = /\s\.(\w(\w*-?\w*)+)/g;
  //   for(const txt of this.state.state.texts) { 
  //     const shorthand = txt.text.match(re2)
  //     if (shorthand) {
  //       console.log(shorthand)

  //     }
  //   }
  // }
  deleteCurrentAutocompleteText = () => {

  }

  insertBlockAtLocation  = (block, location="") => { 
    let newState;
    if (location === "") {
      newState = this.state.state
        .transform()
        .insertBlock(block)
        .apply()
    } 
    this.setState({ 
      state: newState,
    });
  }


  insertCurrentAutocompleteMatch = () => {
    const autocompleteKey = this.state.autocompleteMatches[this.state.currentAutocompleteMatch];
    const currentAutocompleteOption = this.state.autocompleteOptions.find((element, index, array) => element.label === autocompleteKey);
    const autocompleteState = Raw.deserialize(currentAutocompleteOption.block,{terse:true});
    const autocompleteBlock = getNodeById(autocompleteState.blocks, autocompleteKey);
    console.log(currentAutocompleteOption);
    console.log(autocompleteState);
    console.log(autocompleteKey);
    console.log(autocompleteBlock);
    this.deleteCurrentAutocompleteText(); 
    this.insertBlockAtLocation(autocompleteBlock);
    this.setState({
      currentAutocompleteMatch : null,
      inAutocomplete: false,
      autocompleteText: "",
      autocompleteMatches: [],
    });
  }

  updateCurrentAutocompleteMatch = (key) => { 
    this.setState({
      currentAutocompleteMatch: key
    });
  }
  determineAutocompleteMatches = (autocompleteText) => {
    let matches = []; 
    const regexFromAutocompleteText = new RegExp(autocompleteText, 'i');
    for (const opt of this.state.autocompleteOptions) { 
      if(opt.label.match(regexFromAutocompleteText))  { 
        matches.push(opt.label);
      }
    }
    this.setState({ 
      currentAutocompleteMatch: 0
    })
    return matches.length > 5 ? matches.slice(0,5) : matches;
  }
  componentDidUpdate = (prevProps, prevState) => { 
    //Nothing now
  }

  /**
   * Render a mark-toggling toolbar button.
   */
  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)
    const onMouseDown = e => this.onClickMark(e, type)

    return (
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <i className={"fa fa-fw " + icon} aria-label={"Make text " + type}></i>
      </span>
    )
  }
  /**
   * Render a block-toggling toolbar button.
   */
  renderBlockButton = (type, icon) => {
    const isActive = this.hasBlock(type)
    const onMouseDown = e => this.onClickBlock(e, type)

    return (
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <i className={"fa fa-fw " + icon} aria-label={"Make text " + type}></i>
      </span> 
    )
  }
  /**
   * Render the toolbar.
   */
  renderToolbar = () => {
    return (
      <div className="menu toolbar-menu">
        {this.renderMarkButton('bold', 'fa-bold ')}
        {this.renderMarkButton('italic', 'fa-italic')}
        {this.renderMarkButton('underlined', 'fa-underline')}
        {this.renderMarkButton('code', 'fa-code')}
        {this.renderBlockButton('bulleted-list', 'fa-list')}
        {this.renderBlockButton('numbered-list', 'fa-list-ol')}
      </div>
    )
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
   * Render the editor, toolbar and dropdown when needed.
   */
  render = () => {
    return (
      <div className="MyEditor-root">
        {this.renderToolbar()}
        {this.renderDropdown()}
        <Editor
          schema={this.state.schema}
          state={this.state.state}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          plugins={this.plugins}
        />
      </div>
    )
  }
}

export default MyEditor;
