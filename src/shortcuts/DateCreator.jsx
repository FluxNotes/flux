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
        this.parentContext.setAttributeValue("asOfDate", dateString, false);
        this.parentContext.addChild(this);
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if(result) {
            this.parentContext.setAttributeValue("asOfDate", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
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
        const today = new moment().format("D MMM YYYY");
        // TODO: name will need to be a regular expression of date format instead of just today's date
        let result = [{name: `#${today}`, description: "A date."}];
        return result;
    }
    
    static getDescription() {
        return "A date.";
    }
    
    static getShortcutGroupName() {
        return "Date";
    }
    
}