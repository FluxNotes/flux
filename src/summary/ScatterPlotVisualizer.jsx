import React, { Component } from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './ScatterPlotVisualizer.css';

/* 
A scatterplot that plots points by category
*/
class ScatterPlotVisualizer extends Component {
    constructor(props) {
        super(props);

        this.updateState = true;
        this.state = {
            chartWidth: 600,
            chartHeight: 400,
        }
    }

    componentDidMount() {
        const { patient, condition, conditionSection } = this.props;
        this.renderScatterPlot(patient, condition, conditionSection);
    }

    randomizeXPoints = (categoryList, data) => {
        let alive = [], dead = [];
        data[0].forEach(function (item) {
            alive.push([categoryList.indexOf(item[0]) + (Math.random() * 50 + 30) / 100 - .5, item[1]]);
        })

        data[1].forEach(function (item) {
            dead.push([categoryList.indexOf(item[0]) + (Math.random() * 50 + 30) / 100 - .5, item[1]]);
        })

        return [alive, dead];
    }

    renderScatterPlot = (patient, condition, conditionSection) => {

        const myData = conditionSection.itemsFunction(patient, condition, conditionSection);
        if (Lang.isObject(myData)) {
            let categoryMap = {};
            myData.forEach(function (series) {
                series.forEach(function (data) {
                    categoryMap[data[0]] = true;
                })
            });
            const categoryList = Object.keys(categoryMap);
            const randomData = this.randomizeXPoints(categoryList, myData);
            const chart = Highcharts.chart({
                chart: {
                    renderTo: this.refs.scattering,
                    type: 'scatter',
                    zoomType: 'xy',

                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                subtitle: {
                    style: {
                        fontSize: "13px",
                        color: "#3AA7F0",
                        fontWeight: 'bold',
                    },
                    floating: true,
                    align: 'left',
                    verticalAlign: 'bottom',
                    y: -120,
                    useHTML: true,
                    text: '<tspan> Patients per <br> treatment options</tspan>'
                },
                legend: {
                    align: 'right'
                },
                xAxis: [{// primary x axis
                    categories: categoryList,
                    title: {
                        enabled: true,
                        text: 'Treatment Options',
                        margin: 30,
                        style: {
                            fontSize: '15px'
                        }
                    },
                    min: -.3,
                    max: categoryList.length - 0.7, //6.3
                    showLastLabel: true,
                    labels: {
                        style: {
                            fontSize: '13px'
                        },
                        y: 30,
                        useHTML: true,
                        formatter: function () {
                            let sum = 0;
                            myData.forEach((series) => {
                                series.forEach((data) => {
                                    if (data[0] === this.value)
                                        sum += 1;
                                })
                            });
                            return '<span><font color = "#3AA7F0">' + sum + '</font >' +
                                '<br>' + this.value;
                        }
                    }
                }, { //second x axis
                    opposite: true,
                    linkedTo: 0,
                    title: {
                        text: '<span>Patients who <br> survived at least <br> 60 months</span>',
                        useHTML: true,
                        floating: true,
                        align: 'left',
                        margin: -20,
                        y: 20,
                        style: {
                            color: '#3AA7F0',
                            fontSize: '13px'
                        }
                    },
                    categories: categoryList,
                    labels: {
                        style: {
                            fontSize: '13px'
                        },
                        useHTML: true,
                        formatter: function () {
                            let categorySum = 0;
                            let livingOver60 = 0;
                            myData.forEach((series) => {
                                series.forEach((data) => {
                                    if (data[0] === this.value) {
                                        categorySum += 1;
                                        if (data[0] === this.value && data[1] >= 60)
                                            livingOver60 += 1;
                                    }
                                })
                            });
                            return `<span><font color= "#3AA7F0">${livingOver60}<br>${Highcharts.format('({value})%', {value: Highcharts.numberFormat(livingOver60/ categorySum * 100, 1)})}</font></span>`;
                        }
                    }
                }],
                yAxis: {
                    min: 0,
                    max: 80.1,
                    title: {
                        text: 'Surivival time (total # of months)',
                        style: {
                            fontSize: '15px'
                        }
                    },
                    minorGridLineWidth: 0,
                    gridLineWidth: 0,
                    lineColor: 'transparent',
                    plotBands: [{
                        borderWidth: 0,
                        borderColor: 'rgba(100,100,100,0.1)'
                    }],
                    labels: {
                        formatter: function () {
                            if (this.value === 60) {
                                return 'At least 60';
                            } else if (this.value > 60)
                                return "";
                            else {
                                return this.value;
                            }
                        }
                    }
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)'
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        let category;
                        if (this.point.x < .3)
                            category = chart.xAxis[0].categories[0];
                        else if (this.point.x < 1.3)
                            category = chart.xAxis[0].categories[1];
                        else if (this.point.x < 2.3)
                            category = chart.xAxis[0].categories[2];
                        else if (this.point.x < 3.3)
                            category = chart.xAxis[0].categories[3];
                        else if (this.point.x < 4.3)
                            category = chart.xAxis[0].categories[4];
                        else if (this.point.x < 5.3)
                            category = chart.xAxis[0].categories[5];
                        else
                            category = chart.xAxis[0].categories[6];
                        return '<span style="font-weight:bold">' + category + '</span><br>'
                            + this.series.name + ', ' + this.point.y + ' months';
                    },
                    useHTML: true
                },
                series: [{
                    name: 'Currently Living',
                    color: 'rgba(119, 152, 191, .5)',
                    data: randomData[0],
                    zoneAxis: 'x',
                    zones: [{
                        value: .3,
                        color: 'rgba(223, 83, 83, 0.6)'
                    },
                    {
                        value: 1.3,
                        color: 'rgba(93, 144, 232, 0.6)'
                    },
                    {
                        value: 2.3,
                        color: 'rgba(30, 168, 30, 0.4)'
                    },
                    {
                        value: 3.3,
                        color: 'rgba(245, 146, 17, 0.5)'
                    },
                    {
                        value: 4.3,
                        color: 'rgba(199, 21, 133, 0.5)'
                    },
                    {
                        value: 5.3,
                        color: 'rgba(17, 101, 245, 0.5)'
                    },
                    { color: 'rgba(148, 0, 211, 0.6)' }
                    ]
                }, {
                    name: 'Deceased',
                    color: 'rgba(119, 152, 191, .5)',
                    data: randomData[1],
                    zoneAxis: 'x',
                    zones: [{
                        value: .3,
                        color: 'rgba(223, 83, 183, 0.3)'
                    },
                    {
                        value: 1.3,
                        color: 'rgba(93, 202, 232, 0.4)'
                    },
                    {
                        value: 2.3,
                        color: 'rgba(30, 168, 30, 0.4)'
                    },
                    {
                        value: 3.3,
                        color: 'rgba(140, 92, 24, 0.6)'
                    },
                    {
                        value: 4.3,
                        color: 'rgba(151, 120, 176, 0.5)'
                    },
                    {
                        value: 5.3,
                        color: 'rgba(105, 211, 149, 0.5)'
                    },
                    { color: 'rgba(230, 5, 158, 0.6)' }
                    ]
                }]
            });
        } else {
            this.refs.scattering.innerHTML = myData;
        }

    }

    render() {
       // const { patient, condition, conditionSection } = this.props;

        return (
            <div ref='scattering'
                style={{ height: 600 }} className='scatter-plot-subsection'>
            </div>
        );
    }

}

ScatterPlotVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object
};



export default ScatterPlotVisualizer;