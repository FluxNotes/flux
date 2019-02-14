import TNMClinicalPrimaryTumorClassification from '../oncocore/TNMClinicalPrimaryTumorClassification';
import TNMClinicalRegionalNodesClassification from '../oncocore/TNMClinicalRegionalNodesClassification';
import TNMClinicalDistantMetastasesClassification from '../oncocore/TNMClinicalDistantMetastasesClassification';
// import TNMPathologicPrimaryTumorClassification from '../oncocore/TNMPathologicPrimaryTumorClassification';
// import TNMPathologicRegionalNodesClassification from '../oncocore/TNMPathologicRegionalNodesClassification';
// import TNMPathologicDistantMetastasesClassification from '../oncocore/TNMPathologicDistantMetastasesClassification';
import RelevantTime from '../shr/base/RelevantTime';
import TNMClinicalStageGroup from '../oncocore/TNMClinicalStageGroup';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import PanelMembers from '../shr/base/PanelMembers';
import FluxObservation from '../base/FluxObservation';
import FluxMitoticRate from './FluxMitoticRate';
import lookup from '../../lib/tnmstage_lookup.jsx';
import staging from '../../lib/staging.jsx';
import Lang from 'lodash';
import FindingResult from '../shr/base/FindingResult';
import FluxTNMClinicalPrimaryTumorClassification from '../oncocore/FluxTNMClinicalPrimaryTumorClassification';
import FluxTNMClinicalDistantMetastasesClassification from '../oncocore/FluxTNMClinicalDistantMetastasesClassification';
import FluxTNMClinicalRegionalNodesClassification from '../oncocore/FluxTNMClinicalRegionalNodesClassification';

// FluxTNMStage class to hide codeableconcepts
class FluxTNMStage extends FluxObservation {
    constructor(json, patientRecord) {
        super();
        this._entry = this._observation = TNMClinicalStageGroup.fromJSON(json);
        if (!this._observation.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalStageGroup';
            this._observation.entryInfo = entry;
            this._observation.panelMembers = new PanelMembers();
            this._observation.panelMembers.observation = [];
        }
        this._patientRecord = patientRecord;
    }

    /**
     *  Getter for staging
     *  This will return the displayText string from CodeableConcept value
     */
    get stage() {
        if (!this._observation.findingResult || !this._observation.findingResult.value) { 
            return null;
        } else { 
            return this._observation.findingResult.value.coding[0].displayText.value;
        }
    }

    /**
     *  Setter for staging
     *  This function is expecting a stage string
     *  The function will lookup the corresponding coding/codesystem and set the TNMStage entry value property
     */
    set stage(stage) {
        this._observation.findingResult = new FindingResult();
        this._observation.findingResult.value = lookup.getStagingCodeableConcept(stage);
    }

    // isPathologic() {
    //     this._observation.panelMembers.observation.forEach((o) => {
    //         if (o instanceof TNMPathologicPrimaryTumorClassification || o instanceof TNMPathologicRegionalNodesClassification || o instanceof TNMPathologicDistantMetastasesClassification) return true;
    //     });
    //     return false;
    // }

    /**
     *  Getter for t_Stage
     *  This will return the displayText string from T_Stage
     */
    get t_Stage() {
        const tReference = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalPrimaryTumorClassification);
        if (!tReference) return null;
        return this._patientRecord.getEntryFromReference(tReference).value;
    }

    /*
     *  Setter for T_Stage
     *  This function expecting a tStage string
     *  This function will lookup the corresponding coding/codesystem and set the T_Stage value on the observationComponent property
     */
    set t_Stage(tStage) {
        if (!tStage) {
            const tReference = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalPrimaryTumorClassification);
            if (tReference) this._patientRecord.removeEntryFromPatient(this._patientRecord.getEntryFromReference(tReference));
        } else {
            const t = new FluxTNMClinicalPrimaryTumorClassification();
            t.value = lookup.getTStageCodeableConcept(tStage);
            this._patientRecord.addEntryToPatient(t);
            this._observation.panelMembers.observation.push(this._patientRecord.createEntryReferenceTo(t));
        }
        this._calculateStage();
    }
    
    /**
     *  Getter for N_Stage
     *  This will return the displayText string from N_Stage
     */
    get n_Stage() {
        const nReference = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalRegionalNodesClassification);
        if (!nReference) return null;
        return this._patientRecord.getEntryFromReference(nReference).value;
    }

    /*
     *  Setter for N_Stage
     *  This function expecting a nStage string
     *  This function will lookup the corresponding coding/codesystem and set the N_Stage value on the panelMembers property
     */
    set n_Stage(nStage) {
        if (!nStage) {
            const nReference = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalRegionalNodesClassification);
            if (nReference) this._patientRecord.removeEntryFromPatient(this._patientRecord.getEntryFromReference(nReference));
        } else {
            const n = new FluxTNMClinicalRegionalNodesClassification();
            n.value = lookup.getNStageCodeableConcept(nStage);
            this._patientRecord.addEntryToPatient(n);
            this._observation.panelMembers.observation.push(this._patientRecord.createEntryReferenceTo(n));
        }
        this._calculateStage();
    }

    /**
     *  Getter for M_Stage
     *  This will return the displayText string from M_Stage
     */
    get m_Stage() {
        const mReference = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalDistantMetastasesClassification);
        if (!mReference) return null;
        return this._patientRecord.getEntryFromReference(mReference).value;
    }

    /*
     *  Setter for M_Stage
     *  This function expecting a mStage string
     *  This function will lookup the corresponding coding/codesystem and set the M_Stage value on the panelMembers property
     */
    set m_Stage(mStage) {
        if (!mStage) {
            const mReference = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxTNMClinicalDistantMetastasesClassification);
            if (mReference) this._patientRecord.removeEntryFromPatient(this._patientRecord.getEntryFromReference(mReference));
        } else {
            const m = new FluxTNMClinicalDistantMetastasesClassification();
            m.value = lookup.getMStageCodeableConcept(mStage);
            this._patientRecord.addEntryToPatient(m);
            this._observation.panelMembers.observation.push(this._patientRecord.createEntryReferenceTo(m));
        }
        this._calculateStage();
    }

    get mitoticRate() {
        const mitoticRate = this._observation.panelMembers.observation.find(o => this._patientRecord.getEntryFromReference(o) instanceof FluxMitoticRate);
        if (!mitoticRate) return null;
        return mitoticRate.value;
    }

    /*
     * Setter for relevantTime
     * This function is expecting an RelevantTime string
     * This function will create a new RelevantTime object and set the value to relevantTime
     */
    set relevantTime(relevantTime) {
        let t = new RelevantTime();
        t.value = relevantTime;
        this._observation._relevantTime = t;
    }

    get relevantTime() {
        return this._observation._relevantTime.value;
    }
    
    _calculateStage() {
        const t = this.t_Stage;
        const n = this.n_Stage;
        const m = this.m_Stage;

        this.stage = staging.breastCancerPrognosticStage(t, n, m);
    }

    get author() {
        if (this._observation.author) {
            return this._observation.author.value;
        } else {
            return null;
        }
    }

    get informant() {
        if (this._observation.informant) {
            return this._observation.informant.value;
        } else {
            return null;
        }
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxTNMStage;