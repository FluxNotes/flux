import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import { MenuItem } from 'material-ui/Menu';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {
    openNote = (note) => { 
        this.props.setFullAppState('searchSelectedItem', note)

        // this.props.setFullAppState("noteClosed", false);
        // this.props.setFullAppState('layout', "split");
        // this.props.setFullAppState('isNoteViewerVisible', true);
        // // Don't start saving until there is content in the editor
        // if (!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText) && this.props.documentText.length > 0) {
        //     if (Lang.isEqual(this.props.currentlyEditingEntryId, -1)) {
        //         this.saveEditorContentsToNewNote();
        //     } else {
        //         this.updateExistingNote();
        //     }
        // }
        // this.props.updateCurrentlyEditingEntryId(note.entryInfo.entryId);
        // // the lines below are duplicative
        // this.props.updateSelectedNote(note);
        // this.props.loadNote(note);

        // // If the note selected is an In-Progress note, switch to the context tray else use the clinical-notes view
        // if (isInProgressNote) {
        //     this.props.setFullAppState('isNoteViewerEditable', true);
        //     this.toggleView("context-tray");
        // } else {
        //     this.props.setFullAppState('isNoteViewerEditable', false);
        //     this.toggleView("clinical-notes");
        // }
    }

    render() { 
        const { suggestion, index, itemProps, highlightedIndex, selectedItem } = this.props;
        const isHighlighted = highlightedIndex === index;
        const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
        return (
            <MenuItem
                {...itemProps}
                selected={isHighlighted}
                component="div"
                onClick={() => this.openNote(suggestion.note)}
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
            >
                <div className="suggestion-label">
                    <span style={{display: "block"}}>{suggestion.date}</span>
                    <span style={{display: "block"}}>{suggestion.subject}</span>
                </div> 
                <span className="dividing-line"></span> 
                <span className="suggestion-text">{suggestion.contentSnapshot}</span> 
            </MenuItem>
        );
    }
}

SearchSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
    setFullAppState: PropTypes.func.isRequired,
};

export default SearchSuggestion;