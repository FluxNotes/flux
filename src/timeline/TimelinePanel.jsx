import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Legend from './TimelineLegend';
import HoverItem from './HoverItem';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';
import Lang from 'lodash'
import './TimelinePanel.css';
import 'font-awesome/css/font-awesome.min.css';

// Item provides custom rendering of the the content of a timeline item.
// Items may have any combination of:
// icon - a font-awesome icon to display before the title
// title - a title to display
// details - additional information to display next to the title
class Item extends Component {
    render() {
        let icon = null;
        let details = null;
    
        if (this.props.item.icon) {
            icon = (<span><i className={'point fa fa-' + this.props.item.icon}></i></span>);
        }
    
        if (this.props.item.details) {
            details = (<span>&nbsp;&nbsp;|&nbsp;&nbsp; {this.props.item.details}</span>);
        }
    
        const itemId = `timeline-item-${this.props.item.id}`;
    
        return (
            <div id={itemId} className="item">
                {icon}
                <strong>{this.props.item.title}</strong>
                {details}
            </div>
        );
    }
};

// Timeline provides
class TimelinePanel extends Component {
    constructor(props) {
        super(props);

        // Create groups and items to display on the timeline
        let items = this._createItemsForPatient(props.patient, props.condition);

        // Create groups for the items
        const groups = this._createGroupsForItems(this._getMaxGroup(items));

        // Assign every item an ID and onClick handler
        for (let i = 0; i < items.length; i++) {
            const id = i + 1;
            items[i]['id'] = id;
            items[i]['itemProps'] = {
                onMouseEnter: (e) => this._enterItemHover(e, id),
                onMouseLeave: (e) => this._leaveItemHover(e)
            };
        }

        // Define the bounds of the timeline
        let defaultTimeStart =moment().clone().add(-1, 'years');  // default - 1 years ago
        if (this.props.isWide) { 
          defaultTimeStart = moment().clone().add(-3, 'years');  // wideview - 3 years ago
        } 
        const defaultTimeEnd = moment().clone().add(3, 'months'); // end - 3 months from now

        this.state = {
            items: items,
            groups: groups,
            defaultTimeStart: defaultTimeStart,
            defaultTimeEnd: defaultTimeEnd,
            timeSteps: {
                day: 1,
                month: 1,
                year: 1
            },
            legendItems: [
                {icon: 'hospital-o', description: 'Medical procedures'},
                {icon: 'heartbeat', description: 'Key events and disease status'}
            ],
            hoverItem: {
                title: '',
                details: '',
                style: {top: 0, left: 0, display: 'none'}
            }
        };
    }
  
    _enterItemHover(e, id) {
        // Get position of this item on the screen
        e.preventDefault();
        const targetItem = document.querySelector(`[id="timeline-item-${id}"]`);
        const rect = targetItem.getBoundingClientRect();
        const style = {
            top: `${rect.top - 65}px`,
            left: `${rect.left}px`,
            display: null
        }
  
        const item = this.state.items[id-1];
        const hoverItemState = {
            title: item.hoverTitle,
            text: item.hoverText,
            style: style
        };
        this.setState({'hoverItem': hoverItemState});
    }

    _leaveItemHover(e) {
        e.preventDefault();
        const defaultHoverItemState = {
            style: {
                display: 'none'
            }
        };
        this.setState({'hoverItem': defaultHoverItemState});
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props !== nextProps) {
            // Create groups and items to display on the timeline
            let items = this._createItemsForPatient(nextProps.patient, nextProps.condition);
  
            // Create groups for the items
            const groups = this._createGroupsForItems(this._getMaxGroup(items));
  
            // Assign every item an ID and onClick handler
            for (let i = 0; i < items.length; i++) {
                const id = i + 1;
                items[i]['id'] = id;
                items[i]['itemProps'] = {
                    onMouseEnter: (e) => this._enterItemHover(e, id),
                    onMouseLeave: (e) => this._leaveItemHover(e)
                };
            }
            this.setState({
                items: items,
                groups: groups
            });
        } 
    }


    _createItemsForPatient(patient, condition) {
        let items = [];

        if(condition != null) {
            // Medications come first
            items = items.concat(this._createMedicationItems(patient.getMedicationsForConditionChronologicalOrder(condition)));
            // Procedures
            items = items.concat(this._createProcedureItems(patient.getProceduresForConditionChronologicalOrder(condition), this._getMaxGroup(items) + 1));
            // Key Dates (diagnosis, recurrence)
            items = items.concat(this._createEventItems(patient.getKeyEventsForConditionChronologicalOrder(condition), this._getMaxGroup(items) + 1));
            // Progressions
            //TODO
            items = items.concat(this._createProgressionItems(patient, patient.getProgressionsForConditionChronologicalOrder(condition), this._getMaxGroup(items) + 1));
        } 
        return items;
    }

    _createMedicationItems(meds) {
        let items = [];
        meds.forEach((med, i) => {
            const startTime = new moment(med.requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
            const endTime = new moment(med.requestedPerformanceTime.timePeriodEnd, "D MMM YYYY");
            const assignedGroup = this._assignItemToGroup(items, startTime, 1);
            const name = med.medication;
            const dosage = med.amountPerDose.value + " " + med.amountPerDose.units + " " + med.timingOfDoses.value + " " + med.timingOfDoses.units;
            items.push({
                group: assignedGroup,
                title: name,
                details: dosage,
                hoverTitle: name,
                hoverText: dosage,
                className: 'medication-item',
                start_time: startTime,
                end_time: endTime
            });
        });
        return items;
    }

    _createProcedureItems(events, groupStartIndex) {
        let items = [];
  
        events.forEach((proc, i) => {
            let startTime = new moment(typeof proc.occurrenceTime === 'string' ? proc.occurrenceTime : proc.occurrenceTime.timePeriodStart, "D MMM YYYY");
            let endTime = proc.occurrenceTime.timePeriodStart ? (!Lang.isNull(proc.occurrenceTime.timePeriodEnd) ? new moment(proc.occurrenceTime.timePeriodEnd, "D MMM YYYY") : null) : null;
            const assignedGroup = this._assignItemToGroup(items, startTime, groupStartIndex);
  
            let classes = 'event-item';
            //let endDate = proc.endDate;
            let hoverText = '';
  
            if (!Lang.isNull(endTime)) {
                hoverText = `${startTime.format('MM/DD/YYYY')} ― ${endTime.format('MM/DD/YYYY')}`;
            } else {
                hoverText = `${startTime.format('MM/DD/YYYY')}`;
                endTime = startTime.clone().add(1, 'day');
                classes += ' point-in-time';
            }
  
            if (proc.specificType.value.coding[0].displayText) {
                hoverText += ` : ${proc.specificType.value.coding[0].displayText.value}`;
            }
  
            items.push({
                group: assignedGroup,
                icon: 'hospital-o',
                className: classes,
                hoverTitle: proc.specificType.value.coding[0].displayText.value,
                hoverText: hoverText,
                start_time: startTime,
                end_time: endTime
            });
        });
        return items;
    }

    _createEventItems(events, groupStartIndex) {
        let items = [];

        events.forEach((evt) => {
            const assignedGroup = this._assignItemToGroup(items, evt.start_time, groupStartIndex);

            let classes = 'progression-item';
            let startDate = new moment(evt.start_time, "D MMM YYYY");
            let endDate = null;
            let hoverText = '';
            let hoverTitle = '';

            if (evt.end_time) {
                endDate = new moment(evt.end_time, "D MMM YYYY");
                hoverText = `${startDate.format('MM/DD/YYYY')} ― ${endDate.format('MM/DD/YYYY')}`;
            } else {
                hoverText = `${startDate.format('MM/DD/YYYY')}`;
                endDate = startDate.clone().add(1, 'day');
                classes += ' point-in-time';
            }
        
            hoverTitle = evt.name;
                
            items.push({
                group: assignedGroup,
                icon: 'heartbeat',
                className: classes,
                hoverTitle: hoverTitle,
                hoverText: hoverText,
                start_time: startDate,
                end_time: endDate
            });
        });
        return items;
    }
    
    _createProgressionItems(patient, progressions, groupStartIndex) {
        let items = [];
        
        progressions.forEach((prog) => {
            const assignedGroup = this._assignItemToGroup(items, prog.clinicallyRelevantTime, groupStartIndex);

            let classes = 'progression-item';
            // Do not include progression on timeline if asOfDate is null
            if (prog.asOfDate == null) return;
            let startDate = new moment(prog.asOfDate, "D MMM YYYY");
            let hoverText = `${startDate.format('MM/DD/YYYY')}`;
            let endDate = startDate.clone().add(1, 'day');
            classes += ' point-in-time';
            
            let focalCondition = patient.getFocalConditionForProgression(prog);
            let focalConditionName = focalCondition.specificType.value.coding[0].displayText.value;
            
            let hoverTitle = focalConditionName + " is " + prog.status + " based on " + prog.evidence.join();

            items.push({
                group: assignedGroup,
                icon: 'heartbeat',
                className: classes,
                hoverTitle: hoverTitle,
                hoverText: hoverText,
                start_time: startDate,
                end_time: endDate
            });
        });
        return items;
    }

    // Assigns a new timeline item to a group in the timeline, avoiding conflicts with
    // existing timeline items. If firstAvailableGroup is provided, the group assigned
    // will not be less than the firstAvailableGroup.
    _assignItemToGroup(existingItems, startTime, firstAvailableGroup) {
        let availableGroup = firstAvailableGroup || 1;
        let assignedGroup = null;

        while (!assignedGroup) {
            const existingItemsInGroup = this._filterItemsByGroup(existingItems, availableGroup);
            let conflict = false;
    
            for (let i = 0; i < existingItemsInGroup.length; i++) {
                const existingItem = existingItemsInGroup[i];
                // At the current group level, the new item conflicts with an existing item
                if (startTime < existingItem.end_time && startTime >= existingItem.start_time) {
                    conflict = true;
                    break;
                }
            }
            if (conflict) {
                availableGroup += 1;
                conflict = false;
            } else {
                assignedGroup = availableGroup;
            }
        }
        return assignedGroup;
    }


    // Create a set of groups that match those used by the items.
    _createGroupsForItems(numGroups) {
        // extract the group IDs
        let groups = [];
        for (let i = 0; i < numGroups; i++) {
            groups.push({id: i+1});
        }
        return groups;
    }


    _getMaxGroup(items) {
        let max = 1;
        items.forEach((item) => {
            if (item.group > max) {
                max = item.group;
            }
        });
        return max;
    }


    _filterItemsByGroup(items, group) {
        let subset = [];
        items.forEach((item) => {
            if (item.group === group) {
                subset.push(item);
            }
        });
        return subset;
    }

    render() {
        return (
            <div id="timeline" className="dashboard-panel">
                <HoverItem
                    title={this.state.hoverItem.title}
                    text={this.state.hoverItem.text}
                    style={this.state.hoverItem.style}
                />
                <Timeline
                    groups={this.state.groups}
                    items={this.state.items}
                    defaultTimeStart={this.state.defaultTimeStart}
                    defaultTimeEnd={this.state.defaultTimeEnd}
                    rightSidebarWidth={0}
                    rightSidebarContent={null}
                    sidebarWidth={0}
                    sidebarContent={null}
                    timeSteps={this.state.timeSteps}
                    lineHeight={40}
                    itemHeightRatio={0.7}
                    itemRenderer={Item}
                    canMove={false}
                    canResize={false}
                    canSelect={false}
                />
                <Legend
                  items={this.state.legendItems}
                />
            </div>
        )
    }
}

TimelinePanel.propTypes = { 
    isWide: PropTypes.bool.isRequired,
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object
};

export default TimelinePanel;