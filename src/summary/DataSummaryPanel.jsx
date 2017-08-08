// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import moment from 'moment';
// Components
import SummaryHeader from './SummaryHeader';
import ConditionSelection from './ConditionSelection';
import DataSummaryTable from './DataSummaryTable';
// Material UI component imports
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
// Lodash component
//import Lang from 'lodash'
//font awesome
import 'font-awesome/css/font-awesome.min.css';

// Styling
import './DataSummaryPanel.css';

//TODO: this.props.allowItemClick should control enabled state of all buttons next to items

/* props:
	onItemClicked={this.handleSummaryItemSelected}
	// Properties
	allowItemClick={this.state.currentShortcut == null}
	summaryMetadata={this.state.summaryMetadata}
	patient={this.state.patient}

	summaryMetadata: 	{ "http://snomed.info/sct/254837009" :	{ sections: [	{ name: "Current Diagnosis",
			items: [	{ name: "Name", value: (patient, currentConditionEntry) => { return currentConditionEntry.value.coding.displayText; }},
						{ name: "Stage", value: (patient, currentConditionEntry) => { return "T" + currentConditionEntry.staging.tumorSize + "N" + currentConditionEntry.staging.nodeMetastasis + "M" + currentConditionEntry.staging.metastasis }} ]}
		]}
						},
*/

class DataSummaryPanel extends Component {
	constructor(props) {
		super(props);
	
		// Set the initial state when the app is first constructed.
		this.state = {
			activeConditionIndex: 0
		}
		
		this.changeConditionIndex = this.changeConditionIndex.bind(this);
	}

	changeConditionIndex(newIndex) {
		this.setState({activeConditionIndex: newIndex});
	}
	
    render() {
		const conditions = this.props.patient.getConditions();
		const activeCondition = conditions[this.state.activeConditionIndex];
		const codeSystem = activeCondition.specificType.coding.codeSystem;
		const code = activeCondition.specificType.coding.value;
		let diseaseSummaryMetadata = this.props.summaryMetadata[codeSystem + "/" + code];
		if (!diseaseSummaryMetadata) {
			console.log("Unsupported condition within summary (using default): " + codeSystem + "/" + code);
			diseaseSummaryMetadata = this.props.summaryMetadata["default"];
		}
        return (
            <div className="dashboard-panel">
                <Paper className="panel-content trio">
                    <SummaryHeader
                        photo={this.props.patient.getMostRecentPhoto()}
                        patientName={this.props.patient.getName()}
                        mrn={this.props.patient.getMRN()}
                        dateOfBirth={this.props.patient.getPersonOfRecord().dateOfBirth}
                        administrativeSex={this.props.patient.getPersonOfRecord().administrativeGender}
                        address={this.props.patient.getCurrentHomeAddress()}
                    />
					
                    <ConditionSelection
                        conditions={conditions}
						activeConditionIndex={this.state.activeConditionIndex}
						changeConditionIndex={this.changeConditionIndex}
                    />

                    <Tabs className="tabs-container" inkBarStyle={{background: 'steelblue'}}
                          tabItemContainerStyle={{background: 'white'}}>
                        <Tab className="tab" label="Problem Summary">
                            <div className="table-list" id="summary-list">
								{diseaseSummaryMetadata.sections.map((section, i) => {
									return (
										<div key={i}>
											<h2>{section.name}</h2>
											<DataSummaryTable 
												items={section.items} 
												itemsFunction={section.itemsFunction}
												patient={this.props.patient}
												currentConditionEntry={activeCondition}
												onItemClicked={this.props.onItemClicked}
												allowItemClick={this.props.allowItemClick}
											/>
										</div>
										);
									})}
                            </div>
                        </Tab>
                        <Tab className="tab" label="Clinical Notes">
                            <div className="table-list" id="previous-notes">
                                <h2>Previous Clinical Notes</h2>
                                <table className="existing-notes">
                                    <tbody>
                                    {this.props.patient.getNotes().map((item, i) => {
                                        return (
                                            <tr className="existing-note-entry" key={i}>
                                                <td className="existing-note-date" width="15%">{item.date}</td>
                                                <td className="existing-note-metadata" width="55%">
                                                    <span id="existing-note-subject">{item.subject}</span> <br/>
                                                    <span>{item.hospital}</span> <br/>
                                                    <span>{item.clinician}</span>
                                                </td>
                                                <td className="existing-note-button" width="30%">
                                                    <RaisedButton
                                                        className="existing-note-btn"
                                                        label="View Note"
                                                        key={i}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
                </Paper>
            </div>

        );
    }
}

// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

DataSummaryPanel.propTypes = {
    patient: PropTypes.object,
    summaryMetadata: PropTypes.object,
    allowItemClick: PropTypes.bool,
    onItemClicked: PropTypes.func
};

export default DataSummaryPanel;
