import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import Lang from 'lodash';

const ENTER_KEY = 13;
const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;
const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;

class ContextCalendar extends React.Component {
    handleDateSelect = (date) => {
        this.props.closePortal();
        const context = { key: 'set-date-id', context: `${date.format('D MMM YYYY')}`, object: date };
        this.props.onSelected(this.props.state, context);
    }

    onKeyDown = (e, data, state, editor) => {
        const keyCode = e.which;
        if (keyCode === ENTER_KEY) {
            e.preventDefault();
            e.stopPropagation();
            if (Lang.isUndefined(this.cal.state.selectedValue)) {
                this.cal.state.selectedValue = this.cal.state.value.format("D MMM YYYY");
            }
            this.props.closePortal();
            const date = this.cal.state.selectedValue;
            const context = { key: 'set-date-id', context: `${date}`, object: date };
            // If a plugin returns a state, it short circuits future plugins
            return this.props.onSelected(this.props.state, context);
        } else if (keyCode === UP_ARROW_KEY) {
            e.preventDefault();
            e.stopPropagation();
            this.cal.goTime(-1, 'weeks');
        } else if (keyCode === DOWN_ARROW_KEY) {
            e.preventDefault();
            e.stopPropagation();
            this.cal.goTime(1, 'weeks');
        } else if (keyCode === LEFT_ARROW_KEY) {
            e.preventDefault();
            e.stopPropagation();
            this.cal.goTime(-1, 'days');
        } else if (keyCode === RIGHT_ARROW_KEY) {
            e.preventDefault();
            e.stopPropagation();
            this.cal.goTime(1, 'days');
        }
    }


    render() {
        return (
            <Calendar
                showDateInput={false}
                onSelect={this.handleDateSelect}
                ref= {input => input && setTimeout(() => { this.cal = input; }, 100)}
            />
        );
    }
}

ContextCalendar.propTypes = {
    closePortal: PropTypes.func.isRequired,
    onSelected: PropTypes.func.isRequired,
    state: PropTypes.object,
};

export default ContextCalendar;