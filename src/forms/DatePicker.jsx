import React, {Component} from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './DatePicker.css';

const DATE_FORMAT = 'MM/DD/YYYY';

class DatePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: null,
            isDisabled: false
        }
    }

    _handleDateChange(selectedDate) {
        console.log("inside handle date change in date picker");
        console.log("selected date");
        console.log(selectedDate);
        this.props.handleDateChange(selectedDate);
    }

    render() {
        const {selectedDate} = this.state;
        const formattedDate = selectedDate ? moment(selectedDate).format(DATE_FORMAT) : '';

        return (
            <DayPickerInput
                value={formattedDate}
                onDayChange={this._handleDateChange}
                format={DATE_FORMAT}
                placeholder={DATE_FORMAT}
            />
        )
    }
}

export default DatePicker;