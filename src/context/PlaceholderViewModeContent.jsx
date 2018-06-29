import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlaceholderViewModeContent extends Component {
    handleClick(e, placeholderText) {
        const { onClick } = this.props;

        e.preventDefault();
        onClick(placeholderText);
    }

    renderPlaceholder(placeholder) {
        const placeholderText = `<${placeholder.name}>`;

        return (
            <div
                className="context-option"
                key={placeholder.name}
                onClick={(e) => this.handleClick(e, placeholderText)}
            >
                {placeholderText}
            </div>
        );
    }

    render() {
        const { placeholders } = this.props;

        return (
            <div>
                {placeholders.map((placeholder) => {
                    return this.renderPlaceholder(placeholder);
                })}
            </div>
        );
    }
}

PlaceholderViewModeContent.propTypes = {
    onClick: PropTypes.func.isRequired,
    placeholders: PropTypes.array.isRequired,
};
