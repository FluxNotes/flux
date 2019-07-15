import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import Tooltip from 'rc-tooltip';

import 'rc-tooltip/assets/bootstrap.css';
import './ContextOptions.css';

export default class ContextOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            tooltipVisibility: 'visible',
            triggers: []
        };
        this.props.contextManager.subscribe(this, this.newContext);
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        this.newContext();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.context !== this.props.context || nextProps.searchString !== this.props.searchString) {
            this.newContext();
        }
    }

    handleClick = (e, trigger) => {
        e.preventDefault();
        this.setState({ searchString: "", tooltipVisibility: 'hidden' });
        this.props.handleClick(trigger);
    }

    handleSearch = (value) => {
        this.setState({ searchString: value });
    }

    mouseLeave = () => {
        this.setState({ tooltipVisibility: 'hidden' });
    }

    mouseEnter = () => {
        this.setState({ tooltipVisibility: 'visible' });
    }

    renderGroup = (groupObj, i, parentContext) => {
        return (
            <div key={`group-${i}`}>
                {/* Use group name if available */}
                {!Lang.isUndefined(groupObj.groupName) &&
                    <div
                        className="context-options-header"
                        title={groupObj.groupName}
                    >
                        {capitalizeFirstLetter(parentContext.getDisplayText())} - {groupObj.groupName}
                    </div>
                }

                <div key={i}>
                    {groupObj.triggers.map((trigger, i) => {
                        const largeTrigger = trigger.description.length > 100;
                        const text = <span>{trigger.description}</span>;
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
                                    className="context-option"
                                    key={trigger.name}
                                    onClick={(e) => {
                                        // HandleClick expects the trigger name, not the trigger itself
                                        this.handleClick(e, trigger.name);
                                    }}
                                >
                                    {trigger.name}
                                </div>
                            </Tooltip>
                        );
                    })}
                </div>

            </div>
        );
    }

    getCurrentContext() {
        let context = this.props.context;
        if (Lang.isUndefined(context)) {
            context = this.props.contextManager.getPatientContext();
        }
        return context;
    }

    newContext = () => {
        if (!this._isMounted) return;
        let context = this.getCurrentContext();
        this.validShortcuts = this.props.shortcutManager.getValidChildShortcutsInContext(context);

        // build our list of filtered triggers (only filter if we will be showing search bar)
        let triggers = [];
        this.validShortcuts.forEach((shortcutId, i) => {
            let groupName = this.props.shortcutManager.getShortcutGroupName(shortcutId);
            let metadata = this.props.shortcutManager.getShortcutMetadata(shortcutId);
            const triggersForShortcut = this.props.shortcutManager.getTriggersForShortcut(shortcutId, context, this.props.searchString);
            triggersForShortcut.then((result) => {
                result.forEach((trigger, j) => {
                    if (!this._isMounted) return;
                    let triggerDescription = !Lang.isNull(trigger.description) ? trigger.description : '';
                    triggers.push({"name": trigger.name, "description": triggerDescription, "group": i, "groupName": groupName, "shortcut": shortcutId, "definition": metadata });
                    this.setState({ triggers });
                });

            });
        });
    }

    render() {
        let context = this.getCurrentContext();
        // lets create a list of groups with associated shortcut triggers for each
        let groupList = [];
        let currentGroup = { group: "", triggers: [] };
        let countToShow = 0;
        let totalShown = 0;
        this.state.triggers.forEach((trigger, i) => {
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

        const validShortcutMetadata = this.validShortcuts
            .map((shortcutId) => this.props.shortcutManager.getShortcutMetadata(shortcutId));

        const isCurrentContextAGroupName = (
            // Does the context not have metadata -- if so it's the parent context and it's a groupName
            Lang.isUndefined(context.metadata)
            // or, it needs to meet two criteria: 1. Does this group have some active elements to display
            || (groupList.length > 0
                // 2.Its referenced as a parent shortcut by >=1 active shortcuts who themselves have no group name
                && validShortcutMetadata.filter((shortcutMetadata, i) => {
                    if (Lang.isUndefined(shortcutMetadata)) return false;
                    return shortcutMetadata["knownParentContexts"] === context.metadata.id && Lang.isUndefined(shortcutMetadata["shortcutGroupName"]);
                }).length !== 0
            )
        );
        return (
            <section
                className={'context-options-section'}
            >
                <div className='context-options-list'>
                    {/* Group child shortcuts with parentContext as header if this group doesn't have a groupName */}
                    {(isCurrentContextAGroupName) &&
                        <div
                            className={`context-options-header`}
                            title={context.getDisplayText()}
                        >
                            {context.getDisplayText()}
                        </div>
                    }
                    {/* Render all shortcuts with no groupNames */}
                    {groupList.filter((groupObj, i) => Lang.isUndefined(groupObj.groupName)).map((groupObj, i) => {
                        return this.renderGroup(groupObj, i, context);
                    })}
                    {/* Render all the shortcuts with gropuNames */}
                    {groupList.filter((groupObj, i) => !Lang.isUndefined(groupObj.groupName)).map((groupObj, i) => {
                        return this.renderGroup(groupObj, i, context);
                    })}
                </div>
            </section>
        );
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

ContextOptions.propTypes = {
    context: PropTypes.object,
    contextManager: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
};
