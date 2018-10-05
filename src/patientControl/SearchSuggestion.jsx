import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {

    renderSuggestionText() {
        const { suggestion } = this.props;
        const {inputValue, valueTitle, contentSnapshot, indices} = suggestion;
        const inputValueLowerCase = inputValue.toLowerCase();
        const fullText = `${valueTitle ? valueTitle + ': ' : ''}${contentSnapshot}`;
        const regex = new RegExp(inputValueLowerCase, "g");
        const matchesTitle = regex.exec(valueTitle.toLowerCase());
        const matchesContent = regex.exec(contentSnapshot.toLowerCase());
        let preText = '', highlightedText = '', postText = '';

        // If there are indices, we matched on an open note
        if (indices) {
            let preTextIdx = 0;
            if (indices[0] - 15 >= 0) preTextIdx = contentSnapshot.lastIndexOf(' ', indices[0]-15);
            const difference = indices[1]-indices[0]+1-inputValue.length;
            preText = valueTitle ? valueTitle + ': ' : '';
            preText += contentSnapshot.slice(preTextIdx, indices[0]);
            highlightedText = contentSnapshot.slice(indices[0], indices[1]+1-difference);
            postText = contentSnapshot.slice(indices[1]+1-difference);
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