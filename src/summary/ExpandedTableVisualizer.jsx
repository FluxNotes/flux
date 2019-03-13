import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Table, { TableBody, TableRow, TableCell, TablePagination, TableFooter } from 'material-ui/Table';
import Lang from 'lodash';
import Visualizer from './Visualizer';
import './ExpandedTableVisualizer.css';

/*
 A list of expanded tables for each ROS. The date is automatically shown and 
 can be expanded to show the ROS questions for that date.
 */
export default class ExpandedTableVisualizer extends Visualizer {
    // Initialize values for insertion popups
    constructor(props) {
        super(props);
        const { conditionSection } = this.props;
        const rosArray = conditionSection.data[0].data_cache;

        // initialize expandedTables so that first table is expanded
        const expandedTables = rosArray.map((_, i) => i === 0);

        this.state = {
            // indices of the tables that are expanded
            expandedTables,
            page: 0
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

    getStringForId(s) {
        return s.toLowerCase().replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/ /g, '_');
    }

    renderedQuestion(question, date, index) {
        let nameClass, valueClass;
        
        // TO DO ADD structured data logic

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
            const highlightedSearchField = this.props.highlightedSearchSuggestion.field;
            const highlightedSearchId = this.props.highlightedSearchSuggestion.id;
            if (highlightedSearchId.indexOf(this.getStringForId(date)) > -1 
                && highlightedSearchId.indexOf(this.getStringForId(question.name)) > -1) {
                if (highlightedSearchField === 'valueTitle') {
                    nameClass += 'selected '
                } else if (highlightedSearchField === 'value') {
                    valueClass += 'selected '
                }
            }
        }

        return(
            <TableRow key={index}>
                <TableCell><span className={nameClass}>{question.name}</span></TableCell>
                <TableCell><span className={valueClass}>{question.value}</span></TableCell>
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

        if (expanded) {
            iconClass = 'fa fa-angle-down';
        } else {
            iconClass = 'fa fa-angle-right';
        }

        // search date highlighting logic
        this.props.tdpSearchSuggestions.forEach(s => {
            if (s.contentSnapshot === date) {
                dateClass = 'highlighted ';
            }
        });

        // search highlight select logic
        if (!Lang.isNull(this.props.highlightedSearchSuggestion)) {
            const highlightedSearchId = this.props.highlightedSearchSuggestion.id;
            if (highlightedSearchId.indexOf(this.getStringForId(date)) > -1 ) {
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

        // don't expand automatically if not page 0??
        return displayedRosArray.map((ros, i) => {
            return this.renderedTable(ros, i);
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

    render() {
        const { patient, condition, conditionSection } = this.props;
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
    // isWide: PropTypes.bool,
    // allowItemClick: PropTypes.bool,
    // actions: PropTypes.array,
    tdpSearchSuggestions: PropTypes.array
};

