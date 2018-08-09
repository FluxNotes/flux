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
        this.renderScatterPlot();
        setTimeout(this.resize, 450);
    }

    resize = () => {
        const chartParentDivWidth = this.chartParentDiv.offsetWidth;

        this.setState({ 
            chartWidth: chartParentDivWidth,
        })
    }

    renderScatterPlot = (patient, condition, conditionSection) => {  
    
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
                  text: 'Survivial Time For Treatment Options'
                },
                subtitle: {
                  x: -400,
                  y: 300,
                  useHTML: true,
                    text: '<tspan style="font-weight:bold;color:#3AA7F0"> Patients per <br> treatment options</tspan>'
                },
                xAxis: [{// primary x axis
                  categories: ['Chemo', 'Chemo and Radiation', 'Hormonal Therapy', 'Radiation', 'Surgery and Radiation', 'Surgery', 'None (Actively Monitoring'],
                  title: {
                    enabled: true,
                    text: 'Treatment Options'
                  },
                 showLastLabel: true,
                 labels:{
                     useHTML: true,
                     formatter: function() {
                          var index = this.axis.categories.indexOf(this.value);
                        var sum = 0;
                        this.axis.series.forEach(function(series) {
                            series.options.data.forEach(function(data){
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
                      text: '<span left="0px" style="color:rgb(58,167,240)">Patients who <br> survived at least <br> 60 months</span>',
                    useHTML: true,
                    x: -450,
                    y: 20
                    },
                  categories: ['Chemo', 'Chemo and Radiation', 'Hormonal Therapy', 'Radiation', 'Surgery and Radiation', 'Surgery', 'None (Actively Monitoring)'],
                    labels: {
                      useHTML: true,
                    formatter: function(){
                        var index = this.axis.categories.indexOf(this.value);
                      var categorySum = 0;
                      var livingOver60 = 0;
                        this.chart.series.forEach(function(series) {
                          series.options.data.forEach(function(data) {
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
                    max: 100,
                  title: {
                    text: 'Surivival Time ( # of months)'
                  },
                  minorTickInterval: 10,
                 endOnTick: false,
                  tickPositioner: function (){
                      var position = [0, 20, 40, 60, 80];
                    return position;
                  },
                  labels: {
                      formatter: function (){
                        if(this.value == 60){
                      return 'At least 60';
                      }
                      if(this.value == 80)
                      return '';
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
                    },
                    tooltip: {
                      headerFormat: '<b>{point.key}</b><br>',
                      pointFormat: '{series.name}, {point.y} months'
                    }
                  }
                },
                series: [{
                  name: 'Currently Living',
                  color: 'rgba(119, 152, 191, .5)',
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
                        ], 
                    zoneAxis: 'x',
                    zones: [{
                        value: 1,
                        color: 'rgba(223, 83, 83, 0.6)'},
                        {value: 2, 
                        color: 'rgba(93, 144, 232, 0.6)'},
                        {value: 3,
                        color: 'rgba(30, 168, 30, 0.4)'},
                        {value: 4,
                        color: 'rgba(245, 146, 17, 0.5)'},
                        {value : 5,
                        color: 'rgba(199, 21, 133, 0.5)'},
                        {value: 6,
                         color: 'rgba(17, 101, 245, 0.5)'},
                        {color: 'rgba(148, 0, 211, 0.6)'}
                    ]}, {
                  name: 'Deceased',
                  color: 'rgba(119, 152, 191, .5)',
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
                         [6, 76.4]],
                    zoneAxis: 'x',
                    zones: [{
                        value: 1,
                        color: 'rgba(223, 83, 183, 0.3)'},
                        {value: 2, 
                        color: 'rgba(93, 202, 232, 0.4)'},
                        {value: 3,
                        color: 'rgba(30, 168, 30, 0.4)'},
                        {value: 4,
                        color: 'rgba(140, 92, 24, 0.6)'},
                        {value : 5,
                        color: 'rgba(151, 120, 176, 0.5)'},
                        {value: 6,
                         color: 'rgba(105, 211, 149, 0.5)'},
                        {color: 'rgba(230, 5, 158, 0.6)'}
                    ]
                }]
            });

    }

    render(){
        const {patient, condition, conditionSection} = this.props;

        return(
            <div ref='scattering' className='scatter-plot-subsection'>   
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