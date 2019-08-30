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
        const text = this.determineText(contextManager);
        if (!Lang.isUndefined(text)) {
            if (Lang.isArray(text)) {
                this.flagForTextSelection(text);
            } else {
                this.setText(text);
            }
        }

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
        if (trigger === this.metadata.label) {
            this.parentContext.setAttributeIsSetByLabel(this.metadata.parentAttribute, true);
        } else {
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
            const parentAttributeName = this.metadata.parentAttribute;
            if (this.metadata["subtype"] && this.metadata["subtype"] === "multi-choice") {
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

    // This returns an array of possible text values (if text values are enumerated) or the set text value.
    determineText(contextManager) {
        // TODO: If we need to support stringTriggers as arrays, we will need this case and will need to add a unique key to the array returned
        // if (Lang.isArray(this.metadata.stringTriggers)) {
        //     return this.metadata.stringTriggers;
        // }
        // Check the attribute value of the parent to filter the options based on which ones exist in the editor already
        const attributeValue = this.parentContext ? this.parentContext.getAttributeValue(this.metadata.parentAttribute) || [] : [];
        // If an attributeValue is set and there are no stringTriggers, we can return the value
        if (!Lang.isEmpty(attributeValue) && Lang.isEmpty(this.metadata.stringTriggers)) return attributeValue;
        return this.getValueSet(this.metadata.stringTriggers).filter(item => {
            // If the current attribute value contains this item in the ValueSet, don't include it in the options to select from
            return !Lang.includes(attributeValue, item.name);
        }).map((item) => {
            return {"key": item.id || item.code || item["MedDRA v12.0 Code"], "context": item.name, "object": item};
        });
    }

    getValueSet(spec) {
        if (Lang.isEmpty(spec)) return [];
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
        const previousText = this.text; // Store previous text to allow for reselection of multi-choice subtypess
        this.text = this._getTriggerWithoutPrefix(text);
        let value = this.text;
        if (this.metadata.subtype === 'date') {
            let date = moment(text, 'D MMM YYYY', true);
            if (!date.isValid()) {
                // Date format is #MM/DD/YYYY. Non-strict parsing used due to leading #.
                date = moment(text, 'MM/DD/YYYY');
            }
            // Format all dates to same format, regardless of incoming format
            value = date.format('D MMM YYYY'); // value updates the entry and requires this format
            this.text = date.format('MM/DD/YYYY'); // this.text is used for displaying values of shortcut in editor
        }
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue(this.metadata.parentAttribute, value, false, updatePatient, previousText);
        }
    }

    getText() {
        return this.text;
    }

    serialize() {
        return `${this.getPrefixCharacter()}${this.getDisplayText()}`;
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
                return this.getDisplayText() !== this.metadata.label.substring(1);
            }

            return !!parentAttributeValue; // If parent attribute is defined, shortcut is complete, else it is incomplete
        }

        return false;
    }
}
