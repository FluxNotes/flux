import Context from '../context/Context';
//import React from 'react';
import Lang from 'lodash';
import moment from 'moment';
import { v4 } from 'uuid';
import ContextCalendar from '../context/ContextCalendar';
import ContextListOptions from '../context/ContextListOptions';

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

    onBeforeDeleted() {
        if (this.isContext() && this.hasChildren()) {
            return false;
        }
        if (this.isContext() && this.contextManager) {
            this.contextManager.removeShortcutFromContext(this);
        }
        return true;
    }

    setConfiguration(config) {
        this.configuration = config;
    }

    // by default shortcuts are not Contexts.
    isContext() {
        return false;
    }

    getDisplayText() {
        return this.getText();
    }

    getId() {
        return this.metadata["id"];
    }

    getLabel() {
        throw new Error("Invalid context. " + this.constructor.name);
    }

    getPrefixCharacter() {
        throw new TypeError("Primitive shortcut has no prefix character");
    }

    getShortcutType() {
        throw new TypeError("Base Shortcut has no type");
    }

    setSource(source) {
        this._source = source;
    }

    getSource() {
        return this._source;
    }

    // Slim App
    getAsString () {
        return "#null";
    }

    getText() {
        return this.getShortcutType();
    }

    clearValueSelectionOptions() {
        this.optionsToSelectFrom = null;
    }

    getValueSelectionOptions() {
        return this.optionsToSelectFrom;
    }

    //options is array of {key: item.entryId, context: item.specificType.coding[0].displayText, object: item, date: item.<name of the object that holds the date. Varies for each shortcut>}
    flagForTextSelection(options) {
        // Sort the options by time if options is an array
        if (Lang.isArray(options)) {
            options.sort(this._optionsTimeSorter);
        }
        this.optionsToSelectFrom = options;
    }

    needToSelectValueFromMultipleOptions() {
        return !Lang.isNull(this.optionsToSelectFrom);
    }

    serialize() {
        return this.getText();
    }

    updatePatient(patient, contextManager) {
        throw new Error("update patient not implemented for " + this.constructor.name);
    }

    validateInCurrentContext(contextManager) {
        return []; // no errors
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
        if (this.hasParentContext()) this.parentContext.setAttributeIsSetByLabel(name, val);
    }

    get isComplete() {
        return true;
    }

    get completionComponent() {
        switch (this.metadata.subtype) {
        case "number":
            console.error(`We don't currently support a completion component for ${this.metadata.subtype}-subtypes; trying to get a completionComponent for ${this.metadata.id}`);
            return null;
        case "date":
            return ContextCalendar;
        case "choice":
            return ContextListOptions;
        case "multi-choice":
            console.error(`We don't currently support a completion component for ${this.metadata.subtype}-subtypes; trying to get a completionComponent for ${this.metadata.id}`);
            return null;
        default:
            console.error(`We don't currently support a completion component for ${this.metadata.subtype}-subtypes; trying to get a completionComponent for ${this.metadata.id}`);
            return null;
        }
    }

    get isComplete() {
        console.error("isComplete getter not implemented by " + this.constructor.name);
        return true;
    }
}

export default Shortcut;
