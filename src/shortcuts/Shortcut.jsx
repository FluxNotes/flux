import Context from '../context/Context';
//import React from 'react';
import Lang from 'lodash';

class Shortcut extends Context {
    constructor() {
        super();
        if (this.constructor === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
        this.optionsToSelectFrom = null;
        this.valueChangeHandlers = {};
    }
    
    initialize(contextManager) {
        super.initialize(contextManager);
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

    getLabel() {
        throw new Error("Invalid context. " + this.constructor.name);
    }   
        
    updatePatient(patient, contextManager) {
        throw new Error("update patient not implemented for " + this.constructor.name);
    }
    
    validateInCurrentContext(contextManager) {
        return []; // no errors
    }
    
    //options is array of {key: item.entryId, context: item.specificType.coding[0].displayText, object: item}
    flagForTextSelection(options) {
        this.optionsToSelectFrom = options;
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
