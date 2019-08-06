import RelevantTime from '../../../shr/core/RelevantTime';
import * as lookup from '../../../../lib/tnmstage_lookup.jsx';
import * as staging from '../../../../lib/staging.jsx';
import DataValue from '../../../shr/core/DataValue';
import FluxEntry from '../../base/FluxEntry';
import Reference from '../../../Reference';
import FluxCancerStageCategory from './FluxCancerStageCategory';
import FluxTNMClinicalRegionalNodesCategory from './FluxTNMClinicalRegionalNodesCategory';
import FluxTNMClinicalDistantMetastasesCategory from './FluxTNMClinicalDistantMetastasesCategory';
import FluxTNMClinicalPrimaryTumorCategory from './FluxTNMClinicalPrimaryTumorCategory';
import PrimaryCancerCondition from '../../../onco/core/PrimaryCancerCondition';

export default class FluxTNMStageGroup extends FluxEntry {
    get entryInfo() {
        return this._tnmStageGroup.entryInfo;
    }

    get metadata() {
        return this._tnmStageGroup.metadata;
    }

    set metadata(metadata) {
        this._tnmStageGroup.metadata = metadata;
    }

    get stageComponents() {
        if (!this._tnmStageGroup.panelMembers 
            || !this._tnmStageGroup.panelMembers.observation) {
            return '';
        }
        const stageComponentsAsString = this._tnmStageGroup.panelMembers.observation.reduce((accumulatedString, o) => { 
            const entry = this._patientRecord.getEntryFromReference(o)
            if (entry instanceof FluxCancerStageCategory) { 
                accumulatedString += entry.value
            }
            return accumulatedString
        }, '');
        return `(${stageComponentsAsString})`;
    }

    /**
     *  Getter for staging
     *  This will return the displayText string from CodeableConcept value
     */
    get stage() {
        if (!this._tnmStageGroup.dataValue || !this._tnmStageGroup.dataValue.value) { 
            return null;
        } else { 
            return this._tnmStageGroup.dataValue.value.coding[0].displayText.value;
        }
    }

    /**
     *  Setter for staging
     *  This function is expecting a stage string
     *  The function will lookup the corresponding coding/codesystem and set the TNMStage entry value property
     */
    set stage(stage) {
        this._tnmStageGroup.dataValue = new DataValue();
        this._tnmStageGroup.dataValue.value = lookup.getStagingCodeableConcept(stage);
    }

    /**
     *  Getter for t_Stage
     *  This will return the displayText string from T_Stage
     */
    get t_Stage() {
        if (!this._tnmStageGroup
            || !this._tnmStageGroup.panelMembers
            || !this._tnmStageGroup.panelMembers.observation) {
            return null;
        }
        const tReference = this._tnmStageGroup.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalPrimaryTumorCategory);
        if (!tReference) return null;
        return this._patientRecord.getEntryFromReference(tReference).value;
    }

    /*
     *  Setter for T_Stage
     *  This function expecting a tStage string
     *  This function will lookup the corresponding coding/codesystem and set the T_Stage value on the observationComponent property
     */
    set t_Stage(tStage) {
        const tReference = this._tnmStageGroup.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalPrimaryTumorCategory);
        const tEntry = tReference ? this._patientRecord.getEntryFromReference(tReference) : null;
        if (!tStage) {
            if (tReference) this._patientRecord.removeEntryFromPatient(tEntry);
            const tIndex = this._tnmStageGroup.panelMembers.observation.findIndex(o => o === tReference);
            this._tnmStageGroup.panelMembers.observation.splice(tIndex, 1);
        } else {
            if (tEntry) {
                tEntry.value = lookup.getTStageCodeableConcept(tStage);
            } else {
                const t = new FluxTNMClinicalPrimaryTumorCategory();
                t.value = lookup.getTStageCodeableConcept(tStage);
                this._patientRecord.addEntryToPatient(t);
                this._tnmStageGroup.panelMembers.observation.push(this._patientRecord.createEntryReferenceTo(t));
            }
        }
        this._calculateStage();
    }
    
    /**
     *  Getter for N_Stage
     *  This will return the displayText string from N_Stage
     */
    get n_Stage() {
        if (!this._tnmStageGroup
            || !this._tnmStageGroup.panelMembers
            || !this._tnmStageGroup.panelMembers.observation) {
            return null;
        }
        const nReference = this._tnmStageGroup.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalRegionalNodesCategory);
        if (!nReference) return null;
        return this._patientRecord.getEntryFromReference(nReference).value;
    }

    /*
     *  Setter for N_Stage
     *  This function expecting a nStage string
     *  This function will lookup the corresponding coding/codesystem and set the N_Stage value on the panelMembers property
     */
    set n_Stage(nStage) {
        const nReference = this._tnmStageGroup.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalRegionalNodesCategory);
        const nEntry = nReference ? this._patientRecord.getEntryFromReference(nReference) : null;
        if (!nStage) {
            if (nReference) {
                this._patientRecord.removeEntryFromPatient(nEntry);
                const nIndex = this._tnmStageGroup.panelMembers.observation.findIndex(o => o === nReference);
                this._tnmStageGroup.panelMembers.observation.splice(nIndex, 1);
            }
        } else {
            if (nEntry) {
                nEntry.value = lookup.getNStageCodeableConcept(nStage);
            } else {
                const n = new FluxTNMClinicalRegionalNodesCategory();
                n.value = lookup.getNStageCodeableConcept(nStage);
                this._patientRecord.addEntryToPatient(n);
                this._tnmStageGroup.panelMembers.observation.push(this._patientRecord.createEntryReferenceTo(n));
            }
        }
        this._calculateStage();
    }

    /**
     *  Getter for M_Stage
     *  This will return the displayText string from M_Stage
     */
    get m_Stage() {
        if (!this._tnmStageGroup
            || !this._tnmStageGroup.panelMembers
            || !this._tnmStageGroup.panelMembers.observation) {
            return null;
        }
        const mReference = this._tnmStageGroup.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalDistantMetastasesCategory);
        if (!mReference) return null;
        return this._patientRecord.getEntryFromReference(mReference).value;
    }

    /*
     *  Setter for M_Stage
     *  This function expecting a mStage string
     *  This function will lookup the corresponding coding/codesystem and set the M_Stage value on the panelMembers property
     */
    set m_Stage(mStage) {
        const mReference = this._tnmStageGroup.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalDistantMetastasesCategory);
        const mEntry = mReference ? this._patientRecord.getEntryFromReference(mReference) : null;
        if (!mStage) {
            if (mEntry) this._patientRecord.removeEntryFromPatient(mEntry);
            const mIndex = this._tnmStageGroup.panelMembers.observation.findIndex(o => o === mReference);
            this._tnmStageGroup.panelMembers.observation.splice(mIndex, 1);
        } else {
            if (mEntry) {
                mEntry.value = lookup.getMStageCodeableConcept(mStage);
            } else {
                const m = new FluxTNMClinicalDistantMetastasesCategory();
                m.value = lookup.getMStageCodeableConcept(mStage);
                this._patientRecord.addEntryToPatient(m);
                this._tnmStageGroup.panelMembers.observation.push(this._patientRecord.createEntryReferenceTo(m));
            }
        }
        this._calculateStage();
    }

    /*
     * Setter for relevantTime
     * This function is expecting an RelevantTime string
     * This function will create a new RelevantTime object and set the value to relevantTime
     */
    set relevantTime(relevantTime) {
        let t = new RelevantTime();
        t.value = relevantTime;
        this._tnmStageGroup._relevantTime = t;
    }

    get relevantTime() {
        return this._tnmStageGroup._relevantTime.value;
    }
    
    _calculateStage() {
        const t = this.t_Stage;
        const n = this.n_Stage;
        const m = this.m_Stage;

        this.stage = staging.breastCancerPrognosticStage(t, n, m);
    }

    get primaryCancerCondition() {
        if (this._tnmStageGroup.primaryCancerCondition) {
            return this._tnmStageGroup.primaryCancerCondition;
        }
        return null;
    }

    set primaryCancerCondition(val) {
        this._tnmStageGroup.primaryCancerCondition = val;
    }

    setPrimaryCancerCondition(obj) {
        if (!obj) {
            this.primaryCancerCondition = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let pcc = new PrimaryCancerCondition();
            pcc.value = ref;
            this.primaryCancerCondition = pcc;
        }
    }

    get author() {
        if (this._tnmStageGroup.author) {
            return this._tnmStageGroup.author.value;
        } else {
            return null;
        }
    }

    toJSON() {
        return this._tnmStageGroup.toJSON();
    }
};
