import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import DataSummaryTable from './DataSummaryTable';
import 'font-awesome/css/font-awesome.min.css';
import './DataSummaryPanel.css';

class DataSummaryPanel extends Component {

    getConditionMetadata() {
        const {condition} = this.props;

        let codeSystem, code, conditionMetadata = null;
        if (condition != null) {
            codeSystem = condition.specificType.value.coding[0].codeSystem.value;
            code = condition.specificType.value.coding[0].value;
            conditionMetadata = this.props.summaryMetadata[codeSystem + "/" + code];
        }

        if (condition == null || conditionMetadata == null) {
            conditionMetadata = this.props.summaryMetadata["default"];
        }

        return conditionMetadata;
    }

    renderedTableSection() {

        // This variable indicates if the panel is to display data in a single column or not
        let isSingleColumn = !this.props.isWide;

        const {patient, condition, onItemClicked, allowItemClick} = this.props;
        const conditionMetadata = this.getConditionMetadata();
        if (conditionMetadata == null) {
            return null;
        }

        // Grab the sections from conditionMetaData and create 2 arrays, one for the first half of the sections and another
        // for the second half of sections

        let numberOfFirstHalfSections = Math.ceil(conditionMetadata.sections.length / 2);
        let firstHalfSections = [];
        let secondHalfSections = [];

        // Create array containing the first half of the conditionMetaData sections
        for (let i = 0; i < numberOfFirstHalfSections; i++) {
            firstHalfSections.push(conditionMetadata.sections[i]);
        }

        // Create array containing the second half of the conditionMetaData sections
        for (let j = numberOfFirstHalfSections; j < conditionMetadata.sections.length; j++) {
            secondHalfSections.push(conditionMetadata.sections[j])
        }

        // If flag for isSingleColumn true, display the data all in one column
        if (isSingleColumn) {
            return conditionMetadata.sections.map((section, i) =>
                <div key={i} data-test-summary-section={section.name}>
                    <h2>{section.name}</h2>

                    <DataSummaryTable
                        patient={patient}
                        condition={condition}
                        conditionSection={section}
                        onItemClicked={onItemClicked}
                        allowItemClick={allowItemClick}
                    />
                </div>
            );
        }

        // Else the isSingleColumn flag is false. Display the data in 2 columns. The first column displays the first half
        // of the sections in one table and the second column displays the second half of the sections in a second table
        else {
            return (
                <Row center="xs">
                    <Col sm={6}>
                        {this.getTable(firstHalfSections, patient, condition, onItemClicked, allowItemClick)}
                    </Col>
                    <Col sm={6}>
                        {this.getTable(secondHalfSections, patient, condition, onItemClicked, allowItemClick)}
                    </Col>
                </Row>
            );
        }
    }

    // getTable method takes in an array of sections and creates a data summary table with that data
    getTable(arrayOfSections, patient, condition, onItemClicked, allowItemClick) {
        return arrayOfSections.map((section, i) =>

            <div key={`left-${i}`} data-test-summary-section={section.name}>
                <h2>{section.name}</h2>
                <DataSummaryTable
                    patient={patient}
                    condition={condition}
                    conditionSection={section}
                    onItemClicked={onItemClicked}
                    allowItemClick={allowItemClick}
                />
            </div>
        );
    }

    renderedTableList() {
        return (
            <div className="table-list" id="summary-list">
                {this.renderedTableSection()}
            </div>
        );
    }

    render() {
        return (
            <div id="condition-summary-section" className="dashboard-panel panel-content">
                {this.renderedTableList()}
            </div>
        );
    }
}

DataSummaryPanel.propTypes = {
    isWide: PropTypes.bool.isRequired,
    patient: PropTypes.object,
    condition: PropTypes.object,
    summaryMetadata: PropTypes.object,
    allowItemClick: PropTypes.bool,
    onItemClicked: PropTypes.func
};

export default DataSummaryPanel;
