import Context from '../context/Context';
//import React from 'react';
import Lang from 'lodash';
import moment from 'moment';

class Shortcut extends Context {
    constructor() {
        super();
        if (this.constructor === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
        this.optionsToSelectFrom = null;
        this.valueChangeHandlers = {};
    }
    
    initialize(contextManager, trigger = undefined, updatePatient = true) {
        super.initialize(contextManager, trigger, updatePatient);
    }

    setConfiguration(config) {
        this.configuration = config;
    }

    getPrefixCharacter() {
        throw new TypeError("Primitive shortcut has no prefix character")
    }
    
    // Slim App
    getAsString () { 
        return "#null"; 
    }

    getShortcutType() { 
        throw new TypeError("Base Shortcut has no type")
    }
    
    getText() {
        return this.getShortcutType();
    }

    getResultText() {
        return this.getText();
    }

    getLabel() {
        throw new Error("Invalid context. " + this.constructor.name);
    }   
        
    updatePatient(patient, contextManager) {
        throw new Error("update patient not implemented for " + this.constructor.name);
    }
    
    validateInCurrentContext(contextManager) {
        return []; // no errors
    }
    
    //options is array of {key: item.entryId, context: item.specificType.coding[0].displayText, object: item, date: item.<name of the object that holds the date. Varies for each shortcut>}
    flagForTextSelection(options) {
        // Sort the options by time if options is an array
        if (Lang.isArray(options)) {
            options.sort(this._optionsTimeSorter);
        }
        this.optionsToSelectFrom = options;
    }

    // Sorts array items by time with most recent item first
    _optionsTimeSorter(a, b) {
        const a_startTime = new moment(a.date, "D MMM YYYY");
        const b_startTime = new moment(b.date, "D MMM YYYY");

        if (a_startTime < b_startTime) {
            return 1;
        }
        if (a_startTime > b_startTime) {
            return -1;
        }
        return 0;
    }
    
    getValueSelectionOptions() {
        return this.optionsToSelectFrom;
    }
    
    needToSelectValueFromMultipleOptions() {
        return !Lang.isNull(this.optionsToSelectFrom);
    }
    
    clearValueSelectionOptions() {
        this.optionsToSelectFrom = null;
    }

    // by default shortcuts are not Contexts.
    isContext() {
        return false;
    }
    
    onBeforeDeleted() {
        if (this.isContext() && this.hasChildren()) {
            return false;
        }
        if (this.isContext()) {
            this.contextManager.removeShortcutFromContext(this);
        }
        return true;
    }
    static getTriggerRegExp() {
        return null;
    }
}

export default Shortcut;
