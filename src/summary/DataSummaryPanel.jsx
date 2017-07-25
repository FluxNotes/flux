// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// Components
import SummaryHeader from './SummaryHeader';
import ConditionSelection from './ConditionSelection';
import DataSummaryTable from './DataSummaryTable';
// Material UI component imports
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
// Lodash component
import Lang from 'lodash'
//font awesome
import 'font-awesome/css/font-awesome.min.css';

// Styling
import './DataSummaryPanel.css';

class DataSummaryPanel extends Component {
    render() {
        let progressionHeader = "";
        const sixMonthsAgoDate = moment().subtract(6, 'months');

        // Format the current progression entry for the data summary table component
        let currentProgressionArray = [];

        // Format Progression
        //
        // If there is a progression shortcut to include, parse it's values
        const isCurrentShortcut = (!Lang.isNull(this.props.currentShortcut));
        let isProgressionShortcut = false;
        if (isCurrentShortcut) {
            isProgressionShortcut = (this.props.currentShortcut.getShortcutType() === "progression");
        }
        if (isProgressionShortcut) { 
            currentProgressionArray = [
                {
                    name: "Progression Value",
                    display: this.props.currentShortcut.progression.status,
                    value: this.props.currentShortcut.progression.status,
                    startDate: this.props.currentShortcut.progression.startDate
                },
                {
                    name: "Reasons",
                    display: this.props.currentShortcut.progression.reason.join(", "),
                    value: this.props.currentShortcut.progression.reason,
                    startDate: this.props.currentShortcut.progression.startDate
                }
            ];
        } else { 
            currentProgressionArray = [
                {
                    name: "Progression Value",
                    value: "",
                    display: "", 
                    startDate: "",
                },
                {
                    name: "Reasons",
                    value: [],
                    display: "", 
                    startDate: "",
                }
            ];
        }
        // Check if start date is longer than 6 months from today's date and set the progression header accordingly
        if (isProgressionShortcut) { 
            if (this.props.currentShortcut.progression.startDate < sixMonthsAgoDate) {
                progressionHeader = "Current Progression";
            } else {
                progressionHeader = "Progression as of " + this.props.currentShortcut.progression.startDate.format('MM/DD/YYYY') + ":";
            }
        } else { 
            progressionHeader = "Progression";
        }

        return (
            <div className="dashboard-panel">
                <Paper className="panel-content trio">
                    <SummaryHeader
                        photo={this.props.patient.photo}
                        patientName={this.props.patient.name}
                        mrn={this.props.patient.mrn}
                        dateOfBirth={this.props.patient.dateOfBirth}
                        administrativeSex={this.props.patient.administrativeSex}
                        address={this.props.patient.address}
                    />

                    <ConditionSelection
                        conditions={this.props.conditions}
                    />

                    <Tabs className="tabs-container" inkBarStyle={{background: 'steelblue'}}
                          tabItemContainerStyle={{background: 'white'}}>
                        <Tab className="tab" label="Problem Summary">
                            <div className="table-list" id="summary-list">
                                <h2>Current Diagnosis:</h2>
                                <DataSummaryTable
                                    items={this.props.diagnosis}
                                    onItemClicked={this.props.onItemClicked}
                                />
                                <h2>{progressionHeader}</h2>
                                <DataSummaryTable
                                    items={currentProgressionArray}
                                    onItemClicked={this.props.onItemClicked}
                                />

                                <h2>Key Dates:</h2>
                                <DataSummaryTable
                                    items={this.props.keyDates}
                                    onItemClicked={this.props.onItemClicked}
                                />

                                <h2>Procedures:</h2>
                                <DataSummaryTable
                                    items={this.props.procedures}
                                    onItemClicked={this.props.onItemClicked}
                                />

                                <h2>Pathology Results (Initial Diagnosis):</h2>
                                <DataSummaryTable
                                    items={this.props.pathology}
                                    onItemClicked={this.props.onItemClicked}
                                />

                                <h2>Genetics:</h2>
                                <DataSummaryTable
                                    items={this.props.genetics}
                                    onItemClicked={this.props.onItemClicked}
                                />
                            </div>
                        </Tab>
                        <Tab className="tab" label="Clinical Notes">
                            <div className="table-list" id="previous-notes">
                                <h2>Previous Clinical Notes</h2>
                                <table className="existing-notes">
                                    <tbody>
                                    {this.props.patient.previousNotes.map((item, i) => {
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
    conditions: PropTypes.array,
    diagnosis: PropTypes.array,
    pathology: PropTypes.array,
    genetics: PropTypes.array,
    onItemSelected: PropTypes.func
};

export default DataSummaryPanel;
