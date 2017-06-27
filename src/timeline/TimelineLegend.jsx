import React, {Component} from 'react';

import './TimelineLegend.css';

class Legend extends Component {

  render() {
    return(
      <div className="legend">
        {this.props.items.map((item, i) => {
          return (
            <div key={i}><i className={'legend-icon fa fa-' + item.icon}></i>:&nbsp;{item.description}</div>
          )
        })}
      </div>
    );
  }
}

export default Legend;
