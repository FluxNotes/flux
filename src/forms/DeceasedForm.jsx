import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import './ProgressionForm.css';


class DeceasedForm extends Component {

    handleDateSelection = (event) => {
        const date = event.target.value;
        let formattedDate = null;
        if (date) {
            formattedDate = new moment(date).format('D MM YYYY');
        }
        this.props.updateValue("date", formattedDate);
    }

    render() {
        var formattedDateOfDeath = null;

        let dateOfDeathSection = (
            <div>
                <h4 className="header-spacing">Date of Death</h4>
                <p id="data-element-description">
                    The date of the patient's death.
                    <span className="helper-text"> mm/dd/yyyy</span>
                </p>
                <TextField
                    id="date-of-death"
                    type="date"
                    defaultValue={formattedDateOfDeath}
                    onChange={this.handleDateSelection}
                />
            </div>
        );

        return (
            <div>
                <h1>Deceased</h1>
                <p id="date-element-description">
                    An indication that the person is no longer living as of the date specified below.
                    <br/>
                    <br/>
                    Based on your selections below, the copy button at the bottom will copy a <a href="deceasedSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>
                <Divider className="divider"/>
                    {dateOfDeathSection}
            </div>
        );
    }
}

export default DeceasedForm;