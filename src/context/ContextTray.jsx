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

        this.state = {
            // viewMode keeps track of which context is active
            // 0 when Templates are selected. 1 when Patient is selected
            // In editor, viewMode is incremented by 1 for each context added (i.e @condition, #disease status)
            viewMode: this.SHORTCUT_VIEW
        };
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
                        onClick={onShortcutClicked}
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
    shortcutManager: PropTypes.object.isRequired
};
