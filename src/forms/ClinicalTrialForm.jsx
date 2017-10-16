import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';
import './ClinicalTrialForm.css';

const DATE_FORMAT = 'MM/DD/YYYY';

class ClinicalTrialForm extends Component {
    constructor(props) {
        super(props);
        this.clinicalTrialsList = new ClinicalTrialsList();
        
        this.state = {
            trials: this.clinicalTrialsList.getAllTrials(),
            selectedEnrollmentDate: null,
            selectedEndDate: null
            selectedDateChoice: 'enrollment-date'
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

    handleDateChange = (selectedDate, value) => {

         if (value === "enrollmentDate") {
            this.setState({
                selectedEnrollmentDate: selectedDate
            });
        }
        else if (value === "endDate") {
            this.setState({
                selectedEndDate: selectedDate
            });
        }
        this.props.updateValue(value, selectedDate);
    };
    
    handleDateChoice = (event) => {
        const choice = event.target.value;
        // When changing the choice of date, set the other to null to clear it from the copy button
        if (choice === 'enrollment-date') {
            this.props.updateValue('endDate', null);
        } else if (choice === 'end-date') {
            this.props.updateValue('enrollmentDate', null);
        }
        this.setState({ selectedDateChoice: choice });
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
                    disabled={this.currentlySelected(this.props.clinicalTrial.title, this.state.trials[i].id)}
                    >{trialName}
                </Button>
            </div>
        )
    }
    
    renderEnrollmentDatePicker = () => {
        return (
            <DayPickerInput
                id="enrollment-date"
                value={formattedDate}
                onDayChange={ (e) => this.handleDateChange(e, "enrollmentDate")}
                format={DATE_FORMAT}
                placeholder={DATE_FORMAT}
            />
        );
    }
    
    renderEndDatePicker = () => {
        return (
            <DayPickerInput
                id="end-date"
                value={formattedDate}
                onDayChange={ (e) => this.handleDateChange(e, "endDate")}
                format={DATE_FORMAT}
                placeholder={DATE_FORMAT}
            />
        );
    }
    
    render() {
        const {selectedDate} = this.state;
        const formattedDate = selectedDate ? moment(selectedDate).format(DATE_FORMAT) : '';
        const enrollmentDateDescription = `Enrollment Date: ${ClinicalTrialsList.getDescription("enrollmentDate")}`;
        const endDateDescription = `End Date: ${ClinicalTrialsList.getDescription("endDate")}`;
        return (
            <div>
                <h1>Clinical Trial</h1>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("clinicalTrial")}
                    <br/>
                    <br/>
                    Based on your selections below, the copy button at the bottom will copy a <a href="clinicalTrialSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
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
                
                <h4 className="header-spacing">Relevant Date <span className="helper-text"> mm/dd/yyyy</span> </h4>
                
                <div>
                    <FormControl>
                        <RadioGroup
                            name="relevant dates"
                            value={this.state.selectedDateChoice}
                            onChange={this.handleDateChoice}>
                            <FormControlLabel value="enrollment-date" control={<Radio className='radio-button-clinical-trial'/>} label={enrollmentDateDescription}/>
                            <FormControlLabel value="end-date" control={<Radio className='radio-button-clinical-trial'/>} label={endDateDescription} />
                        </RadioGroup>
                    </FormControl>
                </div>
                {this.state.selectedDateChoice === 'enrollment-date' 
                    ? this.renderEnrollmentDatePicker() 
                    : null}
                {this.state.selectedDateChoice === 'end-date' 
                    ? this.renderEndDatePicker() 
                    : null }
            </div>
        )
    }
}

export default ClinicalTrialForm;