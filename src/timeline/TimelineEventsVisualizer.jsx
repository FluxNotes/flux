import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Legend from './TimelineLegend';
import HoverItem from './HoverItem';
import Timeline from 'react-calendar-timeline';
import Item from './Item';
import moment from 'moment';
import './TimelineEventsVisualizer.css';
import 'font-awesome/css/font-awesome.min.css';

class TimelineEventsVisualizer extends Component {
    constructor(props) {
        super(props);

        const items = this.createItems();
        const groups = this.createGroupsForItems(this.getMaxGroup(items));

        // Define the bounds of the timeline
        let defaultTimeStart = moment().clone().add(-1, 'years');  // default - 1 years ago
        if (this.props.isWide) { 
          defaultTimeStart = moment().clone().add(-3, 'years');  // wideview - 3 years ago
        } 
        const defaultTimeEnd = moment().clone().add(3, 'months'); // end - 3 months from now

        this.state = {
            items,
            groups,
            defaultTimeStart,
            defaultTimeEnd,
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
    };

    componentWillReceiveProps = (nextProps) => {
        if (this.props !== nextProps) {
            const items = this.createItems();
            const groups = this.createGroupsForItems(this.getMaxGroup(items));

            this.setState({
                items,
                groups
            });
        }
    }

    createItems = () => {
        const {patient, condition, section} = this.props;

        // Create groups and items to display on the timeline
        let items = [];
        section.data.forEach((item, i) => {
            items = items.concat(item.eventsFunction(patient, condition, this.getMaxGroup(items) + 1));
        });

        // Assign every item an ID and onClick handler
        items.forEach((item, i) => {
            const id = i + 1;
            item.id = id;
            item.itemProps = {
                onMouseEnter: (e) => this.enterItemHover(e, id),
                onMouseLeave: (e) => this.leaveItemHover(e)
            }; 
        });

        return items;
    }
  
    enterItemHover = (e, id) => {
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

    leaveItemHover = (e) => {
        e.preventDefault();
        const defaultHoverItemState = {
            style: {
                display: 'none'
            }
        };
        this.setState({'hoverItem': defaultHoverItemState});
    }

    // Create a set of groups that match those used by the items.
    createGroupsForItems = (numGroups) => {
        // extract the group IDs
        let groups = [];
        
        for (let i = 0; i < numGroups; i++) {
            groups.push({id: i+1});
        }

        return groups;
    }

    getMaxGroup = (items) => {
        let max = 1;

        items.forEach((item) => {
            if (item.group > max) {
                max = item.group;
            }
        });

        return max;
    }

    render() {
        return (
            <div 
                id="timeline" 
                className={this.props.className}
            >
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

TimelineEventsVisualizer.propTypes = { 
    isWide: PropTypes.bool.isRequired,
    className: PropTypes.string,
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object
};

export default TimelineEventsVisualizer;