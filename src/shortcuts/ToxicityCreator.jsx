//import React from 'react';
import CreatorShortcut from './CreatorShortcut';
import BreastCancer from '../model/shr/oncology/BreastCancer';
import ToxicityAdverseEventCreator from './ToxicityAdverseEventCreator';
import ToxicityAttributionCreator from './ToxicityAttributionCreator';
import ToxicityGradeCreator from './ToxicityGradeCreator';
import FluxToxicReactionToTreatment from '../model//oncology/FluxToxicReactionToTreatment';
import lookup from '../lib/toxicreactiontotreatment_lookup';
import Lang from 'lodash';

class ToxicityCreator extends CreatorShortcut {
    constructor(onUpdate, toxicity) {
        super();
        if (Lang.isUndefined(toxicity)) {
            this.toxicity = new FluxToxicReactionToTreatment();
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
        return "#toxicity";
    }
    /* 
     * Get grade string for given toxicity
     */
    getGradeString = (curToxicity) => { 
        if (Lang.isNull(curToxicity.adverseEvent.adverseEventGrade)) return "";
        let gradeString = `${curToxicity.adverseEvent.adverseEventGrade}`;
        // If nothing is selected yet, this is the default placeholder
        if (Lang.isEmpty(curToxicity.adverseEvent.adverseEventGrade)) {
            gradeString = 'Grade ?'
        }
        return gradeString;
    }

    /* 
     * Get adverse event string string for given toxicity
     */
    getAdverseEventString = (curToxicity) => { 
        if (Lang.isNull(curToxicity.adverseEvent)) return "";
        let adverseEventString = `${curToxicity.adverseEvent.adverseEvent}`;
        // If nothing is selected, this is the default placeholder
        if (Lang.isEmpty(curToxicity.adverseEvent.adverseEvent)){
            adverseEventString = '?';
        }
        return adverseEventString;
    }
    
    /*
     * Get attribution string for given toxicity
     */
    getAttributionString = (curToxicity) => {
        if(Lang.isNull(curToxicity.adverseEvent.causeCategory)) return "";
        let attributionString = `${curToxicity.adverseEvent.causeCategory}`;
        // If nothing is selected, this is the default placeholder
        if (Lang.isEmpty(curToxicity.adverseEvent.causeCategory)){
            attributionString = '?';
        }
        return attributionString;
    }

    /* 
     * Get string representation for a given toxicity
     */ 
    getToxAsString = (curToxicity) => { 
        const gradeString = this.getGradeString(curToxicity);
        const adverseEventString = this.getAdverseEventString(curToxicity);
        const attributionString = this.getAttributionString(curToxicity);
        // If all of the options contain a '?', nothing has been selected yet so no Toxicity information
        if (gradeString.indexOf('?') > -1 && adverseEventString.indexOf('?') > -1 && attributionString.indexOf('?') > -1) {
            return "";
        }
        return `#${gradeString} #${adverseEventString} related to #${attributionString}`;
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

    getFormSpec() {
        return  {
                    tagName: 'ToxicityForm',
                    props:  {   
                                updateValue: this.setAttributeValue,
                                toxicity: this.toxicity,
                                ...this.configuration
                            },
                    children: []
                };
    }

    setAttributeValue(name, value, publishChanges) {
        if (name === "adverseEvent") {
            this.toxicity.adverseEvent.adverseEvent = value;
        } else if (name === "grade") {
            this.toxicity.adverseEvent.adverseEventGrade = value;
        } else if (name === "attribution") {
            this.toxicity.adverseEvent.causeCategory = value;
        } else {
            console.error("Error: Unexpected value selected for toxicity: " + name);
            return;
        }
        if (this.isContext()) this.updateContextStatus();
        if (this.onUpdate) this.onUpdate(this);
        if (publishChanges) {
            this.notifyValueChangeHandlers(name);
        }
    }
    getAttributeValue(name) {
        if (name === "adverseEvent") {
            if (!this.toxicity.adverseEvent) return "";
            return this.toxicity.adverseEvent;
        } else if (name === "grade") {
            if (!this.toxicity.adverseEvent.adverseEventGrade) return "";
            return this.toxicity.adverseEvent.adverseEventGrade;
        } else if (name === "attribution") {
            if (!this.toxicity.adverseEvent.causeCategory) return "";
            return this.toxicity.adverseEvent.causeCategory;
        } else {
            console.error("Error: Unexpected value selected in toxicity dropdown: " + name);
            return null;
        }
    }
    
    updatePatient(patient, contextManager) {
        if (    !this.toxicity.adverseEvent ||
                this.toxicity.adverseEvent.length === 0) return; // not complete value
        //let condition = this.parentContext.getValueObject();
        if (this.isToxicityNew) {
            //this.toxicity.focalCondition = Patient.createEntryReferenceTo(condition);
            patient.addEntryToPatientWithPatientFocalSubject(this.toxicity);
            this.isToxicityNew = false;
        }
    }

    static validateInContext(context) {
        return context.getValueObject() instanceof BreastCancer;
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
        const adverseEvent = this.getAttributeValue("adverseEvent");
        const grade = this.getAttributeValue("grade");
        const attribution = this.getAttributeValue("attribution");

        if (!adverseEvent || adverseEvent.length === 0) result.push(ToxicityAdverseEventCreator);
        if (!grade || grade.length === 0) result.push(ToxicityGradeCreator);
        if (!attribution || attribution.length === 0) result.push(ToxicityAttributionCreator);
        return result;
    }
    shouldBeInContext() {
        const adverseEvent = this.getAttributeValue("adverseEvent");
        const grade = this.getAttributeValue("grade");
        const attribution = this.getAttributeValue("attribution");
        return  (!adverseEvent || adverseEvent.length === 0) ||
                (!grade || grade.length === 0) ||
                (!attribution && attribution.length === 0) ;
    }
    
    isContext() {
        return true;
    }
    getLabel() {
        return this.getShortcutType();
    }
    static getStringTriggers() {
        return [{name: "#toxicity", description: lookup.getDescription('toxicity')}];
    }
     static getDescription() {
        return lookup.getDescription('toxicity')
    }   
}

export default ToxicityCreator;