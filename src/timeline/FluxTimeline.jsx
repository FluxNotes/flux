import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Legend from './TimelineLegend';
import HoverItem from './HoverItem';
import Timeline from 'react-calendar-timeline';
import Item from './Item';
import moment from 'moment';
import './FluxTimeline.css';
import 'font-awesome/css/font-awesome.min.css';

class FluxTimeline extends Component {
    constructor(props) {
        super(props);

        // Create groups and items to display on the timeline
        let items = props.section.data.map((item, i) => {
            console.log(item);
            return item.eventsFunction(props.patient, props.condition, i);
        });

        console.log(items);

        // Create groups for the items
        const groups = this.createGroupsForItems(this.getMaxGroup(items));

        // Assign every item an ID and onClick handler
        for (let i = 0; i < items.length; i++) {
            const id = i + 1;
            items[i]['id'] = id;
            items[i]['itemProps'] = {
                onMouseEnter: (e) => this.enterItemHover(e, id),
                onMouseLeave: (e) => this.leaveItemHover(e)
            };
        }

        // Define the bounds of the timeline
        let defaultTimeStart = moment().clone().add(-1, 'years');  // default - 1 years ago
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
    };
  
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
    };

    leaveItemHover = (e) => {
        e.preventDefault();
        const defaultHoverItemState = {
            style: {
                display: 'none'
            }
        };
        this.setState({'hoverItem': defaultHoverItemState});
    };

    // componentWillReceiveProps = (nextProps) => {
    //     if (this.props !== nextProps) {
    //         // Create groups and items to display on the timeline
    //         let items = this._createItemsForPatient(nextProps.patient, nextProps.condition);
  
    //         // Create groups for the items
    //         const groups = this.createGroupsForItems(this.getMaxGroup(items));
  
    //         // Assign every item an ID and onClick handler
    //         for (let i = 0; i < items.length; i++) {
    //             const id = i + 1;
    //             items[i]['id'] = id;
    //             items[i]['itemProps'] = {
    //                 onMouseEnter: (e) => this._enterItemHover(e, id),
    //                 onMouseLeave: (e) => this._leaveItemHover(e)
    //             };
    //         }
    //         this.setState({
    //             items: items,
    //             groups: groups
    //         });
    //     } 
    // };

    // Create a set of groups that match those used by the items.
    createGroupsForItems = (numGroups) => {
        // extract the group IDs
        let groups = [];
        
        for (let i = 0; i < numGroups; i++) {
            groups.push({id: i+1});
        }

        return groups;
    };

    getMaxGroup = (items) => {
        let max = 1;

        items.forEach((item) => {
            if (item.group > max) {
                max = item.group;
            }
        });

        return max;
    };

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

FluxTimeline.propTypes = { 
    isWide: PropTypes.bool.isRequired,
    className: PropTypes.string,
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object
};

export default FluxTimeline;