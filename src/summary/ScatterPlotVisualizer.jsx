import React, {Component} from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';

import './ScatterPlotVisualizer.css';

/* 
A scatterplot that plots points by category
*/
class ScatterPlotVisualizer extends Component {
    constructor(props) {
        super(props);

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
            setTimeout(this.resize, 450);
        }
    }


    componentDidMount() {
        const {patient, condition, conditionSection} = this.props;
        this.renderScatterPlot(patient, condition, conditionSection);
        setTimeout(this.resize, 450);
    }

    resize = () => {
        const chartParentDivWidth = this.chartParentDiv.offsetWidth;

        this.setState({ 
            chartWidth: chartParentDivWidth,
        })
    }

    randomizeXPoints = (data) => {
        var alive = [], dead = [];
        data[0].forEach(function(item) {
            alive.push([item[0] + (Math.random() * 50 + 30) / 100 - .5, item[1]]);
        })

        data[1].forEach(function(item) {
            dead.push([item[0] + (Math.random() * 50 + 30) / 100 - .5, item[1]]);
        })

        return [alive, dead];
    }

    renderScatterPlot = (patient, condition, conditionSection) => {  
    
        const myData = conditionSection.itemsFunction(patient, condition, conditionSection);
        const randomData = this.randomizeXPoints(myData);
        console.log(myData);
        console.log(randomData);
        var chart = Highcharts.chart({
                chart: {
                renderTo: this.refs.scattering,
                  type: 'scatter',
                  zoomType: 'xy'
                },
                credits: {
                    enabled: false
                },
                title: {
                  text: ''
                },
                subtitle: {
                    style : {
                        fontSize : "13px",
                        color : "#3AA7F0",
                        fontWeight: 'bold',
                    },
                  floating: true, 
                  align: 'left',
                  verticalAlign: 'bottom',
                  //x: -400,
                  y: -120,
                  useHTML: true,
                    text: '<tspan> Patients per <br> treatment options</tspan>'
                },
                legend: {
                    align: 'right'
                },
                xAxis: [{// primary x axis
                  categories: ['Chemo Therapy', 'Chemo therapy & Radiation', 'Hormonal Therapy', 'Radiation', 'Surgery', 'Surgery & Radiation', 'None (Actively Monitoring'],
                  title: {
                    enabled: true,
                    text: 'Treatment Options',
                    margin: 30,
                    style: {
                        fontSize : '15px'
                    }
                  },
                min: -.3,
                max: 6.3,
                 showLastLabel: true,
                 labels:{
                     style: {
                         fontSize: '13px'
                     },
                     y: 30,
                     useHTML: true,
                     formatter: function() {
                        var index = this.axis.categories.indexOf(this.value);
                        var sum = 0;
                        myData.forEach(function(series) {
                            series.forEach(function(data){
                              if(data[0] == index)
                                sum+=1;
                          })
                        });
                        return '<span><font color = "#3AA7F0">'+sum+'</font >'+
                        '<br>'+this.value;
                     }
                 }
                }, { //second x axis
                    opposite: true,
                   linkedTo: 0,
                    title: {
                      text: '<span>Patients who <br> survived at least <br> 60 months</span>',
                    useHTML: true,
                    floating: true,
                    align : 'left',
                    margin: -20,
                    y: 20,
                    style: {
                        color: '#3AA7F0',
                        fontSize: '13px'
                    }
                    },
                  categories: ['Chemo Therapy', 'Chemo therapy & Radiation', 'Hormonal Therapy', 'Radiation', 'Surgery', 'Surgery & Radiation', 'None (Actively Monitoring)'],
                    labels: {
                     y: -20,
                     style: {
                         fontSize: '13px'
                     },
                      useHTML: true,
                    formatter: function(){
                      var index = this.axis.categories.indexOf(this.value);
                      var categorySum = 0;
                      var livingOver60 = 0;
                        myData.forEach(function(series) {
                          series.forEach(function(data) {
                            if(data[0] == index){
                              categorySum+=1;
                          if(data[0] == index && data[1] >= 60)
                              livingOver60+=1;
                        }})
                      });
                        return '<span><font color= "#3AA7F0">'+livingOver60+'<br>'
                       +Highcharts.format('({value})%',
                       {value: Highcharts.numberFormat(livingOver60/categorySum*100, 		
                       1)})+'</font></span>';
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
                  gridLineWidth : 0,
                  lineColor: 'transparent',
                  plotBands: [{
                      borderWidth: 0,
                      borderColor: 'rgba(100,100,100,0.1)'
                  }],
				  //lineWidth : 1,
                  /*plotLines : [{
                    color : "rgba(100, 100, 100, 0.1)",
					width : 1,
					value : 10
                  },{
                    color : "rgba(100, 100, 100, 0.1)",
                    width : 1,
                    value : 20
                  },{}
                    color : "rgba(100, 100, 100, 0.1)",
                    width : 1,
                    value : 30
                  },{
                    color : "rgba(100, 100, 100, 0.1)",
                    width : 1,
                    value : 40
                  }, {
                    color : "rgba(100, 100, 100, 0.1)",
                    width : 1,
                    value : 50
                  },{
                    color : "rgba(0, 100, 0, 0.3)",
                    width : 1,
                    value : 60
                  }
                ],*/
                  labels: {
                      formatter: function (){
                      if(this.value == 60){
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
                      //headerFormat: '<b>{point.x}</b><br>',
                      //pointFormat: '{series.name}, {point.y} months',
                      formatter: function() {
                          var category;
                          console.log(this.point.x);
                          console.log(chart.xAxis[0].categories);
                          if(this.point.x < .3)
                            category = chart.xAxis[0].categories[0];
                          else if(this.point.x < 1.3)
                            category = chart.xAxis[0].categories[1];
                          else if(this.point.x < 2.3)
                            category = chart.xAxis[0].categories[2];
                          else if(this.point.x < 3.3)
                            category = chart.xAxis[0].categories[3];
                          else if(this.point.x < 4.3)
                            category = chart.xAxis[0].categories[4];
                          else if(this.point.x < 5.3)
                            category = chart.xAxis[0].categories[5];
                          else
                            category = chart.xAxis[0].categories[6];
                          return '<span style="font-weight:bold">'+category+'</span>'+'<br>'
                          +this.series.name +', '+ this.point.y + ' months';
                      },
                      useHTML: true
                    },
                  //},
                //},
                
                series: [{
                  name: 'Currently Living',
                  color: 'rgba(119, 152, 191, .5)',
                  /*
                  data: [[0, 11], 
                         [4, 40], 
                         [5, 72], 
                         [6, 63], 
                         [2, 22],
                         [1, 35], 
                         [4, 47], 
                         [0, 69], 
                         [0, 66], 
                         [3, 75],
                         [6, 18], 
                         [5, 13], 
                         [2, 77], 
                         [5, 42], 
                         [6, 50],
                         [4, 66], 
                         [2,15], 
                         [5, 74], 
                         [4, 59], 
                         [2, 68],
                         [5, 55], 
                         [3, 80], 
                         [6, 28], 
                         [0, 8], 
                         [0, 72],
                         [5, 70], 
                         [6, 59], 
                         [0, 67.3], 
                         [6, 67.8], 
                         [2, 47.0],
                         [5, 46.2], 
                         [3, 55.0], 
                         [2, 83.0],
                         [1, 54.4]
                        ], */
                    data: randomData[0],
                    zoneAxis: 'x',
                    zones: [{
                        value: .3,
                        color: 'rgba(223, 83, 83, 0.6)'},
                        {value: 1.3, 
                        color: 'rgba(93, 144, 232, 0.6)'},
                        {value: 2.3,
                        color: 'rgba(30, 168, 30, 0.4)'},
                        {value: 3.3,
                        color: 'rgba(245, 146, 17, 0.5)'},
                        {value : 4.3,
                        color: 'rgba(199, 21, 133, 0.5)'},
                        {value: 5.3,
                         color: 'rgba(17, 101, 245, 0.5)'},
                        {color: 'rgba(148, 0, 211, 0.6)'}
                    ]}, {
                  name: 'Deceased',
                  color: 'rgba(119, 152, 191, .5)',
                  /*
                  data: [[0, 65.6], 
                         [1, 71.8], 
                         [3, 80.7], 
                         [5, 72.6], 
                         [4, 78.8],
                        [2, 74.8], 
                         [6, 86.4], 
                         [0, 78.4], [1, 62.0], [3, 81.6],
                    [5, 76.6], 
                         [4, 83.6], 
                         [2, 90.0], 
                         [6, 74.6], 
                         [0, 71.0],
                    [1, 79.6], 
                         [3, 93.8], 
                         [5, 70.0], 
                         [4, 72.4], 
                         [2, 85.9],
                    [6, 78.8], 
                         [0, 77.8], 
                         [1, 66.2], 
                         [3, 86.4], 
                         [5, 81.8],
                    [4, 89.6], 
                         [2, 82.8], 
                         [6, 76.4]], */
                    data: randomData[1],
                    zoneAxis: 'x',
                    zones: [{
                        value: .3,
                        color: 'rgba(223, 83, 183, 0.3)'},
                        {value: 1.3, 
                        color: 'rgba(93, 202, 232, 0.4)'},
                        {value: 2.3,
                        color: 'rgba(30, 168, 30, 0.4)'},
                        {value: 3.3,
                        color: 'rgba(140, 92, 24, 0.6)'},
                        {value : 4.3,
                        color: 'rgba(151, 120, 176, 0.5)'},
                        {value: 5.3,
                         color: 'rgba(105, 211, 149, 0.5)'},
                        {color: 'rgba(230, 5, 158, 0.6)'}
                    ]
                }]
            });
          

    }

    render(){
        const {patient, condition, conditionSection} = this.props;

        return(
            <div ref='scattering' style = {{height: 600}} className='scatter-plot-subsection'>   
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