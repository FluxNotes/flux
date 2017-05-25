// Import React!
import React from 'react'
import { Editor, Block, Inline, Transform , Raw, Text, Html } from 'slate'
import AutoReplace from 'slate-auto-replace'
import { List , Map } from 'immutable'

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
const test = Raw.deserialize({
  "nodes": [
    {
      "kind": "block",
      "type": "paragraph",
      "isVoid": false,
      "nodes": [
        {
          "kind": "text",
          "ranges": [
            {
              "text": "Staging "
            }
          ]
        },
        {
          "kind": "inline",
          "type": "structured-span",
          "data": {
            "id": "t-staging",
          },
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "T_ "
                }
              ]
            }
          ]
        }, 
        {
          "kind": "inline",
          "type": "structured-span",
          "data": {
            "id": "n-staging",
          },
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "N_ "
                }
              ]
            }
          ]
        }, 
        {
          "kind": "inline",
          "type": "structured-span",
          "data": {
            "id": "m-staging",
          },
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "M_ "
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}, { terse: true });


// Add the plugin to your set of plugins...
const plugins = [
  AutoReplace({
    trigger: 'space',
    before: /(\.staging)/,
    transform: (transform, e, data, matches) => {
      const stagingBlock = test.document.nodes.get(0);
      const tNode = getNodeById(stagingBlock.nodes, 't-staging');
      const newTrans = transform.insertBlock(stagingBlock).moveToRangeOf(tNode)
              .moveStart(1)
              .moveEnd(-1);
      return newTrans;
    }
  })
]

// const BLOCK_TAGS = {
//   p: 'paragraph',
//   span: 'span',
//   div: 'div',
//   li: 'list-item',
//   ul: 'bulleted-list',
//   ol: 'numbered-list',
//   blockquote: 'quote',
//   h1: 'heading-one',
//   h2: 'heading-two',
// }

// const MARK_TAGS = {
//   strong: 'bold',
//   em: 'italic',
//   u: 'underline',
//   s: 'strikethrough',
//   code: 'code'
// }
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


function getNodeById(nodes, id) { 
  return nodes.find(function(v, k, iter) {
    if (v.data) {
      return v.data.get('id') === id;
    } else { 
      return false;
    }
  });
}

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

const stagingKeys = ['T','N','M']

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
        'strikethrough': props => <del>{props.children}</del>,
        'code':          props => <code>{props.children}</code>,
      }
    }
  }

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    // console.log('in change')
    // console.log(state.document.nodes)
    // console.log(Raw.serialize(state))    
    // if (state.document.nodes.find(function(val, k, iter) { console.log(val); console.log(k); return val===bl; })) {
    //   console.log('abile to find');
    // }
    // state = state.transform().moveToRangeOf(nBlock).moveStart(1).moveEnd(-1).apply()
    // console.log(state)
    // console.log(state.selection)
    // console.log(state.selection.startKey)
    // console.log(state.selection.startOffset)

    // const docBlock = state.document.nodes.get(1);
    // if(tNode) { 
    //   console.log('in this transform')
    // const nNode = getNodeById(docBlock.nodes, 'n-staging');
    // const mNode = getNodeById(docBlock.nodes, 'm-staging');

    //   state = state.transform().moveToRangeOf(tNode).moveStart(1).moveEnd(-1).apply();
    // }

    this.setState({ state })
  }

  onKeyDown = (event, data, state) => {
    console.log('\n\nlooping...')
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
            console.log('this is a character that we care about') 
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
            console.log('this is a character that we care about') 
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
              .apply();
          } else if (stagingKeys.includes(String.fromCharCode(event.keyCode))) {
            console.log('this is a character that we care about') 
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
          plugins={plugins}
        />
      </div>
    )
  }
}

export default MyEditor;
