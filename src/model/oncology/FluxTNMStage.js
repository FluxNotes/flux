import TNMStage from '../shr/oncology/TNMStage';
import T_Stage from '../shr/oncology/T_Stage';
import N_Stage from '../shr/oncology/N_Stage';
import M_Stage from '../shr/oncology/M_Stage';
import SpecificType from '../shr/core/SpecificType';
import Status from '../shr/base/Status';
import OccurrenceTime from '../shr/core/OccurrenceTime';
import lookup from '../../lib/tnmstage_lookup.jsx';


// FluxTNMStage class to hide codeableconcepts
class FluxTNMStage extends TNMStage {
    constructor(json) {
        super(json);

        if(json) {

        } else {
            this._specificType = new SpecificType({"value":{"coding": [{"value": "21908-9", "codeSystem": {value: "http://loinc.org"}, "displayText": "Stage"}]}});
        }
    }
    /**
     *  Getter for staging
     *  This will return the displayText string from CodeableConcept value
     */
    get staging() {
        return this._codeableConcept.coding[0].displayText.value;
    }

    /**
     *  Setter for staging
     *  This function is expecting a stage string
     *  The function will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set staging(stage) {
        this._codeableConcept = lookup.getStagingCodeableConcept(stage);
    }

    /**
     *  Getter for t_Stage
     *  This will return the displayText string from _t_Stage
     */
    get t_Stage() {
        return this._t_Stage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for t_Stage
     *  This function expecting a tStage string
     *  This function will lookup the corresponding coding/codesystem and set the _t_Stage property
     */
    set t_Stage(tStage) {
        let t = new T_Stage();
        t.value = lookup.getTStageCodeableConcept(tStage);
        this._t_Stage = t;
    }
    
    /**
     *  Getter for n_Stage
     *  This will return the displayText string from _n_Stage
     */
    get n_Stage() {
        return this._n_Stage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for n_Stage
     *  This function expecting a nStage string
     *  This function will lookup the corresponding coding/codesystem and set the _n_Stage property
     */
    set n_Stage(nStage) {
        let n = new N_Stage();
        n.value = lookup.getNStageCodeableConcept(nStage);
        this._n_Stage = n;
    }

    /**
     *  Getter for m_Stage
     *  This will return the displayText string from _m_Stage
     */
    get m_Stage() {
        return this._m_Stage.value.coding[0].displayText.value;
    }

    /*
     *  Setter for m_Stage
     *  This function expecting a mStage string
     *  This function will lookup the corresponding coding/codesystem and set the _m_Stage property
     */
    set m_Stage(mStage) {
        let m = new M_Stage();
        m.value = lookup.getMStageCodeableConcept(mStage);
        this._m_Stage = m;
    }

    /*
     * Getter for status
     * This will return the value string from _status
     */
    get status() {
        return this._status.value;
    }

    /*
     * Setter for status
     * This function is expecting a status string
     * This function will create a new Status object and set the value to status
     */
    set status(status) {
        let s = new Status();
        s.value = status;
        this._status = s;
    }

    /*
     * Getter for occurrenceTime
     * This will return the value string from _occurrenceTime
     */
    get occurrenceTime() {
        return this._occurrenceTime.value;
    }

    /*
     * Setter for occurrenceTime
     * This function is expecting an occurrenceTime string
     * This function will create a new OccurrenceTime object and set the value to occurrenceTime
     */
    set occurrenceTime(occurrenceTime) {
        let o = new OccurrenceTime();
        o.value = occurrenceTime;
        this._occurrenceTime = o;
    }
}

export default FluxTNMStage;