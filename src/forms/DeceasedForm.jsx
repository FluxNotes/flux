import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './DeceasedForm.css';

const DAY_FORMAT = 'MM/DD/YYYY';

class DeceasedForm extends Component {

    state = {
        selectedDay: null,
        isDisabled: false
    };

    handleDayChange = (selectedDay, modifiers) => {
        this.setState({
            selectedDay,
            isDisabled: modifiers.disabled,
        });

        this.props.updateValue("date", selectedDay);
    };

    render() {
        const {selectedDay} = this.state;
        const formattedDay = selectedDay ? moment(selectedDay).format(DAY_FORMAT) : '';

        let dateOfDeathSection = (
            <div>
                <h4 className="header-spacing">Date of Death</h4>
                <p id="data-element-description">
                    The date of the patient's death.
                    <span className="helper-text"> mm/dd/yyyy</span>
                </p>

                <DayPickerInput
                    value={formattedDay}
                    onDayChange={this.handleDayChange}
                    format={DAY_FORMAT}
                    placeholder={DAY_FORMAT}
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
            </div>
        );
    }
}

export default DeceasedForm;