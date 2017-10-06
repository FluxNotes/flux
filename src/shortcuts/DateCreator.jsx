import CreatorShortcut from './CreatorShortcut';
import moment from 'moment';
import Lang from 'lodash';

export default class DateCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        //this.text = trigger;
        this.parentContext = contextManager.getCurrentContext();
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
        if (trigger !== "#date") {
            this.setText(trigger);
            this.clearValueSelectionOptions();
        }
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if(result && !Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue("date", null, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    // This returns a placeholder object to trigger opening the Context Portal. Key:'date-id' opens calendar.
    determineText(contextManager) {
        return [{key: 'date-id', context: 'Placeholder for calendar', object: 'a date'}];
    }
    
    setText(text) {
        if (text.startsWith('#')) {
            text = text.substring(1);
        }
        super.setText(text);
        const formattedDate = moment(text, 'MM-DD-YYYY').format('D MMM YYYY');
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue("date", formattedDate, false);
        }
    }
    
    getText() {
        return `#${this.text}`;
    }
    
    getShortcutType() {
        return "#date";
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        return errors;
    }
    
    static getStringTriggers() {
        let result = [{name: `#date`, description: "A date."}];
        return result;
    }
    
    static getTriggerRegExp() {
        return /(#\d{1,2}\/\d{1,2}\/\d{4})/;
    }
    
    static getDescription() {
        return "A date.";
    }
    
    static getShortcutGroupName() {
        return "Date";
    }
    
}