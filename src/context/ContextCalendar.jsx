import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import _ from 'lodash';

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

    handleArrowKey = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    onKeyDown = (e, data, state, editor) => {
        const keyCode = e.which;
        if (keyCode === ENTER_KEY) {
            this.handleArrowKey(e);
            if (_.isUndefined(this.refs.input.state.selectedValue)) {
                this.refs.input.state.selectedValue = this.refs.input.state.value;
            }
            this.handleDateSelect(this.refs.input.state.selectedValue);
        } else if (keyCode === UP_ARROW_KEY) {
            this.handleArrowKey(e);
            this.refs.input.goTime(-1, 'weeks');
        } else if (keyCode === DOWN_ARROW_KEY) {
            this.handleArrowKey(e);
            this.refs.input.goTime(1, 'weeks');
        } else if (keyCode === LEFT_ARROW_KEY) {
            this.handleArrowKey(e);
            this.refs.input.goTime(-1, 'days');
        } else if (keyCode === RIGHT_ARROW_KEY) {
            this.handleArrowKey(e);
            this.refs.input.goTime(1, 'days');
        }
    }


    render() {
        return (
            <Calendar
                showDateInput={false}
                onSelect={this.handleDateSelect}
                ref="input"
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