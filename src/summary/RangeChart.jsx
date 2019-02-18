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
        // padding value for the two ends of the line
        const mainLinePaddingPixels = 10;
        // x position in pixels for the center of the svg
        const middle = lineLengthPixels / 2 + lineStartXPixels;

        // calculate the upper and lower bounds of the chart
        let valueArray = [];
        if (!Lang.isNull(this.props.lowerValue)) valueArray.push(this.props.lowerValue);
        if (!Lang.isNull(this.props.upperValue)) valueArray.push(this.props.upperValue);
        if (!Lang.isNull(this.props.typicalValue)) valueArray.push(this.props.typicalValue);
        if (!Lang.isNull(this.props.value)) valueArray.push(this.props.value);
        const upperBound = Math.max.apply(null, valueArray);
        const lowerBound = Math.min.apply(null, valueArray);

        // initialize pixel values as null
        let typicalValueXPixels = null;
        let lowerValueXPixels = null;
        let upperValueXPixels = null;
        let valueXPixels = null;
        let typicalValueTextXPixels = null;
        let lowerValueTextXPixels = null; 
        let upperValueTextXPixels = null;
        let dotColor = '#AAA';
        let radius, strokeWidth;

        // if the range is null, center the typical value in the middle
        if (Lang.isNull(this.props.lowerValue) || Lang.isNull(this.props.upperValue)) {

            if (!Lang.isNull(this.props.typicalValue)) {
                typicalValueXPixels = middle;
            }

            if (!Lang.isNull(this.props.value)) {
                if (Lang.isNull(this.props.typicalValue) || (this.props.value === this.props.typicalValue)) valueXPixels = middle;
                else valueXPixels = lineStartXPixels + lineLengthPixels;
            }
        }

        // range is defined
        else {

            // if the range is singular, center the range/typical value in the middle
            if (this.props.lowerValue === this.props.upperValue) {
                let singularRangePadding = 3;

                if (!Lang.isNull(this.props.typicalValue)) {
                    typicalValueXPixels = middle;
                }
    
                if (!Lang.isNull(this.props.value)) {
                    if (this.props.value === this.props.lowerValue) {
                        valueXPixels = middle;
                        singularRangePadding = 7;
                    } else {
                        valueXPixels = lineStartXPixels + lineLengthPixels;
                    }
                }

                lowerValueXPixels = middle - singularRangePadding;
                upperValueXPixels = middle + singularRangePadding;
            }

            // otherwise scale the chart with using the upper & lower bounds
            else {

                // calculate padding around lower and upper values and use as the bounds of the graph
                const numberOfPixelsPerUnit = lineLengthPixels / (upperBound - lowerBound);

                if (!Lang.isNull(this.props.typicalValue)) {
                    typicalValueXPixels = ((this.props.typicalValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
                }

                if (!Lang.isNull(this.props.value)) {
                    valueXPixels = ((this.props.value - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
                }

                lowerValueXPixels = ((this.props.lowerValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
                upperValueXPixels = ((this.props.upperValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
            }

            // add additional styling if the value is out of range
            if (!Lang.isNull(this.props.value)) {

                // if the dot is out of range, color it red
                if (this.props.value < this.props.lowerValue  || this.props.value > this.props.upperValue) {
                    dotColor = '#C80B0B'

                    // if value is more than 4x the max value of the range, add a border to the dot
                    if (this.props.value > this.props.upperValue * 4) {
                        strokeWidth = 1;
                        radius = 6;

                        // if value is more than 10x the max value of the range, add a larger border to the dot
                        if (this.props.value > this.props.upperValue * 10) {
                            strokeWidth = 2;
                            radius = 7;
                        }
                    }
                } 
            }
        }

        // adjust value label text location
        if (!Lang.isNull(this.props.typicalValue)) {
            let typicalValueCharLength = this.props.typicalValue.toString().length;
            typicalValueTextXPixels = typicalValueXPixels - typicalValueCharLength * 3;
        }

        if (!Lang.isNull(this.props.lowerValue) && !Lang.isNull(this.props.upperValue) 
            && this.props.lowerValue !== this.props.upperValue) {

            let lowerValueCharLength = this.props.lowerValue.toString().length;
            let upperValueCharLength = this.props.upperValue.toString().length;

            lowerValueTextXPixels = lowerValueXPixels - lowerValueCharLength * 3; 
            upperValueTextXPixels = upperValueXPixels - upperValueCharLength * 3;

            if (!Lang.isNull(this.props.typicalValue)) {
                let typicalValueCharLength = this.props.typicalValue.toString().length;
                typicalValueTextXPixels = typicalValueXPixels - typicalValueCharLength * 3;

                // if the lower value and typical value overlap, omit the typical value
                if (lowerValueTextXPixels + lowerValueCharLength * 3 + 2 >= typicalValueTextXPixels) {
                    typicalValueTextXPixels = null;
                }

                // if the lower value and typical value overlap, omit the typical value
                if (typicalValueTextXPixels + typicalValueCharLength * 3 + 2 >= upperValueTextXPixels) {
                    typicalValueTextXPixels = null;
                }
            }

            // if the upper value and lower value overlap, omit the value furthest from the actual value
            if (lowerValueTextXPixels + lowerValueCharLength * 3 + 5 >= upperValueTextXPixels) {
                if (this.props.value < this.props.lowerValue) upperValueTextXPixels = null;
                if (this.props.value > this.props.upperValue) lowerValueTextXPixels = null;
            }
        }

        let svgForTypicalTick = null;
        let svgForTypicalText = null;
        if (!Lang.isNull(typicalValueXPixels)) {
            svgForTypicalTick = <line x1={typicalValueXPixels} y1="45" x2={typicalValueXPixels} y2="55" stroke="#979797" strokeWidth="1" />;
            if (!Lang.isNull(typicalValueTextXPixels)) {
                svgForTypicalText = <text x={typicalValueTextXPixels} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.typicalValue}</text>;      
            }
        }

        let svgForRangeBar = null;
        let svgForRangeLowerText = null;
        let svgForRangeUpperText = null;
        if (Lang.isNull(lowerValueXPixels) || Lang.isNull(upperValueXPixels)) {
            svgForRangeBar = <text x={lineStartXPixels} y="38" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">dosage range unknown</text>;
        } else {
            svgForRangeBar = <line x1={lowerValueXPixels} y1="50" x2={upperValueXPixels} y2="50" stroke="#DDD" strokeWidth="4" />;
            if (!Lang.isNull(lowerValueTextXPixels)) {
                svgForRangeLowerText = <text x={lowerValueTextXPixels} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.lowerValue}</text>;
            }
            if (!Lang.isNull(upperValueTextXPixels)) {
                svgForRangeUpperText = <text x={upperValueTextXPixels} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.upperValue}</text>;
            }
        }

        let svgForDataPoint = null;
        let svgForDataPointBorder = null;
        if (!Lang.isNull(valueXPixels)) {
            if (!Lang.isNull(radius) && !Lang.isNull(strokeWidth)) {
                svgForDataPointBorder = <circle cx={valueXPixels} cy="50" r={radius} strokeWidth={strokeWidth} stroke={dotColor} fill="#FFF" />
            }
            svgForDataPoint = <circle cx={valueXPixels} cy="50" r="4" strokeWidth="3" fill={dotColor} />
        }

        let viewBoxDimensions  = '';
        if (this.props.isWide) {
            viewBoxDimensions = '10 30 260 110';
        } else {
            viewBoxDimensions = '10 10 260 100';
        }

        return (
            <div>
                <svg width="100%" height="6em" viewBox={viewBoxDimensions}>
                    {/*Main line*/}
                    <line x1={lineStartXPixels - mainLinePaddingPixels} y1="50" x2={lineStartXPixels + lineLengthPixels + mainLinePaddingPixels} y2="50" stroke="#C2C2C2" strokeWidth="0.5" />

                    {/*Typical value tick*/}
                    {svgForTypicalTick}
                    {svgForTypicalText}

                    {/*Value range bar*/}
                    {svgForRangeBar}
                    {svgForRangeLowerText}
                    {svgForRangeUpperText}

                    {/* Data point for the value */}
                    {svgForDataPointBorder}
                    {svgForDataPoint}
                </svg>
            </div>
        );
    }
}

export default RangeChart;
