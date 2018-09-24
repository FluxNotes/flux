import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {

    renderSuggestionText() {
        const { suggestion } = this.props;
        const {inputValue, valueTitle, contentSnapshot} = suggestion;
        const inputValueLowerCase = inputValue.toLowerCase();
        const fullText = `${valueTitle ? valueTitle + ': ' : ''}${contentSnapshot}`;
        const fullTextLowerCase = fullText.toLowerCase();
        const indexOfMatch = fullTextLowerCase.indexOf(inputValueLowerCase);
        let preText = '', highlightedText = '', postText = '';
        if (indexOfMatch !== -1) {
            preText = fullText.slice(0, indexOfMatch);
            highlightedText = fullText.slice(indexOfMatch, preText.length + inputValue.length)
            postText = fullText.slice(preText.length + inputValue.length, fullText.length);
        } else {
            postText = fullText;
        }

        return (
            <div className="suggestion-text">
                <span>{preText}</span>
                <span className="highlightedInputValue">{highlightedText}</span>
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