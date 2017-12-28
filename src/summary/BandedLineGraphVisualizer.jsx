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
        super();

        this.processedData = this.processForGraphing(props.data)

        this.resize = Function.throttle(this.updateDimensions, 100);
        this.initState = true;
        this.state = {
            chartWidth: 400,
            chartHeight: 400,
        }
    }

    componentDidUpdate = () => {
        if (this.initState) {
            this.initState = false
        } else {
            this.initState = true
            this.resize()
        }
    }

    componentDidMount = () => { 
        window.addEventListener("resize", this.resize)
        this.chartParentDiv.addEventListener("resize", this.resize)
        setTimeout(this.resize, 100);
    }

    componentWillUnmounnt = () => {  
        window.removeEventListener("resize", this.resize)
    }

    processForGraphing = (data) => { 
        const dataCopy = Lang.clone(data);

        Collection.map(dataCopy, function (d) { 
            d.startTimeNumber  = Number(d.startTime)
        });

        return dataCopy;
    }

    dateFormat = (timeInMillisecongs) => {
        const newTime = moment(timeInMillisecongs).format('HH:mm');
        return newTime;
    }

    getMinMax = (data) => { 
        // Iterate once to avoid 2x iteration by calling min and max
        return Collection.reduce(data, function (rangeValues, dataObj) { 
            const t = dataObj.startTimeNumber;
        
            if (t < rangeValues[0]) { 
                rangeValues[0] = t;
            } else if (t > rangeValues[1]) { 
                rangeValues[1] = t;
            }
            return rangeValues;
        }, [data[0].startTimeNumber, data[0].startTimeNumber]);

    }

    getTicks = (data) => { 
        if (!data || !data.length ) {return [];}

        const domain = this.getMinMax(data);
        const scale = scaleLinear().domain(domain).range([0, 1]);;
        const ticks = scale.ticks(5);
        return ticks.map(entry => +entry).reverse();
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
                        dataKey={this.props.xVar} 
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
