import moment from 'moment';
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
    
    determineText(contextManager) { //JULIA Fix
        return [{key: 'date-id', context: 'some text to show you', object: 'a date'}];
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