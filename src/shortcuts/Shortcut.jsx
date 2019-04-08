import Context from '../context/Context';
//import React from 'react';
import Lang from 'lodash';
import moment from 'moment';
import { v4 } from 'uuid';

class Shortcut extends Context {
    constructor() {
        super();
        if (this.constructor === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
        this.optionsToSelectFrom = null;
        this.valueChangeHandlers = {};
        this.uniqueId = v4();
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
        if (this.isContext() && this.contextManager) {
            this.contextManager.removeShortcutFromContext(this);
        }
        return true;
    }
    static getTriggerRegExp() {
        return null;
    }

    determineParentContext(contextManager, knownParent, parentAttribute) {
        // figure out parent context for this shortcut. Use following:
        //   (1) use known parent context if attribute exists
        //   (2) use parent with correct parent attribute
        //   (3) use current context (maybe this should just be an error?)
        if (knownParent) {
            this.parentContext = contextManager.getActiveContextOfType(knownParent);
        } else {
            let foundParentContext = null;
            if (parentAttribute) {
                let contexts = contextManager.getActiveContexts();
                let index = 0;
                while (index < contexts.length && !contexts[index].isAttributeSupported(parentAttribute)) {
                    index++;
                }
                if (index < contexts.length) {
                    foundParentContext = contexts[index];
                }
            }
            if (Lang.isNull(foundParentContext)) {
                this.parentContext = contextManager.getCurrentContext();
            } else {
                this.parentContext = foundParentContext;
            }
        }
    }

    setSource(source) {
        this._source = source;
    }

    getSource() {
        return this._source;
    }

    hasChildren() {
        return this.children.length > 0;
    }

    hasParentContext() { 
        return !Lang.isEmpty(this.parentContext);
    }

    hasValueObjectAttributes() { 
        return !Lang.isEmpty(this.valueObjectAttributes);
    }

    setAttributeIsSetByLabel(name, val) { 
        if (!this.hasParentContext) {
            console.error(`trying to set an attribute on a shortcut ${this}, but there is no parent context.`)
        } else {
            this.parentContext.setAttributeIsSetByLabel(name, val)
        }
    }

    get isComplete() {
        console.warn("isComplete getter not implemented by " + this.constructor.name);
        return true;
    }
}

export default Shortcut;
