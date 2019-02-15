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

        // calculate the lowest and highest values 
        let valueArray = [];
        if (!Lang.isNull(this.props.lowerValue)) valueArray.push(this.props.lowerValue);
        if (!Lang.isNull(this.props.upperValue)) valueArray.push(this.props.upperValue);
        if (!Lang.isNull(this.props.typicalValue)) valueArray.push(this.props.typicalValue);
        if (!Lang.isNull(this.props.value)) valueArray.push(this.props.value);
        const maxValue = Math.max.apply(null, valueArray);
        const minValue = Math.min.apply(null, valueArray);

        let typicalValueXPixels, lowerValueXPixels, upperValueXPixels, valueXPixels, radius, strokeWidth;
        let dotColor = '#AAA';

        // if all values are the same or some are null, just draw the dot with no scaled formatting
        if (maxValue === minValue) {
            const middle = lineLengthPixels / 2 + lineStartXPixels;

            if (Lang.isNull(this.props.typicalValue)) {
                typicalValueXPixels = 0;
            } else {
                typicalValueXPixels = middle;
            }

            if (Lang.isNull(this.props.lowerValue) || Lang.isNull(this.props.upperValue)) {
                lowerValueXPixels = 0;
                upperValueXPixels = 0;
            } else {
                lowerValueXPixels = middle - 7;
                upperValueXPixels = middle + 7;
            }

            if (Lang.isNull(this.props.value)) {
                valueXPixels = 0;
            } else {
                valueXPixels = middle;
            }
        }

        // otherwise scale the chart with the given values 
        else { 
            const lowerBound = (minValue === 0) ? ((maxValue - minValue) / - 20): (minValue - (minValue / 20));
            const upperBound = maxValue + (maxValue / 20);

            // calculate padding around lower and upper values and use as the bounds of the graph
            const numberOfPixelsPerUnit = lineLengthPixels / (upperBound - lowerBound);

            if (Lang.isNull(this.props.typicalValue)) {
                typicalValueXPixels = 0;
            } else {
                typicalValueXPixels = ((this.props.typicalValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
            }

            if (Lang.isNull(this.props.lowerValue) || Lang.isNull(this.props.upperValue)) {
                lowerValueXPixels = 0;
                upperValueXPixels = 0;
            } else if (this.props.lowerValue === this.props.upperValue) {
                let singularDosageRangeXPixels = ((this.props.lowerValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
                lowerValueXPixels = singularDosageRangeXPixels - 3;
                upperValueXPixels = singularDosageRangeXPixels + 3;
            } else {
                lowerValueXPixels = ((this.props.lowerValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
                upperValueXPixels = ((this.props.upperValue - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
            }

            if (Lang.isNull(this.props.value)) {
                valueXPixels = 0;
            } else {
                valueXPixels = ((this.props.value - lowerBound) * numberOfPixelsPerUnit) + lineStartXPixels;
                if (this.props.value < this.props.lowerValue  || this.props.value > this.props.upperValue) {
                    dotColor = '#C80B0B'

                    // If value is more than 4x the max value of the range, add a border to the dot
                    if (this.props.value > this.props.upperValue * 4) {
                        strokeWidth = 1;
                        radius = 6;
                        if (this.props.value > this.props.upperValue * 10) {
                            strokeWidth = 2;
                            radius = 7;
                        }
                    }
                } 
            }
        }

        let svgForTypicalTick = null;
        let svgForTypicalText = null;
        if (typicalValueXPixels !== 0) {
            svgForTypicalTick = <line x1={typicalValueXPixels} y1="45" x2={typicalValueXPixels} y2="55" stroke="#979797" strokeWidth="1" />;
            // if (this.props.typicalValue !== this.props.lowerValue && this.props.typicalValue !== this.props.upperValue) {
            //     svgForTypicalText = <text x={typicalValueXPixels - 3} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.typicalValue}</text>;      
            // }
        }

        let svgForRangeBar = null;
        let svgForRangeLowerText = null;
        let svgForRangeUpperText = null;
        if (lowerValueXPixels === 0 || upperValueXPixels === 0) {
            svgForRangeBar = <text x={lineStartXPixels} y="38" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">dosage range unknown</text>;
        } else {
            svgForRangeBar = <line x1={lowerValueXPixels} y1="50" x2={upperValueXPixels} y2="50" stroke="#DDD" strokeWidth="4" />;
            // TO-DO: fix this with specs
            // if (upperValueXPixels - lowerValueXPixels > 10) {
            // svgForRangeLowerText = <text x={lowerValueXPixels - 3} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.lowerValue}</text>;
            // svgForRangeUpperText = <text x={upperValueXPixels - 3} y="70" fontFamily="sans-serif" fontSize="10px" fill="#3F3F3F">{this.props.upperValue}</text>;
            // }
        }

        let svgForDataPoint = null;
        let svgForDataPointBorder = null;
        if (valueXPixels !== 0) {
            if (!Lang.isNull(radius) && !Lang.isNull(strokeWidth)) {
                svgForDataPointBorder = <circle cx={valueXPixels} cy="50" r={radius} strokeWidth={strokeWidth} stroke={dotColor} fill="#FFF" />
            }
            svgForDataPoint = <circle cx={valueXPixels} cy="50" r="4" strokeWidth="3" fill={dotColor} />
        }

        let viewBoxDimensions  = '';
        if (this.props.isWide) {
            viewBoxDimensions = '10 30 250 110';
        } else {
            viewBoxDimensions = '10 10 250 100';
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

                    {/* Data point for the value */}
                    {svgForDataPointBorder}
                    {svgForDataPoint}
                </svg>
            </div>
        );
    }
}

export default RangeChart;
