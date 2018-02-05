import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Button from '../elements/Button';
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
        const buttonClass = isSelected ? 'button_selected' : '';
        const borderColor = isSelected ? '#297DA2' : 'white';
        const marginSize = "10px";
        const trialName = trial.name;
        const trialDescription = trial.description;
        const tooltipClass = (trialDescription.length > 100) ? "tooltiptext-clinical-trial large-clinical-trial" : "tooltiptext-clinical-trial";

        return (
            <div key={trialName} className="tooltip-clinical-trial">
                <span id={trialName} className={tooltipClass}>{trialDescription}</span>
                <Button raised
                    key={i}
                    label={trialName}
                    onClick={(e) => this.handleTrialSelection(trial, isSelected)}
                    className={"trial_button " + buttonClass}
                    style={{
                        marginBottom: marginSize,
                        marginLeft: marginSize,
                        height: "75px",
                        width: "180px",
                        padding: "20px 0 20px 0",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderRadius: "5px",
                        borderColor: borderColor,
                        textTransform: "none"
                    }}
                >   
                    {trialName}
                </Button>
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
        const enrollmentDateDescription = `Enrollment Date: ${ClinicalTrialsList.getDescription("enrollmentDate")}`;
        const endDateDescription = `End Date: ${ClinicalTrialsList.getDescription("endDate")}`;
        return (
            <div>
                <h1>Clinical Trial</h1>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("clinicalTrial")}
                </p>
                <p id="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="clinicalTrialSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>
                <Divider className="divider"/>

                <h4 className="header-spacing">Clinical Trial</h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("trial")}
                    <span className="helper-text"> Choose one</span>
                </p>

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
                            <FormControlLabel value="enrollmentDate" control={<Radio id="enrollment-date-choice"
                                                                                     className='radio-button-clinical-trial'/>}
                                              label={enrollmentDateDescription}/>
                        </RadioGroup>
                        {this.renderEnrollmentDatePicker()}
                        <RadioGroup
                            name="relevant dates"
                            value={this.state.selectedDateChoice}
                            onChange={this.handleDateChoice}>
                            <FormControlLabel value="endDate" control={<Radio id="end-date-choice"
                                                                              className='radio-button-clinical-trial'/>}
                                              label={endDateDescription}/>
                        </RadioGroup>
                        {this.renderEndDatePicker()}
                    </FormControl>
                </div>
            </div>
        )
    }
}

ClinicalTrialForm.proptypes = { 
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default ClinicalTrialForm;