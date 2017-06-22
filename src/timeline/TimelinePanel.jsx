import React, {Component} from 'react';
// Material UI components:
import Paper from 'material-ui/Paper';
// Timeline components:
import Timeline from 'react-calendar-timeline';
import moment from 'moment';

import './TimelinePanel.css';

// Item provides custom rendering of the the content of a timeline item
class Item extends Component {

  render() {
    if (this.props.item.details) {
      return (
        <span><strong>{this.props.item.title}</strong> &nbsp;&nbsp;|&nbsp;&nbsp; {this.props.item.details}</span>
      )
    }
    return (
      <span><strong>{this.props.item.title}</strong></span>
    )
  }
};

// Timeline provides
class TimelinePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
        groups: [
            {id: 1, title: 'med1', canMove: false, canResize: false, canChangeGroup: false},
            {id: 2, title: 'med2', canMove: false, canResize: false, canChangeGroup: false},
            {id: 3, title: 'med3', canMove: false, canResize: false, canChangeGroup: false}
        ],
        items: [
            // Initial treatment regimen
            {id: 1, group: 1, title: 'Adriamycin', 'details': '6 cycles of 60mg/m2', className: 'medication-item', start_time: moment("20120210"), end_time: moment("20120820")},
            {id: 2, group: 2, title: 'Cytoxin', 'details': '6 cycles of 10mg/kg', className: 'medication-item', start_time: moment("20120210"), end_time: moment("20120820")},
            {id: 7, group: 3, title: 'Radiation', className: 'radiation-item', start_time: moment("20120712"), end_time: moment("20120816")},

            // Treatment for recurrence
            {id: 3, group: 2, title: 'Tamoxifen', 'details': '20mg once daily', className: 'medication-item', start_time: moment("20131101"), end_time: moment("20160813")},
            {id: 4, group: 3, title: 'Letrozole', 'details': '2.5mg once daily', className: 'medication-item', start_time: moment("20150110"), end_time: moment("20150110").add(1, 'year')},
            {id: 5, group: 1, title: 'Coumadin', 'details': '2mg once daily', className: 'medication-item', start_time: moment("20150905"), end_time: moment("20170601")},
            {id: 6, group: 3, title: 'Aromaysin', 'details': '25mg once daily', className: 'medication-item', start_time: moment("20170605"), end_time: moment("20180101")}
        ],
        defaultTimeStart: moment().add(-40, 'months'),
        defaultTimeEnd: moment().add(17, 'months'),
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
}

export default TimelinePanel;
