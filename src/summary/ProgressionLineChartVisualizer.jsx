import React, {Component} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
    Dot
} from 'recharts';
import moment from 'moment';
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

        // This var will be used
        this.chartHeight = 250;
        this.xVarField = "start_time";
        this.xVarNumberField = `${this.xVarField}_number`;
        this.yVarField = "disease_status_code";
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
        const buffer = ((max - min)/15);
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
    getXAxisTicks = (xAxisDomain, processedPotentialDiagnosisDates, isWide) => {
        // Ticks are going to contain the min and max values
        let ticks = [...xAxisDomain];
        const totalNumberOfTicks = isWide ? 6 : 3;
        // Minus the ticks at the beginning and the end
        const totalNumberOfIntermediateTicks = totalNumberOfTicks - xAxisDomain.length;
        // Get the total length of the domain
        const domainLength = xAxisDomain[1] - xAxisDomain[0];
        // Get the distance from one tick to the next, which means geometrically:
        // if we have n ticks, we have n - 1 subsections of equal length between ticks
        const tickLength = Math.round(domainLength / (totalNumberOfTicks - 1));
        for (let numberOfTicks = 1; numberOfTicks <= totalNumberOfIntermediateTicks; numberOfTicks++) {
            // Tick offset increases by one tickLength for each successive tick
            const tickOffset = (numberOfTicks * tickLength);
            // Add that offset to our zero point -- the min value of our domain
            const tickLocation = xAxisDomain[0] + tickOffset;
            ticks.push(tickLocation);
        }
        // Sort since the axis doesn't sort on its own
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

    // Based on a tooltipPayload, generate a tooltip for the diseaseStatus Endpoints
    diseaseStatusTooltipFunction = (props) => {
        const { payload } = props;
        // If there's a payload, we have a tooltip to display
        if (!Lang.isEmpty(payload)) {
            const { start_time, disease_status_string, evidence } = payload[0].payload;
            // Create blurbs of text based on whether or not we have data to display
            const disease_status_blurb = disease_status_string;
            const evidence_blurb =  !Lang.isEmpty(evidence) ? ` based on ${evidence}` : "";
            const as_of_blurb = !Lang.isEmpty(start_time)   ? ` on ${start_time}`  : "";
            return (
                <div className="disease-status-tooltip">
                    <span>
                        {disease_status_blurb}
                        {evidence_blurb}
                        {as_of_blurb}
                    </span>
                </div>
            );
        } else {
            return;
        }
    }

    renderProgressionChart = (patient, condition, conditionSection) => {
        const { progressions, potentialDiagnosisDates } = conditionSection.data[0].data_cache;
        // process dates into numbers for graphing
        let processedData = this.processForGraphing(progressions);
        const processedPotentialDiagnosisDates = this.processPotentialDiagnosisDates(potentialDiagnosisDates);
        processedPotentialDiagnosisDates.forEach((diagnosisDate, i) => {
            processedData.push({
                disease_status_string: "Diagnosed ",
                evidence: "",
                start_time: this.dateFormat(diagnosisDate.date),
                start_time_number: diagnosisDate.date,
                diagnosis_date : diagnosisDate.date,
                label: `ref_${i}`
            });
        });
        // Get yAxisInfo
        const yTicks = [ -1, 0, 1, 2, 3 ];
        // Get xAxisInfo
        const xAxisDomain = this.getXAxisDomain(processedData, processedPotentialDiagnosisDates);
        const xTicks = this.getXAxisTicks(xAxisDomain, processedPotentialDiagnosisDates, this.props.isWide);
        return (
            <ResponsiveContainer
                height={this.chartHeight}
                key={conditionSection}
            >
                <LineChart
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
                        content={this.diseaseStatusTooltipFunction}
                    />
                    <Line
                        type="monotone"
                        dataKey={this.yVarField}
                        stroke="#295677"
                        yAxisId={0}
                        dot={this.renderDot}
                    />
                     <Line
                        type="monotone"
                        dataKey="diagnosis_date"
                        stroke="none"
                    />

                    {processedPotentialDiagnosisDates.map((diagnosisDate, i) => {
                        return (
                            <ReferenceLine
                                x={diagnosisDate.date}
                                stroke="#AAAAAA"
                                strokeDasharray="3 3"
                                key={i}
                                label={{width: 60, position: 'center', value: capitalizeFirstLetter(diagnosisDate.label)}}
                            />
                        );
                    })}
                </LineChart>
           </ResponsiveContainer >
        );
    }

    renderDot = (props) => {
        const highlightedData = this.props.tdpSearchSuggestions.find(s => s.valueTitle === props.payload.start_time && s.contentSnapshot === props.payload.disease_status_string);
        if (highlightedData) {
            props.stroke = Lang.isEqual(highlightedData, this.props.highlightedSearchSuggestion) ? 'rgb(255, 210, 5)' : 'rgb(255, 255, 70)';
            props.fill = 'rgb(255, 255, 70)';
            props.strokeWidth = 5;
        }
        return <Dot {...props} />;
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
    allowItemClick: PropTypes.bool,
    tdpSearchSuggestions: PropTypes.array
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default ProgressionLineChartVisualizer;
