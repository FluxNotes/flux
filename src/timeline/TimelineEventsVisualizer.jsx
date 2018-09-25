import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Legend from './TimelineLegend';
import HoverItem from './HoverItem';
import Timeline from 'react-calendar-timeline';
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';
import Item from './Item';
import Button from '../elements/Button';
import moment from 'moment';
import './TimelineEventsVisualizer.css';
import FontAwesome from 'react-fontawesome';

class TimelineEventsVisualizer extends Component {
    constructor(props) {
        super(props);

        const items = this.createItems(this.props.patient, this.props.condition, this.props.conditionSection);
        const groups = this.createGroupsForItems(this.getMaxGroup(items));

        // Define the bounds of the timeline
        let defaultTimeStart;
        if (this.props.isWide) { 
            defaultTimeStart = moment().clone().add(-3, 'years').add(3, 'months');  // wideview - 3 years ago
        } else {
            defaultTimeStart = moment().clone().add(-1, 'years').add(3, 'months');
        }
        const defaultTimeEnd = moment().clone().add(3, 'months'); // end - 3 months from now
        const visibleTimeStart = defaultTimeStart.valueOf();
        const visibleTimeEnd = defaultTimeEnd.valueOf();

        this.state = {
            items,
            groups,
            defaultTimeStart,
            defaultTimeEnd,
            visibleTimeStart,
            visibleTimeEnd,
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
            const items = this.createItems(nextProps.patient, nextProps.condition, nextProps.conditionSection);
            const groups = this.createGroupsForItems(this.getMaxGroup(items));
            let defaultTimeStart;
            if (nextProps.isWide) { 
                defaultTimeStart = moment().clone().add(-3, 'years');  // wideview - 3 years ago
            } else {
                defaultTimeStart = moment().clone().add(-1, 'years');
            }

            this.setState({
                items,
                groups,
                defaultTimeStart
            });
        }
    }

    createItems = (patient, condition, section) => {
        // Create groups and items to display on the timeline
        let items = [];
        if (section.resetData) section.resetData();
        section.data.forEach((item, i) => {
            items = items.concat(item.data_cache || []);
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

    onTimelineZoomClick = (timeAmount, timeUnit) => {
        const currentTimeStart = this.state.visibleTimeStart;
        const currentTimeEnd = this.state.visibleTimeEnd;
        const centerPoint = currentTimeStart + (currentTimeEnd - currentTimeStart)/2;
        this.setState({
            visibleTimeStart: moment(centerPoint).subtract(timeAmount/2, timeUnit).valueOf(),
            visibleTimeEnd: moment(centerPoint).add(timeAmount/2, timeUnit).valueOf()
        });
    }

    onTimelineScrollClick = (newEndDate, jumpForward) => {
        const newEndDateValue = newEndDate.valueOf();
        const currentTimeLengthVisible = this.state.visibleTimeEnd - this.state.visibleTimeStart;
        const multiple = jumpForward ? 1 : -1;
        const amountToPutEndDateInView = currentTimeLengthVisible * (1/12) * multiple;
        this.setState({
            visibleTimeStart: moment(newEndDateValue).subtract(currentTimeLengthVisible - amountToPutEndDateInView, 'ms').valueOf(),
            visibleTimeEnd: moment(newEndDateValue).add(amountToPutEndDateInView).valueOf()
        });
    }

    onTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
        this.setState({ visibleTimeStart, visibleTimeEnd });
        updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
    }

    renderZoomButtons = () => {
        return (
            <span className="timeline-controls-right">
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineZoomClick(1, 'weeks')}>
                    1w
                </Button>
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineZoomClick(1, 'months')}>
                    1m
                </Button>
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineZoomClick(6, 'months')}>
                    6m
                </Button>
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineZoomClick(1, 'years')}>
                    1y
                </Button>
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineZoomClick(3, 'years')}>
                    3y
                </Button>
            </span>
        );
    }

    renderScrollButtons = () => {
        return (
            <span className="timeline-controls-left">
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineScrollClick(moment(this.state.visibleTimeEnd), false)}>
                    <FontAwesome name="angle-left" />
                </Button>
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineScrollClick(moment().clone(), true)}>
                    Today
                </Button>
                <Button
                    id="timeline-controls"
                    className="small-btn"
                    onClick={() => this.onTimelineScrollClick(moment(this.state.visibleTimeEnd), true)}>
                    <FontAwesome name="angle-right" />
                </Button>
            </span>
        );
    }

    render() {
        return (
            <div 
                id="timeline" 
                className={this.props.className}
            >
                <div>
                    {this.renderScrollButtons()}
                    {this.renderZoomButtons()}
                </div>
                <HoverItem
                    title={this.state.hoverItem.title}
                    text={this.state.hoverItem.text}
                    style={this.state.hoverItem.style}
                />
                {/* Null check to ensure timeline is rendered  */}
                {this.props.condition ?
                    <Timeline
                        resizeDetector={containerResizeDetector}
                        groups={this.state.groups}
                        items={this.state.items}
                        defaultTimeStart={this.state.defaultTimeStart}
                        defaultTimeEnd={this.state.defaultTimeEnd}
                        visibleTimeStart={this.state.visibleTimeStart}
                        visibleTimeEnd={this.state.visibleTimeEnd}
                        onTimeChange={this.onTimeChange}
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
                    /> : null}
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