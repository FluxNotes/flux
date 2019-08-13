import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TemplateOptionPreviewButton from './TemplateOptionPreviewButton';
import Lang from 'lodash';
import Modal from 'material-ui/Modal';
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
        console.log(content);
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

    openPreview = () => {
        console.log('sadfasdf');
        return (
            <div className="preview-modal">
                {this.state.modalContent};
            </div>
        );
    }

    handleModalClose = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { title } = this.props;
        return (
            <div className="template-option">
                <div className="template-title">
                    {title}
                </div>
                {this.renderDesignedBy()}
                <div> 
                    <TemplateOptionPreviewButton onClick={() => { console.log('hi') }} onMouseEnter={() => { this.setState({ modalContent: this.props.content, isModalOpen: true }); console.log(this.state); }} />
                </div>
                
                <Modal
                    open={this.state.isModalOpen}
                    onClose={this.handleModalClose}
                >
                    {this.openPreview()}
                </Modal>
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