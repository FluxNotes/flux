import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import Tooltip from 'rc-tooltip';
import TextField from 'material-ui/TextField';

import 'rc-tooltip/assets/bootstrap.css';
import './ContextOptions.css'

export default class ContextOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            tooltipVisibility: 'visible'
        }
    }

    handleClick = (e, i) => {
        e.preventDefault();
        this.setState({ searchString: "", tooltipVisibility: 'hidden' });
        this.props.handleClick(i);
    }

    handleSearch = (value) => {
        this.setState({ searchString: value });
    }

    mouseLeave = () => {
        this.setState({ tooltipVisibility: 'hidden' })
    }

    mouseEnter = () => {
        this.setState({ tooltipVisibility: 'visible' })
    }

    render() {
        let context = this.props.context;
        if (Lang.isUndefined(context)) {
            // patient
            context = this.props.contextManager.getPatientContext();
        }

        let validShortcuts = this.props.shortcutManager.getValidChildShortcutsInContext(context);

        // count how many triggers we have
        let count = 0;
        validShortcuts.forEach((shortcut, i) => {
            count += this.props.shortcutManager.getTriggersForShortcut(shortcut, context).length;
        });
        const countBeforeSearch = count;

        // build our list of filtered triggers (only filter if we will be showing search bar)
        let triggers = [];
        count = 0;

        validShortcuts.forEach((shortcut, i) => {
            let groupName = this.props.shortcutManager.getShortcutGroupName(shortcut);
            this.props.shortcutManager.getTriggersForShortcut(shortcut, context).forEach((trigger, j) => {
                // If there's a search string to filter on, filter
                if (this.props.searchString.length === 0 || trigger.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) !== -1) {
                    let triggerDescription = !Lang.isNull(trigger.description) ? trigger.description : '';
                    triggers.push({"name": trigger.name, "description": triggerDescription, "group": i, "groupName": groupName });
                    count++;
                }
            });
            // Add keywords as well
            this.props.shortcutManager.getKeywordsForShortcut(shortcut, context).forEach((trigger, j) => {
                // If there's a search string to filter on, filter
                if (this.props.searchString.length === 0 || trigger.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) !== -1) {
                    let triggerDescription = !Lang.isNull(trigger.description) ? trigger.description : '';
                    triggers.push({"name": trigger.name, "description": triggerDescription, "group": i, "groupName": groupName });
                    count++;
                }
            });
        });

        // lets create a list of groups with associated shortcut triggers for each
        let groupList = [];
        let currentGroup = { group: "", triggers:[] };
        let countToShow = 0;
        let totalShown = 0;
        triggers.forEach((trigger, i) => {
            if (trigger.group !== currentGroup.group) {
                countToShow = 0;
                totalShown++;
                currentGroup = { "group": trigger.group, "groupName": trigger.groupName, "triggers": [ trigger ] };
                groupList.push(currentGroup);
            }
            else {
                // TODO: Add a dot dot dot to signal there are more to show, but that search is needed to view.
                if (countToShow === 5) return;

                countToShow++;
                totalShown++;
                currentGroup.triggers.push(trigger);
            }
        });

        // Return no section if there's nothing to show
        if (totalShown === 0) {
            return null;
        }

        // generates list of active triggers (triggers that have at least 1 shortcut)
        // used to bold the active triggers in the sidebar
        const activeContextTriggers = this.props.contextManager.getActiveContexts()
            .map((context) => ({ context, shortcuts: this.props.shortcutManager.getValidChildShortcutsInContext(context) }))
            .filter(({ shortcuts }) => shortcuts.length > 0)
            .map(({ context }) => context.initiatingTrigger);

        return (
            <section
                // className={''}
            >
                <div className='context-options-list'>
                    {/* Group child shortcuts with parentContext as header if this group doesn't have a groupName */}
                    {(context.metadata && this.props.shortcutManager.isShortcutAGroupName(context.metadata.id) && groupList.length > 0) && 
                        <div className={`context-options-header`}> {context.text} </div>
                    }
                    {/* Render all the shortcuts in each group */}
                    {groupList.map((groupObj, i) => {
                        return (
                        <div key={`group-${i}`}>
                            {/* Use group name if available */}
                            {groupObj.groupName != null &&
                                <div className="context-options-header">{groupObj.groupName}</div>
                            }

                            <div key={i}>
                                {groupObj.triggers.map((trigger, i) => {
                                    const largeTrigger = trigger.description.length > 100;
                                    const text = <span>{trigger.description}</span>
                                    const selected = activeContextTriggers.indexOf(trigger.name) > -1;

                                    return (
                                        <Tooltip
                                            key={trigger.name}
                                            overlayStyle={{'visibility': this.state.tooltipVisibility}}
                                            placement="left"
                                            overlayClassName={`context-panel-tooltip${largeTrigger ? ' large' : ''}`}
                                            overlay={text}
                                            destroyTooltipOnHide={true}
                                            mouseEnterDelay={0.5}
                                            onMouseEnter={this.mouseEnter}
                                            onMouseLeave={this.mouseLeave}
                                        >
                                            <div
                                                className={`context-option${selected ? ' selected' : ''}`}
                                                key={trigger.name}
                                                onClick={(e) => this.handleClick(e, trigger.name)}
                                            >
                                                {trigger.name}
                                            </div>
                                        </Tooltip>
                                    );
                                })}
                            </div>

                        </div>);
                    })}
                </div>
            </section>
        );
    }
}

ContextOptions.proptypes = {
    context: PropTypes.object,
    contextManager: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
}
