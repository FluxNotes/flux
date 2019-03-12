import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Table, { TableBody, TableRow, TableCell } from 'material-ui/Table';
import Lang from 'lodash';
import Visualizer from './Visualizer';
import './ExpandedTableVisualizer.css';

/*
 ADD DESCRIPTION
 */
export default class ExpandedTableVisualizer extends Visualizer {
    // TO DO: DO I NEED THIS
    // Initialize values for insertion popups
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            elementToDisplayMenu: null,
            positionTop: 0,  // Just so the menu can be spotted more easily
            positionLeft: 0, // Same as above
        }
    }

    getPositiveQuestions = (questions) => {
        let positiveQuestions = questions.filter(q => q.value === 'positive');
        return positiveQuestions;
    }

    getNegativeQuestions = (questions) => {
        let negativeQuestions = questions.filter(q => q.value === 'negative');
        return negativeQuestions;
    }

    getStringForId(s) {
        return s.toLowerCase().replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/ /g, '_');
    }

    renderedQuestion(question, date, index) {
        let nameClass, valueClass;
        
        // TO DO ADD structured data logic???

        // search highlighting logic
        this.props.tdpSearchSuggestions.find(s => {
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
            const firstIndex = 'review_of_systems_'.length;
            const secondIndex = highlightedSearchId.indexOf('_' + this.getStringForId(question.name));

            if (firstIndex < secondIndex) {
                const highlightedSearchDate = highlightedSearchId.substring(firstIndex, secondIndex);
                const rosDate = this.getStringForId(date)
                if (highlightedSearchDate === rosDate) {
                    if (highlightedSearchField === 'valueTitle') {
                        nameClass += 'selected '
                    } else if (highlightedSearchField === 'value') {
                        valueClass += 'selected '
                    }    
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

    renderedTableHeader(date, questionCount, positiveQuestionCount) {
        // TO DO: date highlighting
        return <div className="expanded-table-header">table header goes here</div>;
    }
    
    renderedTable(ros, tableIndex) {
        const positiveQuestions = this.getPositiveQuestions(ros.questions);
        const negativeQuestions = this.getNegativeQuestions(ros.questions);

        return (
            <div className="expanded-table" key={tableIndex}>
                {this.renderedTableHeader(ros.date, ros.questions.length, positiveQuestions.length)}
                <div className="expanded-table-body">
                    {this.renderedPositiveQuestions(positiveQuestions, ros.date)}
                    {this.renderedNegativeQuestions(negativeQuestions, ros.date)}
                </div>
            </div>
        );
    }

    renderedTables(rosArray) {
        let indx = 0;
        const renderedTables = rosArray.map((ros) => {
            return this.renderedTable(ros, indx++);
        });
        return renderedTables;
    }

    render() {
        const { patient, condition, conditionSection } = this.props;
        const rosArray = conditionSection.data[0].data_cache;

        return (
            <div className="expanded-tables-visualizer">
                {this.renderedTables(rosArray)}
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

