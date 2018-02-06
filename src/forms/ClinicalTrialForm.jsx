import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import SingleChoiceButton from './SingleChoiceButton';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormControl, FormControlLabel} from 'material-ui/Form';
import DatePicker from '../forms/DatePicker';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';
import './ClinicalTrialForm.css';

class ClinicalTrialForm extends Component {
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

    renderEndDatePicker = () => {
        return (
            <DatePicker id="end-date" className='clinical-trial-dates'
                handleDateChange={this.handleEndDateChange}
                dateToSet={null}
            />
        );
    }

    render() {
        const enrollmentDateLabel = 'Enrollment Date';
        const enrollmentDateDescription = `${ClinicalTrialsList.getDescription("enrollmentDate")}`;
        const endDateLabel = 'End Date'
        const endDateDescription = `${ClinicalTrialsList.getDescription("endDate")}`;
        return (
            <div>
                <h1>Clinical Trial</h1>
                <Divider className="divider"/>
                {/*Buttons here*/}
                <h4 className="header-spacing">Trial<span className="helper-text"> Choose one</span></h4>
                <div className="btn-group-trial-clinical-trial">
                    {this.state.trials.map((trial, i) => {
                        return this.renderTrialButtonGroup(trial, i)
                    })}
                </div>

                <h4 className="header-spacing">Relevant Date <span className="helper-text"> mm/dd/yyyy</span></h4>
                <div className="date-choices">
                    <FormControl>
                        <RadioGroup
                            name="relevant dates"
                            value={this.state.selectedDateChoice}
                            onChange={this.handleDateChoice}>
                            <FormControlLabel 
                                value="enrollmentDate" 
                                control={
                                    <Radio 
                                        id="enrollment-date-choice" 
                                        className='radio-button-clinical-trial'
                                    />
                                }
                                label={enrollmentDateLabel}
                            />
                        </RadioGroup>
                        {this.renderEnrollmentDatePicker()}
                        <RadioGroup
                            name="relevant dates"
                            value={this.state.selectedDateChoice}
                            onChange={this.handleDateChoice}>
                            <FormControlLabel 
                                value="endDate" 
                                control={
                                    <Radio 
                                        id="end-date-choice"
                                        className='radio-button-clinical-trial'
                                    />
                                }
                                label={endDateLabel}
                            />
                        </RadioGroup>
                        {this.renderEndDatePicker()}
                    </FormControl>
                </div>

                {/*Definitions of dataelements*/}
                <h4 className="header-spacing">Definitions</h4>
                <Divider className="divider"/>
                <h4 className="header-spacing">Clinical Trial</h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("clinicalTrial")}
                </p>
                <p id="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="clinicalTrialSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>

                <h4 className="header-spacing">Trial</h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("trial")}
                    <span className="helper-text"> Choose one</span>
                </p>

                <h4 className="header-spacing">Relevant Date</h4>

                <p id="data-element-description">
                    <b>{enrollmentDateLabel}</b>: {enrollmentDateDescription}
                </p>
                <p id="data-element-description">
                    <b>{endDateLabel}</b>: {endDateDescription}
                </p>
            </div>
        )
    }
}

ClinicalTrialForm.proptypes = { 
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default ClinicalTrialForm;