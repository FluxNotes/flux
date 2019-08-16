import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TemplateOptionPreviewButton from './TemplateOptionPreviewButton';
import Lang from 'lodash';
import Popover from 'material-ui/Popover';
import FontAwesome from 'react-fontawesome';
import "./TemplateOption.css";

export default class TemplateOption extends Component {

    constructor() {
        super();
        this.state = {
            isPopoverOpen: false,
        };
    }

    // Prevent default event behavior, then insert this option's content via the insertTemplateFn
    handleTemplateSelection = (e) => {
        e.preventDefault();
        this.handlePopoverClose();
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

    handleClick = () => {
        this.setState({ isPopoverOpen: true });
    }

    handlePopoverClose = () => {
        this.setState({ isPopoverOpen: false });
    }

    // only returns a popover if the preview has content
    getPreviewButton = () => {
        if (!Lang.isEqual(this.props.content, "")) {
            return (
                <div>
                    <TemplateOptionPreviewButton onClick={this.handleClick} />
                    <Popover
                        open={this.state.isPopoverOpen}
                        onClose={this.handlePopoverClose}
                        classes={{ paper: 'popover-style' }}
                    >
                        <div className='popover-container'>
                            <FontAwesome className='fa-times clickable close' name='close-icon' onClick={this.handlePopoverClose} />
                            {this.formatText(this.props.content)}
                            <div className='choose-template clickable' onClick={this.handleTemplateSelection}> Choose this template </div>
                        </div>
                    </Popover>
                </div>

            );
        }
        return "";
    }

    // bolds all of the lines that come after a blank line to highlight the title lines
    formatText = (text) => {
        let prevString = "";
        return (
            text.split('\n').map(function (item, key) {
                let bold = "";
                if (Lang.isEqual(prevString, "")) {
                    bold = "bolded";
                }
                prevString = item;
                return (
                    <span className={bold} key={key}>
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