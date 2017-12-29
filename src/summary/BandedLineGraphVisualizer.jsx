import React, {Component} from 'react';
import { LineChart, Line,CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';
import {scaleLinear} from "d3-scale";
import Collection from 'lodash';
import Lang from 'lodash';
import Function from 'lodash';
// import PropTypes from 'prop-types';

import './BandedLineGraphVisualizer.css';

/*
 A BandedLineGraphVisualizer that graphs a set of data over time
 */
class BandedLineGraphVisualizer extends Component {
    constructor(props) { 
        super(props);

        this.resize = Function.throttle(this.updateDimensions, 100);
        this.updateState = true;
        // This var will be used 
        this.xVarNumber = `${props.xVar}Number`;
        this.state = {
            chartWidth: 400,
            chartHeight: 400,
        }
        // process dates into numbers for graphing
        this.processedData = this.processForGraphing(props.data);
    }

    // Makesure to update data and resize the component when its contents update.
    componentDidUpdate = () => {
        if (this.updateState) {
            this.updateState = false;
        } else {
            this.updateState = true;
            this.processedData = this.processForGraphing(this.props.data);
            this.resize();
        }
    }

    // Adds appropriate event listeners for tracking resizing
    componentDidMount = () => { 
        window.addEventListener("resize", this.resize);
        this.chartParentDiv.addEventListener("resize", this.resize);
        setTimeout(this.resize, 100);
    }

    // Removes event listeners that track resizing
    componentWillUnmounnt = () => {  
        window.removeEventListener("resize", this.resize)
    }

    // Turns dates into numeric representations for graphing
    processForGraphing = (data) => { 
        const dataCopy = Lang.clone(data);
        
        Collection.map(dataCopy, (d) => { 
            d[this.xVarNumber]  = Number(d[this.props.xVar])
        });
        return dataCopy;
    }

    // Function for formatting dates -- uses moment for quick formatting options
    dateFormat = (timeInMilliseconds) => {
        return moment(timeInMilliseconds).format('HH:mm');
    }

    // Gets the min/max values of the numeric representation of data 
    getMinMax = (data) => { 
        // Iterate once to avoid 2x iteration by calling min and max
        return Collection.reduce(data, (rangeValues, dataObj) => { 
            const t = dataObj[this.xVarNumber];
        
            if (t < rangeValues[0]) { 
                rangeValues[0] = t;
            } else if (t > rangeValues[1]) { 
                rangeValues[1] = t;
            }
            return rangeValues;
        }, [data[0][this.xVarNumber], data[0][this.xVarNumber]]);

    }

    // Use min/max info to build ticks for the 
    getTicks = (data) => { 
        if (!data || !data.length ) {return [];}

        const domain = this.getMinMax(data);
        const scale = scaleLinear().domain(domain).range([0, 1]);;
        const ticks = scale.ticks(5);
        return ticks.map(entry => +entry).sort();
    } 

    labelFormatFunction = (time)  => { 
        return "Time: " + moment(time).format("MMM D HH:mm");
    }   

    updateDimensions = () => { 
        const chartParentDivWidth = this.chartParentDiv.offsetWidth;
        console.log(chartParentDivWidth)
        console.log(this.chartParentDiv)

        this.setState({ 
            chartWidth: chartParentDivWidth,
            // chartHeight: chartParentDivRect.height,
        })
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        return (
            <div 
                className="tabular-subsections"
                ref={(chartParentDiv) => {this.chartParentDiv = chartParentDiv;}}
            >
                <LineChart
                    width={this.state.chartWidth}
                    height={this.state.chartHeight}
                    data={this.processedData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis 
                        dataKey={this.xVarNumber} 
                        type="number"
                        domain={[]}
                        ticks={this.getTicks(this.processedData)} 
                        tickFormatter={this.dateFormat}
                    />
                    <YAxis dataKey={this.props.yVar}/>
                    <Tooltip 
                        labelFormatter={this.labelFormatFunction}
                    />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey={this.props.yVar} stroke="#ff7300" yAxisId={0} />
                </LineChart>
           </div>
        );
    }
}

BandedLineGraphVisualizer.propTypes = {
    // patient: PropTypes.object,
    // condition: PropTypes.object,
    // conditionSection: PropTypes.object,
    // isWide: PropTypes.bool,
    // onItemClicked: PropTypes.func,
    // allowItemClick: PropTypes.bool
};

export default BandedLineGraphVisualizer;
