import React, {Component} from 'react';
// Material UI components:
import Paper from 'material-ui/Paper';
// Timeline components:
import Timeline from 'react-calendar-timeline';

import './TimelinePanel.css';
import 'font-awesome/css/font-awesome.min.css';

// Item provides custom rendering of the the content of a timeline item
class Item extends Component {

  render() {
    if (this.props.item.icon) {
      // Render this item with a font-awesome icon
      let details = null;
      if (this.props.item.name) {
        details = ' &nbsp;&nbsp;|&nbsp;&nbsp; ' + this.props.item.name;
      }
      return (
        <span><i className={'point fa fa-' + this.props.item.icon}></i>{details}</span>
      );
    }
    if (this.props.item.details) {
      return (
        <span><strong>{this.props.item.title}</strong> &nbsp;&nbsp;|&nbsp;&nbsp; {this.props.item.details}</span>
      );
    }
    return (
      <span><strong>{this.props.item.title}</strong></span>
    );
  }
};

// Timeline provides
class TimelinePanel extends Component {
  constructor(props) {
    super(props);

    // Create groups and items to display on the timeline
    let items = [];

    // Medications come first
    items = items.concat(this._createMedicationItems(this.props.medications));

    // Events
    items = items.concat(this._createEventItems(this.props.events, this._getMaxGroup(items) + 1));

    // Progression
    items = items.concat(this._createProgressionItems(this.props.progression, this._getMaxGroup(items) + 1));

    // Create groups for the items
    const groups = this._createGroupsForItems(this._getMaxGroup(items));

    // Assign every item an ID
    for (let i = 0; i < items.length; i++) {
      items[i]['id'] = i + 1;
    }

    // Define the bounds of the timeline
    const now = new Date();
    const defaultTimeStart = new Date();
    defaultTimeStart.setDate(now.getDate() - 3 * 365);  // 3 years ago
    const defaultTimeEnd = new Date();
    defaultTimeEnd.setDate(now.getDate() + 120); // 3 months from now

    this.state = {
        items: items,
        groups: groups,
        defaultTimeStart: defaultTimeStart,
        defaultTimeEnd: defaultTimeEnd,
        timeSteps: {
          day: 1,
          month: 1,
          year: 1
        }
    };
  }

  render() {
    return (
      <div id="timeline" className="dashboard-panel">
        <Paper className="panel-content">
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
          />
        </Paper>
      </div>
    )
  }


  _createMedicationItems(meds) {
    let items = [];

    meds.sort(this._timeSorter);
    meds.forEach((med, i) => {
      const assignedGroup = this._assignItemToGroup(items, med, 1);

      items.push({
        group: assignedGroup,
        title: med.name,
        details: med.dosage,
        className: 'medication-item',
        start_time: med.startDate,
        end_time: med.endDate
      });
    });
    return items;
  }


  _createEventItems(events, groupStartIndex) {
    let items = [];

    events.sort(this._timeSorter);
    events.forEach((event) => {
      const assignedGroup = this._assignItemToGroup(items, event, groupStartIndex);

      items.push({
        group: assignedGroup,
        title: '',
        icon: event.icon,
        className: 'event-item',
        start_time: event.startDate,
        end_time: event.endDate
      });
    });
    return items;
  }


  _createProgressionItems(progs, groupStartIndex) {
    let items = [];

    progs.sort(this._timeSorter);
    progs.forEach((prog) => {
      const assignedGroup = this._assignItemToGroup(items, prog, groupStartIndex);

      items.push({
        group: assignedGroup,
        icon: prog.icon,
        className: 'progression-item',
        start_time: prog.startDate,
        end_time: prog.endDate
      });
    });
    return items;
  }


  // Assigns a new timeline item to a group in the timeline, avoiding conflicts with
  // existing timeline items. If firstAvailableGroup is provided, the group assigned
  // will not be less than the firstAvailableGroup. newItem must have a startDate specified.
  _assignItemToGroup(existingItems, newItem, firstAvailableGroup) {
    let availableGroup = firstAvailableGroup || 1;
    let assignedGroup = null;

    while (!assignedGroup) {
      const existingItemsInGroup = this._filterItemsByGroup(existingItems, availableGroup);
      let conflict = false;

      for (let i = 0; i < existingItemsInGroup.length; i++) {
        const existingItem = existingItemsInGroup[i];
        // At the current group level, the new item conflicts with an existing item
        if (newItem.startDate < existingItem.end_time && newItem.startDate >= existingItem.start_time) {
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
      groups.push({
        id: i+1,
        canChangeGroup: false,
        canMove: false,
        canResize: false
      });
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


  _timeSorter(a, b) {
    if (a.startDate < b.startDate) {
      return -1;
    }
    if (a.startDate > b.startDate) {
      return 1;
    }
    return 0;
  }
}

export default TimelinePanel;
