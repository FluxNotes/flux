import React, {Component} from 'react';
// Material UI components:
import Paper from 'material-ui/Paper';
// Timeline components:
import Timeline from 'react-calendar-timeline';
import moment from 'moment';

import './TimelinePanel.css';

class TimelinePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
        groups: [
            {id: 1, title: 'Adriamycin', canMove: false, canResize: false, canChangeGroup: false},
            {id: 2, title: 'Cytoxin', canMove: false, canResize: false, canChangeGroup: false},
            {id: 3, title: 'Tamoxifen', canMove: false, canResize: false, canChangeGroup: false},
            {id: 4, title: 'Letrozole', canMove: false, canResize: false, canChangeGroup: false},
            {id: 5, title: 'Coumadin', canMove: false, canResize: false, canChangeGroup: false},
            {id: 6, title: 'Aromaysin25', canMove: false, canResize: false, canChangeGroup: false}
        ],
        items: [
            {id: 1, group: 1, title: 'Adriamycin', start_time: moment("20110501"), end_time: moment("20110501").add(1, 'year')},
            {id: 2, group: 2, title: 'Cytoxin', start_time: moment("20110501"), end_time: moment("20110501").add(1, 'year')},
            {id: 3, group: 3, title: 'Tamoxifen', start_time: moment("20131101"), end_time: moment("20160813")},
            {id: 4, group: 4, title: 'Letrozole', start_time: moment("20150110"), end_time: moment("20150110").add(1, 'year')},
            {id: 5, group: 5, title: 'Coumadin', start_time: moment("20150805"), end_time: moment("20150805").add(4, 'months')},
            {id: 6, group: 6, title: 'Aromaysin25', start_time: moment("20161220"), end_time: moment()}
        ],
        defaultTimeStart: moment("20130501"),
        defaultTimeEnd: moment().add(1, 'year'),
        timeSteps: {
          day: 1,
          month: 1,
          year: 1
        }
    };
  }

  render() {
    return (
      <Paper className="timeline-paper">
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
        />
      </Paper>
    )
  }
}

export default TimelinePanel;
