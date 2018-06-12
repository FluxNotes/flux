import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {
    render() { 
        const { suggestion} = this.props;

        const fullSnapshot = suggestion.contentSnapshot;
        const inputValue = suggestion.inputValue;
        // Lowercase versions for index finding
        const fullSnapshotLowerCase = fullSnapshot.toLowerCase();
        const inputValueLowerCase = inputValue.toLowerCase();
        const indexOfMatch = fullSnapshotLowerCase.indexOf(inputValueLowerCase);
        // Slice original copies for highlighting
        const preText = fullSnapshot.slice(0, indexOfMatch);
        const highlightedText = fullSnapshot.slice(indexOfMatch, preText.length + inputValue.length)
        const postText = fullSnapshot.slice(preText.length + inputValue.length, fullSnapshot.length);
        
        let suggestionText = '';
        if(suggestion.matchedOn === "contentSnapshot") { 
            suggestionText = (
                <div className="suggestion-text">
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                </div>
            )
        } else { 
            suggestionText = (
                <span className="suggestion-text">{suggestion.contentSnapshot}</span> 
            );
        }
        return (
            <div className="suggestion-item">
                <div className="suggestion-label">
                        <span className={"label-content " + (suggestion.matchedOn === "date" ? "highlightedInputValue" : "")}>{suggestion.date}</span>
                        <span className={"label-content " + (suggestion.matchedOn === "subject" ? "highlightedInputValue" : "")}>{suggestion.subject}</span>
                        <span className={"label-content " + (suggestion.matchedOn === "hospital" ? "highlightedInputValue" : "")}>{suggestion.hospital}</span>
                </div> 
                <span className="dividing-line"></span>
                {suggestionText} 
            </div>
        );
    }
}

SearchSuggestion.propTypes = {
    itemProps: PropTypes.object,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default SearchSuggestion;