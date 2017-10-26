//import React from 'react';
import CreatorShortcut from './CreatorShortcut';
//import ProgressionForm from '../forms/ProgressionForm';
import ProgressionStatusCreator from './ProgressionStatusCreator';
import ProgressionReasonsCreator from './ProgressionReasonsCreator';
import ProgressionAsOfDateCreator from './ProgressionAsOfDateCreator';
import ProgressionReferenceDateCreator from './ProgressionReferenceDateCreator';
import lookup from '../lib/progression_lookup';
import Lang from 'lodash'
import moment from 'moment';
import Progression from '../model/shr/oncology/Progression';
import Entry from '../model/shr/base/Entry';
import Reference from '../model/Reference';
import BreastCancer from '../model/shr/oncology/BreastCancer';

class ProgressionCreator extends CreatorShortcut {
    // onUpdate is passed from React components that need to be notified when the progression value(s) change
    // progression is optional and specifies an existing progression value being edited. Not used in no-patient mode
    constructor(onUpdate, progression) {
        super();
        if (Lang.isUndefined(progression)) {
            this.progression = new Progression();
            this.progression.value = 'unknown';
            this.progression.evidence = '';
            this.progression.asOfDate = null;
            this.progression.clinicallyRelevantTime = null;

            // TODO: This will be auto generated so this should be taken out when that code is merged
            this.progression.entryInfo = new Entry();
            this.progression.entryInfo.entryType = ["http://standardhealthrecord.org/oncology/Progression",
                "http://standardhealthrecord.org/assessment/Assessment" ];
            this.isProgressionNew = true;
        } else {
            this.progression = progression;
            this.isProgressionNew = false;
        }
		this.setValueObject(this.progression);
        this.asOf = false;
        this.referenceDate = false;
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
        return "#disease status";
    }

    getStatusString(curProgression) { 
        let statusString = ``;
        if (    Lang.isEmpty(curProgression.value) || 
                Lang.isUndefined(curProgression.value) || 
                curProgression.value.coding.displayText.length === 0)
        {
            statusString = ``;
        } else { 
            statusString = ` is #${curProgression.value.coding.displayText}`
        }
        return statusString;
    }

    getReasonString(curProgression) {
        let reasonString = ""; 
        if (!Lang.isUndefined(curProgression.evidence) && curProgression.evidence.length > 0) {
            const numReasons = curProgression.evidence.length;
            if (numReasons > 0) { 
                reasonString = ` based on `;
                for (let i = 0; i < numReasons - 1; i++) {
                    reasonString += "#" + curProgression.evidence[i].coding.displayText;
                    reasonString += `, `;
                }
                reasonString += "#" + curProgression.evidence[numReasons - 1].coding.displayText;
            } 
        }
        return reasonString
    }

    getAsOfString(curProgression) {
        let asOfString;
        // TODO: Check with Mark about these dates
        if (curProgression.asOfDate) {
            const formattedDate = moment(curProgression.asOfDate, 'D MMM YYYY').format("MM/DD/YYYY");
            asOfString = ` #as of #${formattedDate}`;  
        } else {
            asOfString = ``;
        }
        return asOfString
    }
    
    getReferenceDateString(curProgression) {
        let dateString;
        if(curProgression.clinicallyRelevantTime) {
            const formattedDate = moment(curProgression.clinicallyRelevantTime, 'D MMM YYYY').format('MM/DD/YYYY');
            dateString = ` relative to #reference date #${formattedDate}`;
        } else {
            dateString = ``;
        }
        return dateString;
    }
    
    getAsString() { 
        if((Lang.isUndefined(this.progression.value) || this.progression.value.coding.displayText.length === 0)
            && Lang.isEmpty(this.progression.evidence)){ 
            // No value or status or updated reference date, return just the hash
            return `#disease status`;
        } else {
            const statusString = this.getStatusString(this.progression);
            let reasonString   = this.getReasonString(this.progression);
            if (!Lang.isEmpty(reasonString)) {reasonString = ` ` + reasonString;}
            let asOfString     = this.getAsOfString(this.progression);
            if (!Lang.isEmpty(asOfString)) {asOfString = ` ` + asOfString;}
            let refDateString = this.getReferenceDateString(this.progression);
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#disease status${statusString}${reasonString}${refDateString}${asOfString}`;
        }
    }
    
/*    getForm() {
        return (
            <ProgressionForm
                updateValue={this.setAttributeValue}
                progression={this.progression}
            />
        );      
    }
*/

    getFormSpec() {
        return  {
                    tagName: 'ProgressionForm',
                    props:  {   
                                updateValue: this.setAttributeValue,
                                progression: this.progression,
                                ...this.configuration
                            },
                    children: []
                };
    }

	setAttributeValue(name, value, publishChanges) {
        if (name === "status") {
            this.progression.value = value;
        } else if (name === "reasons") {
            this.progression.evidence = value;
        } else if (name === "asOf") {
            this.asOf = value === true;
        } else if (name === "asOfDate") {
            this.progression.asOfDate = value; //TODO: Extend progression object to include asOfDate
        } else if (name === "referenceDate") {
            this.referenceDate = value === true;
        } else if (name === "referenceDateDate") {
            this.progression.clinicallyRelevantTime = value;
        } else {
            console.error("Error: Unexpected value selected for progression: " + name);
            return;
        }
        if (this.isContext()) this.updateContextStatus();
        if (this.onUpdate) this.onUpdate(this);
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
        } else if (name === "asOf") {
            return this.asOf === true;
        } else if (name === "asOfDate") {
            // TODO: extend progression object to include asOfDate
            return this.progression.asOfDate;
        } else if (name === "referenceDate") {
            return this.referenceDate === true;
        } else if (name === "referenceDateDate") {
            return this.progression.clinicallyRelevantTime;
        } else {
            console.error("Error: Unexpected value requested for progression: " + name);
            return null;
        }
	}
	
	updatePatient(patient, contextManager) {
		if (this.progression.value.coding.displayText.length === 0) return; // not complete value
		let condition = this.parentContext.getValueObject();
		if (this.isProgressionNew) {
            this.progression.focalcondition = new Reference(condition.entryInfo);
            patient.addEntryToPatientWithPatientFocalSubject(this.progression);
			this.isProgressionNew = false;
		}
	}

    static validateInContext(context) {
        return context.getValueObject() instanceof BreastCancer;
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeWithValueOfTypeActive("@condition", "http://standardhealthrecord.org/oncology/BreastCancer")) {
			errors.push("#disease status invalid without a breast cancer condition. Use @condition to add the breast cancer condition to your narrative.");
		}
		return errors;
	}
    
    shouldBeInContext() {
        return  (this.getAttributeValue("status").length === 0) ||
                (this.getAttributeValue("reasons").length < lookup.getReasonOptions().length) ||
                (this.getAttributeValue("referenceDate") !== true) ||
                (this.getAttributeValue("asOf") !== true);
    }
    
	getValidChildShortcuts() {
		let result = [];
		if (this.getAttributeValue("status").length === 0) result.push(ProgressionStatusCreator);
		if (this.getAttributeValue("reasons").length < lookup.getReasonOptions().length) result.push(ProgressionReasonsCreator);
        if (this.getAttributeValue("referenceDate") !== true) result.push(ProgressionReferenceDateCreator);
        if (this.getAttributeValue("asOf") !== true) result.push(ProgressionAsOfDateCreator);
		return result; //[ ProgressionStatusCreator, ProgressionReasonsCreator, ProgressionAsOfDateCreator ];
	}
	
	isContext() {
		return true;
	}
	getLabel() {
		return this.getShortcutType();
	}
	static getStringTriggers() {
        return [{ name: "#disease status", description: lookup.getDescription('progression') }];
	}
    static getDescription() {
        return lookup.getDescription('progression')
    }
}

export default ProgressionCreator;