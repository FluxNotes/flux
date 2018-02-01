import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Lang from 'lodash';

import TemplateForm from '../forms/TemplateForm';
import ContextOptions from './ContextOptions';
import './ContextTray.css';

export default class ContextTray extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            lastActiveContextCount: 0,
            templates: [
                { name: 'progress note', content: 'REASON FOR VISIT:\n@reason for next visit @condition[[Invasive ductal carcinoma of breast]]\n\nHISTORY OF PRESENT ILLNESS:\n@HPI\n\nREVIEW OF SYSTEMS:\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\nASSESSMENT:\n\nPLAN:\n\n' },
                { name: 'op note', content: 'op note' },
                { name: 'follow-up', content: 'follow up' },
                { name: 'consult note', content: '@patient presenting with ' }
            ]
        };
    }

    componentDidUpdate(prevProps, prevState) {
        let activeContexts = this.getActiveContexts();

        if (this.state.lastActiveContextCount !== activeContexts.length) {
            this.setState({
                value: activeContexts.length + 1,
                lastActiveContextCount: activeContexts.length
            }, () => {
                // scrolls to newest ContextOption section
                const newContextSection = findDOMNode(this.refs[`context-option-${this.state.value - 2}`]);
                if (newContextSection) newContextSection.scrollIntoView();
            });
        }
    }

    getActiveContexts() {
        let activeContexts = [];

        this.props.contextManager.getActiveContexts().slice(0).reverse().forEach((context, i) => {
            if (!Lang.isNull(context.getLabel())) {
                activeContexts.push(context);
            }
        });

        return activeContexts;
    }

    insertTemplate = (i) => {
        this.props.onShortcutClicked(this.state.templates[i].content);
    }

    handleShortcutClick = (shortcut) => {
        this.props.onShortcutClicked(shortcut); // + shortcut.substring(0, 1)); no longer need trailing @ or #
    }

    handleTemplateSectionClick = () => this.setState({ value: 0 })
    handlePatientSectionClick = () => this.setState({ value: 1 })

    render() {
        const { value, templates } = this.state;
        const activeContexts = this.getActiveContexts();

        return (
            <div className="context-tray">
                <section>
                    <div
                        className={`section-item${value === 0 ? ' selected' : ''}`}
                        onClick={this.handleTemplateSectionClick}
                    >
                        Templates
                    </div>

                    <div
                        className={`section-item${value > 0 ? ' selected' : ''}`}
                        onClick={this.handlePatientSectionClick}
                    >
                        Patient
                    </div>
                </section>

                {value === 0 &&
                    <section>
                        <TemplateForm
                            patient={this.props.patient}
                            heading=""
                            templates={templates.map((item) => { return item.name })}
                            handleClick={this.insertTemplate}
                        />
                    </section>
                }

                {value > 0 &&
                    <ContextOptions
                        contextManager={this.props.contextManager}
                        shortcutManager={this.props.shortcutManager}
                        handleClick={this.handleShortcutClick}
                    />
                }

                {value > 0 && activeContexts.map((context, i) =>
                    <ContextOptions
                        key={i}
                        ref={`context-option-${i}`}
                        contextManager={this.props.contextManager}
                        shortcutManager={this.props.shortcutManager}
                        handleClick={this.handleShortcutClick}
                        context={context}
                    />
                )}
            </div>
        );
    }
}

ContextTray.proptypes = {
    ref: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    onShortcutClicked: PropTypes.func.isRequired
}
