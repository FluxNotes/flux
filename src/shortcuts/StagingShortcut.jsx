// React Imports:
import React from 'react';
import Shortcut from './Shortcut';
// Application Imports
import StagingForm from '../forms/StagingForm';
import Patient from '../patient/Patient';
// Lodash
import Lang from 'lodash'

class StagingShortcut extends Shortcut {
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
        this.onUpdate = onUpdate;
		this.updateValue = this.updateValue.bind(this);
    }
    /* 
     * Returns "staging"
     */
    getShortcutType() { 
        return "staging";
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
		return `#staging[T${tString}N${nString}M${mString}]`;
    }
    
    /* 
     * Return the form for staging
     */
    getForm() {
        return (
            <StagingForm
                // Update functions
                //onStagingUpdate={this.handleStagingUpdate}
				updateValue={this.updateValue}
                // Properties
                staging={this.staging}
            />
        );      
    }

	getStructuredFieldSpecification() {
		return [	{ type: 'staticText', 	spec: { text:'#staging['}},
					{ type: 'dropDown',   	spec: { name: 'T', items: ['Tis', 'T0', 'T1', 'T2', 'T3','T4'] }},
					{ type: 'dropDown',   	spec: { name: 'N', items: ['N0', 'N1mi', 'N1', 'N2', 'N3'] }},
					{ type: 'dropDown', 	spec: { name: 'M', items: ['M0', 'M1'] }},
					{ type: 'staticText',	spec: { text:']'}} ];
	}
	
	updateValue(name, value, publishChanges = true) {
		if (name === "T") {
			Patient.updateTForStaging(this.staging, value);
		} else if (name === "N") {
			Patient.updateNForStaging(this.staging, value);
		} else if (name === "M") {
			Patient.updateMForStaging(this.staging, value);
		} else {
			console.log("Error: Unexpected value selected in staging dropdown: " + name);
			return;
		}
		this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}

	getValue(name) {
		if (name === "T") {
			return this.staging.tStage.coding.displayText;
		} else if (name === "N") {
			return this.staging.nStage.coding.displayText;
		} else if (name === "M") {
			return this.staging.mStage.coding.displayText;
		} else {
			console.log("Error: Unexpected value selected in staging dropdown: " + name);
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
		let condition = contextManager.getContextObjectOfType("http://standardhealthrecord.org/oncology/BreastCancer");
		if (this.isStagingNew) {
			patient.addObservationToCondition(this.staging, condition);
			this.isStagingNew = false;
		}
	}

	validateInCurrentContext(contextManager) {
		let errors = [];
		let condition = contextManager.getContextObjectOfType("http://standardhealthrecord.org/oncology/BreastCancer");
		if (Lang.isNull(condition)) {
			errors.push("#staging invalid without a breast cancer condition. Use @condition to add the condition to your narrative.");
		}
		return errors;
	}
}

export default StagingShortcut;