import React, {Component} from 'react';
import { LineChart, Line,CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';
import {scaleLinear} from "d3-scale";
import Collection from 'lodash';
import Lang from 'lodash';
import Function from 'lodash';
import PropTypes from 'prop-types';

import './BandedLineChartVisualizer.css';

/*
 A BandedLineGraphVisualizer that graphs a set of data over time
 */
class BandedLineChartVisualizer extends Component {
    constructor(props) { 
        super(props);

        this.resize = Function.throttle(this.updateDimensions, 100);
        this.updateState = true;
        // This var will be used 
        this.state = {
            chartWidth: 600,
            chartHeight: 400,
        }
    }

    // Makesure to update data and resize the component when its contents update.
    componentDidUpdate = () => {
        if (this.updateState) {
            this.updateState = false;
        } else {
            this.updateState = true;
            // this.resize();
        }
    }

    // Adds appropriate event listeners for tracking resizing
    componentDidMount = () => { 
        // window.addEventListener("resize", this.resize);
        // this.chartParentDiv.addEventListener("resize", this.resize);
        setTimeout(this.resize, 100);
    }

    // Removes event listeners that track resizing
    componentWillUnmounnt = () => {  
        // window.removeEventListener("resize", this.resize)
    }

    // Turns dates into numeric representations for graphing
    processForGraphing = (data, xVar, yVar) => { 
        const dataCopy = Lang.clone(data);
        const xVarNumber = `${xVar}Number`;

        Collection.map(dataCopy, (d) => { 
            d[xVarNumber]  = Number(d[xVar])
        });
        return dataCopy;
    }

    // Function for formatting dates -- uses moment for quick formatting options
    dateFormat = (timeInMilliseconds) => {
        return moment(timeInMilliseconds).format('HH:mm');
    }

    // Gets the min/max values of the numeric representation of data 
    getMinMax = (data, xVar, yVar) => { 
        const xVarNumber = `${xVar}Number`;

        // Iterate once to avoid 2x iteration by calling min and max
        return Collection.reduce(data, (rangeValues, dataObj) => { 
            const t = dataObj[xVarNumber];
        
            if (t < rangeValues[0]) { 
                rangeValues[0] = t;
            } else if (t > rangeValues[1]) { 
                rangeValues[1] = t;
            }
            return rangeValues;
        }, [data[0][xVarNumber], data[0][xVarNumber]]);

    }

    // Use min/max info to build ticks for the 
    getTicks = (data, xVar, yVar) => { 
        if (!data || !data.length ) {return [];}

        const domain = this.getMinMax(data, xVar, yVar);
        const scale = scaleLinear().domain(domain).range([0, 1]);;
        const ticks = scale.ticks(5);
        return ticks.map(entry => +entry).sort();
    } 

    // Formats a numeric time value for pretty-printing
    labelFormatFunction = (time)  => { 
        return "Time: " + moment(time).format("MMM D HH:mm");
    }   

    // Updates the dimensions of the chart
    updateDimensions = () => { 
        const chartParentDivWidth = this.chartParentDiv.offsetWidth;
        // console.log(chartParentDivWidth)
        // console.log(this.chartParentDiv)

        this.setState({ 
            chartWidth: chartParentDivWidth,
            // chartHeight: chartParentDivRect.height,
        })
    }

    renderSubSectionChart = (subSection, patient, condition, xVar, yVar) => { 
        const xVarNumber = `${xVar}Number`;
        const data = subSection.itemsFunction(patient, condition)
        console.log(data)
        // process dates into numbers for graphing
        const processedData = this.processForGraphing(data, xVar, yVar);
        console.log(processedData)
        return (
            <div 
                ref={(chartParentDiv) => {this.chartParentDiv = chartParentDiv;}}
                key={subSection}
            >
                <LineChart
                    width={this.state.chartWidth}
                    height={this.state.chartHeight}
                    data={processedData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis 
                        dataKey={xVarNumber} 
                        type="number"
                        domain={[]}
                        ticks={this.getTicks(processedData)} 
                        tickFormatter={this.dateFormat}
                    />
                    <YAxis dataKey={yVar}/>
                    <Tooltip 
                        labelFormatter={this.labelFormatFunction}
                    />
                    <Line type="monotone" dataKey={yVar} stroke="#ff7300" yAxisId={0} />
                </LineChart>
           </div>
        );
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        const {patient, condition, conditionSection} = this.props;

        console.log('===BandedLineChartVisualizer===')
        console.log(condition);   
        console.log(conditionSection)
        return (
            <div className="line-chart-subsection">
                {
                    conditionSection.data.map((subSection, i) => { 
                        const valueName = subSection.name;
                        const yVar = valueName;
                        // FIXME: Starttime shouldn't be a magic string
                        const xVar = "startTime";

                        console.log(valueName)
                        console.log(subSection)

                        return this.renderSubSectionChart(subSection, patient, condition, xVar, yVar);
                    })
                }
            </div>
        );

    }
}

BandedLineChartVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    // onItemClicked: PropTypes.func,
    // allowItemClick: PropTypes.bool
};

export default BandedLineChartVisualizer;
