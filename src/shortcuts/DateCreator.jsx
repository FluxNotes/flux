import moment from 'moment';
import CreatorShortcut from './CreatorShortcut';

export default class DateCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.text = trigger;
        let dateString = trigger.substring(1);
        this.parentContext = contextManager.getActiveContextOfType("#progression");
        this.parentContext.setAttributeValue("date", dateString, false);
        this.parentContext.addChild(this);
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if(result) {
            this.parentContext.setAttributeValue("date", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    getText() {
        return this.text;
    }
    
    getShortcutType() {
        return "#progression-date";
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if(!contextManager.isContextOfTypeActive("#progression")) {
            errors.push("Progression Date values invalid without #progression. Use #progression to add a new progression to your narrative.");
            return errors;
        }
        return errors;
    }
    
    static getTriggers() {
        const today = new moment().format("D MMM YYYY");
        // TODO: name will need to be a regular expression of date format instead of just today's date
        let result = [{name: `#${today}`, description: "Today's date."}];
        return result;
    }
    
    static getDescription() {
        return "Today's date.";
    }
    
    static getShortcutGroupName() {
        return "Date";
    }
    
}