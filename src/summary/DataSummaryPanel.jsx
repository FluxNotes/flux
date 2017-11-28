import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataSummaryTable from './DataSummaryTable';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from '../elements/Button';
import 'font-awesome/css/font-awesome.min.css';
import './DataSummaryPanel.css';

class DataSummaryPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {tabValue: 0};
    }

    selectTab = (event, value) => {
        this.setState({tabValue: value});
    }

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

        if (section.type === 'NameValuePairs') {
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
        }
    }

    renderedTabSections() {
        const conditionMetadata = this.getConditionMetadata();
        if (conditionMetadata == null) {
            return null;
        }

        return conditionMetadata.sections.map((section, i) =>
            <div key={i} data-test-summary-section={section.name}>
                <h2 className="section-header">{section.name}</h2>
                {this.renderedSection(section)}
            </div>
        );
    }

    renderedNotes() {
        return this.props.patient.getNotes().map((item, i) =>
            <tr className="existing-note-entry" key={i}>
                <td className="existing-note-date" width="15%">{item.date}</td>
                <td className="existing-note-metadata" width="55%">
                    <span id="existing-note-subject">{item.subject}</span> <br/>
                    <span>{item.hospital}</span> <br/>
                    <span>{item.clinician}</span>
                </td>
                <td className="existing-note-button" width="30%">
                    <Button raised
                            className="existing-note-btn"
                            key={i}
                    >View Note</Button>
                </td>
            </tr>
        );
    }

    renderedTabs() {
        if (this.state.tabValue === 0) {
            return (
                <TabContainer>
                    <div className="table-list" id="summary-list">
                        {this.renderedTabSections()}
                    </div>
                </TabContainer>
            );
        } else if (this.state.tabValue === 1) {
            return (
                <TabContainer>
                    <div className="table-list" id="previous-notes">
                        <h2>Previous Clinical Notes</h2>

                        <table className="existing-notes">
                            <tbody>
                            {this.renderedNotes()}
                            </tbody>
                        </table>
                    </div>
                </TabContainer>
            );
        }
    }

    render() {
        const {tabValue} = this.state;

        return (
            <div id="condition-summary-section" className="dashboard-panel panel-content">
                <Tabs
                    value={tabValue}
                    onChange={this.selectTab}
                    indicatorColor="steelblue"
                    centered={true}>
                    <Tab label="Problem Summary" value={0}/>
                    <Tab label="Clinical Notes" value={1}/>
                </Tabs>

                {this.renderedTabs()}
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

function TabContainer(props) {
    return (
        <div style={{paddingLeft: 20}}>
            {props.children}
        </div>
    );
}

export default DataSummaryPanel;
