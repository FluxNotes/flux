import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';

class ContextCalendar extends React.Component {
    handleDateSelect = (date) => {
        this.props.closePortal();
        const context = { key: 'set-date-id', context: `${date.format('MM/DD/YYYY')}`, object: date };
        this.props.onSelected(this.props.state, context);
    }

    render() {
        return (
            <Calendar
                showDateInput={false}
                onSelect={this.handleDateSelect}
                ref={input => input && setTimeout(() => {input.focus()}, 100)}
            />
        );
    }
}

ContextCalendar.proptypes = {
    closePortal: PropTypes.func.isRequired,
    contexts: PropTypes.object,
    onSelected: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number,
    setSelectedIndex: PropTypes.func,
    state: PropTypes.object,
}

export default ContextCalendar;