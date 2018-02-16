import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import SingleChoiceButton from './SingleChoiceButton';
import DatePicker from '../forms/DatePicker';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';
import './ClinicalTrialUnenrolledForm.css';

class ClinicalTrialUnenrolledForm extends Component {
    constructor(props) {
        super(props);
        this.clinicalTrialsList = new ClinicalTrialsList();

        this.state = {
            trials: this.clinicalTrialsList.getAllTrials(),
            selectedEnrollmentDate: null,
            selectedEndDate: null,
            selectedDateChoice: 'enrollmentDate'
        };
    }

    isSelectedTrial = (trial) => {
        // What it is checking might need to change if the toxicity.attribution structure changes in Patient
        return this.props.object.title === trial.name;
    }


    handleTrialSelection = (trial, isSelected) => {
        if (isSelected) {
            this.props.updateValue("title", null);
        } else {
            this.props.updateValue("title", trial.name);
        }
    }

    handleEnrollmentDateChange = (selectedDate) => {
        this.setState({
            selectedEnrollmentDate: selectedDate
        });

        if (this.state.selectedDateChoice === "enrollmentDate") {
            this.props.updateValue("enrollmentDateDate", selectedDate); //.format('D MMM YYYY'));
        }
    }

    handleEndDateChange = (selectedDate) => {
        this.setState({
            selectedEndDate: selectedDate
        });
        if (this.state.selectedDateChoice === "endDate") {
            this.props.updateValue("endDateDate", selectedDate); //.format('D MMM YYYY'));
        }
    }

    handleDateChoice = (event) => {
        const choice = event.target.value;
        // When changing the choice of date, set the other to null to clear it from the copy button
        // and reset the chosen date to the value displayed in the picker.
        if (choice === 'enrollmentDate') {
            this.props.updateValue('endDateDate', null);
            this.props.updateValue('enrollmentDateDate',
                (this.state.selectedEnrollmentDate) ? this.state.selectedEnrollmentDate : null); //.format('D MMM YYYY')
        } else if (choice === 'endDate') {
            this.props.updateValue('enrollmentDateDate', null);
            this.props.updateValue('endDateDate',
                (this.state.selectedEndDate) ? this.state.selectedEndDate : null); //.format('D MMM YYYY')
        }
        this.setState({selectedDateChoice: choice});
    }

    renderTrialButtonGroup = (trial, i) => {
        const isSelected = this.isSelectedTrial(trial);
        const marginSize = "10px";
        const trialName = trial.name;
        const trialDescription = trial.description;
        const tooltipClass = (trialDescription.length > 100) ? "tooltiptext-clinical-trial large-clinical-trial" : "tooltiptext-clinical-trial";

        return (
            <div key={trialName} className="tooltip-clinical-trial">
                <span id={trialName} className={tooltipClass}>{trialDescription}</span>
                <SingleChoiceButton
                    buttonKey={i}
                    buttonText={trialName}
                    onClick={(e) => this.handleTrialSelection(trial, isSelected)}
                    isSelected={isSelected}
                    className={trialName}
                    marginSize={marginSize}
                />
            </div>
        )
    }

    renderEnrollmentDatePicker = () => {
        return (
            <DatePicker id="enrollment-date" className='clinical-trial-dates'
                        handleDateChange={this.handleEnrollmentDateChange}
                        dateToSet={null}
            />
        );
    }

    render() {
        const enrollmentDateLabel = 'Enrollment Date';
        const enrollmentDateDescription = `${ClinicalTrialsList.getDescription("enrollmentDate")}`;

        return (
            <div>
                <h1>Unenrolled</h1>
                <Divider className="divider"/>

                {/*Interface here*/}
                <h4 className="header-spacing">Trial<span className="helper-text"> Choose one</span></h4>
                <div className="btn-group-trial-clinical-trial">
                    {
                        this.state.trials.map((trial, i) => {
                            return this.renderTrialButtonGroup(trial, i)
                        })
                    }
                </div>

                <h4 className="header-spacing">Relevant Date <span className="helper-text"> mm/dd/yyyy</span></h4>
                <div className="date-choices">
                    {this.renderEnrollmentDatePicker()}
                </div>

                {/*Definitions of data elements*/}
                <h4 className="header-spacing">Definitions</h4>
                <Divider className="divider"/>

                <h4 className="header-spacing">Enrollment</h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("clinicalTrial")}
                </p>
                <p id="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="clinicalTrialEnrollmentSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>

                <h4 className="header-spacing">Trial</h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("trial")}
                </p>

                <h4 className="header-spacing">{enrollmentDateLabel}</h4>
                <p id="data-element-description">
                    {enrollmentDateDescription}
                </p>
            </div>
        )
    }
}

ClinicalTrialUnenrolledForm.proptypes = {
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default ClinicalTrialUnenrolledForm;