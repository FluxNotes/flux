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
        // No patient by default
        this._relevantPatientEntries = {};
        this._visualizerManager = new VisualizerManager();
    }

    shouldComponentUpdate(nextProps, nextState) { 
        const newRelevantPatientEntries = nextProps.patient.getEntriesOtherThanNotes();
        
        // Need to ignore patientRecords on entries. 
        // Solution: Remove them during comparison, restore those value after comparison.
        const arrayOfPatientRecords = newRelevantPatientEntries.reduce(function (accumulator, currentEntry, currentIndex) { 
            if (currentEntry._patientRecord) { 
                const copyOfPatientRecord = currentEntry._patientRecord;
                currentEntry._patientRecord = null;
                accumulator.push({
                    srcIndex: currentIndex,
                    patientRecordCopy : copyOfPatientRecord
                });
            } 
            return accumulator; 
        }, []);

        // Only update local value when a change occurs on non-note related objects.
        const relevantChangesMade = !_.isEqual(this._relevantPatientEntries, newRelevantPatientEntries)
        if (relevantChangesMade) { 
            this._relevantPatientEntries = _.cloneDeep(newRelevantPatientEntries);
        }
        // Restore all patientRecord references.  
        for (const objIndex in arrayOfPatientRecords) { 
            const copyObj = arrayOfPatientRecords[objIndex];
            const srcIndex = copyObj.srcIndex;
            const patientRecordCopy = copyObj.patientRecordCopy;
            // Get the src object, and restore the old value using our copy
            newRelevantPatientEntries[srcIndex]._patientRecord = patientRecordCopy;
        };
        // Return true when relevantChanges have been made.
        return relevantChangesMade;
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
