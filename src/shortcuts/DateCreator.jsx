import CreatorShortcut from './CreatorShortcut';

export default class DateCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.text = trigger;
        this.parentContext = contextManager.getCurrentContext();
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if(result) {
            this.parentContext.setAttributeValue("date", null, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    // This returns a placeholder object to trigger opening the Context Portal. Key:'date-id' opens calendar.
    determineText(contextManager) {
        return [{key: 'date-id', context: 'Placeholder for calendar', object: 'a date'}];
    }
    
    getText() {
        return this.text;
    }
    
    getShortcutType() {
        return "#date";
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        return errors;
    }
    
    static getTriggers() {
        let result = [{name: `#date`, description: "A date."}];
        return result;
    }
    
    static getDescription() {
        return "A date.";
    }
    
    static getShortcutGroupName() {
        return "Date";
    }
    
}