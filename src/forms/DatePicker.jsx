import React, {Component} from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './DatePicker.css';

const DATE_FORMAT = 'MM/DD/YYYY';

class DatePicker extends Component {

    constructor(props) {
        super(props);
        this._handleDateChange = this._handleDateChange.bind(this);
        this.state = {
            selectedDate: null,
            isDisabled: false
        }
    }

    _handleDateChange(selectedDate) {
        this.props.handleDateChange(selectedDate);
    }

    render() {
        var formattedDateToSet = null;
        const {selectedDate} = this.state;
        const formattedDate = selectedDate ? moment(selectedDate).format(DATE_FORMAT) : '';

        if (this.props.dateToSet != null) {
            formattedDateToSet = new moment(this.props.dateToSet, "D MMM YYYY ").format(DATE_FORMAT);
        } else {
            formattedDateToSet = DATE_FORMAT;
        }

        return (
            <DayPickerInput
                value={formattedDate}
                onDayChange={this._handleDateChange}
                format={DATE_FORMAT}
                placeholder={formattedDateToSet}
            />
        )
    }
}

export default DatePicker;