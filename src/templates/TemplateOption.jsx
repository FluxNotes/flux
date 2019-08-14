import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TemplateOptionPreviewButton from './TemplateOptionPreviewButton';
import Lang from 'lodash';
import Tooltip from 'material-ui/Tooltip';
import "./TemplateOption.css";

export default class TemplateOption extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            modalContent: "",
        };

    }
    // Prevent default event behavior, then insert this option's content via the insertTemplateFn
    handleTemplateSelection = (e) => {
        e.preventDefault();
        const { insertTemplate, content } = this.props;
        insertTemplate(content);
    }

    renderDesignedBy() {
        const { author } = this.props;
        if (Lang.isEmpty(author)) {
            return null;
        } else {
            return (
                <div className="template-author">
                    Authored By
                    <div className="template-author">
                        {author}
                    </div>
                </div>
            );
        }
    }

    getPreviewButton = () => {
        if (!Lang.isEqual(this.props.content, "")) {
            return (
                <Tooltip
                    title={this.formatText(this.props.content)}
                    classes={{ tooltip: 'preview-tooltip' }}
                >
                    <div>
                        <TemplateOptionPreviewButton />
                    </div>
                </Tooltip>
            );
        }
        return "";
    }

    formatText = (text) => {
        return (
            text.split('\n').map(function (item, key) {
                return (
                    <span key={key}>
                        {item}
                        <br />
                    </span>
                );
            })
        );
    }

    handleModalClose = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { title } = this.props;
        return (
            <div className="template-option" onClick={this.handleTemplateSelection}>
                <div className="template-title">
                    {title}
                </div>
                {this.renderDesignedBy()}
                {this.getPreviewButton()}
            </div>
        );
    }
}

TemplateOption.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    insertTemplate: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};