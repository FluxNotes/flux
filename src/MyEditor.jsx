// Import React!
import React from 'react'
import { Editor, Block, Inline, Transform , Raw, Text, Html } from 'slate'
import AutoReplace from 'slate-auto-replace'
import { List } from 'immutable'

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
const stagingText = Text.createFromString('Staging ');
const tText = Text.createFromString('T:_ ');
const tBlock = Inline.create({
  isVoid: false,  
  key: 'T-staging',
  type: 'span',
  nodes: List([tText])
});
const nText = Text.createFromString('N:_ ')
const nBlock = Inline.create({
  isVoid: false,  
  key: 'N-staging',
  type: 'span',
  nodes: List([nText])
});
const mText = Text.createFromString('M:_ ')
const mBlock = Inline.create({
  isVoid: false,  
  key: 'M-staging',
  type: 'span',
  nodes: List([mText])
});
const bl = Inline.create({
  key:"staging",
  isVoid: false,
  type: "span",
  nodes:  List([stagingText, tBlock, nBlock, mBlock])
});

// Add the plugin to your set of plugins...
const plugins = [
  AutoReplace({
    trigger: 'space',
    before: /(\.staging)/,
    transform: (transform, e, data, matches) => {
      const newTrans = transform.insertInline(bl).moveToRangeOf(tBlock).moveStart(2).moveEnd(-1);
      return newTrans;
    }
  })
]


const BLOCK_TAGS = {
  p: 'paragraph',
  span: 'span',
  div: 'div',
  li: 'list-item',
  ul: 'bulleted-list',
  ol: 'numbered-list',
  blockquote: 'quote',
  h1: 'heading-one',
  h2: 'heading-two',
}

const MARK_TAGS = {
  strong: 'bold',
  em: 'italic',
  u: 'underline',
  s: 'strikethrough',
  code: 'code'
}

const RULES = [
  {
    deserialize(el, next) {
      const block = BLOCK_TAGS[el.tagName]
      if (!block) return
      return {
        kind: 'block',
        type: block,
        nodes: next(el.children)
      }
    }, 
    serialize(el, next) { 

    }
  },
  {
    deserialize(el, next) {
      const mark = MARK_TAGS[el.tagName]
      if (!mark) return
      return {
        kind: 'mark',
        type: mark,
        nodes: next(el.children)
      }
    }
  }
]
const serializer = new Html({ rules: RULES });


const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
}, { terse: true })
function e(event, data, state) { 
  // const newTrans = state.transform().moveToRangeOf(nBlock).moveStart(2).moveEnd(-1);
  // console.log(newTrans)
}

// Define our app...
class MyEditor extends React.Component {

  // Set the initial state when the app is first constructed.
  state = {
    state: initialState,
    schema: {
      nodes: {
        'paragraph':     props => <p {...props.attributes}>{props.children}</p>,
        'span':          props => <span {...props.attributes}>{props.children}</span>,
        'div':           props => <div {...props.attributes}>{props.children}</div>,
        'list-item':     props => <li {...props.attributes}>{props.children}</li>,
        'bulleted-list': props => <ul {...props.attributes}>{props.children}</ul>,
        'numbered-list': props => <ol {...props.attributes}>{props.children}</ol>,
        'block-quote':   props => <blockquote {...props.attributes}>{props.children}</blockquote>,
        'heading-one':   props => <h1 {...props.attributes}>{props.children}</h1>,
        'heading-two':   props => <h2 {...props.attributes}>{props.children}</h2>,
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
    // state = state.transform().moveToRangeOf(nBlock).moveStart(2).moveEnd(-1).apply()
    console.log(state)
    this.setState({ state })
  }

  onKeyDown = (event, data, state) => {
    if (!event.ctrlKey) {
      switch (event.which) {
        case 48: {
          return e(event, data, state);
        }  
        case 49: {
          return e(event, data, state);
        } 
        case 50: {
          return e(event, data, state);
        } 
        case 51: {
          return e(event, data, state);
        } 
        case 52: {
          return e(event, data, state);
        } 
        case 53: {
          return e(event, data, state);
        } 
        case 54: {
          return e(event, data, state);
        } 
        case 55: {
          return e(event, data, state);
        } 
        case 56: {
          return e(event, data, state);
        } 
        case 57: {
          return e(event, data, state);
        } 
        default: {  
          break;
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
