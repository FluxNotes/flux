import React, {Component} from 'react';
import Lang from 'lodash';
import './RangeChart.css';

/*
 A chart that displays a data point on a range scale
 */
class RangeChart extends Component {

    render() {

        // Calculate typical value tick mark placement
        const lineLengthPixels = 240;
        // x position in pixels for where the line begins
        const lineStartXPixels = 10;
        let numberOfPixelsPerUnit;
        if (Lang.isNull(this.props.upperValue) || Lang.isNull(this.props.lowerValue)) {
            numberOfPixelsPerUnit = 0;
        } else {
            numberOfPixelsPerUnit = lineLengthPixels /(this.props.upperValue - this.props.lowerValue);
        }
        let typicalValueXPixels;
        if (numberOfPixelsPerUnit === 0 || Lang.isNull(this.props.typicalValue)) {
            typicalValueXPixels = 0;
        } else {
            typicalValueXPixels = ((this.props.typicalValue - this.props.lowerValue) * numberOfPixelsPerUnit)+ lineStartXPixels; // x=30 is where the line begins
        }

        // Check if value is out of range
        let valueColor = 'black';

        let dotColor = 'black';

        let valueXPixels = null;
        const distanceFromLineInPixels = 12;

        let svgForDataPoint;
        // if value is null, don't plot a dot for it
        if (Lang.isNull(this.props.value)) {
            svgForDataPoint = null;
        } else {
            // If value is out of range, set the dot and value color to red and place it outside of the lower or upper mark
            if (this.props.value < this.props.lowerValue || this.props.value > this.props.upperValue) {

                // set the dot color
                valueColor = 'red';
                dotColor = 'red';

                // If the value is below the lower bound, set the x position to the left of the line
                if (this.props.value < this.props.lowerValue) {
                    valueXPixels = lineStartXPixels - distanceFromLineInPixels;
                }

                // Else the value is above the upper bound so set the x position to the right of the line
                else {
                    valueXPixels = lineLengthPixels + distanceFromLineInPixels + lineStartXPixels;
                }

            }
            // Set the value and dot color to black and calculate where to place it on the line
            else {

                // set the dot color
                valueColor = 'black';
                dotColor = 'black'

                // Calculate the x position of the dot
                valueXPixels =  ((this.props.value - this.props.lowerValue) * numberOfPixelsPerUnit)+ lineStartXPixels;
            }
            svgForDataPoint = <circle cx={valueXPixels} cy="50" r="5" strokeWidth="3" fill={dotColor} />;
        }
        
        let svgForTypicalTick1, svgForTypicalTick2;
        if (typicalValueXPixels === 0 || this.props.typicalValue === this.props.lowerValue || this.props.typicalValue === this.props.upperValue) {
            svgForTypicalTick1 = null;
            svgForTypicalTick2 = null;
        } else {
            svgForTypicalTick1 = <line x1={typicalValueXPixels} y1="40" x2={typicalValueXPixels} y2="60" stroke="#000" strokeWidth="0.5"  />;
            svgForTypicalTick2 = <text x={typicalValueXPixels - 15} y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.typicalValue} {this.props.unit}</text>;
        }
        if (Lang.isNull(this.props.name)) {
            console.log("name is null");
            return (
                <svg width="100%" height="6em" viewBox="0 0 300 50">

                    {/* Header
                    <text x="40" y="28" fontFamily="sans-serif" fontSize="0.9em" fill="#333">{this.props.name} <tspan fill={valueColor}>{this.props.value}</tspan> <tspan fontSize="12px"> {this.props.unit}</tspan></text>  */}

                    {/*Main line*/}
                    <line x1={lineStartXPixels} y1="50" x2={lineStartXPixels + lineLengthPixels} y2="50" stroke="#000" strokeWidth="0.5"  />

                    {/*Lower value tick*/}
                    <line x1={lineStartXPixels} y1="40" x2={lineStartXPixels} y2="60" stroke="#000" strokeWidth="0.5"  />
                    <text x={lineStartXPixels - 20} y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.lowerValue} {this.props.unit}</text>

                    {/*Upper value tick*/}
                    <line x1={lineStartXPixels + lineLengthPixels} y1="40" x2={lineStartXPixels + lineLengthPixels} y2="60" stroke="#000" strokeWidth="0.5"  />
                    <text x={lineStartXPixels + lineLengthPixels - 20} y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.upperValue} {this.props.unit}</text>

                    {/*Typical value tick*/}
                    {svgForTypicalTick1}
                    {svgForTypicalTick2}
                    
                    {/*Data point for the value*/}
                    {svgForDataPoint}
                </svg>
            );
        } else {
            return (
                <div>
                    <svg width="100%" height="6em" viewBox="0 0 250 110">

                        {/* Header
                         <text x="40" y="28" fontFamily="sans-serif" fontSize="0.9em" fill="#333">{this.props.name} <tspan fill={valueColor}>{this.props.value}</tspan> <tspan fontSize="12px"> {this.props.unit}</tspan></text>  */}

                        {/*Main line*/}
                        <line x1={lineStartXPixels} y1="50" x2={lineStartXPixels + lineLengthPixels} y2="50" stroke="#000" strokeWidth="0.5" />

                        {/*Lower value tick*/}
                        <line x1={lineStartXPixels} y1="40" x2={lineStartXPixels} y2="60" stroke="#000" strokeWidth="0.5" />
                        <text x={lineStartXPixels - 20} y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.lowerValue} {this.props.unit}</text>

                        {/*Upper value tick*/}
                        <line x1={lineStartXPixels + lineLengthPixels} y1="40" x2={lineStartXPixels + lineLengthPixels} y2="60" stroke="#000" strokeWidth="0.5" />
                        <text x={lineStartXPixels + lineLengthPixels - 20} y="75" fontFamily="sans-serif" fontSize="12px" fill="#333">{this.props.upperValue} {this.props.unit}</text>

                        {/*Typical value tick*/}
                        {svgForTypicalTick1}
                        {svgForTypicalTick2}

                        {/*Data point for the value*/}
                        {svgForDataPoint}
                    </svg>
                </div>
            );
        }
    }
}

export default RangeChart;
