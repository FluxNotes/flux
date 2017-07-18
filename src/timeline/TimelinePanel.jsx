import React, {Component} from 'react';
// Material UI components:
import Paper from 'material-ui/Paper';
// Timeline components:
import Legend from './TimelineLegend';
import HoverItem from './HoverItem';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';

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
      <div id={itemId} className="item">{icon}<strong>{this.props.item.title}</strong>{details}</div>
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
    items = items.concat(this._createProcedureItems(this.props.procedures, this._getMaxGroup(items) + 1));

    // Progression
    items = items.concat(this._createEventItems(this.props.events, this._getMaxGroup(items) + 1));

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
    const defaultTimeStart = moment().add(-3, 'years');  // 3 years ago
    const defaultTimeEnd = moment().add(3, 'months'); // 3 months from now

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
          {icon: 'heartbeat', description: 'Key events and disease progression'}
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

  // componentWillReceiveProps = (nextProps) => {
  //   if (this.props !== nextProps) {
  //     // Create groups and items to display on the timeline
  //     let items = [];

  //     // Medications come first
  //     items = items.concat(this._createMedicationItems(this.props.medications));

  //     // Events
  //     items = items.concat(this._createProcedureItems(this.props.procedures, this._getMaxGroup(items) + 1));

  //     // Progression
  //     items = items.concat(this._createEventItems(this.props.events, this._getMaxGroup(items) + 1));

  //     // Create groups for the items
  //     const groups = this._createGroupsForItems(this._getMaxGroup(items));

  //     // Assign every item an ID and onClick handler
  //     for (let i = 0; i < items.length; i++) {
  //       const id = i + 1;
  //       items[i]['id'] = id;
  //       items[i]['itemProps'] = {
  //         onMouseEnter: (e) => this._enterItemHover(e, id),
  //         onMouseLeave: (e) => this._leaveItemHover(e)
  //       };
  //     }
  //     this.setState({
  //       items: items,
  //       groups: groups
  //     });
  //   } 
  // }

  render() {
    return (
      <div id="timeline" className="dashboard-panel">
        <Paper className="panel-content">
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
        hoverTitle: med.name,
        hoverText: med.dosage,
        className: 'medication-item',
        start_time: med.startDate,
        end_time: med.endDate
      });
    });
    return items;
  }


  _createProcedureItems(events, groupStartIndex) {
    let items = [];

    events.sort(this._timeSorter);
    events.forEach((event) => {
      const assignedGroup = this._assignItemToGroup(items, event, groupStartIndex);

      let classes = 'event-item';
      let endDate = event.endDate;
      let hoverText = '';

      if (event.endDate) {
        hoverText = `${event.startDate.format('MM/DD/YYYY')} ― ${event.endDate.format('MM/DD/YYYY')}`;
      } else {
        hoverText = `${event.startDate.format('MM/DD/YYYY')}`;
        endDate = event.startDate.add(1, 'day');
        classes += ' point-in-time';
      }

      if (event.display) {
        hoverText += ` : ${event.display}`;
      }

      items.push({
        group: assignedGroup,
        icon: 'hospital-o',
        className: classes,
        hoverTitle: event.name,
        hoverText: hoverText,
        start_time: event.startDate,
        end_time: endDate
      });
    });
    return items;
  }


  _createEventItems(progs, groupStartIndex) {
    let items = [];

    progs.sort(this._timeSorter);
    progs.forEach((prog) => {
    const assignedGroup = this._assignItemToGroup(items, prog, groupStartIndex);

    let classes = 'progression-item';
    let endDate = prog.endDate;
    let hoverText = '';
	  let hoverTitle = '';

      if (prog.endDate) {
        hoverText = `${prog.startDate.format('MM/DD/YYYY')} ― ${prog.endDate.format('MM/DD/YYYY')}`;
      } else {
        hoverText = `${prog.startDate.format('MM/DD/YYYY')}`;
        endDate = prog.startDate.add(1, 'day');
        classes += ' point-in-time';
      }
	  
	  if (prog.status) {
		hoverTitle = prog.status;
	  } else {
		hoverTitle = prog.name;
	  }

      items.push({
        group: assignedGroup,
        icon: 'heartbeat',
        className: classes,
        hoverTitle: hoverTitle,
        hoverText: hoverText,
        start_time: prog.startDate,
        end_time: endDate
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
