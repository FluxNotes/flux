import React from 'react';
import CreatorShortcut from './CreatorShortcut';
import StagingTCreator from './StagingTCreator';
import StagingNCreator from './StagingNCreator';
import StagingMCreator from './StagingMCreator';
import StageInserter from './StageInserter';
import StagingForm from '../forms/StagingForm';
import Patient from '../patient/Patient';
import Lang from 'lodash'

class StagingCreator extends CreatorShortcut {
    // onUpdate is passed from React components that need to be notified when the staging value(s) change
    // staging is optional and specifies an existing staging value being edited. Not used in no-patient mode
	// staging is of "type" SHR JSON TNMStage
    constructor(onUpdate, staging) {
        super();
        if (Lang.isUndefined(staging)) { 
			this.staging = Patient.createNewTNMStageObservation();
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
	}

    getShortcutType() { 
        return "#staging";
    }
	
    /* 
     * Translate staging Staging information into a string 
     */
    getTumorSizeString(curStaging) { 
        let tString;
        if (curStaging.tStage.coding.displayText.length === 0) { 
            tString = `?`;
        } else { 
            tString = `${curStaging.tStage.coding.displayText}`
        }
        return tString;
    }

    /* 
     * Translate staging node size into a string 
     */
    getNodeSizeString(curStaging) { 
        let nString;
        if (curStaging.nStage.coding.displayText.length === 0) { 
            nString = `?`;
        } else { 
            nString = `${curStaging.nStage.coding.displayText}`
        }
        return nString;
    }

    /* 
     * Translate staging metastasis into a string 
     */
    getMetastasisString(curStaging) { 
        let mString = ``;
        if (curStaging.mStage.coding.displayText.length === 0) { 
            mString = `?`;
        } else { 
            mString = `${curStaging.mStage.coding.displayText}`
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
    
    /* 
     * Return the form for staging
     */
    getForm() {
        return (
            <StagingForm
				updateValue={this.setAttributeValue}
                staging={this.staging}
            />
        );      
    }
	
	setAttributeValue(name, value, publishChanges = true) {
		if (name === "T") {
			Patient.updateTForStaging(this.staging, value);
		} else if (name === "N") {
			Patient.updateNForStaging(this.staging, value);
		} else if (name === "M") {
			Patient.updateMForStaging(this.staging, value);
		} else {
			console.error("Error: Unexpected value selected in staging dropdown: " + name);
			return;
		}
        if (this.isContext()) this.updateContextStatus();
		this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}

	getAttributeValue(name) {
		if (name === "T") {
			return this.staging.tStage.coding.displayText;
		} else if (name === "N") {
			return this.staging.nStage.coding.displayText;
		} else if (name === "M") {
			return this.staging.mStage.coding.displayText;
		} else if (name === "stage") {
			return this.staging.value.coding.displayText;
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
		if (this.staging.value.coding.displayText.length === 0) return; // not complete value
		let condition = this.parentContext.getValueObject();
		if (this.isStagingNew) {
			patient.addObservationToCondition(this.staging, condition);
			this.isStagingNew = false;
		}
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
		if (this.staging.value.coding.displayText.length > 0) result.push(StageInserter);
		return result; //[ StagingTCreator, StagingNCreator, StagingMCreator ];
	}

	isContext() {
		return true;
	}
	getLabel() {
		return this.getShortcutType();
	}
	static getTriggers() {
		return [ "#staging" ];
	}
}

export default StagingCreator;