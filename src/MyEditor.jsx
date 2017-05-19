// Import React!
import React from 'react'
import { Editor, Raw } from 'slate'
import AutoReplace from 'slate-auto-replace'

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

// Custom code block
function CodeNode(props) {
  return <pre {...props.attributes}><code>{props.children}</code></pre>
}

// Add the plugin to your set of plugins...
const plugins = [
  AutoReplace({
    trigger: 'space',
    before: /^(\.stage)$/,
    transform: (transform, e, data, matches) => {
      return transform.insertText("Staging Information: T_N_M_").wrapBlock({type: 'div'})
    }
  })
]

// Define our app...
class MyEditor extends React.Component {

  // Set the initial state when the app is first constructed.
  state = {
    state: initialState,
    schema: {
      nodes: {
        code: CodeNode
      }
    }
  }

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    this.setState({ state })
  }

  onKeyDown = (event, data, state) => {
     // Return with no changes if it's not the "`" key with cmd/ctrl pressed.
     if (event.which != 192 || !event.metaKey) return

     // Prevent the "`" from being inserted by default.
     event.preventDefault()

     // Otherwise, set the currently selected blocks type to "code".
     return state
       .transform()
       .setBlock('code')
       .apply()
   }

  // Render the editor.
  render = () => {
    return (
      <div className="MyEditor-root">
        <Editor
          state={this.state.state}
          onChange={this.onChange}
          plugins={plugins}

        />
      </div>
    )
  }

}

export default MyEditor;
