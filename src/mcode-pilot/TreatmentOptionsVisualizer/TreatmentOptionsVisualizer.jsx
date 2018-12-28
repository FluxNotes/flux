import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TreatmentOptionsSelector from '../TreatmentOptionsSelector/TreatmentOptionsSelector';
import numberWithCommas from '../utils/numberWithCommas';
import TreatmentOptionsOutcomes from '../TreatmentOptionsOutcomes/TreatmentOptionsOutcomes';

import './TreatmentOptionsVisualizer.css';

// example header object
// TODO: decide on format for this
const headers = [
    {
      "header": "select to compare",
      "type":"thin"
    },
    {
      "header":<span className="fa fa-user user-icon"></span>,
      "type":"center"
    },
    {
      "header": "Overall survival rates",
      "subheaders":["1 yr", "2 yr", "3 yr"]
    },
    {
      "header":"Change in ECOG score"
    },
    {
      "header":"Hospitalization due to side effects",
      "subheaders":["all","leading cause"]
    }
]

export default class TreatmentOptionsVisualizer extends Component {
    renderedSimilarPatientsSubtitle(numPatients) {
        return <div><span className="bold">{numPatients}</span> patients</div>;
    }

    renderedSimilarPatientsSubheader(excludedCriteria) {
        return (
            <div>
                <span className="bold italic">excluded</span> criteria:
                <span className="muted">
                    {excludedCriteria.map((criteria, i) => (
                        <span key={i}>{criteria}{i !== excludedCriteria.length - 1 && <span>, </span>}</span>
                    ))}
                </span>
            </div>
        );
    }

    renderedFilterSubheader(filteredTreatments) {
        return (
            <div>
                {filteredTreatments.map((treatment, i) => (
                    <span key={i}>{treatment}{i !== filteredTreatments.length - 1 && <span>, </span>}</span>
                ))}
            </div>
        );
    }

    render() {
        const { totalPatients, condition } = this.props;

        return (
            <div className="treatment-options-visualizer">
                <div className="treatment-options-visualizer__info">
                    Outcomes and criteria for {numberWithCommas(totalPatients)} with {condition.type} were collected
                    with CancerLinQ
                </div>

                <TreatmentOptionsSelector
                    title="Similar Patients"
                    subTitle={this.renderedSimilarPatientsSubtitle(156)}
                    subHeader={this.renderedSimilarPatientsSubheader(['race', 'sex', 'family', 'history', 'surgery'])}>
                    Similar Patients placeholder
                </TreatmentOptionsSelector>

                <TreatmentOptionsSelector
                    title="Filter treatments"
                    subTitle="all treatment types"
                    subHeader={this.renderedFilterSubheader(['most common 3 treatments', 'none'])}>
                    Filter placeholder
                </TreatmentOptionsSelector>

                <TreatmentOptionsSelector
                    title="Outcomes"
                    subTitle="cancer specific survival rate, ECOG score, Hospitalization due to side effects">
                    <TreatmentOptionsOutcomes headers={headers} />
                </TreatmentOptionsSelector>

            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    totalPatients: PropTypes.number,
    condition: PropTypes.object
}

TreatmentOptionsVisualizer.defaultProps = {
    totalPatients: 156765 // TODO: hook up
}
