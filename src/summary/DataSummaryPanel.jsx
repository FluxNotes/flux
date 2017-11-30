import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataSummaryTable from './DataSummaryTable';
import NarrativeComponent from './NarrativeComponent';
//import Tabs, {Tab} from 'material-ui/Tabs';
import Button from '../elements/Button';
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

    // renderedSection checks the type of data that is being passed and chooses the correct component to render the data
    // Current implementation only renders the DataSummaryTable
    // TODO: Render other types of data
    renderedSection(section) {
        const {patient, condition, onItemClicked, allowItemClick, isWide} = this.props;

        if (section.type === 'NameValuePairs' && !section.narrative) {
            return (
                <DataSummaryTable
                    patient={patient}
                    condition={condition}
                    conditionSection={section}
                    onItemClicked={onItemClicked}
                    allowItemClick={allowItemClick}
                    isWide={isWide}
                />
            );
        } else if (section.type === 'NameValuePairs' && section.narrative) {
            return (
                <NarrativeComponent
                    patient={patient}
                    condition={condition}
                    conditionSection={section}
                    onItemClicked={onItemClicked}
                    allowItemClick={allowItemClick}
                    isWide={isWide}
                />
            );
        }
    }

    renderedTableSection() {
        const conditionMetadata = this.getConditionMetadata();
        if (conditionMetadata == null) {
            return null;
        }

        return conditionMetadata.sections.map((section, i) => {
            return (
                <div key={i} data-test-summary-section={section.name}>
                    <h2 className="section-header">{section.name}</h2>
                    {this.renderedSection(section)}
                </div>
            );
        });
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
