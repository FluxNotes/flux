import React, {Component} from 'react';

import './RangeChart.css';

/*
 A chart that displays a data point on a range scale
 */
class RangeChart extends Component {

    render() {

        // Calculate typical value tick mark placement
        const lineLengthPixels = 240;
        let numberOfPixelsPerUnit = lineLengthPixels /(this.props.upperValue - this.props.lowerValue);
        let typicalValueXPixels = ((this.props.typicalValue - this.props.lowerValue) * numberOfPixelsPerUnit)+ 30; // x=30 is where the line begins

        // Check if value is out of range
        let valueColor = 'black';

        let dotColor = 'black';

        let valueXPixels = null;
        const distanceFromLineInPixels = 12;

        // If value is out of range, set the dot and value color to red and place it outside of the lower or upper mark
        if (this.props.value < this.props.lowerValue || this.props.value > this.props.upperValue) {

            // set the dot color
            valueColor = 'red';
            dotColor = 'red';

            // If the value is below the lower bound, set the x position to the left of the line
            if (this.props.value < this.props.lowerValue) {
                valueXPixels = 30 - distanceFromLineInPixels; // x=30 is where the line begins
            }

            // Else the value is above the upper bound so set the x position to the right of the line
            else {
                valueXPixels = lineLengthPixels + distanceFromLineInPixels + 30; // x=30 is where the line begins
            }

        }
        // Set the value and dot color to black and calculate where to place it on the line
        else {

            // set the dot color
            valueColor = 'black';
            dotColor = 'black'

            // Calculate the x position of the dot
            valueXPixels =  ((this.props.value - this.props.lowerValue) * numberOfPixelsPerUnit)+ 30; // x=30 is where the line begi
        }

        return (
            <svg width="300" height="100">

                {/*Header*/}
                <text x="40" y="20" fontFamily="sans-serif" fontSize="20px" fill="#333">{this.props.name} <tspan fill={valueColor}>{this.props.value}</tspan> <tspan fontSize="12px"> {this.props.unit}</tspan></text>

                {/*Main line*/}
                <line x1="30" y1="50" x2="270" y2="50" stroke="#bfbfbf" strokeWidth="0.5"  />

                {/*Lower value tick*/}
                <line x1="30" y1="40" x2="30" y2="60" stroke="#bfbfbf" strokeWidth="0.5"  />
                <text x="10" y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.lowerValue} {this.props.unit}</text>

                {/*Upper value tick*/}
                <line x1="270" y1="40" x2="270" y2="60" stroke="#bfbfbf" strokeWidth="0.5"  />
                <text x="250" y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.upperValue} {this.props.unit}</text>

                {/*Typical value tick*/}
                <line x1={typicalValueXPixels} y1="40" x2={typicalValueXPixels} y2="60" stroke="#bfbfbf" strokeWidth="0.5"  />
                <text x={typicalValueXPixels - 15} y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.typicalValue} {this.props.unit}</text>

                {/*Data point for the value*/}
                <circle cx={valueXPixels} cy="50" r="5" strokeWidth="3" fill={dotColor} />
            </svg>
        );
    }
}

export default RangeChart;
