// React imports
import React from 'react';
import {CompositeDecorator, Editor, EditorState} from 'draft-js';

// Styling
import 'draft-js/dist/Draft.css';
import './MyEditor.css';

const styles = {
  period: {
    color: 'rgba(98, 177, 254, 1.0)',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
};

// Summary: Returns the corresponsing dot-notation regular expression 
//          for finding a given element in text.  
// Args: elem, str: the string we are searching nfor
// Returns: RegExp object: the regular expression object that will find '.elem '.
const PERIOD_REGEX = (elem) => {
  // With space 
  // return new RegExp(`\.${elem}\\s`,"g");
  // Without space  
  return new RegExp(`\.${elem}`,"g");
}

// This is a lookup table containing all of the dot-notation strings 
// and their corresponding replacements. 
const lookupTable = {
  'stage': "Stage:_ with TMN scoring T_M_N_",
  'her2': "HER2 Status:_"
}
const allCases = Object.keys(lookupTable)

// How we should find any of the period elements. 
function periodStrategy(contentBlock, callback, contentState) {
  for (const eachCase of allCases) { 
      findWithRegex(PERIOD_REGEX(eachCase), contentBlock, callback);
  }
  changeContentState(contentState);
}

// Search the content block for the given regex.
function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function changeContentState(state) { 
  console.log(state.getSelectionBefore().getStartOffset());
  console.log(state.getSelectionAfter().getStartOffset());
}


// Turn the trigger into it's corresponding text
const determineText = (currentTrigger) => {
  return lookupTable[currentTrigger.decoratedText.split('.')[1].split(' ')[0]];
}

// Dot-notation span element to place when searched element is found.
const periodSpan = (props) => {
  console.log(props);
  console.log(props.children[0].props.text);
  props.children[0].props.text = determineText(props);
  props.children
  return (
    <span
      style={styles.period}
      data-offset-key={props.offsetKey}
    >

    {props.children}  
    </span>
  );
};

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    const compositeDecorator = new CompositeDecorator([
      {
        strategy: periodStrategy,
        component: periodSpan,
      },
    ]);
    this.state = {editorState: EditorState.createEmpty(compositeDecorator)};
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
    return (
      <div className="MyEditor-root">
        <Editor 
          editorState={this.state.editorState} 
          onChange={this.onChange} 
          ref="editor"
          spellCheck={true}
        />
      </div>
    );
  }
}

export default MyEditor;
