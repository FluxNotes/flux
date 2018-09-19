import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {

    renderSuggestionText() {
        const { suggestion } = this.props;
        const fullSnapshot = suggestion.contentSnapshot;
        const inputValue = suggestion.inputValue;
        // Lowercase versions for index finding
        const fullSnapshotLowerCase = fullSnapshot.toLowerCase();
        const inputValueLowerCase = inputValue.toLowerCase();
        let indexOfMatch = fullSnapshotLowerCase.indexOf(inputValueLowerCase);
        // Slice original copies for highlighting
        let preText = fullSnapshot.slice(0, indexOfMatch);
        let highlightedText = fullSnapshot.slice(indexOfMatch, preText.length + inputValue.length)
        let postText = fullSnapshot.slice(preText.length + inputValue.length, fullSnapshot.length);

        let suggestionText = '';
        if (suggestion.matchedOn === "contentSnapshot") {
            let title = suggestion.valueTitle.length > 0 ? `${suggestion.valueTitle}: ` : '';
            suggestionText = (
                <div className="suggestion-text">
                    <span>{title}</span>
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                </div>
            )
        } else if (suggestion.matchedOn === "valueTitle") {
            let valueTitleLowerCase = suggestion.valueTitle.toLowerCase();
            indexOfMatch = valueTitleLowerCase.indexOf(inputValueLowerCase);
            preText = suggestion.valueTitle.slice(0, indexOfMatch);
            highlightedText = suggestion.valueTitle.slice(indexOfMatch, preText.length + inputValue.length);
            postText = suggestion.valueTitle.slice(preText.length + inputValue.length, suggestion.valueTitle.length);
            suggestionText = (
                <div className="suggestion-text">
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                    <span>{': '}</span>
                    <span>{suggestion.contentSnapshot}</span>
                </div>
            )
        } else if (suggestion.matchedOn === "section" || suggestion.matchedOn === "subsection") {
            let title = suggestion.valueTitle.length > 0 ? `${suggestion.valueTitle}: ` : '';
            suggestionText = (
                <div className="suggestion-text">
                    {title + suggestion.contentSnapshot}</div>
            );
        } else {
            suggestionText = (
                <div className="suggestion-text">{suggestion.contentSnapshot}</div>
            );
        }
        return suggestionText;
    }

    renderLabel = () => {
        const { suggestion } = this.props;
        const inputValue = suggestion.inputValue;
        const inputValueLowerCase = inputValue.toLowerCase();
   
        let suggestionLabel = '';
        if (suggestion.source === 'structuredData') {

            if(suggestion.matchedOn === "section") {
                const sectionLowerCase = suggestion.section.toLowerCase();
                const indexOfMatch = sectionLowerCase.indexOf(inputValueLowerCase);
                const preText = suggestion.section.slice(0, indexOfMatch);
                const highlightedText = suggestion.section.slice(indexOfMatch, preText.length + inputValue.length);
                const postText = suggestion.section.slice(preText.length + inputValue.length, suggestion.section.length);
                const subsection = suggestion.subsection.length > 0 ? ` > ${suggestion.subsection}` : '';
                suggestionLabel = (
                    <div className="suggestion-label">
                        <span className={"label-content"}>  
                            <span>{preText}</span>
                            <span className="highlightedInputValue">{highlightedText}</span>
                            <span>{postText}</span>
                         {subsection}</span>
                    </div> 
                );
            }
            else if(suggestion.matchedOn === "subsection") {
                const subsectionLowerCase = suggestion.subsection.toLowerCase();
                const indexOfMatch = subsectionLowerCase.indexOf(inputValueLowerCase);
                const preText = suggestion.subsection.slice(0, indexOfMatch);
                const highlightedText = suggestion.subsection.slice(indexOfMatch, preText.length + inputValue.length);
                const postText = suggestion.subsection.slice(preText.length + inputValue.length, suggestion.subsection.length);
                suggestionLabel = (
                    <div className="suggestion-label">
                        <span className={"label-content"}>{suggestion.section + ` > `}
                            <span>{preText}</span>
                            <span className="highlightedInputValue">{highlightedText}</span>
                            <span>{postText}</span>
                        </span>
                    </div> 
                );
            } else {
                const subsection = suggestion.subsection.length > 0 ? ` > ${suggestion.subsection}` : '';
                suggestionLabel = (
                <div className="suggestion-label">
                    <span className={"label-content"}>{suggestion.section + subsection}</span>
                </div> 
                );
            }
            
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