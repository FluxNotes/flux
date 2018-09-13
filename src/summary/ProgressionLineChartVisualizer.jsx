import React, {Component} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
} from 'recharts';
import moment from 'moment';
import {scaleLinear} from "d3-scale";
import Collection from 'lodash';
import Lang from 'lodash';
import PropTypes from 'prop-types';

import './ProgressionLineChartVisualizer.css';

/*
 A BandedLineGraphVisualizer that graphs a set of data over time
 */
class ProgressionLineChartVisualizer extends Component {
    constructor(props) { 
        super(props);

        this.updateState = true;
        // This var will be used 
        this.state = {
            chartWidth: 600,
            chartHeight: 400,
        }
        this.xVarField = "start_time";
        this.xVarNumberField = `${this.xVarField}_number`;
        this.yVarField = "Disease status";
        this.codeToValueMap =  {
            // 'Complete Response'
            "C0677874": 3,
            // 'Complete Resection'
            "C0015250": 2,
            // 'Responding'
            "C1272745": 1,
            // 'Stable'
            "C0205360": 0,
            // 'Progressing'
            "C1546960": -1,
            // 'Inevaluable'
            "C3858734": null,
        };
         this.valueToProgressionMap = {
            // 'Complete Response'
            "3" : 'Complete Response',
            // 'Complete Resection'
            "2" : 'Complete Resection',
            // 'Responding'
            "1" : 'Responding',
            // 'Stable'
            "0" : 'Stable',
            // 'Progressing'
            "-1" : 'Progressing',
            // 'Inevaluable'
            "null" : 'Inevaluable',
        };
    }

    // Makesure to update data and resize the component when its contents update.
    componentDidUpdate = () => {
        if (this.updateState) {
            this.updateState = false;
        } else {
            this.updateState = true;
            setTimeout(this.resize, 450);
        }
    }

    // Adds appropriate event listeners for tracking resizing
    componentDidMount = () => { 
        setTimeout(this.resize, 450);
    }

    // Single function translating date strings to numbers
    dateToNumber = (date) => {
        return Number(new Date(date))
    }

    // Turns dates into numeric representations for graphing
    processForGraphing = (data) => {
        return Lang.cloneDeep(data).map((d, i) => {
            const code = d[this.yVarField];
            const numberBasedOnCode = this.codeToValueMap[code];

            // 1. Translate time strings into millisecond representations, storing in a new key:value pair            
            d[this.xVarNumberField]  = this.dateToNumber(d[this.xVarField])
            // 2. Translate progression status values into numeric representations, inplace
            d[this.yVarField] = numberBasedOnCode;
            return d;
        })
    }

    // Updates diagnosis objects s.t. they store dates in a numeric format
    processPotentialDiagnosisDates = (arrayOfPotentialDiagnosisDates) => {
        for (const obj of arrayOfPotentialDiagnosisDates) {
            // Turn all dates to numeric values
            obj.date = this.dateToNumber(obj.date);
        }
        return arrayOfPotentialDiagnosisDates;
    }

    // Function for formatting dates -- uses moment for quick formatting options
    dateFormat = (timeInMilliseconds) => {
        return moment(timeInMilliseconds).format('DD MMM YY');
    }

    // Function for formatting numeric progression values to strings
    progressionFormatter = (progStatus) => {
        return this.codeToValueMap[progStatus];
    }

    // Based on the processed data and the potentialDiagnosisDates, build a range of graphable xAxis values
    getXAxisDomain = (processedData, processedPotentialDiagnosisDates) => {
        let [ min, max ] = this.getMinMax(processedData);
        for (const obj of processedPotentialDiagnosisDates) {
            if (obj.date < min) { 
                min = obj.date; 
            } else if (obj.date > max) { 
                max = obj.date;
            }
        }
        // Creates a small amount of padding, relative to the length of the domain
        const buffer = ((max - min)/15) 
        return [min - buffer, max];
    }

    // Gets the min/max values of the numeric representation of this.xVarField
    // Assumes processed data array 
    getMinMax = (processedData) => { 
        // Iterate once to avoid 2x iteration by calling min and max separately
        return Collection.reduce(processedData, (rangeValues, dataObj) => {
            const t = dataObj[this.xVarNumberField];
            
            if (t < rangeValues[0]) { 
                rangeValues[0] = t;
            } else if (t > rangeValues[1]) { 
                rangeValues[1] = t;
            }
            return rangeValues;
        }, [processedData[0][this.xVarNumberField], processedData[0][this.xVarNumberField]]);

    }

    // Use min/max info to build ticks for the 
    // Assumes processed data
    getXAxisTicks = (xAxisDomain, processedPotentialDiagnosisDates) => {
        const totalNumberOfTicks = 6;
        const scale = scaleLinear().domain(xAxisDomain).range([0, 1]);
        const ticks = scale.ticks(totalNumberOfTicks - processedPotentialDiagnosisDates.length);
        for (const obj of processedPotentialDiagnosisDates) {
            ticks.push(obj.date);
        }
        return ticks.sort();
    } 

    // Formats a xVar (numeric time) value for tooltips
    xVarFormatFunction = (xVarNumberValue)  => {
        return "Date: " + this.dateFormat(xVarNumberValue);
    }   

    // Based on a valueToProgressionMap, return a function that formats a yVar (quantatative) value for tooltips 
    yVarFormatFunction = (value) => {
        return `${this.valueToProgressionMap[value]}`;
    }

    // Updates the dimensions of the chart
    resize = () => { 
        const chartParentDivWidth = this.chartParentDiv.offsetWidth;

        this.setState({ 
            chartWidth: chartParentDivWidth,
        })
    }

    renderProgressionChart = (patient, condition, conditionSection) => { 
        const { progressions, potentialDiagnosisDates } = conditionSection.data[0].data_cache;
        // process dates into numbers for graphing
        const processedData = this.processForGraphing(progressions);
        const processedPotentialDiagnosisDates = this.processPotentialDiagnosisDates(potentialDiagnosisDates)
        // Get yAxisInfo 
        const yTicks = [ -1, 0, 1, 2, 3 ];
        // Get xAxisInfo 
        const xAxisDomain = this.getXAxisDomain(processedData, processedPotentialDiagnosisDates);
        const xTicks = this.getXAxisTicks(xAxisDomain, processedPotentialDiagnosisDates);
        return (
            <div 
                ref={(chartParentDiv) => {this.chartParentDiv = chartParentDiv;}}
                key={conditionSection}
            >
                <LineChart
                    width={this.state.chartWidth}
                    height={this.state.chartHeight}
                    data={processedData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                    <XAxis 
                        dataKey={this.xVarNumberField}
                        type="number"
                        domain={xAxisDomain}
                        ticks={xTicks}
                        tickFormatter={this.dateFormat}
                    />
                    <YAxis 
                        dataKey={this.yVarField}
                        ticks={yTicks}
                        tickFormatter={(val) => { return this.valueToProgressionMap[val.toString()]}}
                    />
                    <Tooltip 
                        // labelFormatter={this.xVarFormatFunction}
                        // formatter={this.yVarFormatFunction}
                        content={(arg1) => { 
                            console.log('arg1: ', arg1);
                            const { payload } = arg1;
                            console.log('payload: ', payload);
                            // If there's a payload, we have a tooltip to display
                            if (!Lang.isEmpty(payload)) { 
                                const { getTooltipText } = payload[0].payload;
                                return (
                                    <div className="disease-status-tooltip">
                                        <span>
                                            {getTooltipText()}
                                        </span>
                                    </div>
                                )
                            } else { 
                                return;
                            }
                        }}
                    />
                    <Line 
                        type="monotone" 
                        dataKey={this.yVarField}
                        stroke="#295677" 
                        yAxisId={0}
                    />
                    {processedPotentialDiagnosisDates.map((diagnosisDate, i) => { 
                        return (
                            <ReferenceLine 
                                x={diagnosisDate.date} 
                                stroke="#AAAAAA"
                                strokeDasharray="3 3"
                                key={i}
                                label={{value: diagnosisDate.label, position:'insideBottom'}}
                            />
                        );
                    })}

                </LineChart>
           </div>
        );
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        const {patient, condition, conditionSection} = this.props;

        return (
            <div className="progression-line-chart-subsection">
                {
                    this.renderProgressionChart(patient, condition, conditionSection)
                }
            </div>
        );
    }
}

ProgressionLineChartVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default ProgressionLineChartVisualizer;
