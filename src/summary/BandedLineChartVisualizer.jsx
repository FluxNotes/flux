import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from 'recharts';
import Button from '../elements/Button';
import moment from 'moment';
import { scaleLinear } from 'd3-scale';
import Collection from 'lodash';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Visualizer from './Visualizer';

import './BandedLineChartVisualizer.css';

const CustomizedDot = (props) => {
    const { subsection, tdpSearchSuggestions, highlightedSearchSuggestion, cx, cy } = props;
    let { stroke, strokeWidth, fill } = props;

    const highlightedData = tdpSearchSuggestions.find(s => {
        const dotContent = props.payload.displayValue || `${props.payload[props.dataKey]} ${props.payload.unit}`;
        const dotValue = `${props.payload.start_time}: ${dotContent}`;
        const dataKey = props.payload.displayValue ? s.subsection : props.dataKey;
        return s.valueTitle === dataKey && s.contentSnapshot === dotValue;
    });
    if (highlightedData) {
        stroke = _.isEqual(highlightedData, highlightedSearchSuggestion) ? 'rgb(255, 150, 50)' : 'rgb(255, 210, 5)';
        fill = 'rgb(255, 255, 70)';
        strokeWidth = 5;
    } else {
        strokeWidth = 1.5;
    }

    // if no custom dots are defined, render the standard dot
    if (_.isUndefined(subsection.dots)) {
        return <circle cx={cx} cy={cy} r={3} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />;
    }

    // else return a custom dot defined by the subsection
    // return (
    //   <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
    //     <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    //   </svg>
    // );
};

/*
 A BandedLineGraphVisualizer that graphs a set of data over time
 */
class BandedLineChartVisualizer extends Visualizer {
    constructor(props) {
        super(props);

        const { conditionSection } = this.props;
        const subsections = conditionSection.data;

        // initialize noLineCharts so that all charts default to no lines
        const shownLineCharts = subsections.map((subsection, i) => subsection.displayChartLine);

        // this.updateState = true;
        // This var will be used
        this.state = {
            chartWidth: 600,
            chartHeight: 250,
            shownLineCharts // charts that have the no line property set
        };
    }

    // toggles the line on the chart from being hidden and shown
    toggleLine = (chartIndex, toggle) => {
        if (toggle) {
            const shownLineCharts = [...this.state.shownLineCharts];
            shownLineCharts[chartIndex] = !shownLineCharts[chartIndex];
            this.setState({ shownLineCharts });
        }
    }

    // Turns dates into numeric representations for graphing
    processForGraphing = (data, xVar, xVarNumber) => {
        const dataCopy = _.cloneDeep(data);

        Collection.map(dataCopy, (d) => {
            d[xVarNumber] = Number(new Date(d[xVar]));
        });
        return dataCopy;
    }

    // Function for formatting dates -- uses moment for quick formatting options
    dateFormat = (timeInMilliseconds) => {
        return moment(timeInMilliseconds).format('DD MMM YY');
    }

    // Gets the min/max values of the numeric representation of xVar
    // Assumes processed data array
    getMinMax = (processedData, xVarNumber) => {
        // Iterate once to avoid 2x iteration by calling min and max separately
        return Collection.reduce(processedData, (rangeValues, dataObj) => {
            const t = dataObj[xVarNumber];

            if (t < rangeValues[0]) {
                rangeValues[0] = t;
            } else if (t > rangeValues[1]) {
                rangeValues[1] = t;
            }
            return rangeValues;
        }, [processedData[0][xVarNumber], processedData[0][xVarNumber]]);
    }

    // Use min/max info to build ticks for the
    // Assumes processed data
    getTicks = (processedData, xVarNumber) => {
        if (!processedData || !processedData.length) {
            return [];
        }

        const domain = this.getMinMax(processedData, xVarNumber);
        const scale = scaleLinear().domain(domain).range([0, 1]);
        ;
        const ticks = scale.ticks(4);
        return ticks.sort();
    }

    // Formats a xVar (numeric time) value for tooltips
    xVarFormatFunction = (xVarNumber) => {
        return "Date: " + this.dateFormat(xVarNumber);
    }

    // Based on a unit, return a function that formats a yVar (quantatative) value for tooltips
    createYVarFormatFunctionWithUnit = (unit) => {
        return (value) => {
            return `${value} ${unit}`;
        };
    }

    renderIcons = (chartIndex, showLine) => {
        const chartIcon = this.props.visualizerManager.renderIcon('chart', showLine);
        const scatterplotIcon = this.props.visualizerManager.renderIcon('scatterplot', !showLine);

        return (
            <span className="subsection-icons">
                <Button className="small-btn" onClick={() => this.toggleLine(chartIndex, showLine)}>
                    {scatterplotIcon}
                </Button>
                <Button className="small-btn" onClick={() => this.toggleLine(chartIndex, !showLine)}>
                    {chartIcon}
                </Button>
            </span>
        );
    }

    renderSubsectionChart = (subsection, patient, condition, chartIndex) => {
        // if the subsection is in the hiddenLineCharts array, add 'hide-line' class to remove the line from the chart
        const showLine = this.state.shownLineCharts[chartIndex];
        const graphClass = showLine ? '' : 'hide-line';

        // FIXME: Should start_time be a magic string?
        const xVar = "start_time";
        const xVarNumber = `${xVar}Number`;
        const yVar = subsection.name;
        const data = subsection.data_cache;
        // process dates into numbers for graphing
        const processedData = this.processForGraphing(data, xVar, xVarNumber);
        if (_.isUndefined(processedData) || processedData.length === 0) {
            return (
                <div key={yVar}>
                    <div className="subsection-heading">
                        <h2>
                            <span className="subsection-name">
                                <span>{yVar}</span>
                            </span>
                        </h2>
                    </div>
                    <h2 className='no-entries'> None </h2>
                </div>
            );
        }
        const yUnit = processedData[0].unit;
        const series = processedData[0].series || [subsection.name];
        // Min/Max for rendering
        const [, yMax] = this.getMinMax(processedData, yVar);

        let renderedBands = null;

        // Check if the subsection contains "bands" attribute. If it does, draw them, if not don't draw them
        if (subsection.bands) {
            const bands = [];

            // Grab the values from the summary metadata and set the bands low and high values
            subsection.bands.forEach((band) => {
                let color = null;

                switch (band.assessment) {
                    case 'bad':
                        color = "red";
                        break;

                    case 'average':
                        color = "yellow";
                        break;

                    case 'good':
                        color = "green";
                        break;

                    default:
                        console.log("Type of band is not recognized. Please check summary metadata");
                }

                bands.push({
                    y1: band.low,
                    y2: band.high,
                    color: color
                });
            });

            renderedBands = bands.map((band, i) => {
                return this.renderBand(band.y1, band.y2, yMax, band.color, i);
            });

        } else {
            renderedBands = null;
        }

        return (
            <div
                key={yVar}
            >
                <div className="subsection-heading">
                    <h2>
                        <span className="subsection-name">
                            <span>{`${yVar}`}</span><span>{` (${yUnit})`}</span>
                        </span>
                        {/* COMMENT THIS BACK IN FOR ABILITY TO TOGGLE THE LINE */}
                        {/* {this.renderIcons(chartIndex, showLine)} */}
                    </h2>
                </div>
                <ResponsiveContainer
                    height={this.state.chartHeight}
                >
                    <LineChart
                        data={processedData}
                        className={graphClass}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis
                            dataKey={xVarNumber}
                            type="number"
                            domain={[]}
                            ticks={this.getTicks(processedData, xVarNumber)}
                            tickFormatter={this.dateFormat}
                        />
                        <YAxis
                            dataKey={yVar}
                            domain={[processedData[0].series ? 0 : 'dataMin', 'dataMax']}
                        />
                        <Tooltip
                            labelFormatter={this.xVarFormatFunction}
                            formatter={this.createYVarFormatFunctionWithUnit(yUnit)}
                        />
                        {series.map(s => {
                            return (
                                <Line
                                    type="monotone"
                                    key={s}
                                    dataKey={s}
                                    stroke="#295677"
                                    isAnimationActive={false}
                                    yAxisId={0}
                                    dot={<CustomizedDot
                                        subsection={subsection}
                                        tdpSearchSuggestions={this.props.tdpSearchSuggestions}
                                        highlightedSearchSuggestion={this.props.highlightedSearchSuggestion} />}
                                />
                            );
                        })}
                        {renderedBands}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }

    // Given the range and the color, render the band
    renderBand(y1, y2, yMax, color, key) {
        if (y2 === "max") {
            // If reference area has no upper limit, draw it only if patient data would be captured by it
            if (yMax > y1) {
                // Draw refence area large enough to capture max dataelement if it's greater than the y1 (bottom of referenceArea)
                return (
                    <ReferenceArea key={key} y1={y1} y2={yMax} fill={color} fillOpacity="0.1" alwaysShow />
                );
            } else {
                // Else  draw nothing -- no relevant values would be captured by that rectangle
            }
        } else {
            // Otherwise, draw as usual
            return (
                <ReferenceArea key={key} y1={y1} y2={y2} fill={color} fillOpacity="0.1" alwaysShow />
            );
        }
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        const { patient, condition, conditionSection } = this.props;

        return (
            <div className="line-chart-subsection">
                {
                    conditionSection.data.map((subsection, i) => {
                        return this.renderSubsectionChart(subsection, patient, condition, i);
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
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool,
    tdpSearchSuggestions: PropTypes.array
};

export default BandedLineChartVisualizer;
