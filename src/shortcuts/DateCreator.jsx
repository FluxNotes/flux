import CreatorShortcut from './CreatorShortcut';
import moment from 'moment';

export default class DateCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.text = trigger;
        this.parentContext = contextManager.getCurrentContext();
        this.parentContext.addChild(this);
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
    
    setText(text) {
        if (text.startsWith('#')) {
            text = text.substring(1);
        }
        super.setText(text);
        const formattedDate = moment(text, 'MM-DD-YYYY').format('D MMM YYYY');
        this.parentContext.setAttributeValue("date", formattedDate, false);
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
    
    static getTriggers() {
        // Date regular expression for MM/DD/YYYY
        let date_regex = /^#(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

        // let date_regex = /abj/;
        // let regex = new RegEx('#' + date_regex);

        // console.log('test');
        // console.log(date_regex.test("#02/30/2017"));


        let result = [{name: `#date`, description: "A date."}, {name: date_regex, description: "A specific date."}];
        return result;

        // look at T2, make sure autocomplete for date doesn't break
    }
    
    static getDescription() {
        return "A date.";
    }
    
    static getShortcutGroupName() {
        return "Date";
    }
    
}