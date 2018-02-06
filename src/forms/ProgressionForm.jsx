import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import SingleChoiceButton from './SingleChoiceButton';
import MultiChoiceButton from './MultiChoiceButton';
import Lang from 'lodash';
import moment from 'moment';
import progressionLookup from '../lib/progression_lookup';
import DatePicker from '../forms/DatePicker';
import './ProgressionForm.css';

class ProgressionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusOptions: progressionLookup.getStatusOptions(),
            reasonOptions: progressionLookup.getReasonOptions(),
            reasonButtonsActiveState: [],
            selectedReferenceDate: null
        };
    }

    /*
     * Sets default asOfDate, updates props accordingly.
     */
    componentWillMount = () => {
        // Default the asOfDate to use in slim mode copy button
        this.props.updateValue("asOfDateDate", new moment()); //.format('D MMM YYYY'));
    }

    /*
     * Handles updating the Disease Status 'status'.
     */
    handleStatusSelection = (e, i) => {
        e.preventDefault();
        const newStatus = this.state.statusOptions[i].name;
        this.props.updateValue("status", newStatus);
    }

    /*
     * Handles updating the Disease Status 'reason'.
     */
    handleReasonSelection = (reason, i) => {
        // set active button state array
        let newArray = this.state.reasonButtonsActiveState;
        newArray[i] = !this.state.reasonButtonsActiveState[i];

        this.setState({
            reasonButtonsActiveState: newArray
        });

        const reasonIndex = this.props.object.evidence.findIndex((e) => e === reason.name);
        if (this.state.reasonButtonsActiveState[i]) {
            // Index should be -1; if it isn't don't add to array
            if (reasonIndex === -1) {
                const newReasons = this.props.object.evidence;
                newReasons.push(reason.name);
                this.props.updateValue("reasons", newReasons);
            } else {
                // Nothing -- the element is already in there
                console.warn(`Warning: Cornercase; the element ${reason.name} shouldnt have been in our current reasons, but it was`);
            }
        } else {
            // Index shouldn't be -1; if it is, don't remove it again;
            if (reasonIndex !== -1) {
                const filteredReasons = this.props.object.evidence.filter((e) => e !== reason.name);
                this.props.updateValue("reasons", filteredReasons);
            } else {
                // Nothing -- the element is already removed from the array;
                console.warn(`Warning: Cornercase: the element ${reason.name} should be in our current reasons, but it isn't`);
            }
        }
    }

    /*
     * Handles updating the Disease Status 'reference Date'.
     */
    handleReferenceDateChange = (selectedReferenceDate) => {
        this.props.updateValue("referenceDateDate", selectedReferenceDate.format('D MMM YYYY'));
    }

    /*
     * Render the Disease Status 'status' button for the given status
     */
    renderStatusButtonGroup = (status, i) => {
        const marginSize = "10px";
        const statusName = status.name;
        const statusDescription = status.description;
        const tooltipClass = (statusDescription.length > 100) ? "tooltiptext large" : "tooltiptext";

        return (
            <div key={statusName} className="tooltip-progression-form">
                <span id={statusName} className={tooltipClass}>{statusDescription}</span>
                <SingleChoiceButton 
                        buttonKey={i}
                        buttonText={statusName}
                        onClick={(e) => this.handleStatusSelection(e, i)}
                        isSelected={this.props.object.status === this.state.statusOptions[i].name}
                        marginSize={marginSize}
                />
            </div>
        );
    }

    /*
     * Render the Disease Status 'reason' button for the given reason
     */
    renderReasonButtonGroup = (reason, i) => {
        const reasonName = reason.name;
        const reasonDescription = reason.description;

        const tooltipClass = (reasonDescription.length > 100) ? "tooltiptext large" : "tooltiptext";
        return (
            <div key={reasonName} className="tooltip-progression-form">
                <span id={reasonName} className={tooltipClass}>{reasonDescription}</span>
                <MultiChoiceButton
                        buttonKey={i}
                        buttonText={reasonName}
                        onClick={(e) => this.handleReasonSelection(reason, i)}
                        isSelected={this.state.reasonButtonsActiveState[i]}
                />
            </div>
        )
    }

    render() {
        const clinicallyRelevantTime = this.props.object.clinicallyRelevantTime;
        let referenceDateInterface, referenceDateDescription = null;
        if (Lang.isUndefined(this.props.referenceDateEnabled) || this.props.referenceDateEnabled) {
            referenceDateInterface = (
                <div>
                    <h4 className="header-spacing">Reference Date</h4>
                    <DatePicker id="reference-date"
                        handleDateChange={this.handleReferenceDateChange}
                        dateToSet={clinicallyRelevantTime}
                    />
                </div>
                
            );
            referenceDateDescription = (
                <div>
                    <h4 className="header-spacing">Reference Date</h4>
                    <p id="data-element-description">
                        {progressionLookup.getDescription("referenceDate")}
                        <span className="helper-text"> mm/dd/yyyy</span>
                    </p>
                </div>
            );
        }

        return (
            <div>
                <h1>Disease Status</h1>
                <Divider className="divider"/>
                
                {/*Interface here*/}
                <h4 className="header-spacing">Status<span className="helper-text"> Choose one</span></h4>
                <div className="btn-group-status-progression">
                    {
                        this.state.statusOptions.map((status, i) => {
                            return this.renderStatusButtonGroup(status, i)
                        })
                    }
                </div>

                <h4 className="header-spacing">Rationale for status<span className="helper-text"> Choose one or more</span></h4>
                <div className="btn-group-reason-progression">
                    {
                        this.state.reasonOptions.map((reason, i) => {
                            return this.renderReasonButtonGroup(reason, i)
                        })
                    }
                </div>

                {referenceDateInterface}

                {/*Definitions of dataelements*/}
                <h4 className="header-spacing">Definitions</h4>
                <Divider className="divider"/>
                
                <h4 className="header-spacing">Disease Status</h4>
                <p id="data-element-description">
                    {progressionLookup.getDescription("progression")}
                </p>
                <p id="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="diseaseStatusSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>

                <h4 className="header-spacing">Status</h4>
                <p id="data-element-description">
                    {progressionLookup.getDescription("status")}
                </p>

                <h4 className="header-spacing">Rationale for status</h4>
                <p id="data-element-description">
                    {progressionLookup.getDescription("reason")}
                </p>

                {referenceDateDescription}
            </div>
        );
    }
}

ProgressionForm.proptypes = {
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired,
    referenceDateEnabled: PropTypes.bool.isRequired
}

export default ProgressionForm;