import React from 'react';
import PropTypes from 'prop-types';
import ContextItem from './ContextItem';

class ContextListOptions extends React.Component {
    render() {
        const { contexts, state } = this.props;
        return (
            <ul>
                {contexts.map((context, index) => {
                    return <ContextItem
                        key={context.key}
                        index={index}
                        context={context}
                        selectedIndex={this.props.selectedIndex}
                        setSelectedIndex={this.props.setSelectedIndex}
                        onSelected={this.props.onSelected}
                        closePortal={this.props.closePortal}
                        state={state}
                    />
                })}
            </ul>
        );
    }
}

ContextListOptions.propTypes = {
    closePortal: PropTypes.func,
    contexts: PropTypes.object.isRequired,
    onSelected: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    setSelectedIndex: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
}

export default ContextListOptions;