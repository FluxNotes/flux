import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, FormControlLabel, Paper, Checkbox } from 'material-ui';

import './TreatmentsPopover.css';

export default class TreatmentsPopover extends Component {
    render() {
        const {
            title,
            treatments,
            selectedTreatments,
            unselectedTreatments,
            toggleTreatments,
            treatmentNames
        } = this.props;

        return (
            <div className="treatments-popper">
                <Paper className="popover">
                    <div className="popover-title">{title}</div>
                    <div className="popover-checklist">
                        {treatments.map((treatment, key) =>
                            <FormControl className="form-control" key={key}>
                                <FormLabel>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedTreatments.includes(treatment)}
                                                onChange={toggleTreatments}
                                                disabled={unselectedTreatments ? unselectedTreatments.includes(treatment) : false}
                                                value={treatment}
                                                className="checkbox" />
                                        }
                                        label={
                                            <div className="checkbox-label">
                                                {treatmentNames ? treatmentNames[treatment] : treatment}
                                            </div>
                                        }
                                    />
                                </FormLabel>
                            </FormControl>
                        )}
                    </div>
                </Paper>
            </div>
        );
    }
}

TreatmentsPopover.propTypes = {
    title: PropTypes.string,
    treatments: PropTypes.array.isRequired,
    selectedTreatments: PropTypes.array.isRequired,
    unselectedTreatments: PropTypes.array,
    toggleTreatments: PropTypes.func.isRequired,
    treatmentNames: PropTypes.object
};
