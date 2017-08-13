import React from 'react'

class ContextItem extends React.Component {

  onClick = (e) => {
    this.props.closePortal()

    const { onChange, context, onSelected } = this.props

    const state = onSelected(this.props.state, context)

    onChange(state)
  }

  onMouseEnter = () =>
    this.props.setSelectedIndex(this.props.index)

  render = () =>
    <li
  	  className={this.props.index === this.props.selectedIndex ? 'selected' : undefined}
      onClick={this.onClick}
      onMouseEnter={this.onMouseEnter}
    >
      {this.props.context.context}
    </li>
}

export default ContextItem