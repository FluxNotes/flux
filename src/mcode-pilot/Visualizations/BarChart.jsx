import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BarChart.css';

export default class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: {}
        };
    }

    componentDidMount(){

    }
    getPercentage(data) {
        let total = 0;
        for (var key of Object.keys(data)) {
            total += data[key];
        }
        return total;
    }

    render() {
        const data = this.props.values;
        const total = this.getPercentage(data);
        const survived = data.survived/total*100;
        const cancer_dead = data.cancerDeath/total*100;
        const other_dead = data.otherDeath/total*100;
        const old_percent = this.props.compareTo.survived/this.getPercentage(this.props.compareTo)*100;
        const percent_increase = survived - old_percent;
        const rounded_percent = Math.round(survived)-Math.round(old_percent);

        let main_style,change_style,dead_style,text_style;
        if(percent_increase<0){
            main_style={"width":`${survived}%`, "backgroundColor":"#9e9e9e"};
            change_style = {"width":`${Math.abs(percent_increase)}%`, "backgroundColor":"#d9534f"};
            dead_style = {"width":`${cancer_dead+percent_increase}%`, "backgroundColor":"white"}
            text_style = {"color":"#d9534f"};

        }else{
            main_style={"width":`${old_percent}%`, "backgroundColor":"#9e9e9e"};
            change_style = {"width":`${percent_increase}%`, "backgroundColor":"#5cb85c"}
            dead_style = {"width":`${cancer_dead}%`, "backgroundColor":"white"}
            text_style = {"color":"#5cb85c"};
        }
        return (
            <div className="bar-chart">
            <div>
                <p className="bar-chart-text">{Math.round(survived)}%</p>
                <p className="bar-chart-text right-text" style={rounded_percent!=0?text_style:null}><span className={rounded_percent!=0?(rounded_percent>0?"arrow-up":"arrow-down"):null}></span>{Math.abs(rounded_percent)}%</p>
            </div>
                <div className="prog-fill" style={main_style}></div>
                <div className="prog-fill" style={change_style}></div>
                <div className="prog-border" style={dead_style}></div>
                <div className="prog-fill" style={{"width":`${other_dead}%`, "backgroundColor":"#d1d1d1"}}></div>
            </div>
        );
    }
}

BarChart.propTypes = {
    values: PropTypes.object.isRequired,
    compareTo: PropTypes.object
};
