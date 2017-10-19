import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import DatePicker from '../forms/DatePicker';
import './DeceasedForm.css';

const DATE_FORMAT = 'MM/DD/YYYY';

class DeceasedForm extends Component {

    state = {
        selectedDate: null,
        isDisabled: false
    };

    handleDateChange = (selectedDate) => {

        // this.setState({
        //     selectedDate
        // });

        console.log("inside handle date change in deceased form");
        // this.props.updateValue("date", selectedDate);
    };

    render() {
        const {selectedDate} = this.state;
        const formattedDate = selectedDate ? moment(selectedDate).format(DATE_FORMAT) : '';

        let dateOfDeathSection = (
            <div>
                <h4 className="header-spacing">Date of Death</h4>
                <p id="data-element-description">
                    The date of the patient's death.
                    <span className="helper-text"> mm/dd/yyyy</span>
                </p>

                <DayPickerInput
                    id="date-of-death2"
                    value={formattedDate}
                    onDayChange={this.handleDateChange}
                    format={DATE_FORMAT}
                    placeholder={DATE_FORMAT}
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
                    Based on your selections below, the copy button at the bottom will copy a <a
                    href="deceasedSheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                </p>
                <Divider className="divider"/>
                {dateOfDeathSection}
                <DatePicker id="date-of-death">
                    handleDateChange={this.handleDateChange}
                </DatePicker>
            </div>
        );
    }
}

export default DeceasedForm;