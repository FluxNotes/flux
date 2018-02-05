import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import DatePicker from '../forms/DatePicker';
import './DeceasedForm.css';

class DeceasedForm extends Component {
    changeDate = (selectedDate) => {
        this.props.updateValue("date", selectedDate);
    };

    render() {

        let dateOfDeathSection = (
            <div>
                <h4 className="header-spacing">Date of Death</h4>
                <p id="data-element-description">
                    The date of the patient's death.
                    <span className="helper-text"> mm/dd/yyyy</span>
                </p>

                <DatePicker id="date-of-death"
                    handleDateChange={this.changeDate}
                    dateToSet={null}
                />
            </div>
        );

        return (
            <div>
                <h1>Deceased</h1>
                <p id="date-element-description">
                    An indication that the person is no longer living as of the date specified below.
                </p>
                <p id="date-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="deceasedSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>
                <Divider className="divider"/>
                {dateOfDeathSection}

            </div>
        );
    }
}

DeceasedForm.proptypes = { 
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default DeceasedForm;