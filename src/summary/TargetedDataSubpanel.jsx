import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import _ from 'lodash';

import TargetedDataSection from './TargetedDataSection';
import VisualizerManager from './VisualizerManager';
import 'font-awesome/css/font-awesome.min.css';
import './TargetedDataSubpanel.css';

export default class TargetedDataSubpanel extends Component {
    constructor(props) {
        super(props);

        this._visualizerManager = new VisualizerManager();
    }

    getConditionMetadata() {
        const { condition, summaryMetadata } = this.props;
        let codeSystem, code, conditionMetadata = null;

        if (condition != null) {
            codeSystem = condition.codeSystem;
            code = condition.code;
            conditionMetadata = summaryMetadata[codeSystem + "/" + code];
        }

        if (condition == null || conditionMetadata == null) {
            conditionMetadata = summaryMetadata["default"];
        }

        return conditionMetadata;
    }

    renderSections() {
        const { clinicalEvent, patient, condition, onItemClicked, allowItemClick, isWide } = this.props;
        const conditionMetadata = this.getConditionMetadata();

        if (conditionMetadata == null) return null;

        return conditionMetadata.sections.filter((section, i) => {
            return !section.clinicalEvents || section.clinicalEvents.includes(clinicalEvent);
        }).map((section, i) => {
            return (
                <div key={i} data-test-summary-section={section.name} data-minimap-short-title={section.shortName}>
                    <TargetedDataSection
                        type={section.type}
                        visualizerManager={this._visualizerManager}
                        defaultVisualizer={section.defaultVisualizer}
                        section={section}
                        patient={patient}
                        condition={condition}
                        clinicalEvent={clinicalEvent}
                        onItemClicked={onItemClicked}
                        allowItemClick={allowItemClick}
                        isWide={isWide}
                    />

                    {i < conditionMetadata.sections.length - 1 ? <Divider className="divider"/> : null}
                </div>
            );
        });
    }

    render() {
        return (
            <div id="condition-summary-section" className={this.props.className}>
                <div id="summary-list">
                    {this.renderSections()}
                </div>
            </div>
        );
    }
}

TargetedDataSubpanel.propTypes = {
    className: PropTypes.string,
    isWide: PropTypes.bool.isRequired,
    patient: PropTypes.object,
    condition: PropTypes.object,
    summaryMetadata: PropTypes.object,
    allowItemClick: PropTypes.bool,
    onItemClicked: PropTypes.func
};
