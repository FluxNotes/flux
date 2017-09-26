import Lang from 'lodash';
import CreatorShortcut from './CreatorShortcut';
import DateCreator from './DateCreator';

export default class ProgressionAsOfDateCreator extends CreatorShortcut {
    constructor(onUpdate, progression) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getActiveContextOfType("#disease status");
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue("asOf", true, false);
            this.parentContext.addChild(this);
        }
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("asOf", false, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    getShortcutType() {
        return "#as of";
    }
    
    setAttributeValue(name, value, publishChanges) {
        if (name === "date") {
            this.parentContext.setAttributeValue("asOfDate", value, false);
            this.updateContextStatus();
        }
    }
    
    getAttributeValue(name) {
        if (name === 'date') {
            this.parentContext.getAttributeValue("asOfDate");
        }
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive("#disease status")) {
            errors.push("As of values are invalid without #disease status. Use #disease status to add a new disease status to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#disease status");
        if (!Lang.isNull(parentContext.getAttributeValue("asOfDate"))) {
            errors.push("As of date already specified. Only one as of date allowed per #disease status.");
        }
        return errors;
    }
    
    shouldBeInContext() {
        return (Lang.isNull(this.parentContext.progression.originalCreationDate));
    }
    
    getValidChildShortcuts() {
        let result = [];
        if (Lang.isNull(this.parentContext.progression.originalCreationDate)) result.push(DateCreator);
        return result;
    }
    
    isContext() {
        return true;
    }
    
    getLabel() {
        return this.getShortcutType();
    }
    
    static getTriggers() {
        return [{name: "#as of", description: 'Used to reference the date of the current note.'}];
    }
    
    static getShortcutGroupName() {
        return "As Of Date";
    }
}