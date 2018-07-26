import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TemplateViewModeContent from './TemplateViewModeContent';
import ShortcutViewModeContent from './ShortcutViewModeContent';
import PlaceholderViewModeContent from './PlaceholderViewModeContent';
import './ContextTray.css';

export default class ContextTray extends Component {
    //these are the possible view mode constants
    TEMPLATE_VIEW = 0;
    SHORTCUT_VIEW = 1;
    PLACEHOLDER_VIEW = 2;

    constructor(props) {
        super(props);
        const viewMode = this.props.showTemplateView ? this.TEMPLATE_VIEW : this.SHORTCUT_VIEW;
        this.state = {
            // viewMode keeps track of which context is active
            // 0 when Templates are selected. 1 when Shortcuts is selected. 2 when Placholder is selected
            // In editor, viewMode is incremented by 1 for each context added (i.e @condition, #disease status)
            viewMode,
        };
    }

    componentWillReceiveProps = (nextProps) => {
        // If show template view is true, set the view to template view, otherwise check if current view is template view. If the view is currently a template go to shortcut view, else leave the view as is
        // (ex. if in placeholder view, stay in placeholder view)
        const viewMode = nextProps.showTemplateView ? this.TEMPLATE_VIEW : (this.state.viewMode === this.TEMPLATE_VIEW ? this.SHORTCUT_VIEW : this.state.viewMode);
        this.setState ({ viewMode });
    }

    handleTemplateSectionClick = () => {
        this.setState({
            viewMode: this.TEMPLATE_VIEW
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
        console.log(contextTrayItem);
        this.props.updateShowTemplateView(false);  
        this.props.onShortcutClicked(contextTrayItem);
    }

    render() {
        const { viewMode } = this.state;
        const { contextManager, onShortcutClicked, patient, setInsertingTemplate, shortcutManager } = this.props;

        return (
            <div className="context-tray">
                <section>
                    <div className="view-mode-section-menu">
                        <div
                            className={`view-mode-section-item${
                                viewMode === this.TEMPLATE_VIEW
                                    ? " selected"
                                    : ""
                                }`}
                            onClick={this.handleTemplateSectionClick}
                        >
                            TEMPLATES
                        </div>

                        <div
                            className={`view-mode-section-item${
                                viewMode === this.SHORTCUT_VIEW
                                    ? " selected"
                                    : ""
                                }`}
                            onClick={this.handleShortcutSectionClick}
                        >
                            SHORTCUTS
                        </div>

                        <div
                            className={`view-mode-section-item${
                                viewMode === this.PLACEHOLDER_VIEW
                                    ? " selected"
                                    : ""
                                }`}
                            onClick={this.handlePlaceholderSectionClick}
                        >
                            PLACEHOLDERS
                        </div>
                    </div>
                </section>

                {viewMode === this.TEMPLATE_VIEW && (
                    <TemplateViewModeContent
                        onShortcutClicked={onShortcutClicked}
                        patient={patient}
                        setInsertingTemplate={setInsertingTemplate}
                    />
                )}

                {viewMode === this.SHORTCUT_VIEW && (
                    <ShortcutViewModeContent
                        contextManager={contextManager}
                        handleClick={this.handleShortcutClick}
                        onShortcutClicked={onShortcutClicked}
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
    onShortcutClicked: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    setInsertingTemplate: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    showTemplateView: PropTypes.bool.isRequired,
    updateShowTemplateView: PropTypes.func.isRequired
}