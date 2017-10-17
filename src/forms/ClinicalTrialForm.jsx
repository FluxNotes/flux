import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
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
            selectedDate: null
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

        this.setState({
            selectedDate
        });

        this.props.updateValue(value, selectedDate);
    };
    
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
    
    render() {
        const {selectedDate} = this.state;
        const formattedDate = selectedDate ? moment(selectedDate).format(DATE_FORMAT) : '';

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
                
                <h4 className="header-spacing">Enrollment Date</h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("enrollmentDate")}
                    <span className="helper-text"> mm/dd/yyyy</span>
                </p>
                <DayPickerInput
                    value={formattedDate}
                    onDayChange={ (e) => this.handleDateChange(e, "enrollmentDate")}
                    format={DATE_FORMAT}
                    placeholder={DATE_FORMAT}
                />
                
                <h4 className="header-spacing">End Date <span className="helper-text"> (Optional)</span></h4>
                <p id="data-element-description">
                    {ClinicalTrialsList.getDescription("endDate")}
                    <span className="helper-text"> mm/dd/yyyy</span>
                </p>
                <DayPickerInput
                    value={formattedDate}
                    onDayChange={ (e) => this.handleDateChange(e, "endDate")}
                    format={DATE_FORMAT}
                    placeholder={DATE_FORMAT}
                />
            </div>
        )
    }
}

export default ClinicalTrialForm;