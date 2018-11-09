import M_Stage from '../../shr/oncology/M_Stage';
import N_Stage from '../../shr/oncology/N_Stage';
import ClinicallyRelevantTime from '../../shr/finding/ClinicallyRelevantTime';
import TNMStage from '../../shr/oncology/TNMStage';
import T_Stage from '../../shr/oncology/T_Stage';
import Entry from '../../shr/base/Entry';
import EntryType from '../../shr/base/EntryType';
import FluxObservation from '../finding/FluxObservation';
import FluxMitoticRate from './FluxMitoticRate';
import lookup from '../../../lib/tnmstage_lookup.jsx';
import staging from '../../../lib/staging.jsx';
import Lang from 'lodash';

// FluxTNMStage class to hide codeableconcepts
class FluxTNMStage extends FluxObservation {
    constructor(json) {
        super();
        this._entry = this._observation = TNMStage.fromJSON(json);
        if (!this._observation.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/oncology/TNMStage';
            this._observation.entryInfo = entry;
            this._observation.observationComponent = [];
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

    /**
     *  Getter for t_Stage
     *  This will return the displayText string from T_Stage
     */
    get t_Stage() {
        const tStage = this._observation._observationComponent.find(o => {
            return o instanceof T_Stage;
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
        let t = new T_Stage();
        t.value = lookup.getTStageCodeableConcept(tStage);
        const tIndex = this._observation.observationComponent.findIndex((o) => {
            return o instanceof T_Stage;
        });
        if (tIndex >= 0) {
            this._observation.observationComponent[tIndex] = t;
        } else {
            this._observation.observationComponent.push(t);
        }
        this._calculateStage();
    }
    
    /**
     *  Getter for N_Stage
     *  This will return the displayText string from N_Stage
     */
    get n_Stage() {
        const nStage = this._observation._observationComponent.find(o => {
            return o instanceof N_Stage
        });
        if (!nStage) return null;
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
        const nIndex = this._observation.observationComponent.findIndex((o) => {
            return o instanceof N_Stage;
        });
        if (nIndex >= 0) {
            this._observation.observationComponent[nIndex] = n;
        } else {
            this._observation.observationComponent.push(n);
        }
        this._calculateStage();
    }

    /**
     *  Getter for M_Stage
     *  This will return the displayText string from M_Stage
     */
    get m_Stage() {
        const mStage = this._observation._observationComponent.find(o => {
            return o instanceof M_Stage;
        });
        if (!mStage) return null;
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
        const mIndex = this._observation.observationComponent.findIndex((o) => {
            return o instanceof M_Stage;
        });
        if (mIndex >= 0) {
            this._observation.observationComponent[mIndex] = m;
        } else {
            this._observation.observationComponent.push(m);
        }
        this._calculateStage();
    }

    get mitoticRate() {
        const mitoticRate = this._observation._observationComponent.find(o => {
            return o instanceof FluxMitoticRate;
        });
        if (!mitoticRate) return null;
        return mitoticRate.value;
    }

    /*
     * Setter for clinicallyRelevantTime
     * This function is expecting an clinicallyRelevantTime string
     * This function will create a new ClinicallyRelevantTime object and set the value to clinicallyRelevantTime
     */
    set clinicallyRelevantTime(clinicallyRelevantTime) {
        let t = new ClinicallyRelevantTime();
        t.value = clinicallyRelevantTime;
        this._observation._clinicallyRelevantTime = t;
    }

    get clinicallyRelevantTime() {
        return this._observation._clinicallyRelevantTime.value;
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