// React Imports:
import React from 'react';
import CreatorShortcut from './CreatorShortcut';
import ProgressionForm from '../forms/ProgressionForm';
import ProgressionStatusCreator from './ProgressionStatusCreator';
import ProgressionReasonsCreator from './ProgressionReasonsCreator';
import Patient from '../patient/Patient';
import Lang from 'lodash'
import moment from 'moment';
import progressionLookup from '../lib/progression_lookup';

class ProgressionCreator extends CreatorShortcut {
    // onUpdate is passed from React components that need to be notified when the progression value(s) change
    // progression is optional and specifies an existing progression value being edited. Not used in no-patient mode
    constructor(onUpdate, progression) {
        super();
        if (Lang.isUndefined(progression)) { 
            this.progression = Patient.createNewProgression();
            this.isProgressionNew = true;
        } else {
            this.progression = progression;
            this.isProgressionNew = false;
        }
		this.setValueObject(this.progression);
        this.onUpdate = onUpdate;
		this.setAttributeValue = this.setAttributeValue.bind(this);
    }
	
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getActiveContextOfType("@condition");
    }

    getShortcutType() { 
        return "#progression";
    }
    /* 
     * Translate progression status into a string 
     */
    getStatusString(curProgression) { 
        let statusString = ``;
        if (    Lang.isEmpty(curProgression.value) || 
                Lang.isUndefined(curProgression.value) || 
                curProgression.value.coding.displayText.length === 0)
        {
            statusString = ``;
        } else { 
            statusString = ` is #${curProgression.value.coding.displayText.replace(" ", "-")}`
        }
        return statusString;
    }

    /* 
     * Translate progression reasons into a string 
     */
    getReasonString(curProgression) {
        let reasonString = ""; 
        if (!Lang.isUndefined(curProgression.evidence) && curProgression.evidence.length > 0) {
            const numReasons = curProgression.evidence.length;
            if (numReasons > 0) { 
                reasonString = ` based on `;
                for (let i = 0; i < numReasons - 1; i++) {
                    reasonString += "#" + curProgression.evidence[i].coding.displayText.replace(" ", "-");
                    reasonString += `, `;
                }
                reasonString += "#" + curProgression.evidence[numReasons - 1].coding.displayText.replace(" ", "-");
            } 
        }
        return reasonString
    }

    /* 
     * Translate progression date into a string 
     */
    getDateString(curProgression) { 
        const today = moment(new Date());
        let dateString;
        if (!Lang.isUndefined(curProgression.clinicallyRelevantTime)) {
            dateString = (curProgression.clinicallyRelevantTime === today.format("D MMM YYYY")) ? `` : ` as of ${this.progression.clinicallyRelevantTime}`;
        } else {
            dateString = ``;
        }
        return dateString
    }
    
    /* 
     * Translate the current shortcut into a string
     */
    getAsString() { 
        if(Lang.isUndefined(this.progression.value) || this.progression.value.coding.displayText.length === 0) { 
            // 1. No status -- this case we just want a hash
            if(Lang.isEmpty(this.progression.evidence)) { 
                return `#progression`;
            } else {    
                // No status but reasons -- show what we can and provide blank for status 
                const statusString = this.getStatusString(this.progression);
                let reasonString   = this.getReasonString(this.progression);
                if (!Lang.isEmpty(reasonString)) {reasonString = ` ` + reasonString;}
                let dateString     = this.getDateString(this.progression);
                if (!Lang.isEmpty(dateString)) {dateString = ` ` + dateString;}
                return `#progression${statusString}${reasonString}${dateString}`;
            } 
        } else { 
            const statusString = this.getStatusString(this.progression);
            let reasonString   = this.getReasonString(this.progression);
            if (!Lang.isEmpty(reasonString)) {reasonString = ` ` + reasonString;}
            let dateString     = this.getDateString(this.progression);
            if (!Lang.isEmpty(dateString)) {dateString = ` ` + dateString;}
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#progression${statusString}${reasonString}${dateString}`;
        }
    }
    
    /* 
     * Return the form for progression
     */
    getForm() {
        return (
            <ProgressionForm
                updateValue={this.setAttributeValue}
                progression={this.progression}
            />
        );      
    }
    
	setAttributeValue(name, value, publishChanges) {
		if (name === "status") {
			Patient.updateStatusForProgression(this.progression, value);
		} else if (name === "reasons") {
			Patient.updateReasonsForProgression(this.progression, value);
		} else {
			console.error("Error: Unexpected value selected for progression: " + name);
			return;
		}
		this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}
	getAttributeValue(name) {
		if (name === "status") {
			return this.progression.value.coding.displayText;
		} else if (name === "reasons") {
            return this.progression.evidence.map((e) => {
                return e.coding.displayText;
            });
		} else {
			console.error("Error: Unexpected value selected in staging dropdown: " + name);
			return null;
		}
	}
	
	updatePatient(patient, contextManager) {
		if (this.progression.value.coding.displayText.length === 0) return; // not complete value
		let condition = this.parentContext.getValueObject();
		if (this.isProgressionNew) {
            this.progression.focalCondition = Patient.createEntryReferenceTo(condition);
            patient.addEntryToPatientWithPatientFocalSubject(this.progression);
			this.isProgressionNew = false;
		}
	}

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeWithValueOfTypeActive("@condition", "http://standardhealthrecord.org/oncology/BreastCancer")) {
			errors.push("#progression invalid without a breast cancer condition. Use @condition to add the breast cancer condition to your narrative.");
		}
		return errors;
	}

	getValidChildShortcuts() {
		let result = [];
		if (this.getAttributeValue("status").length === 0) result.push(ProgressionStatusCreator);
		if (this.getAttributeValue("reasons").length < progressionLookup.getReasonOptions().length) result.push(ProgressionReasonsCreator);
		return result; //[ ProgressionStatusCreator, ProgressionReasonsCreator ];
	}
	
	isContext() {
		return true;
	}
	getLabel() {
		return this.getShortcutType();
	}
	static getTriggers() {
		return [ "#progression" ];
	}
}

export default ProgressionCreator;