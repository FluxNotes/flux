// Import React!
import React from 'react'
import { Editor, Block, Inline, Raw, Text, Html } from 'slate'
import AutoReplace from 'slate-auto-replace'
import { List } from 'immutable'

// Styling
import './MyEditor.css';


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

// Custom staging styling block
function StageNode(props) {
  return <div id="staging" {...props.attributes}><p>{props.children}</p></div>
}

const stagingText = Text.createFromString('Staging information ');
const tText = Text.createFromString('T:_');
const tBlock = Inline.create({
  isVoid: false,  
  key: 'T-staging',
  type: 'div',
  nodes: List([tText])
});
const nText = Text.createFromString('N:_')
const nBlock = Inline.create({
  isVoid: false,  
  key: 'N-staging',
  type: 'div',
  nodes: List([nText])
});
const mText = Text.createFromString('M:_')
const mBlock = Inline.create({
  isVoid: false,  
  key: 'M-staging',
  type: 'div',
  nodes: List([mText])
});
const bl = Block.create({
  key:"staging",
  isVoid: false,
  type: "paragraph",
  nodes:  List([stagingText, tBlock, nBlock, mBlock])
});

// Add the plugin to your set of plugins...
const plugins = [
  AutoReplace({
    trigger: 'space',
    before: /(\.staging)/,
    transform: (transform, e, data, matches) => {
      const newTrans = transform.insertBlock(bl).extendToStartOf(tBlock);
      return newTrans;
    }
  })
]

const BLOCK_TAGS = {
  p: 'paragraph',
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

// const RULES = [
//   {
//     deserialize(el, next) {
//       const block = BLOCK_TAGS[el.tagName]
//       if (!block) return
//       return {
//         kind: 'block',
//         type: block,
//         nodes: next(el.children)
//       }
//     }
//   },
//   {
//     deserialize(el, next) {
//       const mark = MARK_TAGS[el.tagName]
//       if (!mark) return
//       return {
//         kind: 'mark',
//         type: mark,
//         nodes: next(el.children)
//       }
//     }
//   }
// ]
// const serializer = new Html({ rules: RULES })

// Define our app...
class MyEditor extends React.Component {

  // Set the initial state when the app is first constructed.
  state = {
    state: initialState,
    schema: {
      nodes: {
        'paragraph': props => <p {...props.attributes}>{props.children}</p>,
        'list-item': props => <li {...props.attributes}> {props.children} </li>,
        'bulleted-list': props => <ul {...props.attributes}> {props.children} </ul>,
        'numbered-list': props => <ol {...props.attributes}> {props.children} </ol>,
        'block-quote': props => <blockquote {...props.attributes}> {props.children} </blockquote>,
        'heading-one': props => <h1 {...props.attributes}> {props.children} </h1>,
        'heading-two': props => <h2 {...props.attributes}> {props.children} </h2>,
        'stage': StageNode
      },
      marks: { 
        'bold': props => <strong>{props.children}</strong>,
        'italic': props => <em>{props.children}</em>,
        'underline': props => <u>{props.children}</u>,
        'strikethrough': props => <del>{props.children}</del>,
        'code': props => <code>{props.children}</code>,
      }
    }
  }

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    this.setState({ state })
  }

  onKeyDown = (event, data, state) => {
    if (!event.ctrlKey) return

    // Return with no changes if it's not the "," key with cmd/ctrl pressed.
    switch (event.which) {
      // When "B" is pressed, add a "bold" mark to the text.
      case 66: {
        event.preventDefault()
        return state
          .transform()
          .toggleMark('bold')
          .apply()
      }
      case 65: {  
        // event.preventDefault()
        // const alternativeState =  serializer.deserialize(`<p>The Slate editor gives you <em>complete</em> control over the logic you can add.</p>
        // <p>In its simplest form, when representing plain text, Slate is a glorified <code>&laquo;textarea&raquo;</code>. But you can augment it to be much more than that.</p>
        // <p>Check out <a href="http://slatejs.org">http://slatejs.org</a> for examples!</p>`);

        // // Otherwise, set the currently selected blocks type to "code".
        // return alternativeState
        //   .transform()
        //   .insertTextByKey('3', 2,'there is something here')
        //   .apply();
        break;
      }
      default: { 

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
