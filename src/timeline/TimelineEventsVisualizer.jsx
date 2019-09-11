import React from 'react';
import PropTypes from 'prop-types';
import Legend from './TimelineLegend';
import HoverItem from './HoverItem';
import Timeline from 'react-calendar-timeline/lib';
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';
import Item from './Item';
import Button from '../elements/Button';
import moment from 'moment';
import './Timeline.css';
import './TimelineEventsVisualizer.css';
import FontAwesome from 'react-fontawesome';
import Lang from 'lodash';
import VisualizerMenu from '../summary/VisualizerMenu';
import Visualizer from '../summary/Visualizer';
import supportsSticky from './util';

class TimelineEventsVisualizer extends Visualizer {
    constructor(props) {
        super(props);
        const { conditionSection, tdpSearchSuggestions, highlightedSearchSuggestion, isWide } = this.props;
        const items = this.createItems(conditionSection, tdpSearchSuggestions, highlightedSearchSuggestion);
        const groups = this.createGroupsForItems(this.getMaxGroup(items));
        // Define the bounds of the timeline
        const defaultTimeStart = isWide ? moment().clone().add(-3, 'years').add(3, 'months') : moment().clone().add(-1, 'years').add(3, 'months'); // wide view - 3 years ago
        const interval = isWide ? moment(0).add(3,"years").valueOf() : moment(0).add(1, "years").valueOf();
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
            interval,
            timeSteps: {
                day: 1,
                month: 1,
                year: 1
            },
            legendItems: [
                { icon: 'hospital-o', description: 'Medical procedures' },
                { icon: 'heartbeat', description: 'Key events and disease status' }
            ],
            hoverItem: {
                title: '',
                details: '',
                style: { top: 0, left: 0, display: 'none' }
            },

            // state variables for displaying VisualizerMenu
            elementToDisplayMenu: null,
            positionTop: 0,
            positionLeft: 0,
            arrayIndex: 0,
            elementId: '',
            elementText: '',
            elementSource: null,
        };
    };

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.interval !== this.state.interval) {
            this.updateMedicationItemsPosition(this.state.visibleTimeStart);
        }

    }

    handleLoad = () => {
        this.calWidth = document.querySelector('[class="react-calendar-timeline"]').getBoundingClientRect().width;

        if (!supportsSticky) {

            document.querySelector(`[class="minimap-container fitted-panel"]`).onscroll = () => {
                // when the page scrolls, the fixed elements will not scroll with it
                const ratio = this.state.interval/this.calWidth;
                const itemIds = [];
                const fixed = {};
                const width = {};
                this.state.items.forEach((item) => {
                    if (item.className==="medication-item" && item.fixed) {
                        const element = document.querySelector(`[id="timeline-item-${item.id}"]`);
                        element.parentNode.style.position = "relative";
                        // this is how far left we need to set the div so it doesn't appear to move
                        // the "ratio" converts time on the calendar into pixels
                        const leftPx = ((this.state.visibleTimeStart - item.start_time.valueOf())/ratio) + "px";
                        element.parentNode.style.left =leftPx;
                        element.parentNode.style.top = "0px";
                        itemIds.push(item.id);
                        fixed[item.id] = false;
                        width[item.id] = element.parentNode.getBoundingClientRect().width;
                    }
                });
                this.handleItemEdit(itemIds, fixed, width);
            };

            this.updateMedicationItemsPosition(this.state.visibleTimeStart);
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const { conditionSection, tdpSearchSuggestions, highlightedSearchSuggestion } = nextProps;
        const items = this.createItems(conditionSection, tdpSearchSuggestions, highlightedSearchSuggestion);
        const groups = this.createGroupsForItems(this.getMaxGroup(items));
        this.setState({
            items,
            groups,
        });

        if (this.props.isWide !== nextProps.isWide) {
            const visibleTimeStart = nextProps.isWide ? moment().clone().add(-3, 'years').add(3, 'months').valueOf() : moment().clone().add(-1, 'years').add(3, 'months').valueOf(); // wideview - 3 years ago
            const visibleTimeEnd = moment().clone().add(3, 'months').valueOf();
            this.setState({
                visibleTimeStart,
                visibleTimeEnd,
            });
        }
    }

    createItems = (section, tdpSearchSuggestions, highlightedSearchSuggestion) => {
        // Create groups and items to display on the timeline
        let items = [];
        if (section.resetData) section.resetData();
        section.data.forEach((item) => {
            items = items.concat(item.data_cache || []);
        });

        // Assign every item an ID and onClick handler
        items.forEach((item, i) => {
            const id = i + 1;
            item.id = id;
            item.fixed = false;
            item.width = 0;
            item.itemProps = {
                onMouseEnter: (e) => this.enterItemHover(e, id),
                onMouseLeave: (e) => this.leaveItemHover(e),

                // hold 2 view
                onTouchStart: (e) => this.enterItemHover(e, id),
                onTouchEnd: (e) => {
                    // Opens action menu after hover item disappears
                    this.leaveItemHover(e);
                    this.openInsertionMenu(e, item, i);
                },

                onClick: (e) => this.openInsertionMenu(e, item, i),
            };

            const highlightedItem = tdpSearchSuggestions.find((s) => {
                if (s.section === 'Timeline') {
                    const value = s.subsection === 'Procedures' ? item.hoverText : `${item.hoverTitle}: ${item.hoverText}`;
                    return s.contentSnapshot === value;
                }
                return false;
            });

            let highlightedClass = highlightedItem ? ' timeline-highlighted' : '';
            if (Lang.isEqual(highlightedItem, highlightedSearchSuggestion)) {
                highlightedClass += ' selected';
            }

            item.className += highlightedClass;
        });

        return items;
    }

    // Opens the insertion menu for the given element id, based on cursor location
    openInsertionMenu = (event, item, arrayIndex) => {
        // Get menu coordinates
        // Get the horizontal coordinate of mouse and push menu a little to the right
        const x = (event.clientX || event.changedTouches[0].clientX) + 4;

        // Get the vertical coordinate of mouse and push a little to the bottom of cursor
        const y = (event.clientY || event.changedTouches[0].clientY) + 7;

        const elementId = `${item.group}-${item.id}-${arrayIndex}`;
        this.setState({
            elementId,
            arrayIndex,
            elementText: item.hoverText,
            elementSource: item.source,
            elementToDisplayMenu: elementId,
            positionLeft: x,
            positionTop: y,
        });
    }

    // Closes the insertion menu
    closeInsertionMenu = (callback) => {
        if (callback) {
            this.setState({ elementToDisplayMenu: null }, callback);
        } else {
            this.setState({ elementToDisplayMenu: null });
        }
    }

    // renders Menu for element and associated actions as Menu items
    renderedMenu = () => {
        const { elementToDisplayMenu, elementId, elementText, elementSource, arrayIndex, positionLeft, positionTop } = this.state;
        const { actions } = this.props;

        // Item represents the name of the row/section of the current element.
        const onMenuItemClicked = (fn, element, item) => {
            const callback = () => {
                fn(element, item);
            };
            this.closeInsertionMenu(callback);
        };
        const element = {
            value: elementText,
            source: elementSource,
        };

        return (
            <VisualizerMenu
                // allowItemClick is false so that `Insert Text` action is disabled
                allowItemClick={false}
                arrayIndex={arrayIndex}
                closeInsertionMenu={this.closeInsertionMenu}
                element={element}
                elementDisplayingMenu={elementToDisplayMenu}
                elementId={elementId}
                elementText={elementText}
                isSigned={true}
                onMenuItemClicked={onMenuItemClicked}
                positionLeft={positionLeft}
                positionTop={positionTop}
                rowId={elementText}
                unfilteredActions={actions}
            />
        );
    }

    enterItemHover = (e, id) => {
        // Get position of this item on the screen
        e.preventDefault();
        const targetItem = document.querySelector(`[id="timeline-item-${id}"]`);
        const rect = targetItem.getBoundingClientRect();
        const style = {
            top: `${rect.top - 65}px`,
            left: `${rect.left}px`,
            display: null,
        };
        const item = this.state.items[id - 1];
        const hoverItem = {
            style,
            title: item.hoverTitle,
            text: item.hoverText,
        };

        this.setState({ hoverItem });
    }

    leaveItemHover = (e) => {
        e.preventDefault();
        const hoverItem = {
            style: {
                display: 'none',
            },
        };

        this.setState({ hoverItem });
    }

    // Create a set of groups that match those used by the items.
    createGroupsForItems = (numGroups) => {
        // extract the group IDs
        const groups = [];

        for (let i = 0; i < numGroups; i++) {
            groups.push({ id: i + 1 });
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

    handleHeaderRef = (el) => {
        if (el) {
            el.addEventListener('click', (e) => { e.stopPropagation(); });
        };
    }

    onTimelineZoomClick = (timeAmount, timeUnit) => {
        const currentTimeStart = this.state.visibleTimeStart;
        const currentTimeEnd = this.state.visibleTimeEnd;
        const centerPoint = currentTimeStart + (currentTimeEnd - currentTimeStart) / 2;
        const visibleTimeStart =moment(centerPoint).subtract(timeAmount / 2, timeUnit).valueOf();
        const visibleTimeEnd = moment(centerPoint).add(timeAmount / 2, timeUnit).valueOf();
        this.setState({
            visibleTimeStart,
            visibleTimeEnd,
            interval: visibleTimeEnd - visibleTimeStart,
        });
    }

    onTimelineScrollClick = (newEndDate, jumpForward) => {
        const newEndDateValue = newEndDate.valueOf();
        const currentTimeLengthVisible = this.state.visibleTimeEnd - this.state.visibleTimeStart;
        const multiple = jumpForward ? 1 : -1;
        const amountToPutEndDateInView = currentTimeLengthVisible * (1 / 12) * multiple;
        const visibleTimeStart = moment(newEndDateValue).subtract(currentTimeLengthVisible - amountToPutEndDateInView, 'ms').valueOf();
        if (!supportsSticky) {
            this.updateMedicationItemsPosition(visibleTimeStart);
        }
        this.setState({
            visibleTimeStart,
            visibleTimeEnd: moment(newEndDateValue).add(amountToPutEndDateInView).valueOf()
        });
    }

    handleItemEdit = (ids, obj, widthObj) => {
        // takes an array of ids, and an array of left positions and updates the state
        this.setState({
            items: this.state.items.map((el) => {
                const fixed = obj[el.id];
                const width = widthObj[el.id];
                return ids.indexOf(el.id) !== -1 ? Object.assign({}, el, { fixed, width }) : el;
            })
        });
    }

    updateMedicationItemsPosition = (visibleTimeStart) => {
        const ids = [];
        const fixed = {};
        const width = {};
        this.state.items.forEach((item) => {
            if (item.className==="medication-item") {
                const ratio = this.state.interval/this.calWidth;
                const left = visibleTimeStart;
                const withinBounds = item.end_time.valueOf() - visibleTimeStart - (item.width * ratio) > 0;
                const visible = item.end_time.valueOf() > visibleTimeStart;
                if (left > item.start_time.valueOf() && !item.fixed && withinBounds) {
                    // This is the magic sticking part.  The item gets position set to "fixed" and is placed into the right spot.
                    const element = document.querySelector(`[id="timeline-item-${item.id}"]`);
                    if (element) {
                        const clientRect = element.parentNode.getBoundingClientRect();
                        // some items will overflow because the fixed position will mess with the width of the parent div, so we set maxWidth appropriately
                        // note: 6 is the padding
                        element.parentNode.style.maxWidth = (element.parentNode.parentNode.getBoundingClientRect().width - 6) + "px";
                        element.parentNode.style.position = "fixed";
                        element.parentNode.style.top = clientRect.top + "px";
                        element.parentNode.style.left = document.querySelector(`[class="react-calendar-timeline"]`).getBoundingClientRect().left + "px";

                        ids.push(item.id);
                        fixed[item.id] = true;
                        width[item.id] = clientRect.width;
                    }
                } else if (left <= item.start_time.valueOf()) {
                    // item start time is past the visible start time, no need to stick anymore
                    ids.push(item.id);
                    fixed[item.id] = false;
                    width[item.id] = item.width;
                    const element = document.querySelector(`[id="timeline-item-${item.id}"]`);
                    if (element) {
                        // setting position to static takes care of everything because it will just left align itself
                        element.parentNode.style.position = "static";
                    }

                } else if (!withinBounds && visible) {
                    // the item needs to stop sticking and float right
                    const element = document.querySelector(`[id="timeline-item-${item.id}"]`);
                    if (element) {
                        element.parentNode.style.position = "relative";
                        const clientRect = element.parentNode.getBoundingClientRect();
                        fixed[item.id] = false;
                        width[item.id] = clientRect.width;
                        ids.push(item.id);
                        element.parentNode.style.left = (item.end_time.valueOf() - item.start_time.valueOf() - item.width*ratio)/ratio + "px";
                        element.parentNode.style.top = "0px";
                    }

                } else if (!withinBounds && !visible) {

                }



            }
        });
        this.handleItemEdit(ids, fixed, width);
    }

    onTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
        updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
        if (!supportsSticky) {
            this.updateMedicationItemsPosition(visibleTimeStart);
        }
        this.setState({ visibleTimeStart, visibleTimeEnd });
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
        const { hoverItem, groups, items, defaultTimeStart, defaultTimeEnd, visibleTimeStart, visibleTimeEnd, timeSteps, legendItems } = this.state;
        const { className, condition } = this.props;

        return (
            <div
                id="timeline"
                className={className}
            >
                <div>
                    {this.renderScrollButtons()}
                    {this.renderZoomButtons()}
                </div>
                <HoverItem
                    title={hoverItem.title}
                    text={hoverItem.text}
                    style={hoverItem.style}
                />
                {this.renderedMenu()}
                {/* Null check to ensure timeline is rendered  */}
                {condition ?
                    <Timeline
                        resizeDetector={containerResizeDetector}
                        groups={groups}
                        items={items}
                        defaultTimeStart={defaultTimeStart}
                        defaultTimeEnd={defaultTimeEnd}
                        visibleTimeStart={visibleTimeStart}
                        visibleTimeEnd={visibleTimeEnd}
                        onTimeChange={this.onTimeChange}
                        rightSidebarWidth={0}
                        rightSidebarContent={null}
                        sidebarWidth={0}
                        sidebarContent={null}
                        timeSteps={timeSteps}
                        lineHeight={40}
                        itemHeightRatio={0.7}
                        itemRenderer={Item}
                        canMove={false}
                        canResize={false}
                        canSelect={false}
                        minZoom={86400000}
                        headerRef={this.handleHeaderRef}
                        minimumWidthForItemContentVisibility={1}
                        keys={{
                            groupIdKey: 'id',
                            groupTitleKey: 'title',
                            groupRightTitleKey: 'rightTitle',
                            itemIdKey: 'id',
                            itemTitleKey: 'title',    // key for item div content
                            itemDivTitleKey: 'no hover title', // key for item div title (<div title="text"/>). *suppress hover by passing a title it can't find
                            itemGroupKey: 'group',
                            itemTimeStartKey: 'start_time',
                            itemTimeEndKey: 'end_time'
                        }}
                    /> : null}
                <Legend
                    items={legendItems}
                />
            </div>
        );
    }
}

TimelineEventsVisualizer.propTypes = {
    isWide: PropTypes.bool.isRequired,
    className: PropTypes.string,
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object,
    tdpSearchSuggestions: PropTypes.array
};

export default TimelineEventsVisualizer;
