import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TemplateOption from "./TemplateOption";
import Button from '../elements/Button';
import SearchBar from '../elements/SearchBar';
import "./TemplateSelectionView.css";
import Lang from 'lodash';
import Fuse from 'fuse.js';

export default class TemplateSelectionView extends Component {
    constructor (props) {
        super(props);
        // TODO: Determine where this should come from in instance metadata
        this.templates = [
            {
                name: 'Physical exam',
                author: 'Dr. Mona341 Brown483',
                content: 'VITALS:\n @vitals\n\nSKIN:\n\nLYMPH:'
            },
            {
                name: 'Follow-up',
                author: 'Dr. Mona341 Brown483',
                content: 'REASON FOR VISIT:\n@patient following up on @condition on @date of visit. @reason for next visit.\n\nONCOLOGY HISTORY:\n@ONCOHIST\n\nHISTORY OF PRESENT ILLNESS:\n\n\nREVIEW OF SYSTEMS:\n@ROS\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\n\nASSESSMENT:\n\n\nPLAN:\n\n'
            },
            {
                name: 'Initial consult',
                author: 'Dr. Mona341 Brown483',
                content: 'REASON FOR VISIT:\n@patient presenting with @condition for initial consult on @date of visit. @reason for next visit. @referred by.\n\nHISTORY OF PRESENT ILLNESS:\n\n\nREVIEW OF SYSTEMS:\n@ROS\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\n\nASSESSMENT:\n\n\nPLAN:\n\n'
            },
            {
                name: 'Testing template',
                author: 'Dr. Mona341 Brown483',
                content: 'FOLLOW UP:\nPatient is showing signs of @condition @ONCOHIST @condition @ONCOHIST\n\nMEDICATIONS:\n@medication\n\nPROCEDURES:\n@procedure'
            }
        ];
        // TODO: Make the generation of this fuse dynamic once templates are moved into app/user preferences
        const fuseOptions = {
            shouldSort: true,
            tokenize: true,
            findAllMatches: true,
            threshold: 0.3,
            location: 0,
            distance: 19,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "name"
                // TODO: Evaluate adding other keys
            ]
        };
        this.templateFuse = new Fuse(this.templates,fuseOptions);
        // This is the value used  when controlling the search component
        this.state = {
            templateFilterString: ""
        };
    }

    updateTemplateFilterString = (templateFilterString) => {
        this.setState({
            templateFilterString
        });
    }

    // Insert the content of the template as you would a shortcut
    insertTemplate = (content) => {
        const { updateContextTrayItemToInsert, updateShowTemplateView } = this.props;
        // We should communicate to the contextTray that "content" should be inserted
        updateContextTrayItemToInsert(content);
        // We should not be showing templates anymore
        updateShowTemplateView(false);
    }

    cancelTemplate = () => {
        const { updateShowTemplateView, deleteSelectedNote } = this.props;
        // We should not be showing templates anymore
        updateShowTemplateView(false);
        deleteSelectedNote();
    }

    getTemplatesToDisplay() {
        if (Lang.isEmpty(this.state.templateFilterString)) {
            // if there's no search string, return everything
            return this.templates;
        } else {
            // Else, use our Fuse to search for relevant templates
            return this.templateFuse.search(this.state.templateFilterString);
        }
    }

    render() {
        return (
            <div id="template-option-container">
                <div id="new-note-container">
                    <TemplateOption
                        title="Blank Note"
                        author=""
                        content=""
                        insertTemplate={this.insertTemplate}
                    />
                </div>
                <div id="template-search-container">
                    <SearchBar
                        label="Search templates..."
                        searchString={this.state.templateFilterString}
                        handleSearch={this.updateTemplateFilterString}
                    />
                </div>
                <div id="available-templates-container">
                    {this.getTemplatesToDisplay().map((template) => {
                        return (
                            <TemplateOption
                                key={template.name}
                                author={template.author}
                                content={template.content}
                                title={template.name}
                                insertTemplate={this.insertTemplate}
                            />
                        );
                    })}
                </div>
                <div id="cancel-btn-container">
                    <Button
                        onClick={this.cancelTemplate}
                        id="cancel-btn"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        );
    }
}

TemplateSelectionView.propTypes = {
    deleteSelectedNote: PropTypes.func.isRequired,
    updateContextTrayItemToInsert: PropTypes.func.isRequired,
    updateShowTemplateView: PropTypes.func.isRequired,
};