import Lang from 'lodash';
import CreatorShortcut from './CreatorShortcut';
import DateCreator from './DateCreator';

export default class ClinicalTrialEndDateCreator extends CreatorShortcut {
    constructor(onUpdate, clinicalTrial) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getActiveContextOfType("#clinical trial");
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue("endDateFlag", true, false);
            this.parentContext.addChild(this);
        }
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("endDateFlag", false, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    getShortcutType() {
        return "#ended on";
    }
    
    setAttributeValue(name, value, publishChanges) {
        if (name === "date") {
            this.parentContext.setAttributeValue("endDate", value, false);
            this.updateContextStatus();
        }
    }
    
    getAttributeValue(name) {
        if (name === 'date') {
            this.parentContext.getAttributeValue("endDate");
        }
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive("#clinical trial")) {
            errors.push("End date values are invalid without #clinical trial. Use #clinical trial to add a new clinical trial to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#clinical trial");
        if (!Lang.isNull(parentContext.getAttributeValue("endDate"))) {
            errors.push("End date already specified. Only one end date allowed per #clinical trial.");
        }
        return errors;
    }
    
    shouldBeInContext() {
        return (Lang.isNull(this.parentContext.clinicalTrial.endDate));
    }
    
    getValidChildShortcuts() {
        let result = [];
        if (Lang.isNull(this.parentContext.clinicalTrial.endDate)) result.push(DateCreator);
        return result;
    }
    
    isContext() {
        return true;
    }
    
    getLabel() {
        return this.getShortcutType();
    }
    
    static getStringTriggers() {
        return [{name: "#ended on", description: 'Used to reference the date the patient left a clinical trial.'}];
    }
    
    static getShortcutGroupName() {
        return "End Date";
    }
}