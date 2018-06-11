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
            selectedEndDate: null,
            selectedDateChoice: 'endDate'
        };
        this.props.updateValue("title", null, false, false);
    }

    isSelectedTrial = (trial) => {
        const curTitle = this.props.getValue("title");
        return curTitle && curTitle.toUpperCase() === trial.name.toUpperCase();
    }


    handleTrialSelection = (trial, isSelected) => {
        if (isSelected) {
            this.props.updateValue("title", null);
        } else {
            this.props.updateValue("title", trial.name);
        }
    }

    handleEndDateChange = (selectedDate) => {
        this.setState({
            selectedEndDate: selectedDate
        });

        if (this.state.selectedDateChoice === "endDate") {
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

    renderEndDatePicker = () => {
        return (
            <DatePicker id="end-date" className='clinical-trial-dates'
                        handleDateChange={this.handleEndDateChange}
                        dateToSet={null}
            />
        );
    }

    render() {
        const endDateLabel = 'Unenrolled Date';
        const endDateDescription = `${ClinicalTrialsList.getDescription("endDate")}`;

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

                <h4 className="header-spacing">Unenrolled Date <span className="helper-text"> mm/dd/yyyy</span></h4>
                <div className="date-choices">
                    {this.renderEndDatePicker()}
                </div>

                {/*Definitions of data elements*/}
                <h4 className="header-spacing">Definitions</h4>
                <Divider className="divider"/>

                <h4 className="header-spacing">Unenrolled</h4>
                <p className="data-element-description">
                    {ClinicalTrialsList.getDescription("clinicalTrialUnenrolled")}
                </p>
                <p className="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="clinicalTrialUnenrolledSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>

                <h4 className="header-spacing">Trial</h4>
                <p className="data-element-description">
                    {ClinicalTrialsList.getDescription("trialUnenrolled")}
                </p>

                <h4 className="header-spacing">{endDateLabel}</h4>
                <p className="data-element-description">
                    {endDateDescription}
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