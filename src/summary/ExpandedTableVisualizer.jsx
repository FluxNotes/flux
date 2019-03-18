import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Table, { TableBody, TableRow, TableCell, TablePagination, TableFooter } from 'material-ui/Table';
import Lang from 'lodash';
import VisualizerMenu from './VisualizerMenu';
import Visualizer from './Visualizer';
import './ExpandedTableVisualizer.css';

/*
 A list of expanded tables for each ROS. The date is automatically shown and 
 can be expanded to show the ROS questions for that date.
 */
export default class ExpandedTableVisualizer extends Visualizer {
    // Initialize values for ROS cleanup
    constructor(props) {
        super(props);
        const { conditionSection } = this.props;
        const rosArray = conditionSection.data[0].data_cache;

        // initialize expandedTables so that first table is expanded
        const expandedTables = rosArray.map((_, i) => i === 0);

        this.state = {
            expandedTables, // indices of the tables that are expanded
            page: 0, // page that is being displayed, each page displays 4 ROS
            elementDisplayingMenu: null,
            positionTop: 0,
            positionLeft: 0,
        };
    }

    getPositiveQuestions = (questions) => {
        let positiveQuestions = questions.filter(q => q.value === 'positive');
        return positiveQuestions;
    }

    getNegativeQuestions = (questions) => {
        let negativeQuestions = questions.filter(q => q.value === 'negative');
        return negativeQuestions;
    }

    toggleExpandedTable = (tableIndex) => {
        const expandedTables = [...this.state.expandedTables];
        expandedTables[tableIndex] = !expandedTables[tableIndex];
        this.setState({ expandedTables });
    }

    renderedQuestion(question, date, index) {
        let nameClass;
        let valueClass = '';

        // search highlighting logic
        this.props.tdpSearchSuggestions.forEach(s => {
            if (s.field === 'valueTitle' && s.valueTitle === question.name) {
                nameClass = 'highlighted '
            } else if (s.field === 'value' && s.inputValue === question.value) {
                valueClass = 'highlighted ';
            }
        });

        // search highlight select logic
        if (!Lang.isNull(this.props.highlightedSearchSuggestion)) {
            if (this.props.highlightedSearchSuggestion.date === date && this.props.highlightedSearchSuggestion.valueTitle === question.name) {
                if (this.props.highlightedSearchSuggestion.field === 'valueTitle') {
                    nameClass += 'selected '
                } else if (this.props.highlightedSearchSuggestion.field === 'value') {
                    valueClass += 'selected '
                }
            }
        }

        const elementId = `${question.value}-${date}-${index}`;

        return (
            <TableRow key={index}>
                <TableCell><span className={nameClass}>{question.name}</span></TableCell>
                <TableCell>
                    <span
                        className={`${valueClass} list-captured has-action-menu`}
                        onClick={(event) => this.openInsertionMenu(event, elementId)}
                    >
                        {question.value}
                    </span>
                    {this.renderedMenu(elementId, question.value, index)}
                </TableCell>
            </TableRow>
        );
    }

    renderedPositiveQuestions(positiveQuestions, date) {
        let indx = 0;
        const renderedPositiveQuestions = positiveQuestions.map((question) => {
            return this.renderedQuestion(question, date, indx++);
        });
        return (
            <Table className="positive-questions-table">
                <TableBody>{renderedPositiveQuestions}</TableBody>
            </Table>
        );
    }

    renderedNegativeQuestions(negativeQuestions, date) {
        const halfRows = negativeQuestions.length / 2;
        let firstHalfQuestions = [];
        let secondHalfQuestions = [];
        negativeQuestions.forEach((question, index) => {
            if (index < halfRows) {
                firstHalfQuestions.push(question);
            } else {
                secondHalfQuestions.push(question);
            }
        });

        let indx = 0;
        const renderedFirstHalf = firstHalfQuestions.map((question) => {
            return this.renderedQuestion(question, date, indx++);
        });
        const renderedSecondHalf = secondHalfQuestions.map((question) => {
            return this.renderedQuestion(question, date, indx++);
        });

        // Display the negative questions in 2 columns. The first column displays the first half
        // of the questions in one table and the second column displays the second half of the questions in a second table
        return (
            <Row start="xs">
                <Col sm={6}>
                    <Table className="negative-questions-table">
                        <TableBody>{renderedFirstHalf}</TableBody>
                    </Table>
                </Col>
                <Col sm={6}>
                    <Table className="negative-questions-table">
                        <TableBody>{renderedSecondHalf}</TableBody>
                    </Table>
                </Col>
            </Row>
        );
    }

    renderedTableHeader(date, questionCount, positiveQuestionCount, tableIndex, expanded) {
        let dateClass, iconClass;

        // determine expanded icon
        if (expanded) iconClass = 'fa fa-angle-down';
        else iconClass = 'fa fa-angle-right';

        // search date highlighting logic
        this.props.tdpSearchSuggestions.forEach(s => {
            if (s.valueTitle === 'Date' && s.date === date) {
                dateClass = 'highlighted ';
            }
        });

        // search highlight select logic
        if (!Lang.isNull(this.props.highlightedSearchSuggestion)) {
            if (this.props.highlightedSearchSuggestion.valueTitle === 'Date' && this.props.highlightedSearchSuggestion.date === date) {
                dateClass += 'selected ';
            }
        }

        return (
            <div className="expanded-table-header">
                <Row start="xs">
                    <Col sm={6}>
                        <span aria-hidden="true" className={iconClass}
                            onClick={() => this.toggleExpandedTable(tableIndex)}></span>
                        <span className={dateClass}>{date}</span>
                    </Col>
                    <Col sm={6}>{positiveQuestionCount} of {questionCount} positive</Col>
                </Row>
            </div>
        );
    }

    renderedTableBody(date, negativeQuestions, positiveQuestions, expanded) {
        if (!expanded) return null;
        return (
            <div className="expanded-table-body">
                {this.renderedPositiveQuestions(positiveQuestions, date)}
                {this.renderedNegativeQuestions(negativeQuestions, date)}
            </div>
        );
    }


    renderedTable(ros, tableIndex) {
        const positiveQuestions = this.getPositiveQuestions(ros.questions);
        const negativeQuestions = this.getNegativeQuestions(ros.questions);
        const expanded = this.state.expandedTables[tableIndex] || false;

        return (
            <div className="expanded-table" key={tableIndex}>
                {this.renderedTableHeader(ros.date, ros.questions.length, positiveQuestions.length, tableIndex, expanded)}
                {this.renderedTableBody(ros.date, negativeQuestions, positiveQuestions, expanded)}
            </div>
        );
    }

    renderedTables(rosArray, page) {
        const sliceStart = page * 4;
        const displayedRosArray = rosArray.length > 4 ? rosArray.slice(sliceStart, sliceStart + 4) : rosArray;

        return displayedRosArray.map((ros, i) => {
            return this.renderedTable(ros, page * 4 + i);
        });
    }

    renderedPaginationFooter(rosArray, page) {
        if (rosArray.length <= 4) return null;

        return (
            <Table>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            colSpan={3}
                            count={rosArray.length}
                            rowsPerPage={4}
                            page={page}
                            onChangePage={(event, page) => this.setState({ page })}
                            rowsPerPageOptions={[]}
                            onChangeRowsPerPage={() => null} />
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }

    // renders Menu for element and associated actions as Menu items
    renderedMenu = (elementId, elementText, arrayIndex) => {
        const { elementToDisplayMenu, positionLeft, positionTop } = this.state;

        // Item represents the name of the row/section of the current element.
        const onMenuItemClicked = (fn, element, item) => {
            const callback = () => {
                fn(element, item);
            }
            this.closeInsertionMenu(callback);
        };
        const element = {
            value: elementText,
        };

        return (
            <VisualizerMenu
                allowItemClick={this.props.allowItemClick}
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
                unfilteredActions={this.props.actions}
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

    render() {
        const { conditionSection } = this.props;
        const rosArray = conditionSection.data[0].data_cache;
        const page = this.state.page;

        return (
            <div className="expanded-tables-visualizer">
                {this.renderedTables(rosArray, page)}
                {this.renderedPaginationFooter(rosArray, page)}
            </div>
        );
    }
}

ExpandedTableVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    allowItemClick: PropTypes.bool,
    actions: PropTypes.array,
    tdpSearchSuggestions: PropTypes.array
};
