import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import FontAwesome from 'react-fontawesome';
import './TabularListVisualizer.css';


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
            if (firstColumnRows + subsection.list.length <= halfRows) {
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
            subsectionname = <tr><td className="list-subsection-header">{transformedSubsection.name}</td></tr>;
        }
        if (list.length <= 0) {
            return <div>{subsectionname}<h2 style={{paddingTop: '10px'}} key={subsectionindex}>None</h2></div>;
        }
        let headings = null;
        if (transformedSubsection.headings) {
            let renderedColumnHeadings = [];
            transformedSubsection.headings.forEach((heading, headingIndex) => {
                renderedColumnHeadings.push(<th key={subsectionindex + "-heading-" + headingIndex} className="list-column-heading">{heading}</th>);
            });
            headings = <tr>{renderedColumnHeadings}</tr>;
        }
        
        

        // TODO: temp variable for now to limit number of columns to be displayed to just the number of headings. Eventually remove this
        const numberOfHeadings = transformedSubsection.headings ? transformedSubsection.headings.length : list[0].length;

        return (
            <div key={subsectionindex}>
                {preTableCount}
                <table>
                    <tbody>
                    {headings}
                        {subsectionname}
                        {this.renderedListItems(subsectionindex, list, numberOfHeadings)}
                    </tbody>
                </table>
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
            } else {
                rowClass = "list-captured";
                itemClass = "list-captured";
                hoverClass = "list-button-hover";
            }
            return this.renderedListItem(item.slice(0,numberOfHeadings), subsectionindex, index, rowClass, itemClass, onClick, hoverClass);
        });
    }

    // Render a given list item as a cell in a table
    renderedListItem(item, subsectionindex, index, rowClass, itemClass, onClick, hoverClass) {
            // Array of all columns
            const renderedColumns = [];
            const {
              elementToDisplayMenu,
              positionLeft,
              positionTop,
            } = this.state;

            const insertItem = (element) => {
                const callback = () => { 
                    this.props.onItemClicked(element);
                };
                this.closeInsertionMenu(callback);
            };
            
            let isInsertable, elementText;
            const numColumns = item.length;
            const colSize = (100 / numColumns) + "%";
            
            item.forEach((element, arrayIndex) => {
                let columnItem = null;
                isInsertable = (Lang.isNull(element) ? false : (Lang.isUndefined(element.isInsertable) ? true : element.IsInsertable));
                elementText = Lang.isNull(element) ? null : (Lang.isObject(element) ? element.value : element);
                if(Lang.isNull(element) || elementText.length === 0) {
                    columnItem = (
                        <td 
                            className={"list-missing"} 
                            data-test-summary-item={item[0]} 
                            key={index + "-item-" + arrayIndex}
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
                    const elementId = `${subsectionindex}-${index}-item-${arrayIndex}`
                    columnItem = (
                        <td width={colSize}
                            className={itemClass} 
                            key={elementId}
                        >   
                            <span
                                data-test-summary-item={item[0].value} 
                                onClick={(event) => this.openInsertionMenu(event, elementId)}
                            >
                                {elementText}
                            </span>
                            <Menu
                                open={elementToDisplayMenu === elementId}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: positionTop, left: positionLeft }}
                                onClose={(event) => this.closeInsertionMenu()}
                                className="narrative-inserter-tooltip"
                            >
                                <MenuItem   
                                    onClick={() => insertItem(element)}
                                    className="narrative-inserter-box"
                                >
                                    <ListItemIcon>
                                        <FontAwesome name="plus"/>
                                    </ListItemIcon>
                                    <ListItemText className='narrative-inserter-menu-item' inset primary={`Insert "${elementText}"`} />
                                </MenuItem>
                            </Menu>
                        </td>
                    );
                } else if (!isInsertable) {
                    columnItem = (
                        <td width={colSize}
                            key={index + "-item-" + arrayIndex}
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
                            key={index + "-item-" + arrayIndex}
                        >
                            <span>
                                {elementText}
                            </span>
                        </td>
                    );
                }
                renderedColumns.push(columnItem);
            });
            
            return (
                <tr 
                    key={index} 
                    className={rowClass}
                >
                    {renderedColumns}  
                </tr>
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
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default TabularListVisualizer;
