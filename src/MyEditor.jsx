// Import React!
import React from 'react'
import { Editor, Block, Inline, Transform , Raw, Text, Html } from 'slate'
import AutoReplace from 'slate-auto-replace'
import { List , Map } from 'immutable'
//TODO: make this a one line destructuring 
import structuredDataRaw from './structuredDataRaw';
const {staging}  = structuredDataRaw;
// Styling
import './MyEditor.css';


const stagingState = Raw.deserialize(staging, { terse: true });

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
      state: initialState,
      schema: {
        nodes: {
          'paragraph':     props => <p {...props.attributes}>{props.children}</p>,
          'structured-span':          (props) => {
            const id = (props.node) ? props.node.data.get('id') : '';
            return <span id={id} {...props.attributes}>{props.children}</span>;
          },
          'span':           props => <span {...props.attributes}>{props.children}</span>,
          'div':           props => <div {...props.attributes}>{props.children}</div>,
          'list-item':     props => <li {...props.attributes}>{props.children}</li>,
          'bulleted-list': props => <ul {...props.attributes}>{props.children}</ul>,
          'numbered-list': props => <ol {...props.attributes}>{props.children}</ol>,
          'block-quote':   props => <blockquote {...props.attributes}>{props.children}</blockquote>
        },
        marks: { 
          'bold':          props => <strong>{props.children}</strong>,
          'italic':        props => <em>{props.children}</em>,
          'underline':     props => <u>{props.children}</u>,
        }
      }
    }
  }
  
  // Add the plugin to your set of plugins...
  plugins = [
    AutoReplace({
      trigger: 'space',
      before: /(\.staging)/i,
      transform: (transform, e, data, matches) => {
        const stagingBlock = stagingState.document.nodes.get(0);
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
      this.props.onStructuredFieldExited(null)
      this.setState({ state })
    } else { 
     const stagingKeys = addKeysForNode(stagingNode, []);
     (stagingKeys.includes(state.selection.startKey)) ?  this.props.onStructuredFieldEntered('staging') : this.props.onStructuredFieldExited('staging');
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

  onKeyDown = (event, data, state) => {
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
            } 
          }
        } else if (nKeys.includes(state.selection.startKey)) { 
          if(event.keyCode >= 48 && event.keyCode <=57) {
            const val = event.keyCode - 48;
            this.handleStagingNUpdate(val)

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
            } 
          }
        } else if (mKeys.includes(state.selection.startKey))  { 
          if(event.keyCode >= 48 && event.keyCode <=57) {
            const val = event.keyCode - 48;
            this.handleStagingMUpdate(val)

            event.preventDefault()
            return state
              .transform()
              .moveToRangeOf(mNode)
              .moveStart(1)
              .moveEnd(-1)
              .deleteForward()
              .insertText(String.fromCharCode(event.keyCode))
              .collapseToEndOf(mNode)
              .insertBlock(Block.create({'type': 'span', 'nodes': List([Text.createFromString('  ')])}))
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
            } 
          }
        }
      } 
    }
  }
  // Render the editor.
  render = () => {
    return (
      <div className="MyEditor-root">
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
