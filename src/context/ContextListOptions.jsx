import React from 'react'
import ContextItem from './ContextItem'

class ContextListOptions extends React.Component {
    render() {
        const { contexts, state } = this.props;
        // TO DO FIX THIS SCROLL CLASS
        return (
            // <span className="scrollable">
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
            // </span>
        );
    }
}

// TO DO ADD PROPTYPES

export default ContextListOptions;