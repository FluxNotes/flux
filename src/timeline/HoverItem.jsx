import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

HoverItem.propTypes = { 
    title: PropTypes.string,
    text: PropTypes.string
} 

export default HoverItem;
