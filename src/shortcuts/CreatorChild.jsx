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
        super.determineParentContext(contextManager, this.metadata["knownParentContexts"], this.metadata["parentAttribute"]);
        let text = this.determineText(contextManager);
        if (!Lang.isUndefined(text)) {
            if (Lang.isArray(text) || text === 'date-id') {
                this.flagForTextSelection(text);
            } else {
                this.setText(text);
            }
        }

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

            if (this.metadata["subtype"] && this.metadata["subtype"] === "multi-choice") {
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
            const attributeValue = this.parentContext ? this.parentContext.getAttributeValue(this.metadata.parentAttribute) || 'date-id' : 'date-id';
            return attributeValue;
        } else if (Lang.isArray(this.metadata.picker)) {
            return this.metadata.picker;
        } else {
            // Check the attribute value of the parent to filter the options based on which ones exist in the editor already
            const attributeValue = this.parentContext ? this.parentContext.getAttributeValue(this.metadata.parentAttribute) || [] : [];
            return this.getValueSet(this.metadata.picker).filter(item => {
                // If the current attribute value contains this item in the ValueSet, don't include it in the options to select from
                return !Lang.includes(attributeValue, item.name);
            }).map((item) => {
                return {"key": item.id || item.code || item["MedDRA v12.0 Code"], "context": item.name, "object": item};
            });
        }
    }

    getValueSet(spec) {
        let args = spec["args"];
        let category = spec["category"];
        let valueSet = spec["valueSet"];
        if (args) {
            return ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            return ValueSetManager.getValueList(category, valueSet);
        }
    }

    setText(text, updatePatient = true) {
        const previousText = this.text; // Store previous text to allow for reselection of multi-choice subtypess
        this.text = this._getTriggerWithoutPrefix(text);
        let value = this.text;
        if (this.metadata.picker === 'date-id') {
            value = moment(text, 'MM-DD-YYYY').format('D MMM YYYY');
        }
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue(this.metadata.parentAttribute, value, false, updatePatient, previousText);
        }
    }

    getText() {
        return this.text;
    }

    serialize() {
        return `${this.getPrefixCharacter()}${this.getText()}`;
    }

    getDisplayText() {
        return this.text ? this.text : this._getTriggerWithoutPrefix(this.metadata.label);
    }

    getShortcutType() {
        return this.metadata["id"];
        //throw new Error("getShortcutType on CreatorChild called.");
        //return "#" + this.metadata.stringTriggers[0].name;
    }

    get isComplete() {
        if (this.parentContext) {
            const parentAttributeValue = this.parentContext.getAttributeValue(this.metadata.parentAttribute);

            // If we have a multi-choice shortcut, it is incomplete only if the label inserted with no value selected
            if (Lang.isArray(parentAttributeValue)) {
                // If text matches the label, no value selected yet. Render as incomplete
                return this.getText() !== this.metadata.label.substring(1);
            }

            return !!parentAttributeValue; // If parent attribute is defined, shortcut is complete, else it is incomplete
        }

        return false;
    }
}