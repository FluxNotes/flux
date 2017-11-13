import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
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

    currentlySelected = (item, i) => {
        return (item === i ? true : false);
    }

    handleTrialSelection = (e, i) => {
        e.preventDefault();
        const newTrial = this.state.trials[i].id;
        this.props.updateValue("title", newTrial);
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
                (this.state.selectedEnrollmentDate !== null) ? this.state.selectedEnrollmentDate.format('D MMM YYYY'): null);
        } else if (choice === 'endDate') {
            this.props.updateValue('enrollmentDateDate', null);
            this.props.updateValue('endDateDate', 
                (this.state.selectedEndDate !== null) ? this.state.selectedEndDate.format('D MMM YYYY') : null);
        }
        this.setState({selectedDateChoice: choice});
    }

    renderTrialButtonGroup = (trial, i) => {
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
                    onClick={(e) => this.handleTrialSelection(e, i)}
                    className="button_disabled_is_selected"
                    style={{
                        marginBottom: marginSize,
                        marginLeft: marginSize,
                        height: "75px",
                        width: "180px",
                        padding: "20px 0 20px 0",
                        backgroundColor: "white",
                        textTransform: "none"
                    }}
                    disabled={this.currentlySelected(this.props.object.title, this.state.trials[i].id)}
                    >{trialName}
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
                    <br/>
                    <br/>
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

export default ClinicalTrialForm;