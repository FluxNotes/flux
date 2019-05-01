import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SnippetViewModeContent from './SnippetViewModeContent';
import ShortcutViewModeContent from './ShortcutViewModeContent';
import PlaceholderViewModeContent from './PlaceholderViewModeContent';
import './ContextTray.css';

export default class ContextTray extends Component {
    //these are the possible view mode constants
    SNIPPET_VIEW = 0;
    SHORTCUT_VIEW = 1;
    PLACEHOLDER_VIEW = 2;

    constructor(props) {
        super(props);
        const viewMode = this.SHORTCUT_VIEW;
        this.state = {
            // viewMode keeps track of which context is active
            // 0 when snippets are selected. 1 when Shortcuts is selected. 2 when Placholder is selected
            // In editor, viewMode is incremented by 1 for each context added (i.e @condition, #disease status)
            viewMode,
        };
    }

    // componentWillReceiveProps = (nextProps) => {
    //     // If show template view is true, set the view to template view, otherwise check if current view is template view. If the view is currently a template go to shortcut view, else leave the view as is
    //     // (ex. if in placeholder view, stay in placeholder view)
    //     const viewMode = nextProps.showTemplateView ? this.TEMPLATE_VIEW : (this.state.viewMode === this.TEMPLATE_VIEW ? this.SHORTCUT_VIEW : this.state.viewMode);
    //     this.setState ({ viewMode });
    // }

    handleSnippetSectionClick = () => {
        this.setState({
            viewMode: this.SNIPPET_VIEW
        });
    };

    handleShortcutSectionClick = () => {
        this.setState({
            viewMode: this.SHORTCUT_VIEW
        });
    };

    handlePlaceholderSectionClick = () => {
        this.setState({
            viewMode: this.PLACEHOLDER_VIEW
        });
    };

    handleShortcutClick = (contextTrayItem) => {
        this.props.updateContextTrayItemToInsert(contextTrayItem);
    }

    render() {
        const { viewMode } = this.state;
        const { contextManager, updateContextTrayItemToInsert, setInsertingTemplate, shortcutManager } = this.props;

        return (
            <div className="context-tray">
                <section>
                    <div className="view-mode-section-menu">
                        <div
                            className={`view-mode-section-item${
                                viewMode === this.SNIPPET_VIEW
                                    ? " selected"
                                    : ""
                                }`}
                            onClick={this.handleSnippetSectionClick}
                        >
                            Snippets
                        </div>

                        <div
                            className={`view-mode-section-item${
                                viewMode === this.SHORTCUT_VIEW
                                    ? " selected"
                                    : ""
                                }`}
                            onClick={this.handleShortcutSectionClick}
                        >
                            Shortcuts
                        </div>

                        <div
                            className={`view-mode-section-item${
                                viewMode === this.PLACEHOLDER_VIEW
                                    ? " selected"
                                    : ""
                                }`}
                            onClick={this.handlePlaceholderSectionClick}
                        >
                            Placeholders
                        </div>
                    </div>
                </section>

                {viewMode === this.SNIPPET_VIEW && (
                    <SnippetViewModeContent
                        onClick={updateContextTrayItemToInsert}
                        setInsertingTemplate={setInsertingTemplate}
                    />
                )}

                {viewMode === this.SHORTCUT_VIEW && (
                    <ShortcutViewModeContent
                        contextManager={contextManager}
                        onClick={updateContextTrayItemToInsert}
                        shortcutManager={shortcutManager}
                    />
                )}

                {viewMode === this.PLACEHOLDER_VIEW && (
                    <PlaceholderViewModeContent
                        onClick={this.handleShortcutClick}
                        placeholders={shortcutManager.getAllPlaceholderShortcuts()}
                    />
                )}
            </div>
        );
    }
}

ContextTray.propTypes = {
    contextManager: PropTypes.object.isRequired,
    updateContextTrayItemToInsert: PropTypes.func.isRequired,
    setInsertingTemplate: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    showTemplateView: PropTypes.bool.isRequired,
    updateShowTemplateView: PropTypes.func.isRequired
}
