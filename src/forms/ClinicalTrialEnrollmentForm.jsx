import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import SingleChoiceButton from './SingleChoiceButton';
import DatePicker from '../forms/DatePicker';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';
import './ClinicalTrialEnrollmentForm.css';

class ClinicalTrialEnrollmentForm extends Component {
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
            this.props.updateValue("date", selectedDate); //.format('D MMM YYYY'));
        }
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
                <h1>Enrollment</h1>
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

                <h4 className="header-spacing">Enrollment Date <span className="helper-text"> mm/dd/yyyy</span></h4>
                <div className="date-choices">
                    {this.renderEnrollmentDatePicker()}
                </div>

                {/*Definitions of data elements*/}
                <h4 className="header-spacing">Definitions</h4>
                <Divider className="divider"/>

                <h4 className="header-spacing">Enrollment</h4>
                <p className="data-element-description">
                    {ClinicalTrialsList.getDescription("clinicalTrialEnrollment")}
                </p>
                <p className="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="clinicalTrialEnrollmentSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>

                <h4 className="header-spacing">Trial</h4>
                <p className="data-element-description">
                    {ClinicalTrialsList.getDescription("trialEnrollment")}
                </p>

                <h4 className="header-spacing">{enrollmentDateLabel}</h4>
                <p className="data-element-description">
                    {enrollmentDateDescription}
                </p>
            </div>
        )
    }
}

ClinicalTrialEnrollmentForm.propTypes = {
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default ClinicalTrialEnrollmentForm;