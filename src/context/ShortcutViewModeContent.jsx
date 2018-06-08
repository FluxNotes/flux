import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Lang from 'lodash';

import ContextOptions from './ContextOptions';
import ShortcutSearch from './ShortcutSearch';
import './ShortcutViewModeContent.css';

export default class ShortcutViewModeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastActiveContextCount: 0,
            searchString: '',
        };
    }

    componentDidMount() {
        this.updateContextAndScroll();
    }

    componentDidUpdate(prevProps, prevState) {
        this.updateContextAndScroll();
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
                if (newContextSection && newContextSection.scrollIntoView) {
                    // console.log(newContextSection) 
                    newContextSection.scrollIntoView(false);
                }
            });
        }
    }

    handleSearch = (value) => {
        this.setState({ 
            searchString: value 
        });
    }

    handleShortcutClick = (shortcut) => {
        this.props.onShortcutClicked(shortcut); // + shortcut.substring(0, 1)); no longer need trailing @ or #
    }

    // Get all contexts being used in the editor
    getActiveContexts() {
        let activeContexts = [];

        this.props.contextManager.getActiveContexts().forEach((context, i) => {
            if (!Lang.isNull(context.getLabel())) {
                activeContexts.push(context);
            }
        });

        return activeContexts;
    }

    renderAllActiveContexts = (activeContexts) => { 
        if (activeContexts.length === 0) {
            return null;
        } else { 
            // const activeContextIndex = this.state.currentContextIndex;
            // const activeContext = activeContexts[activeContextIndex];
            const listOfContextOptions = activeContexts.map((context, i) => { 
                // const contextIndex = activeContexts.indexOf(context);
                return (
                    <ContextOptions
                        key={`context-options-list-${i}`}
                        context={context}
                        contextManager={this.props.contextManager}
                        className="each-context"
                        searchString={this.state.searchString}
                        handleClick={this.handleShortcutClick}
                        ref={`context-option-${i}`}
                        shortcutManager={this.props.shortcutManager}
                    />
                )
            })
            // Render the options for the context:
            return (
                <div>
                    {listOfContextOptions}
                </div>
            );
        }
    }

    render() {
        const activeContexts = this.getActiveContexts();
        return (
            <div>
                <ShortcutSearch
                    currentSearchString={this.state.searchString}
                    handleSearch={this.handleSearch}
                    />
                {this.renderAllActiveContexts(activeContexts)}
                <ContextOptions
                    searchString={this.state.searchString}
                    contextManager={this.props.contextManager}
                    handleClick={this.handleShortcutClick}
                    shortcutManager={this.props.shortcutManager}
                />
            </div>
        );
    }
}

ShortcutViewModeContent.proptypes = {
    contextManager: PropTypes.object.isRequired,
    onShortcutClicked: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
}
