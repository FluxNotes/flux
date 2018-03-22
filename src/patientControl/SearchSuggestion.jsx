import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import { MenuItem } from 'material-ui/Menu';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {
    openNote = (note) => { 
        this.props.setFullAppState('searchSelectedItem', note)
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
                    height: "100%",
                }}
            >
                <div className="suggestion-label">
                    <span style={{display: "block", margin: "0"}}>{suggestion.date}</span>
                    <span style={{display: "block", margin: "0"}}>{suggestion.subject}</span>
                    <span style={{display: "block", margin: "0"}}>{suggestion.hospital}</span>
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