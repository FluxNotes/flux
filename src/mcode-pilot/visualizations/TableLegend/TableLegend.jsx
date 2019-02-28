import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TableLegend.css';

export default class TableLegend extends Component {
    render() {
        const { includedRow } = this.props;

        let message;
        if (Array.isArray(includedRow)) {
            // the row is empty
            message = "survived with treatment";
        } else {
            const name = includedRow.displayName;
            const noTreatment = name === 'none (actively monitoring)';
            const hasAnd = name.indexOf('&') > -1;
            message = `survived with ${noTreatment ? 'no treatment' : name} ${hasAnd || noTreatment ? "" : " alone"}`;
        }

        return (
            <div className="table-legend">
                <div className="wrapper">
                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="prog-fill main" />
                        </div>
                        <span className="legend-text">{message}</span>
                    </div>

                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="prog-fill treatment-increase" />
                        </div>
                        <span className="legend-text">increase in survival due to treatment</span>
                    </div>

                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="prog-fill treatment-decrease" />
                        </div>
                        <span className="legend-text">decrease in survival due to treatment</span>
                    </div>

                    <div className="legend-entry">
                        <div className="prog-fill-container">
                            <div className="progress-bar cancer" />
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
    ])
};
