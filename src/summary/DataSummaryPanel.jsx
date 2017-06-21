// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Components
import SummaryHeader from './SummaryHeader';
import ConditionSelection from './ConditionSelection';
import DataSummaryTable from './DataSummaryTable';
// Material UI component imports
import Paper from 'material-ui/Paper';

//font awesome
import 'font-awesome/css/font-awesome.min.css';

// Styling
import './DataSummaryPanel.css';

class DataSummaryPanel extends Component {

    render() {
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

                    <div className="summary-list">
                        <h2>Current Diagnosis:</h2>
                        <DataSummaryTable
                            items={this.props.diagnosis}
                            onItemClicked={this.props.onItemClicked}
                        />

                        <h2>Key Dates:</h2>
                        <DataSummaryTable
                            items={this.props.keyDates}
                            onItemClicked={this.props.onItemClicked}
                        />

                        <h2>Surgery:</h2>
                        <DataSummaryTable
                            items={this.props.surgery}
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
