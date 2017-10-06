import Lang from 'lodash';
import CreatorShortcut from './CreatorShortcut';
import DateCreator from './DateCreator';

export default class ClinicalTrialEnrollmentDateCreator extends CreatorShortcut {
    constructor(onUpdate, clinicalTrial) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getActiveContextOfType("#clinical trial");
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue("enrollmentDateFlag", true, false);
            this.parentContext.addChild(this);
        }
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("enrollmentDateFlag", false, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    getShortcutType() {
        return "#enrolled on";
    }
    
    setAttributeValue(name, value, publishChanges) {
        if (name === "date") {
            this.parentContext.setAttributeValue("enrollmentDate", value, false);
            this.updateContextStatus();
        }
    }
    
    getAttributeValue(name) {
        if (name === 'date') {
            this.parentContext.getAttributeValue("enrollmentDate");
        }
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive("#clinical trial")) {
            errors.push("Enrollment date values are invalid without #clinical trial. Use #clinical trial to add a new clinical trial to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#clinical trial");
        if (!Lang.isNull(parentContext.getAttributeValue("enrollmentDate"))) {
            errors.push("Enrollment date already specified. Only one enrollment date date allowed per #clinical trial.");
        }
        return errors;
    }
    
    shouldBeInContext() {
        return (Lang.isNull(this.parentContext.clinicalTrial.enrollmentDate));
    }
    
    getValidChildShortcuts() {
        let result = [];
        if (Lang.isNull(this.parentContext.clinicalTrial.enrollmentDate)) result.push(DateCreator);
        return result;
    }
    
    isContext() {
        return true;
    }
    
    getLabel() {
        return this.getShortcutType();
    }
    
    static getTriggers() {
        return [{name: "#enrolled on", description: 'Used to reference the date the patient was enrolled in a clinical trial.'}];
    }
    
    static getShortcutGroupName() {
        return "Enrollment Date";
    }
}