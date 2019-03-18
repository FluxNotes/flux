import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import './SearchSuggestion.css';

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class SearchSuggestion extends React.Component {

    renderSuggestionText() {
        const { suggestion } = this.props;
        const {inputValue, valueTitle, contentSnapshot, indices} = suggestion;
        const inputValueLowerCase = inputValue.toLowerCase();
        const fullText = `${valueTitle ? valueTitle + ': ' : ''}${contentSnapshot}`;
        const regex = new RegExp(escapeRegExp(inputValueLowerCase), "g");
        const matchesTitle = regex.exec(valueTitle.toLowerCase());
        const matchesContent = regex.exec(contentSnapshot.toLowerCase());
        let preText = '', highlightedText = '', postText = '';

        // If there are indices, we matched on an open note
        if (indices) {
            let preTextIdx = 0;
            if (indices[0] - 15 >= 0) preTextIdx = contentSnapshot.lastIndexOf(' ', indices[0]-15);
            preText = valueTitle ? valueTitle + ': ' : '';
            preText += contentSnapshot.slice(preTextIdx, indices[0]);
            highlightedText = contentSnapshot.slice(indices[0], indices[1]+1);
            postText = contentSnapshot.slice(indices[1]+1);
        } else if (matchesTitle) {
            preText = '';
            highlightedText = valueTitle;
            postText = `: ${contentSnapshot}`;
        } else if (matchesContent) {
            preText = valueTitle ? valueTitle + ': ' : '' + contentSnapshot.slice(0, matchesContent.index);
            highlightedText = contentSnapshot.slice(matchesContent.index, matchesContent.index + inputValue.length);
            postText = contentSnapshot.slice(matchesContent.index + inputValue.length, contentSnapshot.length);
        } else {
            postText = fullText;
        }

        // Append relevant date to the search suggestion if it exists and the suggestion is not already a date
        if (suggestion.date && suggestion.valueTitle !== 'Date') {
            postText += ` (${suggestion.date})`;
        }

        return (
            <div className="suggestion-text">
                <span>{preText}</span>
                <span className="highlighted-input-value">{highlightedText}</span>
                <span>{postText}</span>
            </div>
        )
    }

    renderLabel = () => {
        const { suggestion } = this.props;
   
        let suggestionLabel = '';
        if (suggestion.source === 'structuredData') {
            const subsection = suggestion.subsection.length > 0 ? ` > ${suggestion.subsection}` : '';
            suggestionLabel = (
                <div className="suggestion-label">
                    <span className={"label-content"}>{suggestion.section + subsection}</span>
                </div> 
            );
        } else if (suggestion.source === 'clinicalNote') {
            const date = <span>{suggestion.date + ` `}</span>;
            const subject = <span>{suggestion.subject + ` `}</span>;

            suggestionLabel = (
                <div className="suggestion-label">
                    <span className={"label-content"}>
                        {suggestion.section === "Open Note" ? "Open Note > " : ''}
                        {subject}
                        {date}
                    </span>
                </div>
            );
        }

        return suggestionLabel;
    }

    render() { 
        return (
            <div className="suggestion-item">
                {this.renderLabel()}
                {this.renderSuggestionText()}
            </div>
        );
    }
    
}

SearchSuggestion.propTypes = {
    itemProps: PropTypes.object,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default SearchSuggestion;