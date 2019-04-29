import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TemplateOptionPreviewButton from './TemplateOptionPreviewButton';
import Lang from 'lodash';
import "./TemplateOption.css";

export default class TemplateOption extends Component {
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

    handleTemplateSelection = (e) => {
        const { insertTemplate, content, setInsertingTemplate } = this.props;
        e.preventDefault(); 
        insertTemplate(content);
        setInsertingTemplate(true);
    }

    render() {
        const { title } = this.props;
        return (
            <div className="template-option" onClick={this.handleTemplateSelection}>
                <div className="template-title">
                    {title}
                </div>
                {this.renderDesignedBy()}
                <TemplateOptionPreviewButton/>
            </div>
        );
    }
}

TemplateOption.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}