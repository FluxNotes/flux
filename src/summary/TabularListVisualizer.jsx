import React, {Component} from 'react';
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

    // Get a formatted list of objects corresponding to every item to be displayed
    getList(subsection) {
        const {patient, condition, conditionSection} = this.props;
        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        const itemsFunction = subsection.itemsFunction;

        const list = itemsFunction(patient, condition, subsection);

        return list;
    }

    // Render subsections one by one
    renderedSubsections(subsections) {
        return subsections.map((subsection, index) => {
            return this.renderedSubsection(subsection, index);
        });
    }

    // Render each subsection as a table of values 
    renderedSubsection(subsection, index) {
        const list = this.getList(subsection);

        if (list.length <= 0) {
            return <h2 key={index}>None</h2>;
        }
        let headings = null;
        if (subsection.headings) {
            let renderedColumnHeadings = [];
            subsection.headings.forEach((heading, headingIndex) => {
                renderedColumnHeadings.push(<th key={index + "-heading-" + headingIndex} className="list-column-heading">{heading}</th>);
            });
            headings = <tr>{renderedColumnHeadings}</tr>;
        }
        
        let subsectionname = null;
        if (subsection.name && subsection.name.length > 0) {
            subsectionname = <tr><td className="list-subsection-header">{subsection.name}</td></tr>;
        }

        // TODO: temp variable for now to limit number of columns to be displayed to just the number of headings. Eventually remove this
        const numberOfHeadings = subsection.headings.length;

        return (
            <table key={index}>
                <tbody>
                {headings}
                    {subsectionname}
                    {this.renderedListItems(list, numberOfHeadings)}
                </tbody>
            </table>
        );
    }

    // Render a given list item as a cell in a table
    renderedListItem(item, index, rowClass, itemClass, onClick, hoverClass) {
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
            
            item.forEach((element, arrayIndex) => {
                let columnItem = null;
                if(Lang.isNull(element)){
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
                } else if (this.props.allowItemClick) {
                    // Get value off of element given two cases: 
                    // 1. Element type is shortcut, value is returned by element.value()
                    // 2. Element type is string, the value is just the string
                    const elementText = (element.shortcut) ? element.value : element;
                    // Make unique id for each value
                    const elementId = `${index}-item-${arrayIndex}`
                    columnItem = (
                        <td 
                            className={itemClass} 
                            key={elementId}
                        >   
                            <span
                                data-test-summary-item={item[0]} 
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
                } else { 
                    const elementText = (element.shortcut) ? element.value : element;

                    columnItem = (
                        <td 
                            className={itemClass} 
                            data-test-summary-item={item[0]} 
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
    
    // Render all list items 
    renderedListItems(list, numberOfHeadings) {
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
            return this.renderedListItem(item.slice(0,numberOfHeadings), index, rowClass, itemClass, onClick, hoverClass);
        });
    }

    render() {
        const subsections = this.getSubsections();

        return (
            <div className="tabular-list">
                {this.renderedSubsections(subsections)}
            </div>
        );
    }
}

TabularListVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default TabularListVisualizer;
