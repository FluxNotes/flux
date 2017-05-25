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


function textFromStringAndKey(str, key) { 
  return Text.create({
    key: key,
    characters: charListFromString(str)
  });
}
function charListFromString(str) { 
  let arr = [];
  for (const c of str) {
    arr.push({
      marks: List([]),
      text: c
    });
  }
  return List(arr);
}
const test = Raw.deserialize(staging, { terse: true });``

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'This is wher clinical notes go...'
        }
      ]
    }, 
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: '.staging'
        }
      ]
    }
  ]
}, { terse: true })

// Given a list of nodes and an id, check to see if there 
// is a (shallow) node in that list with that id
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

// Given a current node and an array of keys,
// add the key of this node and the keys of all its children 
// to the array.
function addKeysForNode(curNode, keys) { 
  console.log(curNode);
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
const stagingKeys = ['T','N','M'];

// Define our app...
class MyEditor extends React.Component {
  // Set the initial state when the app is first constructed.
  state = {
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
  // Add the plugin to your set of plugins...
  plugins = [
    AutoReplace({
      trigger: 'space',
      before: /(\.staging)/,
      transform: (transform, e, data, matches) => {
        console.log(staging);
        const stagingBlock = test.document.nodes.get(0);
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
    this.setState({ state })
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
          } else if (stagingKeys.includes(String.fromCharCode(event.keyCode))) {
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
          } else if (stagingKeys.includes(String.fromCharCode(event.keyCode))) {
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
          } else if (stagingKeys.includes(String.fromCharCode(event.keyCode))) {
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
