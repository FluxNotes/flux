import React, {Component} from 'react';

import './RangeChart.css';

/*
 A chart that displays a data point on a range scale
 */
class RangeChart extends Component {

    render() {

        let valueColor = 'black';

        // Check if value is out of range
        if (this.props.value < this.props.lowerValue || this.props.value > this.props.upperValue) {
            valueColor = 'red';
        } else {
            valueColor = 'black';
        }

        return (
            <svg width="280" height="100">

                {/*Header*/}
                <text x="40" y="20" fontFamily="sans-serif" fontSize="20px" fill="#333">{this.props.name} <tspan fill={valueColor}>{this.props.value}</tspan> <tspan fontSize="12px"> {this.props.unit}</tspan></text>
                {/*Main line*/}
                <line x1="20" y1="50" x2="260" y2="50" stroke="#bfbfbf" strokeWidth="0.5"  />

                {/*Lower value tick*/}
                <line x1="20" y1="40" x2="20" y2="60" stroke="#bfbfbf" strokeWidth="0.5"  />
                <text x="10" y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.lowerValue} {this.props.unit}</text>

                {/*Upper value tick*/}
                <line x1="260" y1="40" x2="260" y2="60" stroke="#bfbfbf" strokeWidth="0.5"  />
                <text x="250" y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.upperValue} {this.props.unit}</text>

                {/*Typical value tick*/}
                <line x1="65" y1="40" x2="65" y2="60" stroke="#bfbfbf" strokeWidth="0.5"  />
                <text x="55" y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.typicalValue} {this.props.unit}</text>

                {/*Data point for the value*/}
                <circle cx="272" cy="50" r="5" stroke="red" strokeWidth="3" fill="red" />
            </svg>
        );
    }
}

export default RangeChart;
