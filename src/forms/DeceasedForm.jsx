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

        const dateOfDeathInterface = (
            <div>
                <h4 className="header-spacing">Date of Death<span className="helper-text"> mm/dd/yyyy</span></h4>
                <DatePicker 
                    id="date-of-death"
                    handleDateChange={this.changeDate}
                    dateToSet={null}
                />
            </div>
        );

        const dateOfDeathDescription = (
            <div>
                <h4 className="header-spacing">Date of Death</h4>
                <p id="data-element-description">
                    The date of the patient's death.
                </p>
            </div>
            
        );

        return (
            <div>
                <h1>Deceased</h1>
                <Divider className="divider"/>
                {/*Buttons here*/}
                {dateOfDeathInterface}

                {/*Definitions of dataelements*/}
                <h4 className="header-spacing">Definitions</h4>
                <Divider className="divider"/>

                <h4 className="header-spacing">Deceased</h4>
                <p id="data-element-description">
                    An indication that the person is no longer living as of the date specified below.
                </p>
                <p id="data-element-description">
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="deceasedSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>

                {dateOfDeathDescription}
            </div>
        );
    }
}

DeceasedForm.proptypes = { 
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default DeceasedForm;