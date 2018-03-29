import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import FontAwesome from 'react-fontawesome';
import './TabularListVisualizer.css';
import Tooltip from 'rc-tooltip';


/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
class TabularListVisualizer extends Component {
    // Initialize values for insertion popups
    constructor(props) { 
        super(props);
        this.state = {
            elementToDisplayMenu: null,
            positionTop: 0, // Just so the menu can be spotted more easily
            positionLeft: 0, // Same as above
        }
    }

    render() {
        const subsections = this.getSubsections();

        return (
            <div className="tabular-list">
                {this.renderedSubsections(subsections)}
            </div>
        );
    }

    // Get a list of subsections to display given the current condition section
    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = [];
        conditionSection.data.forEach((subsection) => {
            subsections.push(subsection);
        });

        return subsections;
    }

    renderedSubsections(subsections) {
        const isSingleColumn = !this.props.isWide;
        const {patient, condition, sectionTransform} = this.props;

        if (subsections.length === 0) return null;
        let transformedSubsections = subsections.map((subsection) => {
            if (!Lang.isUndefined(sectionTransform) && !Lang.isNull(sectionTransform)) {
                return sectionTransform(patient, condition, subsection);
            } else {
                return subsection;
            }
        });
        
        let list = this.getList(transformedSubsections[0]);
        const numColumns = (list.length === 0) ? 1 : list[0].length;

        // currently including 2 column sections with a single subsection to use full width. could change to only use left side
        // easily if we get feedback that people don't like this.
        if (isSingleColumn || numColumns > 2 || transformedSubsections.length === 1) {
            return transformedSubsections.map((subsection, index) => {
                return this.renderedSubsection(subsection, index);
            });
        }

        // We are doing 2 columns of sections
        // Grab the sections from transformedSubsections and create 2 arrays, one for the first half of the sections and another
        // for the second half of sections
        let numRows = 0;
        transformedSubsections.forEach((subsection) => {
           subsection.list = this.getList(subsection);
           numRows += subsection.list.length + 1;
        });
        
        let halfRows = numRows / 2;
        
        let firstColumnRows = 0;
        let firstHalfSections = [];
        let secondHalfSections = [];
        transformedSubsections.forEach((subsection) => {
            if (firstColumnRows === 0 || ((firstColumnRows + subsection.list.length) <= halfRows)) {
                firstColumnRows += subsection.list.length;
                subsection.column = 1;
                firstHalfSections.push(subsection);
            } else {
                secondHalfSections.push(subsection);
                subsection.column = 2;
            }
        });

        let ind = 0;
        const renderedFirstHalf = firstHalfSections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++);
        });
        const renderedSecondHalf = secondHalfSections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++);
        });

        // Display the data in 2 columns. The first column displays the first half
        // of the sections in one table and the second column displays the second half of the sections in a second table
        return (
            <Row start="xs">
                <Col sm={6}>
                    {renderedFirstHalf}
                </Col>
                <Col sm={6}>
                    {renderedSecondHalf}
                </Col>
            </Row>
        );
    }
    
    // Render each subsection as a table of values 
    renderedSubsection(transformedSubsection, subsectionindex) {
        const list = this.getList(transformedSubsection);
        let preTableCount = null;
        if (transformedSubsection.preTableCount) {
            preTableCount = `${list.length} total ${transformedSubsection.preTableCount}`;
        }
        let subsectionname = null;
        if (transformedSubsection.name && transformedSubsection.name.length > 0) {
            subsectionname = <h2 className="subsection list-subsection-header"><span>{transformedSubsection.name}</span></h2>;
        }
        if (list.length <= 0) {
            return <div key={subsectionindex}>{subsectionname}<h2 style={{paddingTop: '10px'}}>None</h2></div>;
        }
        let headings = null;
        if (transformedSubsection.headings) {
            let renderedColumnHeadings = [];
            transformedSubsection.headings.forEach((heading, headingIndex) => {
                renderedColumnHeadings.push(<th key={subsectionindex + "-heading-" + headingIndex} className="list-column-heading">{heading}</th>);
            });
            headings = <tr>{renderedColumnHeadings}</tr>;
        }
        const numberOfHeadings = transformedSubsection.headings ? transformedSubsection.headings.length : list[0].length;

        return (
            <div key={subsectionindex}>
                {preTableCount}
                {subsectionname}
                <table>
                    <tbody>
                    {headings ? headings : <tr></tr>}
                        {this.renderedListItems(subsectionindex, list, numberOfHeadings)}
                    </tbody>
                </table>
                <ul>
                    {this.renderedPostTableList(transformedSubsection.postTableList)}
                </ul>
            </div>
        );
    }

    // Get a formatted list of objects corresponding to every item to be displayed
    getList(subsection) {
        const {patient, condition, conditionSection } = this.props;
        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }
        const items = subsection.items;
        const itemsFunction = subsection.itemsFunction;
        let list;

        if (Lang.isUndefined(items)) {
            list = itemsFunction(patient, condition, subsection);
        } else {
            list = items;
        }
        return list;
    }

    // Render all list items 
    renderedListItems(subsectionindex, list, numberOfHeadings) {
        let onClick, hoverClass, rowClass, itemClass = "";
        return list.map((item, index) => {
            // Handles case where this method is passed a NameValuePair or other type accidentally, or null
            if(!Lang.isArray(item) || Lang.isEmpty(item)){
                itemClass = "list-missing";
                item = [ "Missing data" ];
                onClick = null;
                hoverClass = null;
            } else if(item[0].unsigned){
                rowClass = "list-unsigned";
                itemClass = "list-unsigned";
                hoverClass = "list-button-hover";
            } else {
                rowClass = "list-captured";
                itemClass = "list-captured";
                hoverClass = "list-button-hover";
            }
            return this.renderedListItem(item.slice(0,numberOfHeadings), subsectionindex, index, rowClass, itemClass, onClick, hoverClass);
        });
    }

    renderedPostTableList(itemsFunction) {
        const {patient, condition} = this.props;
        if (patient == null || condition == null || Lang.isUndefined(itemsFunction)) return [];

        const list = itemsFunction(patient, condition);
        return list.map((element, index) => {
            const elementId = `post-item-${index}`;
            const elementText = Lang.isNull(element) ? null : (Lang.isObject(element) ? element.value : element);
            if (this.props.allowItemClick) {
                return (
                    <li key={elementId}>
                        {this.renderedStructuredData(elementText, element, elementId, elementText)}
                    </li>
                );
            } else {
                return (
                    <li key={elementId}>
                        <span>
                            {elementText}
                        </span>
                    </li>
                );
            }
        });
    }

    renderedStructuredData(item, element, elementId, elementText) {
        return (
            <div>
                <span
                    data-test-summary-item={item}
                    onClick={(event) => this.openInsertionMenu(event, elementId)}
                >
                    {elementText}
                </span>
                {this.renderedMenu(element, elementId, elementText)}
            </div>
        );
    }

    // Render a given list item as a row in a table
    renderedListItem(item, subsectionindex, index, rowClass, itemClass, onClick, hoverClass) {
            // Array of all columns
            const renderedColumns = [];
            
            let isInsertable, elementText;
            const numColumns = item.length;
            const colSize = (100 / numColumns) + "%";
            let isUnsigned;
            item.forEach((element, arrayIndex) => {
                const elementId = `${subsectionindex}-${index}-item-${arrayIndex}`
                let columnItem = null;
                isInsertable = (Lang.isNull(element) ? false : (Lang.isUndefined(element.isInsertable) ? true : element.IsInsertable));
                elementText = Lang.isNull(element) ? null : (Lang.isObject(element) ? element.value : (Lang.isArray(element) ? element[0] : element));
                const longElementText = elementText;
                if (!Lang.isNull(elementText) && elementText.length > 100) elementText = elementText.substring(0, 100) + "...";
                if (Lang.isNull(elementText)) {
                    itemClass = 'list-missing';
                } else {
                    if (Lang.isArray(elementText)) {
                        isUnsigned = elementText[1];
                        elementText = elementText[0];
                    } else {
                        isUnsigned = false;
                    }
                    itemClass = (isUnsigned ? 'list-unsigned' : 'list-captured');
                }
                if(Lang.isNull(element) || Lang.isUndefined(elementText) || Lang.isNull(elementText) || (typeof(elementText) === 'string' && elementText.length === 0)) {
                    columnItem = (
                        <td
                            className={"list-missing"}
                            data-test-summary-item={item[0]}
                            key={elementId}
                        >
                            <span>
                                Missing Data
                            </span>
                        </td>
                    );
                } else if (this.props.allowItemClick && isInsertable) {
                    // Get value off of element given two cases:
                    // 1. Element type is shortcut, value is returned by element.value()
                    // 2. Element type is string, the value is just the string

                    // Make unique id for each value
                    columnItem = (
                        <td width={colSize}
                            className={itemClass}
                            key={elementId}
                        >
                            {this.renderedStructuredData(item[0].value, element, elementId, elementText)}
                        </td>

                    );
                } else if (!isInsertable) {
                    columnItem = (
                        <td width={colSize}
                            key={elementId}
                        >
                            <span>
                                {elementText}
                            </span>
                        </td>
                    );
                } else {
                    columnItem = (
                        <td width={colSize}
                            className={itemClass}
                            data-test-summary-item={item[0].value}
                            key={elementId}
                        >
                            <span>
                                {elementText}
                            </span>
                        </td>
                    );
                }

                if (!Lang.isNull(elementText) && elementText.length > 100) {
                    const text = <span>{longElementText}</span>
                    columnItem = (
                        <Tooltip
                            key={elementId}
                            overlayStyle={{ 'visibility': true }}
                            placement="top"
                            overlayClassName={`tabular-list-tooltip`}
                            overlay={text}
                            destroyTooltipOnHide={true}
                            mouseEnterDelay={0.5}
                            onMouseEnter={this.mouseEnter}
                            onMouseLeave={this.mouseLeave}
                        >
                            {columnItem}
                        </Tooltip>
                    )
                }
                renderedColumns.push(columnItem);
            });

            return (
                <tr 
                    key={`${subsectionindex}-${index}-item`} 
                    className={rowClass}
                >
                    {renderedColumns}  
                </tr>
            );
    }

    // renders Menu for element and associated actions as Menu items
    // Will check whether an action should be rendered as a Menu item based on criteria of each action
    renderedMenu = (element, elementId, elementText) => {
        const {
            elementToDisplayMenu,
            positionLeft,
            positionTop,
        } = this.state;
        const onMenuItemClicked = (fn, element) => {
            const callback = () => {
                fn(element);
            }
            this.closeInsertionMenu(callback);
        }

        let isSigned = true;
        if (Lang.isArray(element.value)) {
            isSigned = !element.value[1];
        }
        // Filter actions by whenToDisplay property on action
        const filteredActions = this.props.actions.filter((a) => {
            if (a.whenToDisplay.valueExists && Lang.isNull(element)) return false;
            if (a.whenToDisplay.existingValueSigned !== "either" && a.whenToDisplay.existingValueSigned !== isSigned) return false;
            return a.whenToDisplay.editableNoteOpen === this.props.allowItemClick;
        });
        if (filteredActions.length === 0) return null;
        return (
            <Menu
                open={elementToDisplayMenu === elementId}
                anchorReference="anchorPosition"
                anchorPosition={{ top: positionTop, left: positionLeft }}
                onClose={(event) => this.closeInsertionMenu()}
                className="narrative-inserter-tooltip"
            >
                {
                    // map filteredActions to MenuItems
                    filteredActions.map((a, index) => {
                        const icon = a.icon ? (
                            <ListItemIcon>
                                <FontAwesome name={a.icon} />
                            </ListItemIcon>
                        ) : null;
                        const text = a.text.replace("{elementText}", elementText);
                        return (
                            <MenuItem
                                key={`${elementId}-${index}`}
                                onClick={() => onMenuItemClicked(a.handler, element)}
                                className="narrative-inserter-box"
                            >
                                {icon}
                                <ListItemText className='narrative-inserter-menu-item' inset primary={text} />
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        );
    }
    
    // Opens the insertion menu for the given element id, based on cursor location
    openInsertionMenu = (event, elementId) => { 
        // Get menu coordinates
        let x = event.clientX;  // Get the horizontal coordinate of mouse
        x += 4;                // push menu a little to the right
        let y = event.clientY;  // Get the vertical coordinate of mouse
        y += 7;                // push a little to the bottom of cursor

        this.setState({ 
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
}

TabularListVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    sectionTransform: PropTypes.func,
    isWide: PropTypes.bool,
    allowItemClick: PropTypes.bool,
    actions: PropTypes.array
};

export default TabularListVisualizer;
