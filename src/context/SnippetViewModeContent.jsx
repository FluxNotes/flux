import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SnippetViewModeContent.css'

export default class SnippetViewModeContent extends Component {

    // These don't need to be stored as state since they're not being updated
    snippets = [
        { name: 'Disease Status', content: '#disease status is #status based on #reasons #as of #date' },
    ];

    // Insert the content of the template as you would a shortcut
    insertSnippet = (snippet) => {
        // Insert this snippets content
        this.props.onClick(snippet.content);
        // Set inserting template to be true - enables picklist to be open
        this.props.setInsertingTemplate(true);
    }

    // Just render the form for the snippets; if additional information was to rendered, we would do it here.
    render() {
        return (
            <div>
                {this.snippets.map((snippet, index) => {
                    return (
                        <div
                            className="snippet"
                            key={snippet.name}
                            onClick={(e) => this.insertSnippet(snippet)}
                        >
                            {snippet.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}

SnippetViewModeContent.propTypes = {
    onClick: PropTypes.func.isRequired,
    setInsertingTemplate: PropTypes.func.isRequired,
}
