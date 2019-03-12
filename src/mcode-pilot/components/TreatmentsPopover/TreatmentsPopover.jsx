import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, FormControlLabel, Paper, Checkbox } from 'material-ui';

import './TreatmentsPopover.css';

export default class TreatmentsPopover extends Component {
    render() {
        const { title, treatments, selectedTreatments, toggleTreatments } = this.props;

        return (
            <div className="treatments-popper">
                <Paper className="popover">
                    <div className="popover-title">{title}</div>
                    <div className="popover-checklist">
                        {treatments.map(({ name, key }, i) =>
                            <FormControl className="form-control" key={i}>
                                <FormLabel>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedTreatments.includes(key)}
                                                onChange={toggleTreatments}
                                                value={key}
                                                className="checkbox" />
                                        }
                                        label={
                                            <div className="checkbox-label">
                                                {name}
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
    toggleTreatments: PropTypes.func.isRequired
};
