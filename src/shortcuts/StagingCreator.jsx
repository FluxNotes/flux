//import React from 'react';
import CreatorShortcut from './CreatorShortcut';
import StagingTCreator from './StagingTCreator';
import StagingNCreator from './StagingNCreator';
import StagingMCreator from './StagingMCreator';
import StageInserter from './StageInserter';
import Lang from 'lodash';
import moment from 'moment';
import lookup from '../lib/tnmstage_lookup';
import BreastCancer from '../model/shr/oncology/BreastCancer';
import FluxTNMStage from '../model/oncology/FluxTNMStage';
import staging from '../lib/staging.jsx';

class StagingCreator extends CreatorShortcut {
    // onUpdate is passed from React components that need to be notified when the staging value(s) change
    // staging is optional and specifies an existing staging value being edited. Not used in no-patient mode
	// staging is of "type" SHR JSON TNMStage
    constructor(onUpdate, staging) {
        super();
        if (Lang.isUndefined(staging)) { 
            const today = new moment().format("D MMM YYYY");
            this.staging = new FluxTNMStage();
            this.staging.staging = '';
            this.staging.status = "unknown";
            this.staging.occurrenceTime = today;
            this.staging.t_Stage = '';
            this.staging.n_Stage = '';
            this.staging.m_Stage = '';
			this.isStagingNew = true;
        } else {
			this.staging = staging; //Lang.clone(staging);
			this.isStagingNew = false;
		}
		this.setValueObject(this.staging);
        this.onUpdate = onUpdate;
		this.setAttributeValue = this.setAttributeValue.bind(this);
    }
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.parentContext = contextManager.getActiveContextOfType("@condition");
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
	}

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.removeChild(this);
        }
        return result;
    }

    getShortcutType() { 
        return "#staging";
    }
	
    /* 
     * Translate staging Staging information into a string 
     */
    getTumorSizeString(curStaging) { 
        let tString;
        if (curStaging.t_Stage.length === 0) { 
            tString = `?`;
        } else { 
            tString = `${curStaging.t_Stage}`
        }
        return tString;
    }

    /* 
     * Translate staging node size into a string 
     */
    getNodeSizeString(curStaging) { 
        let nString;
        if (curStaging.nStage.length === 0) { 
            nString = `?`;
        } else { 
            nString = `${curStaging.nStage}`
        }
        return nString;
    }

    /* 
     * Translate staging metastasis into a string 
     */
    getMetastasisString(curStaging) { 
        let mString = ``;
        if (curStaging.mStage.length === 0) { 
            mString = `?`;
        } else { 
            mString = `${curStaging.mStage}`
        }
        return mString;
    }
    
    /* 
     * Translate the current shortcut into a string
     */
    getAsString() { 
		const tString = this.getTumorSizeString(this.staging);
		const nString = this.getNodeSizeString(this.staging);
		const mString = this.getMetastasisString(this.staging);
		if (tString === '?' && nString === '?' && mString === '?') {
			return "#staging";
		}
		return `#staging #${tString} #${nString} #${mString}`;
    }

    getFormSpec() {
        return  {
                    tagName: 'StagingForm',
                    props:  {   
                                updateValue: this.setAttributeValue,
                                staging: this.staging,
                                ...this.configuration
                            },
                    children: []
                };
    }

	setAttributeValue(name, value, publishChanges = true) {
		if (name === "T") {
            this.staging.t_Stage = value;
		} else if (name === "N") {
            this.staging.n_Stage = value;
		} else if (name === "M") {
            this.staging.m_Stage = value;
		} else {
			console.error("Error: Unexpected value selected in staging dropdown: " + name);
			return;
		}
        if (this.isContext()) this.updateContextStatus();
		if (this.onUpdate) this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}

	getAttributeValue(name) {
		if (name === "T") {
			if (!this.staging.t_Stage) return "";
            return this.staging.t_Stage;
		} else if (name === "N") {
			if (!this.staging.n_Stage) return "";
			return this.staging.n_Stage;
		} else if (name === "M") {
			if (!this.staging.m_Stage) return "";
			return this.staging.m_Stage;
		} else if (name === "stage") {
			return this.staging.staging;
		} else {
			console.error("Error: Unexpected value selected in staging dropdown: " + name);
			return null;
		}
	}

	/* this is not correct right now. it should creating new staging with an associated date (occurrenceTime)
	   unless it's an update to one it already created.
	   also it should be finding the condition based on context in the note not just used the last breast cancer
	   one
	 */
	updatePatient(patient, contextManager) {
        const t = this.getAttributeValue("T");
        const n = this.getAttributeValue("N");
        const m = this.getAttributeValue("M");
        if (t.length === 0 || n.length === 0 || m.length === 0) {
            if(!Lang.isNull(this.staging.staging)) {
                this.staging.staging = '';
            }
            return; // not complete value
        }
        const stage = staging.breastCancerPrognosticStage(t, n, m);
        this.staging.staging = stage;
		let condition = this.parentContext.getValueObject();
		if (this.isStagingNew) {
            condition.observation.push(this.staging);
			//patient.addObservationToCondition(this.staging, condition);
			this.isStagingNew = false;
		}
	}

    static validateInContext(context) {
        return context.getValueObject() instanceof BreastCancer;
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeWithValueOfTypeActive("@condition", "http://standardhealthrecord.org/oncology/BreastCancer")) {
			errors.push("#staging invalid without a breast cancer condition. Use @condition to add the breast cancer condition to your narrative.");
		}
		return errors;
	}
	
	getValidChildShortcuts() {
		let result = [];
		if (this.getAttributeValue("T").length === 0) result.push(StagingTCreator);
		if (this.getAttributeValue("N").length === 0) result.push(StagingNCreator);
		if (this.getAttributeValue("M").length === 0) result.push(StagingMCreator);
		if (this.staging.staging && 
            this.staging.staging.length > 0) result.push(StageInserter);
		return result;
	}

	isContext() {
		return true;
	}
	getLabel() {
		return this.getShortcutType();
	}
	static getStringTriggers() {
		return [{ name: "#staging", description: lookup.getDescription("TNMStage")}];
	}
    
    static getDescription() {
        return lookup.getDescription('TNMStage')
    }
}

export default StagingCreator;