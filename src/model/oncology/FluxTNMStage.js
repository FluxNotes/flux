import M_Stage from '../shr/oncology/M_Stage';
import N_Stage from '../shr/oncology/N_Stage';
import ClinicallyRelevantTime from '../shr/finding/ClinicallyRelevantTime';
import TNMStage from '../shr/oncology/TNMStage';
import T_Stage from '../shr/oncology/T_Stage';
import Lang from 'lodash';
import lookup from '../../lib/tnmstage_lookup.jsx';
import staging from '../../lib/staging.jsx';

// FluxTNMStage class to hide codeableconcepts
class FluxTNMStage {
    constructor(json) {
        this._tnmStage = TNMStage.fromJSON(json);
    }
    /**
     *  Getter for staging
     *  This will return the displayText string from CodeableConcept value
     */
    get stage() {
        return this._tnmStage.value.coding[0].displayText.value;
    }

    /**
     *  Setter for staging
     *  This function is expecting a stage string
     *  The function will lookup the corresponding coding/codesystem and set the TNMStage entry value property
     */
    set stage(stage) {
        this._tnmStage.value = lookup.getStagingCodeableConcept(stage);
    }

    /**
     *  Getter for t_Stage
     *  This will return the displayText string from T_Stage
     */
    get t_Stage() {
        let tStage;
        this._tnmStage._observationComponent.forEach(o => {
            if (o instanceof T_Stage) {
                tStage = o;
            }
        });
        return tStage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for T_Stage
     *  This function expecting a tStage string
     *  This function will lookup the corresponding coding/codesystem and set the T_Stage value on the observationComponent property
     */
    set t_Stage(tStage) {
        let t = new T_Stage();
        t.value = lookup.getTStageCodeableConcept(tStage);
        this._tnmStage._observationComponent.push(t);
        this._calculateStage();
    }
    
    /**
     *  Getter for N_Stage
     *  This will return the displayText string from N_Stage
     */
    get n_Stage() {
        let nStage;
        this._tnmStage._observationComponent.forEach(o => {
            if (o instanceof N_Stage) {
                nStage = o;
            }
        });
        return nStage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for N_Stage
     *  This function expecting a nStage string
     *  This function will lookup the corresponding coding/codesystem and set the N_Stage value on the observationComponent property
     */
    set n_Stage(nStage) {
        let n = new N_Stage();
        n.value = lookup.getNStageCodeableConcept(nStage);
        this._tnmStage._observationComponent.push(n);
        this._calculateStage();
    }

    /**
     *  Getter for M_Stage
     *  This will return the displayText string from M_Stage
     */
    get m_Stage() {
        let mStage;
        this._tnmStage._observationComponent.forEach(o => {
            if (o instanceof M_Stage) {
                mStage = o;
            }
        });
        return mStage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for M_Stage
     *  This function expecting a mStage string
     *  This function will lookup the corresponding coding/codesystem and set the M_Stage value on the observationComponent property
     */
    set m_Stage(mStage) {
        let m = new M_Stage();
        m.value = lookup.getMStageCodeableConcept(mStage);
        this._tnmStage._observationComponent.push(m);
        this._calculateStage();
    }

    /*
     * Getter for clinicallyRelevantTime
     * This will return the value string from _clinicallyRelevantTime
     */
    get clinicallyRelevantTime() {
        if (Lang.isUndefined(this._tnmStage._clinicallyRelevantTime)) return null;
        return this._tnmStage._clinicallyRelevantTime.value;
    }

    /*
     * Setter for clinicallyRelevantTime
     * This function is expecting an clinicallyRelevantTime string
     * This function will create a new ClinicallyRelevantTime object and set the value to clinicallyRelevantTime
     */
    set clinicallyRelevantTime(clinicallyRelevantTime) {
        let t = new ClinicallyRelevantTime();
        t.value = clinicallyRelevantTime;
        this._tnmStage._clinicallyRelevantTime = t;
    }
    
    _calculateStage() {
        const t = this.t_Stage;
        const n = this.n_Stage;
        const m = this.m_Stage;
        // console.log("calculateStage: " + t + " " + n + " " + m);
        if (t.length === 0 || n.length === 0 || m.length === 0) {
            this.stage = '';
            return; // not complete value
        }
        this.stage = staging.breastCancerPrognosticStage(t, n, m);
    }
}

export default FluxTNMStage;