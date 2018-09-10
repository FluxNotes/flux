import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {

    renderSuggestionText() {
        const { suggestion} = this.props;
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
        if (suggestion.matchedOn === "contentSnapshot" && suggestion.source === 'clinicalNote') {
            suggestionText = (
                <div className="suggestion-text">
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                </div>
            )
        } else if(suggestion.matchedOn === "contentSnapshot" && suggestion.source === 'structuredData') { 
            let title = suggestion.valueTitle.length > 0 ? `${suggestion.valueTitle} > ` : '';
            suggestionText = (
                <div className="suggestion-text">
                    <span>{title}</span>
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                </div>
            )
        } else if (suggestion.matchedOn === "valueTitle"){ 
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
                    <span>{' > '}</span>
                    <span>{suggestion.contentSnapshot}</span>
                </div>
            )
        } else if (suggestion.matchedOn === "section" || suggestion.matchedOn === "subsection"){ 
            let title = suggestion.valueTitle.length > 0 ? `${suggestion.valueTitle} > ` : '';
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
        const { suggestion} = this.props;
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
            let date = <span>{suggestion.date + ` `}</span>;
            let subject = <span>{suggestion.subject + ` `}</span>;
            let hospital = <span>{suggestion.hospital + ` `}</span>;
            if(suggestion.matchedOn === "date"){
                const dateLowerCase = suggestion.date.toLowerCase();
                const indexOfMatch = dateLowerCase.indexOf(inputValueLowerCase);
                const preText = suggestion.date.slice(0, indexOfMatch);
                const highlightedText = suggestion.date.slice(indexOfMatch, preText.length + inputValue.length);
                const postText = suggestion.date.slice(preText.length + inputValue.length, suggestion.date.length);
                date = (
                    <span>
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText + ` `}</span>
                    </span>
                );
            } else if(suggestion.matchedOn === "subject"){
                const subjectLowerCase = suggestion.subject.toLowerCase();
                const indexOfMatch = subjectLowerCase.indexOf(inputValueLowerCase);
                const preText = suggestion.subject.slice(0, indexOfMatch);
                const highlightedText = suggestion.subject.slice(indexOfMatch, preText.length + inputValue.length);
                const postText = suggestion.subject.slice(preText.length + inputValue.length, suggestion.subject.length);
                subject = (
                    <span>
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText + ` `}</span>
                    </span>
                );
            } else if(suggestion.matchedOn === "hospital"){
                const hospitalLowerCase = suggestion.hospital.toLowerCase();
                const indexOfMatch = hospitalLowerCase.indexOf(inputValueLowerCase);
                const preText = suggestion.hospital.slice(0, indexOfMatch);
                const highlightedText = suggestion.hospital.slice(indexOfMatch, preText.length + inputValue.length);
                const postText = suggestion.hospital.slice(preText.length + inputValue.length, suggestion.hospital.length);
                hospital = (
                    <span>
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                    </span>
                );
            }

            suggestionLabel = (
                <div className="suggestion-label">
                    <span className={"label-content"}>
                        {date}
                        {subject}
                        {hospital}
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