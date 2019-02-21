import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TableLegend.css';

export default class TableLegend extends Component {

    render() {
        let message;
        if(this.props.includedRow instanceof Array) {
            // the row is empty
            message = "survived with treatment"
        }else{
            const name = this.props.includedRow.name;
            const noTreatment = this.props.treatmentNames.noTreatment===name;
            const hasAnd = name.indexOf('&') > -1
            message = "survived with " + (noTreatment?'no treatment':name) + (hasAnd||noTreatment?"":" alone")
        }
        const mainStyle = {"width": `45px`};
        const treatmentStyle = {"width":"10px", "backgroundColor":"#91bd7b"};
        const redTreatmentStyle = {"width": "14px", "background": `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            #EC9696 2px,
            #EC9696 4px
          ),
          linear-gradient(
            to bottom,
            #FFFFFF,
            #FFFFFF
          )`};
        const cancerStyle = {"width":"20px"};
        return (
            <div className="table-legend">
            <div className="wrapper">
                <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="prog-fill" style={mainStyle}/>
                        </div>
                        <span className="legend-text">{message}</span>
                    </div>

                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="prog-fill" style={treatmentStyle}/>
                        </div>
                        <span className="legend-text">increase in survival due to treatment</span>
                    </div>

                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="prog-fill" style={redTreatmentStyle}/>
                        </div>
                        <span className="legend-text">decrease in survival due to treatment</span>
                    </div>

                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="progress-bar" style={cancerStyle}/>
                        </div>
                        <span className="legend-text">cancer related deaths</span>
                    </div>
                
            </div>

            </div>
        );
    }
}

TableLegend.propTypes = {
    includedRow: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    treatmentNames: PropTypes.object
};
