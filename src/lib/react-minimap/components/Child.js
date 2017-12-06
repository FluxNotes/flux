import React from 'react';
import PropTypes from 'prop-types'
import '../react-minimap.css'

export class Child extends React.Component {

  render() {
    const {width, height, left, top} = this.props
    return (
      <div
        style={{
          position: 'absolute',
          width,
          height,
          left,
          top,
        }}
        className="minimap-children"
      >
        {this.props.title 
          ? <div className="minimap-title"> 
            {this.props.title}
          </div> 
          : ""}
      </div>
    );
  }
}

Child.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  node: PropTypes.any,
};

export default Child
