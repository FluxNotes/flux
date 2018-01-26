// import CodeableConcept from '../shr/core/CodeableConcept';
// import M_Stage from '../shr/oncology/M_Stage';
// import N_Stage from '../shr/oncology/N_Stage';
// import OccurrenceTime from '../shr/core/OccurrenceTime';
import TNMStage from '../shr/oncology/TNMStage';
// import T_Stage from '../shr/oncology/T_Stage';
// import Lang from 'lodash';
import lookup from '../../lib/tnmstage_lookup.jsx';
// import staging from '../../lib/staging.jsx';

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
     *  The function will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set stage(stage) {
        this._tnmStage.value = lookup.getStagingCodeableConcept(stage);
    }

    /**
     *  Getter for t_Stage
     *  This will return the displayText string from _t_Stage
     */
    // get t_Stage() {
    //     return this._tnmStage.t_Stage.value.coding[0].displayText.value;
    // }

    // /*
    //  *  Setter for t_Stage
    //  *  This function expecting a tStage string
    //  *  This function will lookup the corresponding coding/codesystem and set the _t_Stage property
    //  */
    // set t_Stage(tStage) {
    //     let t = new T_Stage();
    //     t.value = lookup.getTStageCodeableConcept(tStage);
    //     this._t_Stage = t;
    //     this._calculateStage();
    // }
    
    // /**
    //  *  Getter for n_Stage
    //  *  This will return the displayText string from _n_Stage
    //  */
    // get n_Stage() {
    //     return this._n_Stage.value.coding[0].displayText.value;
    // }

    // /*
    //  *  Setter for n_Stage
    //  *  This function expecting a nStage string
    //  *  This function will lookup the corresponding coding/codesystem and set the _n_Stage property
    //  */
    // set n_Stage(nStage) {
    //     let n = new N_Stage();
    //     n.value = lookup.getNStageCodeableConcept(nStage);
    //     this._n_Stage = n;
    //     this._calculateStage();
    // }

    // /**
    //  *  Getter for m_Stage
    //  *  This will return the displayText string from _m_Stage
    //  */
    // get m_Stage() {
    //     return this._m_Stage.value.coding[0].displayText.value;
    // }

    // /*
    //  *  Setter for m_Stage
    //  *  This function expecting a mStage string
    //  *  This function will lookup the corresponding coding/codesystem and set the _m_Stage property
    //  */
    // set m_Stage(mStage) {
    //     let m = new M_Stage();
    //     m.value = lookup.getMStageCodeableConcept(mStage);
    //     this._m_Stage = m;
    //     this._calculateStage();
    // }

    // /*
    //  * Getter for status
    //  * This will return the value string from _status
    //  */
    // get status() {
    //     if (this._status) {
    //         return this._status.value;
    //     } else {
    //         return "";
    //     }
    // }

    // /*
    //  * Setter for status
    //  * This function is expecting a status string
    //  * This function will create a new Status object and set the value to status
    //  */
    // set status(status) {
    //     let s = new Status();
    //     s.value = status;
    //     this._status = s;
    // }

    // /*
    //  * Getter for occurrenceTime
    //  * This will return the value string from _occurrenceTime
    //  */
    // get occurrenceTime() {
    //     if (Lang.isUndefined(this._occurrenceTime)) return null;
    //     return this._occurrenceTime.value;
    // }

    // /*
    //  * Setter for occurrenceTime
    //  * This function is expecting an occurrenceTime string
    //  * This function will create a new OccurrenceTime object and set the value to occurrenceTime
    //  */
    // set occurrenceTime(occurrenceTime) {
    //     let o = new OccurrenceTime();
    //     o.value = occurrenceTime;
    //     this._occurrenceTime = o;
    // }
    
    // _calculateStage() {
    //     const t = this.t_Stage;
    //     const n = this.n_Stage;
    //     const m = this.m_Stage;
    //     //console.log("calculateStage: " + t + " " + n + " " + m);
    //     if (t.length === 0 || n.length === 0 || m.length === 0) {
    //         this.stage = '';
    //         return; // not complete value
    //     }
    //     this.stage = staging.breastCancerPrognosticStage(t, n, m);        
    // }
}

export default FluxTNMStage;