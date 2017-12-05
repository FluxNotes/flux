import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';

import './ClinicalEventSelection.css';

class ClinicalEventSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clinicalEvent: "Post-encounter",
        };
    }

    componentWillMount() {
        if (Lang.isNull(this.props.clinicalEvent) || Lang.isUndefined(this.props.clinicalEvent)) {
            this.selectClinicalEvent(this.props.possibleClinicalEvents[0]);
        }
    }

    selectClinicalEvent(clinicalEvent) {
        this.props.setFullAppState('clinicalEvent', clinicalEvent.toLowerCase());
        this.setState({ clinicalEvent });
    }

    renderClinicalEventList() {
        return this.props.possibleClinicalEvents.map((setting, index) =>
            <MenuItem
                className="condition-item"
                key={`clinical-event-${setting}`}
                value={titlecase(setting)}
                data-test-condition-selector-item={titlecase(setting)}>
                {titlecase(setting)}
            </MenuItem>
        );
    }

    render() {
        return (
            <div className="condition-selection">
                <Select
                    className="condition-select"
                    value={this.state.clinicalEvent}
                    onChange={(event) => this.selectClinicalEvent(event.target.value)}
                    data-test-condition-selector
                >
                    {this.renderClinicalEventList()}
                </Select>
            </div>
        );
    }
}

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}


ClinicalEventSelection.propTypes = {
    possibleClinicalEvents: PropTypes.arrayOf(PropTypes.string).isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    setFullAppState: PropTypes.func.isRequired
};

export default ClinicalEventSelection;