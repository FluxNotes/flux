import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TableCell, TableRow } from 'material-ui/Table';
import Tooltip from 'rc-tooltip';
import TabularListVisualizerTable from './TabularListVisualizerTable';
import './TabularListVisualizer.css';
import VisualizerMenu from './VisualizerMenu.jsx';
import Visualizer from './Visualizer';

/*
 A table view of one or more data summary items. Items could be pathology-related,
 diagnosis-related, genetics-related, etc.
 */
export default class TabularListVisualizer extends Visualizer {
    // Initialize values for insertion popups
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            elementToDisplayMenu: null,
            positionTop: 0,  // Just so the menu can be spotted more easily
            positionLeft: 0, // Same as above
        };
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
        const { patient, condition, conditionSection } = this.props;
        if (patient===null || condition===null || conditionSection===null) return [];
        return conditionSection.data.map((subsection) => {
            return subsection;
        });
    }

    renderedSubsections(subsections) {
        if (subsections.length === 0) return null;

        // If the isWide flag is set, all sections become single-column due to lack of real estate
        let isSingleColumn = this.props.conditionSection.isWide !== undefined ? !this.props.conditionSection.isWide : !this.props.isWide;

        // Iterate over all subsections to determine the max number of columsn taken up by subsections
        const maxNumColumns = Collection.reduce(subsections, (maxSize, subsection) => {
            // if this subsection has no dataCache, or if the length of a single element in that cache is less than our maxSize, stick with max;
            // else, the single element has more attributes than our previous max; use its length as new max.
            return (subsection.data_cache.length === 0 || maxSize >= subsection.data_cache[0].length) ? maxSize : subsection.data_cache[0].length;
        }, 1) // Start wiht a minimum of one column

        // If there is only space for one column, if the maxNumber of columns is greater than 2, or if number of subsections we have is just one,
        // render subsections using full width available.
        if (isSingleColumn || maxNumColumns > 2 || subsections.length === 1) {
            return subsections.map((subsection, index) => {
                const singleColumnLayout = true;
                return this.renderedSubsection(subsection, index, singleColumnLayout, subsections.length === 1);
            });
        }
        // Else, we break up subsections into two columns of data
        //
        // Grab the sections from subsections and create 2 arrays, one for the first half of the sections and another
        // for the second half of sections
        let numRows = 0;
        subsections.forEach((subsection) => {
            numRows += subsection.data_cache.length + 1;
        });

        let halfRows = numRows / 2;

        let firstColumnRows = 0;
        let firstHalfSections = [];
        let secondHalfSections = [];
        subsections.forEach((subsection) => {
            if (firstColumnRows === 0 || ((firstColumnRows + subsection.data_cache.length) <= halfRows)) {
                firstColumnRows += subsection.data_cache.length;
                subsection.column = 1;
                firstHalfSections.push(subsection);
            } else {
                secondHalfSections.push(subsection);
                subsection.column = 2;
            }
        });

        let ind = 0;
        const renderedFirstHalf = firstHalfSections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++, false, subsections.length === 1);
        });
        const renderedSecondHalf = secondHalfSections.map((subsection) => {
            return this.renderedSubsection(subsection, ind++, false, subsections.length === 1);
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
    renderedSubsection(transformedSubsection, subsectionindex, isSingleColumn, isSingleSection) {

        const list = transformedSubsection.data_cache;

        let preTableCount = null;
        if (transformedSubsection.preTableCount) {
            preTableCount = `${list.length} total ${transformedSubsection.preTableCount}`;
        }

        if (transformedSubsection.displayFunction && !transformedSubsection.displayFunction()) {
            return <div key={subsectionindex}></div>;
        }

        let subsectionName = null;
        let subsectionNameHTML = null;

        if (transformedSubsection.nameFunction) {
            subsectionName = transformedSubsection.nameFunction(this.props.patient);
        } else {
            subsectionName = transformedSubsection.name;
        }

        let nameSuffix = '';
        if (transformedSubsection.nameSuffix) {
            nameSuffix = <span>{transformedSubsection.nameSuffix}</span>;
        }
        if (subsectionName && subsectionName.length > 0) {
            const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                return s.valueTitle === 'Subsection' && s.subsection === subsectionName;
            });
            let subsectionClassName = matchingSubsection ? 'highlighted' : '';
            if (matchingSubsection && !_.isNull(this.props.highlightedSearchSuggestion)
                && this.props.highlightedSearchSuggestion.subsection === matchingSubsection.subsection
                && matchingSubsection.valueTitle === 'Subsection') subsectionClassName += ' selected';
            subsectionNameHTML = <h2 className="subsection list-subsection-header"><span className={subsectionClassName}>{subsectionName}</span>{nameSuffix}</h2>;
        }

        if (list.length <= 0) {
            return <div key={subsectionindex}>{subsectionNameHTML}<h2 className="no-entries">None</h2></div>;
        }

        let headings = null;
        if (transformedSubsection.headings) {
            let renderedColumnHeadings = [];
            transformedSubsection.headings.forEach((heading, headingIndex) => {
                renderedColumnHeadings.push(<th key={subsectionindex + "-heading-" + headingIndex} className="list-column-heading">{heading}</th>);
            });
            headings = <TableRow>{renderedColumnHeadings}</TableRow>;
        }

        const numberOfHeadings = transformedSubsection.headings ? transformedSubsection.headings.length : list[0].length;
        let subsectionActions = [];
        if (transformedSubsection.actions != null) {
            subsectionActions = transformedSubsection.actions;
        }

        let classes = (isSingleColumn) ? "single-column" : "multi-column";
        classes += (isSingleSection) ? " single-section" : " multi-section";

        return (
            <div key={subsectionindex} className={classes}>
                {preTableCount}
                {subsectionNameHTML}

                <TabularListVisualizerTable
                    headers={headings}
                    rows={this.renderedListItems(subsectionindex, list, numberOfHeadings, subsectionName, subsectionActions, transformedSubsection.formatFunction)}
                />
                <ul>
                    {this.renderedPostTableList(transformedSubsection.postTableList, subsectionName, subsectionActions, -1)}
                </ul>
            </div>
        );
    }

    // Render all list items
    renderedListItems(subsectionindex, list, numberOfHeadings, subsectionName, subsectionActions, formatFunction) {
        return list.map((item, index) => {
            return this.renderedListItem(item.slice(0, numberOfHeadings), subsectionindex, index, "list-captured", subsectionName, subsectionActions, formatFunction);
        });
    }

    renderedPostTableList(itemsFunction, subsectionName, subsectionActions, arrayIndex) {
        const {patient, condition} = this.props;
        if (patient===null || condition===null || _.isUndefined(itemsFunction)) return [];
        const list = itemsFunction(patient, condition);
        return list.map((element, index) => {
            const elementId = `post-item-${index}`;
            const elementText = _.isNull(element) ? null : (_.isObject(element) ? element.value : element);
            if (this.props.allowItemClick) {
                return (
                    <li key={elementId}>
                        {this.renderedStructuredData(list[0].value, element, elementId, elementText, subsectionName, subsectionActions, arrayIndex)}
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

    renderedStructuredData(firstCellValue, col, elementId, elementText, subsectionName, subsectionActions, arrayIndex, when, highlightedClass) {
        return (
            <div>
                <span
                    className={highlightedClass}
                    data-test-summary-item={firstCellValue}
                    onClick={(event) => this.openInsertionMenu(event, elementId)}
                >
                    {elementText}
                </span>
                {this.renderedMenu(firstCellValue, col, elementId, elementText, subsectionName, subsectionActions, arrayIndex)}
            </div>
        );
    }

    // Render a given list item as a row in a table
    renderedListItem(row, subsectionindex, itemIndex, rowClass, subsectionName, subsectionActions, formatFunction) {
        // Array of all columns for row (item)
        const renderedColumns = [];

        const numColumns = row.length;
        const colSize = (100 / numColumns) + "%";
        //const colSize = "auto";

        if (subsectionActions.length > 0  || this.props.actions.length > 0) {
            rowClass += " has-action-menu";
        }
        row.forEach((col, colIndex) => {
            renderedColumns.push(this.renderColumn(row, subsectionindex, itemIndex, subsectionName, subsectionActions, formatFunction, col, colIndex, colSize));
        });

        return (
            <TableRow
                key={`${subsectionindex}-${itemIndex}-item`}
                className={rowClass}
            >
                {renderedColumns}
            </TableRow>
        );
    }

    renderColumn = (row, subsectionindex, itemIndex, subsectionName, subsectionActions, formatFunction, col, colIndex, colSize) => {
        const columnId = `${subsectionindex}-${itemIndex}-item-${colIndex}`;
        const isInsertable = _.isUndefined(col.isInsertable) ? true : col.isInsertable;
        let columnItem = null;
        const when = (col.value ? (col.value.when || null) : null);
        const isUnsigned = (col.value) ? col.value.isUnsigned || false : false;
        let colText = _.isObject(col.value) ? col.value.value : col.value;
        const longElementText = colText;

        if (!_.isNull(colText) && colText.length > 100) colText = colText.substring(0, 100) + "...";

        let itemClass = isUnsigned ? 'list-unsigned' : 'list-captured';
        if (subsectionActions.length > 0 || this.props.actions.length > 0) {
            itemClass += " has-action-menu";
        }

        const isMissingData = _.isUndefined(colText) || _.isNull(colText) || (typeof(colText) === 'string' && colText.length === 0);

        // Highlight matching key or value
        const highlightedData = this.props.tdpSearchSuggestions.find(s => {
            let doesMatch = false;
            if (s.field === 'value') {
                doesMatch = isMissingData ? s.contentSnapshot === 'Missing Data' : s.contentSnapshot === colText;
            } else if (s.field === 'valueTitle') {
                doesMatch = s.valueTitle === colText;
            }

            // Enforce uniqueness of table cell id
            const nameValueId = (this.props.conditionSection.name + ' ' + row[0].value).toLowerCase().replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/ /g, '_');
            const indexId = `${(this.props.conditionSection.name.toLowerCase() + ' ' + subsectionName.toLowerCase()).replace(/ /g, '_')}_${itemIndex}_${colIndex}`;
            const matchesId = s.id === nameValueId || s.id === indexId;

            return s.section === this.props.conditionSection.name && matchesId && doesMatch;
        });

        let highlightedClass = highlightedData ? ' highlighted' : '';
        if (_.isEqual(highlightedData, this.props.highlightedSearchSuggestion)) highlightedClass += ' selected';

        // If this section has an associated formatFunction (that
        // returns a specific) CSS class, it is applied to elementText.
        if (formatFunction) {
            itemClass += " " + formatFunction(colText, col, colIndex);
        }

        // Make unique key for each value
        if (isMissingData) {
            columnItem = (
                <TableCell
                    data-test-summary-item={row[0]}
                    key={columnId}
                >
                    <span className={"list-missing" + highlightedClass}>
                        Missing Data
                    </span>
                </TableCell>
            );
        } else if (isInsertable) {
            const whenRendering = when ? ` (as of ${when})` : '';
            columnItem = (
                <TableCell
                    width={colSize}
                    key={columnId}
                >
                    <span className={itemClass}>
                        {this.renderedStructuredData(row[0].value, col, columnId, colText, subsectionName, subsectionActions, colIndex, when, highlightedClass)}
                    </span>
                    <span>
                        {whenRendering}
                    </span>
                </TableCell>
            );
        } else {
            columnItem = (
                <TableCell
                    width={colSize}
                    key={columnId}
                >
                    <span className={highlightedClass}>
                        {colText}
                    </span>
                </TableCell>
            );
        }

        if (!_.isNull(colText) && !_.isUndefined(colText) && colText.length > 100) {
            const text = <span>{longElementText}</span>;
            columnItem = (
                <Tooltip
                    key={columnId}
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
            );
        }
        return columnItem;
    }

    // renders Menu for element and associated actions as Menu items
    // Will check whether an action should be rendered as a Menu item based on criteria of each action
    renderedMenu = (item, element, elementId, elementText, subsectionName, subsectionActions, arrayIndex) => {
        const { elementToDisplayMenu, positionLeft, positionTop } = this.state;

        // Item represents the name of the row/section of the current element.
        const onMenuItemClicked = (fn, element, item) => {
            const callback = () => {
                fn(element, item);
            };
            this.closeInsertionMenu(callback);
        };
        let isSigned = true;

        isSigned = !element.isUnsigned || true;

        return (
            <VisualizerMenu
                allowItemClick={this.props.allowItemClick}
                arrayIndex={arrayIndex}
                closeInsertionMenu={this.closeInsertionMenu}
                element={element}
                elementDisplayingMenu={elementToDisplayMenu}
                elementId={elementId}
                elementText={elementText}
                isSigned={isSigned}
                onMenuItemClicked={onMenuItemClicked}
                positionLeft={positionLeft}
                positionTop={positionTop}
                rowId={item}
                subsectionName={subsectionName}
                unfilteredActions={this.props.actions.concat(subsectionActions)}
            />
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
    isWide: PropTypes.bool,
    allowItemClick: PropTypes.bool,
    actions: PropTypes.array,
    tdpSearchSuggestions: PropTypes.array
};
