import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import progressionLookup from '../lib/progression_lookup';
import './ProgressionForm.css';

class ProgressionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusOptions: progressionLookup.getStatusOptions(),
            reasonOptions: progressionLookup.getReasonOptions(),
            reasonButtonsActiveState: []
        };
    }

    currentlySelected(item, i) {
        return (item === i ? true : false);
    }

    handleStatusSelection = (e, i) => {
        e.preventDefault();
        const newStatus = this.state.statusOptions[i].name;
        const newProgression = {...this.props.progression};
        newProgression["status"] = newStatus;
        this.props.onProgressionUpdate(newProgression);
    }

    handleReasonSelection = (reason, i) => {

        // set active button state array
        let newArray = this.state.reasonButtonsActiveState;
        newArray[i] = !this.state.reasonButtonsActiveState[i];

        this.setState({
            reasonButtonsActiveState: newArray
        });

        const reasonIndex = this.props.progression.reason.findIndex((r) => r === reason.name);
        if (this.state.reasonButtonsActiveState[i]) {
            // Index should be -1; if it isn't don't add to array
            if (reasonIndex === -1) {
                const newReasons = [...this.props.progression.reason];
                newReasons.push(reason.name);
                const newProgression = {...this.props.progression};
                newProgression["reason"] = newReasons;
                this.props.onProgressionUpdate(newProgression);
            } else {
                // Nothing -- the element is already in there
                console.warn(`Warning: Cornercase; the element ${reason.name} shouldnt have been in our current reasons, but it was`);
            }
        } else {
            // Index shouldn't be -1; if it is, don't remove it again;
            if (reasonIndex !== -1) {

                const filteredReasons = this.props.progression.reason.filter((r) => r !== reason.name);
                const newProgression = {...this.props.progression};
                newProgression["reason"] = filteredReasons;
                this.props.onProgressionUpdate(newProgression);
            } else {
                // Nothing -- the element is already removed from the array;
                console.warn(`Warning: Cornercase: the element ${reason.name} should be in our current reasons, but it isn't`);
            }
        }

    }

    renderReasonButtonGroup = (reason, i) => {

        let reasonName = reason.name;
        let reasonDescription = reason.description;
        let backgroundColor = "";
        let labelColor = "";

        if (this.state.reasonButtonsActiveState[i]) {
            backgroundColor = "#297DA2";
            labelColor = "#fff";
        } else {
            backgroundColor = "";
            labelColor = "";
        }

        const buttonClass = (reasonDescription.length > 100) ? "tooltiptext large" : "tooltiptext";

        return (
            <div key={reasonName} className="tooltip">
                <span id={reasonName} className={buttonClass}>{reasonDescription}</span>
                <RaisedButton
                    key={i}
                    label={reasonName}
                    labelStyle={{
                        textTransform: "none",
                    }}
                    buttonStyle={{
                        height: "75px",
                        width: "180px"
                    }}
                    overlayStyle={{
                        padding: "20px 0 20px 0"
                    }}
                    style={{margin: 0.5}}

                    onClick={(e, isChecked) => this.handleReasonSelection(reason, i)}

                    backgroundColor={backgroundColor}
                    labelColor={labelColor}
                >
                </RaisedButton>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Disease Progression</h1>
                <p id="data-element-description">
                    {progressionLookup.getDescription("progression")}
                </p>
                <Divider className="divider"/>

                <h4>Status of progression</h4>
                <p id="data-element-description">
                    {progressionLookup.getDescription("status")}
                    <span className="helper-text"> Choose one</span>
                </p>

                <div className="btn-group-status-progression">
                    {this.state.statusOptions.map((status, i) => {
                        let statusName = status.name;
                        let statusDescription = status.description;
                        const buttonClass = (statusDescription.length > 100) ? "tooltiptext large" : "tooltiptext";
                        return (
                            <div key={statusName} className="tooltip">
                                <span id={statusName} className={buttonClass}>{statusDescription}</span>
                                <RaisedButton
                                    key={i}
                                    label={statusName}
                                    labelStyle={{
                                        textTransform: "none",
                                    }}
                                    buttonStyle={{
                                        height: "75px",
                                        width: "180px"
                                    }}
                                    overlayStyle={{
                                        padding: "20px 0 20px 0"
                                    }}
                                    style={{margin: 0.5}}
                                    onClick={(e) => this.handleStatusSelection(e, i)}
                                    disabled={this.currentlySelected(this.props.progression.status, this.state.statusOptions[i].name)}
                                    disabledBackgroundColor="#297DA2"
                                    disabledLabelColor="#fff"
                                >
                                </RaisedButton>
                            </div>
                        );
                    })}
                </div>

                <h4>Rationale for status</h4>
                <p id="data-element-description">
                    {progressionLookup.getDescription("reason")}
                    <span className="helper-text"> Choose one or more</span>
                </p>

                <div className="btn-group-reason-progression">
                    {this.state.reasonOptions.map((reason, i) => {
                        return this.renderReasonButtonGroup(reason, i)
                    })}
                </div>
            </div>
        );
    }
}

export default ProgressionForm;
