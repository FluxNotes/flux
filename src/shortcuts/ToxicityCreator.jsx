import React from 'react';
import CreatorShortcut from './CreatorShortcut';
import ToxicityAdverseEventCreator from './ToxicityAdverseEventCreator';
import ToxicityGradeCreator from './ToxicityGradeCreator';
import ToxicityForm from '../forms/ToxicityForm';
import Patient from '../patient/Patient';
import Lang from 'lodash'

class ToxicityCreator extends CreatorShortcut {
    constructor(onUpdate, toxicity) {
        super();
        if (Lang.isUndefined(toxicity)) {
            this.toxicity = Patient.createNewToxicity();
            this.isToxicityNew = true;
        } else {
            this.toxicity = toxicity;
            this.isToxicityNew = false;
        }
		this.setValueObject(this.toxicity);
        this.onUpdate = onUpdate;
		this.setAttributeValue = this.setAttributeValue.bind(this);
    }
	
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getActiveContextOfType("@condition");
    }

    getShortcutType() { 
        return "#toxicity";
    }
    /* 
     * Get grade string for given toxicity
     */
    getGradeString = (curToxicity) => { 
        if (Lang.isNull(curToxicity.adverseEventGrade.coding)) return "";
        const gradeString = `${curToxicity.adverseEventGrade.coding.displayText}`;
        return gradeString;
    }

    /* 
     * Get adverse event string string for given toxicity
     */
    getAdverseEventString = (curToxicity) => { 
        if (Lang.isNull(curToxicity.value.coding)) return "";
        const adverseEventString = `${curToxicity.value.coding.displayText}`;
        return adverseEventString;
    }

    /* 
     * Get string representation for a given toxicity
     */ 
    getToxAsString = (curToxicity) => { 
        const gradeString = this.getGradeString(curToxicity);
        const adverseEventString = this.getAdverseEventString(curToxicity);
        if (Lang.isEmpty(gradeString) && Lang.isEmpty(adverseEventString)) return "";
        if(Lang.isEmpty(adverseEventString)) return "#" + gradeString + " ?";
        if(Lang.isEmpty(gradeString)) return "Grade ? #" + adverseEventString;
        return `#${gradeString} #${adverseEventString}`;
    }

    /* 
     * Get string representation for all toxicities, wrapped in toxicity tag
     */ 
    getAsString = () => { 
        const curToxicityString = this.getToxAsString(this.toxicity);
        if (Lang.isEmpty(curToxicityString)) { 
            // No Toxicity information -- in this case we just want a hash
            return `#toxicity`;
        } else { 
            return "#toxicity of " + curToxicityString;
        }
    }

    getForm() {
        return (
            <ToxicityForm
                updateValue={this.setAttributeValue}
                toxicity={this.toxicity}
            />
        );      
    }

	setAttributeValue(name, value, publishChanges) {
		if (name === "adverseEvent") {
			Patient.updateAdverseEventForToxicReaction(this.toxicity, value);
		} else if (name === "grade") {
			Patient.updateGradeForToxicReaction(this.toxicity, value);
        } else if (name === "attribution") {
            Patient.updateAttributionForToxicReaction(this.toxicity, value);
		} else {
			console.error("Error: Unexpected value selected for toxicity: " + name);
			return;
		}
        if (this.isContext()) this.updateContextStatus();
		this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}
	getAttributeValue(name) {
		if (name === "adverseEvent") {
			return this.toxicity.value.coding.displayText;
		} else if (name === "grade") {
            return this.toxicity.adverseEventGrade.coding.displayText;
		} else {
			console.error("Error: Unexpected value selected in toxicity dropdown: " + name);
			return null;
		}
	}
	
	updatePatient(patient, contextManager) {
		if (this.toxicity.value.coding.displayText.length === 0) return; // not complete value
		//let condition = this.parentContext.getValueObject();
		if (this.isToxicityNew) {
            //this.toxicity.focalCondition = Patient.createEntryReferenceTo(condition);
            patient.addEntryToPatientWithPatientFocalSubject(this.toxicity);
			this.isToxicityNew = false;
		}
	}

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeWithValueOfTypeActive("@condition", "http://standardhealthrecord.org/oncology/BreastCancer")) {
			errors.push("#toxicity invalid without a breast cancer condition. Use @condition to add the breast cancer condition to your narrative.");
		}
		return errors;
	}

	getValidChildShortcuts() {
		let result = [];
		if (this.getAttributeValue("adverseEvent").length === 0) result.push(ToxicityAdverseEventCreator);
		if (this.getAttributeValue("grade").length === 0) result.push(ToxicityGradeCreator);
		return result; //[ ToxicityAdverseEventCreator, ToxicityGradeCreator ];
	}
    shouldBeInContext() {
        return  (this.getAttributeValue("adverseEvent").length === 0) ||
                (this.getAttributeValue("grade").length === 0);
    }
    
	isContext() {
		return true;
	}
	getLabel() {
		return this.getShortcutType();
	}
	static getTriggers() {
		return [ "#toxicity" ];
	}
}

export default ToxicityCreator;