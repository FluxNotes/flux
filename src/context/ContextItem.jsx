import React from 'react'
import './ContextItem.css';

class ContextItem extends React.Component {
    /*
     * When an item is clicked, close the portal and update contextPortal accordingly 
     */
    onClick = (e) => {
        this.props.closePortal();
        const { onChange, context, onSelected } = this.props;
        const state = onSelected(this.props.state, context);
        onChange(state);
    }
    /*
     * When an item is hovered, update the selectedIndex
     */
    onMouseEnter = () => {
        return this.props.setSelectedIndex(this.props.index);
    }
    /*
     * Render the individual menu item
     */
    render = () => {
        return (
            <li
              className="context-menu-item"
              data-active={this.props.index === this.props.selectedIndex}
              onClick={this.onClick}
              onMouseEnter={this.onMouseEnter}
            >
                {this.props.context.context}
            </li>
        );
    }
}

export default ContextItem