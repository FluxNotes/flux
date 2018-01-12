import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';

import './ClinicalEventSelection.css';

class ClinicalEventSelection extends Component {
    componentWillMount() {
        if (Lang.isNull(this.props.clinicalEvent) || Lang.isUndefined(this.props.clinicalEvent)) {
            this.selectClinicalEvent(this.props.possibleClinicalEvents[0].name);
        }
    }

    selectClinicalEvent(clinicalEvent) {
        // need to save off contents of note here
        this.props.setFullAppState('saveEditorContents', true);

        this.props.setFullAppState('clinicalEvent', clinicalEvent.toLowerCase());
    }

    renderClinicalEventList() {
        return this.props.possibleClinicalEvents.map((setting, index) =>
            <MenuItem
                className="clinical-event-item"
                key={`clinical-event-${setting}`}
                value={titlecase(setting)}
                data-test-clinical-event-selector-item={titlecase(setting)}>
                {titlecase(setting)}
            </MenuItem>
        );
    }

    render() {
        return (
            <div className="clinical-event-selection">
                <Select
                    className="clinical-event-select"
                    value={titlecase(this.props.clinicalEvent)}
                    onChange={(event) => this.selectClinicalEvent(event.target.value)}
                    data-test-clinical-event-selector
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