import TNMClinicalPrimaryTumorClassification from '../oncocore/TNMClinicalPrimaryTumorClassification';
import TNMClinicalRegionalNodesClassification from '../oncocore/TNMClinicalRegionalNodesClassification';
import TNMClinicalDistantMetastasesClassification from '../oncocore/TNMClinicalDistantMetastasesClassification';
// import TNMPathologicPrimaryTumorClassification from '../oncocore/TNMPathologicPrimaryTumorClassification';
// import TNMPathologicRegionalNodesClassification from '../oncocore/TNMPathologicRegionalNodesClassification';
// import TNMPathologicDistantMetastasesClassification from '../oncocore/TNMPathologicDistantMetastasesClassification';
import RelevantTime from '../shr/base/RelevantTime';
import CancerStagePanel from '../oncocore/CancerStagePanel';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import PanelMembers from '../shr/base/PanelMembers';
import FluxObservation from '../base/FluxObservation';
import FluxMitoticRate from './FluxMitoticRate';
import lookup from '../../lib/tnmstage_lookup.jsx';
import staging from '../../lib/staging.jsx';
import Lang from 'lodash';

// FluxTNMStage class to hide codeableconcepts
class FluxTNMStage extends FluxObservation {
    constructor(json) {
        super();
        this._entry = this._observation = CancerStagePanel.fromJSON(json);
        if (!this._observation.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/CancerStageInformation';
            this._observation.entryInfo = entry;
            this._observation.panelMembers = new PanelMembers();
            this._observation.panelMembers.observation = [];
        }
    }

    /**
     *  Getter for staging
     *  This will return the displayText string from CodeableConcept value
     */
    get stage() {
        if (Lang.isEmpty(this._observation.value))  { 
            return null;
        } else { 
            return this._observation.value.coding[0].displayText.value;
        }
    }

    /**
     *  Setter for staging
     *  This function is expecting a stage string
     *  The function will lookup the corresponding coding/codesystem and set the TNMStage entry value property
     */
    set stage(stage) {
        this._observation.value = lookup.getStagingCodeableConcept(stage);
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
        const tStage = this._observation.panelMembers.observation.find(o => {
            return o instanceof TNMClinicalPrimaryTumorClassification;
        });
        if (!tStage) return null;
        return tStage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for T_Stage
     *  This function expecting a tStage string
     *  This function will lookup the corresponding coding/codesystem and set the T_Stage value on the observationComponent property
     */
    set t_Stage(tStage) {
        let t = new TNMClinicalPrimaryTumorClassification();
        t.value = lookup.getTStageCodeableConcept(tStage);
        const tIndex = this._observation.panelMembers.observation.findIndex((o) => {
            return o instanceof TNMClinicalPrimaryTumorClassification;
        });
        if (tIndex >= 0) {
            this._observation.panelMembers.observation[tIndex] = t;
        } else {
            this._observation.panelMembers.observation.push(t);
        }
        this._calculateStage();
    }
    
    /**
     *  Getter for N_Stage
     *  This will return the displayText string from N_Stage
     */
    get n_Stage() {
        const nStage = this._observation.panelMembers.observation.find(o => {
            return o instanceof TNMClinicalRegionalNodesClassification
        });
        if (!nStage) return null;
        return nStage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for N_Stage
     *  This function expecting a nStage string
     *  This function will lookup the corresponding coding/codesystem and set the N_Stage value on the panelMembers property
     */
    set n_Stage(nStage) {
        let n = new TNMClinicalRegionalNodesClassification();
        n.value = lookup.getNStageCodeableConcept(nStage);
        const nIndex = this._observation.panelMembers.observation.findIndex((o) => {
            return o instanceof TNMClinicalRegionalNodesClassification;
        });
        if (nIndex >= 0) {
            this._observation.panelMembers.observation[nIndex] = n;
        } else {
            this._observation.panelMembers.observation.push(n);
        }
        this._calculateStage();
    }

    /**
     *  Getter for M_Stage
     *  This will return the displayText string from M_Stage
     */
    get m_Stage() {
        const mStage = this._observation._panelMembers.observation.find(o => {
            return o instanceof TNMClinicalDistantMetastasesClassification;
        });
        if (!mStage) return null;
        return mStage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for M_Stage
     *  This function expecting a mStage string
     *  This function will lookup the corresponding coding/codesystem and set the M_Stage value on the panelMembers property
     */
    set m_Stage(mStage) {
        let m = new TNMClinicalDistantMetastasesClassification();
        m.value = lookup.getMStageCodeableConcept(mStage);
        const mIndex = this._observation.panelMembers.observation.findIndex((o) => {
            return o instanceof TNMClinicalDistantMetastasesClassification;
        });
        if (mIndex >= 0) {
            this._observation.panelMembers.observation[mIndex] = m;
        } else {
            this._observation.panelMembers.observation.push(m);
        }
        this._calculateStage();
    }

    get mitoticRate() {
        const mitoticRate = this._observation.panelMembers.observation.find(o => {
            return o instanceof FluxMitoticRate;
        });
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