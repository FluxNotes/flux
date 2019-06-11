import Shortcut from './Shortcut';
import ValueSetManager from '../lib/ValueSetManager';
import moment from 'moment';
import Lang from 'lodash';

export default class CreatorChild extends Shortcut {
    constructor(onUpdate, metadata) {
        super();
        this.metadata = metadata;
    }

    getPrefixCharacter() {
        return "#";
    }

    initialize(contextManager, trigger, updatePatient = true) {
        super.initialize(contextManager, trigger, updatePatient);
        let text = this.determineText(contextManager);
        if (!Lang.isUndefined(text)) {
            if (Lang.isArray(text) || text === 'date-id') {
                this.flagForTextSelection(text);
            } else {
                this.setText(text);
            }
        }

        super.determineParentContext(contextManager, this.metadata["knownParentContexts"], this.metadata["parentAttribute"]);

        //console.log("set parent context to " + this.parentContext);
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
        var found = false;
        var picker = false;
        //console.log(trigger);
        /*        const triggerNoPrefix = trigger.substring(1);
         console.log("trigger no prefix = " + triggerNoPrefix);*/
        //console.log(this.metadata.stringTriggers);
        if (this.metadata.stringTriggers) {
            for (var i = 0; i < this.metadata.stringTriggers.length; i++) {
                //console.log("  is string trigger? " + this.metadata.stringTriggers[i].name);
                if (this.metadata.stringTriggers[i].name === trigger) {
                    found = true;
                    if (this.metadata.stringTriggers[i].picker) {
                        picker = true;
                    }
                    break;
                }
            }
        }
        if (trigger === this.metadata.label) {
            // Set text to the label value (placeholder)
            this.text = this._getTriggerWithoutPrefix(trigger);
            this.parentContext.setAttributeIsSetByLabel(this.metadata.parentAttribute, true);
        } else if (!found || !picker) {
            this.setText(trigger, updatePatient);
            this.clearValueSelectionOptions();
        }
    }

    _getTriggerWithoutPrefix(trigger) {
        const prefix = this.getPrefixCharacter();
        if (trigger.startsWith(prefix)) {
            return trigger.substring(prefix.length);
        }
        return trigger;
    }

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result && !Lang.isUndefined(this.parentContext)) {
            const parentAttributeName = this.metadata.parentAttribute;
            if (this.metadata["subtype"] && this.metadata["subtype"] === "list") {
                //console.log("onBeforeDeleted of a list item");
                let currentList = this.parentContext.getAttributeValue(parentAttributeName);
                let oneToDelete = this.text;
                let newList = currentList.filter((item) => {
                    return item !== oneToDelete;
                });
                this.parentContext.setAttributeValue(parentAttributeName, newList, false);
            } else {
                this.parentContext.setAttributeValue(parentAttributeName, null, false);
            }
            this.parentContext.setAttributeIsSetByLabel(parentAttributeName, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

    // This returns a placeholder object to trigger opening the Context Portal.
    // return 'date-id' opens calendar.
    determineText(contextManager) {
        if (!Lang.isObject(this.metadata.picker)) {
            return this.metadata.picker;
        } else if (Lang.isArray(this.metadata.picker)) {
            return this.metadata.picker;
        } else {
            return this.getValueSet(this.metadata.picker).map((item) => {
                return {"key": item.id || item.code, "context": item.name, "object": item};
            });
        }
    }

    getValueSet(spec) {
        let args = spec["args"];
        let category = spec["category"];
        let valueSet = spec["valueSet"];
        if (args) {
            //console.log(category + "/" + valueSet + " with " + args);
            return ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            //console.log(category + "/" + valueSet);
            return ValueSetManager.getValueList(category, valueSet);
        }
    }

    setText(text, updatePatient = true) {
        this.text = this._getTriggerWithoutPrefix(text);
        let value = this.text;
        if (this.metadata.picker === 'date-id') {
            value = moment(text, 'MM-DD-YYYY').format('D MMM YYYY');
        }
        if (!Lang.isUndefined(this.parentContext)) {
            // console.log("set " + this.metadata.parentAttribute + " to " + value);
            this.parentContext.setAttributeValue(this.metadata.parentAttribute, value, false, updatePatient);
        }
    }

    getText() {
        return this.text;
    }

    serialize() {
        return `${this.getPrefixCharacter()}${this.getText()}`;
    }

    getDisplayText() {
        return this.text;
    }


    getShortcutType() {
        return this.metadata["id"];
        //throw new Error("getShortcutType on CreatorChild called.");
        //return "#" + this.metadata.stringTriggers[0].name;
    }

    validateInCurrentContext(contextManager) {
        let errors = [];
        return errors;
    }

    static getStringTriggers() {
        throw new Error("getStringTriggers on CreatorChild called.");
        // if it's a function, we need to call it
        //return this.metadata.stringTriggers;
    }

    static getTriggerRegExp() {
        return new RegExp(this.metadata.regexpTrigger);
    }

    static getDescription() {
        return this.metadata.description;
    }

    getId() {
        return this.metadata["id"];
    }

    get isComplete() {
        if (this.parentContext) {
            const parentAttributeValue = this.parentContext.getAttributeValue(this.metadata.parentAttribute);
            if (Lang.isArray(parentAttributeValue)) {
                // For creators that support multiple options, incomplete if there are none specified
                return !Lang.isEmpty(parentAttributeValue);
            }
            return !!parentAttributeValue; // If parent attribute is defined, shortcut is complete, else it is incomplete
        }
        return true;
    }
}