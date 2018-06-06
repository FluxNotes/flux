import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';

import TemplateForm from '../forms/TemplateForm';
import ContextOptions from './ContextOptions';
import './ContextTray.css';

export default class ContextTray extends Component {
    //these are the possible view mode constants
    TEMPLATE_VIEW = 0;
    CONTEXT_VIEW = 1;
    constructor(props) {
        super(props);

        this.state = {
            // viewMode keeps track of which context is active
            // 0 when Templates are selected. 1 when Patient is selected
            // In editor, viewMode is incremented by 1 for each context added (i.e @condition, #disease status)
            viewMode: this.CONTEXT_VIEW,
            lastActiveContextCount: 0,

            templates: [
                { name: 'progress note', content: 'REASON FOR VISIT:\n@reason for next visit @condition\n\nHISTORY OF PRESENT ILLNESS:\n@HPI\n\nREVIEW OF SYSTEMS:\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\nASSESSMENT:\n\nPLAN:\n\n' },
                { name: 'op note', content: 'op note' },
                // { name: 'follow-up', content: 'FOLLOW UP:\nPatient is showing signs of @condition @condition\n\nMEDICATIONS:\n@medication\n\nProcedures:\n@procedure' },
                { name: 'consult note', content: '@patient presenting with ' }
            ]
        };
    }

    componentDidMount() {
        this.updateContextAndScroll();
    }

    componentDidUpdate(prevProps, prevState) {
        this.updateContextAndScroll();
    }

    // Get all contexts being used in the editor
    getActiveContexts() {
        let activeContexts = [];

        this.props.contextManager.getActiveContexts().slice(0).reverse().forEach((context, i) => {
            if (!Lang.isNull(context.getLabel())) {
                activeContexts.push(context);
            }
        });

        return activeContexts;
    }

    // Update context state and scroll to newest ContextOption section
    updateContextAndScroll = () => {
        let activeContexts = this.getActiveContexts();

        if (this.state.lastActiveContextCount !== activeContexts.length) {
            this.setState({
                currentContextIndex: activeContexts.length - 1,
                lastActiveContextCount: activeContexts.length
            }, () => {
                // scrolls to newest ContextOption section
                const newContextSection = findDOMNode(this.refs[`context-option-${this.state.currentContextIndex}`]);
                if (newContextSection) newContextSection.scrollIntoView();
            });
        }
    }

    insertTemplate = (i) => {
        this.props.onShortcutClicked(this.state.templates[i].content);
    }

    handleShortcutClick = (shortcut) => {
        this.props.onShortcutClicked(shortcut); // + shortcut.substring(0, 1)); no longer need trailing @ or #
    }

    handleTemplateSectionClick = () => this.setState({ viewMode: this.TEMPLATE_VIEW })
    handlePatientSectionClick = () => this.setState({ viewMode: this.CONTEXT_VIEW })

    findParentContext(activeContexts) {
        const currentContextIndex = this.state.currentContextIndex;
        if (activeContexts[currentContextIndex] == null) {
            return null;
        } else if (activeContexts[currentContextIndex].parentContext) {
            return activeContexts[currentContextIndex].parentContext;
        } else {
            return activeContexts[currentContextIndex];
        }
    }

    filterContextChildren(activeContexts, context) {
        if (context == null || context.children.length === 0) {
            return [];
        }
        
        return context.children.filter((childContext) => activeContexts.indexOf(childContext) > -1);
    }

    renderParentContexts(contexts) {
        if (this.state.viewMode !== this.TEMPLATE_VIEW) {
        const activeContextIndex = this.state.currentContextIndex;
        const activeContext = contexts[activeContextIndex];
        const parentContexts = contexts.filter((context) => context.parentContext == null);

        if (parentContexts.length === 0) {
            return null;
        }

        const selectedParentContext = this.findParentContext(contexts);
        const children = this.filterContextChildren(contexts, selectedParentContext);

        return (
            <div className="condition-contexts">
                <section>
                    {parentContexts.map((context, i) => {
                        const isActive = activeContext === context;
                        const contextIndex = contexts.indexOf(context);

                        if (!isActive && (selectedParentContext !== context)) {
                            return (
                                <div
                                    className={`section-item${isActive ? ' selected' : '-disabled'}`}
                                    key={`context-header-option-${contextIndex}`}
                                    id={`section-item-${context.text}`}
                                    title={context.text}
                                >
                                    {context.text}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className={`section-item${isActive ? ' selected' : ''}`}
                                    onClick={() => this.setState({ currentContextIndex: contextIndex })}
                                    key={`context-header-option-${contextIndex}`}
                                    id={`section-item-${context.text}`}
                                    title={context.text}
                                >
                                    <FontAwesome name={isActive ? 'angle-down' : 'angle-right'} fixedWidth />
                                    {context.text}
                                </div>
                            );
                        }


                    })}
                </section>

                {activeContext && activeContext === selectedParentContext &&
                    <ContextOptions
                        context={activeContext}
                        contextManager={this.props.contextManager}
                        handleClick={this.handleShortcutClick}
                        ref={`context-option-${this.state.viewMode}`}
                        shortcutManager={this.props.shortcutManager}
                    />
                }

                {this.renderChildrenContexts(contexts, children)}
            </div>
        );
    }};

    renderChildrenContexts(contexts, children) {
        if (children.length === 0) {
            return null;
        }

        const activeContextIndex = this.state.currentContextIndex;
        const activeContext = contexts[activeContextIndex];
        const activeChildIndex = children.indexOf(activeContext);
        const subchildren = children
            .map((child) => this.filterContextChildren(contexts, child))
            .reduce((memo, val) => memo.concat(val), []);

        return (
            <div>
                <section>
                    {children.map((context, i) => {
                        const contextIndex = contexts.indexOf(context);
                        const isActive = context === activeContext;

                        return (
                            <div
                                className={`section-item${isActive ? ' selected' : ''}`}
                                onClick={() => this.setState({ currentContextIndex: contextIndex })}
                                key={`context-child-option-${contextIndex}`}
                                title={context.text}
                            >
                                <FontAwesome name={isActive ? 'angle-down' : 'angle-right'} fixedWidth />
                                {context.text}
                            </div>
                        );
                    })}
                </section>

                {activeChildIndex > -1 &&
                    <ContextOptions
                        context={activeContext}
                        contextManager={this.props.contextManager}
                        handleClick={this.handleShortcutClick}
                        ref={`context-option-${this.state.viewMode}`}
                        shortcutManager={this.props.shortcutManager}
                    />
                }

                {this.renderChildrenContexts(contexts, subchildren)}
            </div>
        );
    }

    render() {
        const { viewMode, templates } = this.state;
        const activeContexts = this.getActiveContexts();

        return (
            <div className="context-tray">
                <section>
                    <div className="section-menu">
                    <div
                        className={`section-item${viewMode === this.TEMPLATE_VIEW ? ' selected' : ''}`}
                        onClick={this.handleTemplateSectionClick}
                    >
                        TEMPLATES
                    </div>                        

                    <div
                        className={`section-item${viewMode === this.CONTEXT_VIEW ? ' selected' : ''}`}
                        onClick={this.handlePatientSectionClick}
                    >
                        CONTEXT
                    </div>
                    </div>
                </section>

                {viewMode === this.TEMPLATE_VIEW &&
                    <section>
                        <TemplateForm
                            handleClick={this.insertTemplate}
                            heading=""
                            patient={this.props.patient}
                            templates={templates.map((item) => { return item.name })}
                        />
                    </section>
                }

                {viewMode === this.CONTEXT_VIEW &&
                    <ContextOptions
                        contextManager={this.props.contextManager}
                        handleClick={this.handleShortcutClick}
                        shortcutManager={this.props.shortcutManager}
                    />
                }

                {this.renderParentContexts(activeContexts)}
            </div>
        );
    }
}

ContextTray.proptypes = {
    contextManager: PropTypes.object.isRequired,
    onShortcutClicked: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
}
