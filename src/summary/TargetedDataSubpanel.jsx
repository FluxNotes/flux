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
        this._signedNotesCount = 0;
        this._clinicalEvent = "";
        this._currentIsWide = null;
        this._currentAllowItemClick = null;
        this._currentConditionString = "";
        this._visualizerManager = new VisualizerManager();
        this._forceRefresh= false;
    }

    shouldComponentUpdate(nextProps, nextState) { 
        // Seven current reasons to update:
        // - There is a change to the entries this component cares about
        // - A note has been signed and our representation of the data should reflect it's new signedness
        // - Clinical event has shifted
        // - isWide has changed
        // - Condition has changed
        // - allowItemClick has changed
        // - forceRefresh changes from false to true
        // Case 1: Entries
        // Need to ignore patientRecords on entries, as they reference the clinical notes ignored above. 
        // Solution: Remove them during comparison, restore those value after comparison.
        const newRelevantPatientEntries = nextProps.patient.getEntriesOtherThanNotes();
        const arrayOfPatientRecords = newRelevantPatientEntries.reduce((accumulator, currentEntry, currentIndex) => { 
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
        // Only update local value when a change occurs on non-note related objects, or a new number of notes.
        const changesToRelevantEntries = !_.isEqual(this._relevantPatientEntries, newRelevantPatientEntries)
        // Update our local entries if updated
        if (changesToRelevantEntries) { 
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
        
        // Case 2: SignedNote count 
        const newSignedNotesCount = nextProps.patient.getNotes().reduce((totalNumberOfSignedNotes, currentNote) => { 
            return totalNumberOfSignedNotes + (currentNote.signed ? 1 : 0);
        }, 0);
        const changesToSignedNotesCount = newSignedNotesCount !== this._signedNotesCount;
        // Update our local count of signed notes if updated
        if (changesToSignedNotesCount) { 
            this._signedNotesCount = newSignedNotesCount; 
        }

        // Case 3: ClinicalEvent 
        const newClinicalEvent = nextProps.clinicalEvent;
        const changesToClinicalEvent = (this._clinicalEvent !== newClinicalEvent)
        if (changesToClinicalEvent) { 
            this._clinicalEvent = newClinicalEvent;
        }

        // Case 4: isWide 
        const newIsWide = nextProps.isWide;
        const changesToIsWide = (this._currentIsWide !== newIsWide);
        if (changesToIsWide) { 
            this._currentIsWide = newIsWide;
        }

        // Case 5: Condition string changes: need string representation
        const newConditionCodeSystem = nextProps.condition.codeSystem;
        const newConditionCode = nextProps.condition.code
        // May not be human readable, but is a unique identifier and that's all we need here.
        const newConditionString = `${newConditionCodeSystem}${newConditionCode}`;
        // const changesToConditionString = false; 
        const changesToConditionString = (this._currentConditionString !== newConditionString)
        if (changesToConditionString) { 
            this._currentConditionString = newConditionString
        }

        // Case 6: allowItemClick
        const newAllowItemClick = nextProps.allowItemClick;
        const changesToAllowItemClick = (this._currentAllowItemClick !== newAllowItemClick);
        if (changesToAllowItemClick) {
            this._currentAllowItemClick = newAllowItemClick;
        }

        // Case 7: forceRefresh
        const changesToForceRefresh = (this.forceRefresh === false && nextProps.forceRefresh === true)
        if (changesToForceRefresh) {
            this.props.stopForceRefresh();
        }
        
        return changesToRelevantEntries 
            || changesToSignedNotesCount 
            || changesToClinicalEvent 
            || changesToIsWide
            || changesToConditionString
            || changesToAllowItemClick
            || changesToForceRefresh;
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
        const { clinicalEvent, patient, condition, allowItemClick, isWide, actions } = this.props;
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
                        allowItemClick={allowItemClick}
                        isWide={isWide}
                        actions={actions}
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
    forceRefresh: PropTypes.bool,
    className: PropTypes.string,
    isWide: PropTypes.bool.isRequired,
    patient: PropTypes.object,
    condition: PropTypes.object,
    summaryMetadata: PropTypes.object,
    allowItemClick: PropTypes.bool,
    onItemClicked: PropTypes.func,
    actions: PropTypes.array
};
