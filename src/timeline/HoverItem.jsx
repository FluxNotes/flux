import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import './HoverItem.css';

class HoverItem extends Component {
  render() {
    const style = this.props.style;
    return (
      <Paper id="hover-item" className="hover-item" style={style}>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </Paper>
    );
  }
}

export default HoverItem;
