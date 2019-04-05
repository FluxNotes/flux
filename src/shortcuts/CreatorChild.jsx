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
        const text = this.determineText(contextManager);
        if (!Lang.isUndefined(text)) {
            if (Lang.isArray(text) || text === 'date-id') {
                this.flagForTextSelection(text);
            } else {
                this.setText(text);
            }
        }

        super.determineParentContext(contextManager, this.metadata["knownParentContexts"], this.metadata["parentAttribute"]);

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
        let found = false;
        let picker = false;
        if (this.metadata.stringTriggers) {
            for (let i = 0; i < this.metadata.stringTriggers.length; i++) {
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
        const result = super.onBeforeDeleted();
        if (result && !Lang.isUndefined(this.parentContext)) {
            if (this.metadata["subtype"] && this.metadata["subtype"] === "list") {
                const parentAttributeName = this.metadata.parentAttribute;
                const currentList = this.parentContext.getAttributeValue(parentAttributeName);
                const oneToDelete = this.text;
                const newList = currentList.filter((item) => {
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
                return {"key": item.id, "context": item.name, "object": item};
            });
        }
    }

    getValueSet(spec) {
        const args = spec["args"];
        const category = spec["category"];
        const valueSet = spec["valueSet"];
        if (args) {
            return ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
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
