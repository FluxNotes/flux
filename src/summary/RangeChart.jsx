import React, {Component} from 'react';
import Lang from 'lodash';
import './RangeChart.css';

/*
 A chart that displays a data point on a range scale
 */
class RangeChart extends Component {

    render() {
        console.log('lower value: ' + this.props.lowerValue);
        console.log('upper value: ' + this.props.upperValue);
        console.log('typical value: ' + this.props.typicalValue);
        console.log('value: ' + this.props.value);

        // Calculate typical value tick mark placement
        const lineLengthPixels = 240;
        // x position in pixels for where the line begins
        const lineStartXPixels = 10;
        // calculate padding around lower and upper values (typical range)
        const lowerValuePadding = (this.props.lowerValue === 0) ? 
            ((this.props.upperValue - this.props.lowerValue) / - 10): (this.props.lowerValue - (this.props.lowerValue / 10));
        const upperValuePadding = this.props.upperValue + (this.props.upperValue / 10);
        // calculate the lower & upper bound values for the graph which takes into account the actual value of the dosage
        const lowerBound = (this.props.value > lowerValuePadding) ? lowerValuePadding : this.props.value;
        const upperBound = (this.props.value < upperValuePadding) ? upperValuePadding : this.props.value;

        let numberOfPixelsPerUnit;
        if (Lang.isNull(this.props.upperValue) || Lang.isNull(this.props.lowerValue)) {
            numberOfPixelsPerUnit = 0;
        } else {
            numberOfPixelsPerUnit = lineLengthPixels / (upperBound - lowerBound);
        }

        let typicalValueXPixels;
        if (numberOfPixelsPerUnit === 0 || Lang.isNull(this.props.typicalValue)) {
            typicalValueXPixels = 0;
        } else {
            typicalValueXPixels = ((this.props.typicalValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
        }

        let lowerValueXPixels, upperValueXPixels;
        if (numberOfPixelsPerUnit === 0 || Lang.isNull(this.props.lowerValue) || Lang.isNull(this.props.upperValue)) {
            lowerValueXPixels = 0;
            upperValueXPixels = 0;
        } else if (this.props.lowerValue === this.props.upperValue) {
            let singularDosageRangeXPixels = ((this.props.lowerValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
            lowerValueXPixels = singularDosageRangeXPixels - 5;
            upperValueXPixels = singularDosageRangeXPixels - 5
        } else {
            lowerValueXPixels = ((this.props.lowerValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
            upperValueXPixels = ((this.props.upperValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
        }

        let dotColor = '#AAA';
        let svgForDataPoint = null;
        let svgForDataPointBorder = null;
        if (!Lang.isNull(this.props.value)) { // only plot a dot if value is not null

            let valueXPixels =  ((this.props.value - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;

            // If value is out of range, set the dot and value color to red and place it outside of the lower or upper mark
            if (this.props.value < this.props.lowerValue  || this.props.value > this.props.upperValue) {
                dotColor = '#C80B0B'

                // If value is more than 4x the max value of the range, add a border to the dot
                if (this.props.value > this.props.upperValue * 4) {
                    let strokeWidth = 1;
                    let radius = 6;
                    if (this.props.value > this.props.upperValue * 10) {
                        strokeWidth = 2;
                        radius = 7;
                    }
                    svgForDataPointBorder = <circle cx={valueXPixels} cy="50" r={radius} strokeWidth={strokeWidth} stroke={dotColor} fill="#FFF" />
                }
            } 

            svgForDataPoint = <circle cx={valueXPixels} cy="50" r="4" strokeWidth="3" fill={dotColor} />
        }
        
        let viewBoxDimensions  = '';
        if (this.props.isWide) {
            viewBoxDimensions = '10 36 250 110';
        } else {
            viewBoxDimensions = '10 10 250 100';
        }

        let svgForRangeBar = null;
        let svgForRangeLowerText = null;
        let svgForRangeUpperText = null;
        if (lowerValueXPixels !== 0 && upperValueXPixels !== 0) {
            svgForRangeBar = <line x1={lowerValueXPixels} y1="50" x2={upperValueXPixels} y2="50" stroke="#DDD" strokeWidth="4" />;
            // TO-DO: fix this with specs
            // if (upperValueXPixels - lowerValueXPixels > 10) {
            svgForRangeLowerText = <text x={lowerValueXPixels - 3} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.lowerValue}</text>;
            svgForRangeUpperText = <text x={upperValueXPixels - 3} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.upperValue}</text>;
            // }
        }
        
        let svgForTypicalTick = null;
        let svgForTypicalText = null;
        if (typicalValueXPixels !== 0) {
            svgForTypicalTick = <line x1={typicalValueXPixels} y1="45" x2={typicalValueXPixels} y2="55" stroke="#979797" strokeWidth="1" />;
            if (this.props.typicalValue !== this.props.lowerValue && this.props.typicalValue !== this.props.upperValue) {
                svgForTypicalText = <text x={typicalValueXPixels - 3} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.typicalValue}</text>;      
            }
        }
        return (
            <div>
                <svg width="100%" height="6em" viewBox={viewBoxDimensions}>
                    {/*Main line*/}
                    <line x1={lineStartXPixels} y1="50" x2={lineStartXPixels + lineLengthPixels} y2="50" stroke="#C2C2C2" strokeWidth="0.5" />

                    {/*Typical value tick*/}
                    {svgForTypicalTick}
                    {svgForTypicalText}

                    {/*Value range bar*/}
                    {svgForRangeBar}
                    {svgForRangeLowerText}
                    {svgForRangeUpperText}

                    {/*Data point for the value*/}
                    {svgForDataPointBorder}
                    {svgForDataPoint}
                </svg>
            </div>
        );
    }
}

export default RangeChart;
