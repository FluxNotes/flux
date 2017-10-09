import Lang from 'lodash';
import CreatorShortcut from './CreatorShortcut';
import DateCreator from './DateCreator';

export default class ProgressionReferenceDateCreator extends CreatorShortcut {
    constructor(onUpdate, progression) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getActiveContextOfType("#disease status");
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue("referenceDate", true, false);
            this.parentContext.addChild(this);
        }
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("referenceDate", false, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    getShortcutType() {
        return "#reference date";
    }
    
    setAttributeValue(name, value, publishChanges) {
        if (name === "date") {
            this.parentContext.setAttributeValue("referenceDateDate", value, false);
            this.updateContextStatus();
        }
    }
    
    getAttributeValue(name) {
        if (name === 'date') {
            this.parentContext.getAttributeValue("referenceDateDate");
        }
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive("#disease status")) {
            errors.push("Reference date values are invalid without #disease status. Use #disease status to add a new disease status to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#disease status");
        if (!Lang.isNull(parentContext.getAttributeValue("referenceDateDate"))) {
            errors.push("Reference date already specified. Only one reference date allowed per #disease status.");
        }
        return errors;
    }
    
    shouldBeInContext() {
        return (Lang.isNull(this.parentContext.progression.clinicallyRelevantTime));
    }
    
    getValidChildShortcuts() {
        let result = [];
        if (Lang.isNull(this.parentContext.progression.clinicallyRelevantTime)) result.push(DateCreator);
        return result;
    }
    
    isContext() {
        return true;
    }
    
    getLabel() {
        return this.getShortcutType();
    }
    
    static getStringTriggers() {
        return [{name: "#reference date", description: 'Used to reference the date of a past clinical note.'}];
    }
    
    static getShortcutGroupName() {
        return "Reference Date";
    }
}