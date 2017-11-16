import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './DatePicker.css';

// Changing DATE_FORMAT updates how the date is displayed in the date picker
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

    // When user selects a date via the date picker, the date is passed back up to the parent component
    _handleDateChange(selectedDate) {
        this.props.handleDateChange(selectedDate);
    }

    render() {
        var formattedDateToSet = null;
        const {selectedDate} = this.state;
        const formattedDate = selectedDate ? moment(selectedDate).format(DATE_FORMAT) : '';

        // dateToSet is the date user wants to set as a default date
        // If no date is passed into the date picker component, the default date is placeholder text (the date format)
        if (this.props.dateToSet != null) {
            formattedDateToSet = new moment(this.props.dateToSet, "D MMM YYYY ").format(DATE_FORMAT);
        } else {
            formattedDateToSet = DATE_FORMAT;
        }

        return (
            <DayPickerInput
                id={this.props.id}
                className={this.props.className}
                value={formattedDate}
                onDayChange={this._handleDateChange}
                format={DATE_FORMAT}
                placeholder={formattedDateToSet}
            />
        )
    }
}

DatePicker.proptypes = { 
    dateToSet: PropTypes.string,
    handleDateChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    className: PropTypes.string
}

export default DatePicker;