import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TimelineLegend.css';

class Legend extends Component {
    render() {
        return(
            <div className="legend">
                {this.props.items.map((item, i) => {
                    return (
                        <div key={i}><i className={'legend-icon fa fa-' + item.icon}></i>:&nbsp;&nbsp;{item.description}</div>
                    );
                })}
            </div>
        );
    }
}

Legend.propTypes = { 
    items: PropTypes.arrayOf(PropTypes.shape({ 
        icon: PropTypes.string,
        description: PropTypes.string
    })),
} 

export default Legend;