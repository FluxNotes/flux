import Shortcut from './Shortcut';
import ValueSetManager from '../lib/ValueSetManager';
import moment from 'moment';
import Lang from 'lodash';

export default class Keyword extends Shortcut {
    constructor(onUpdate, metadata) {
        super();
        this.metadata = metadata;
    }

    getPrefixCharacter() {
        return "";
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
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
        var found = false;
        var picker = false;
        for (var i = 0; i < this.metadata.keywords.length; i++) {
            if (this.metadata.keywords[i].name === trigger) {
                found = true;
                if (this.metadata.keywords[i].picker) {
                    picker = true;
                }
                break;
            }
        }
        if (!found || !picker) {
            this.setText(trigger, updatePatient);
            this.clearValueSelectionOptions();
        }
    }

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result && !Lang.isUndefined(this.parentContext)) {
            if (this.metadata["subtype"] && this.metadata["subtype"] === "list") {
                const parentAttributeName = this.metadata.parentAttribute;
                let currentList = this.parentContext.getAttributeValue(parentAttributeName);
                let oneToDelete = this.text;
                let newList = currentList.filter((item) => {
                    return item !== oneToDelete
                });
                this.parentContext.setAttributeValue(parentAttributeName, newList, false);
            } else {
                this.parentContext.setAttributeValue(this.metadata.parentAttribute, null, false);
            }
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
        const prefix = this.getPrefixCharacter();
        if (text.startsWith(prefix)) {
            text = text.substring(prefix.length);
        }
        this.text = text;
        let value = text;
        if (this.metadata.picker === 'date-id') {
            value = moment(text, 'MM-DD-YYYY').format('D MMM YYYY');
        }
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue(this.metadata.parentAttribute, value, false, updatePatient);
        }
    }

    getText() {
        return `${this.getPrefixCharacter()}${this.text}`;
    }

    getShortcutType() {
        return this.metadata["id"];
    }

    validateInCurrentContext(contextManager) {
        let errors = [];
        return errors;
    }

    static getStringTriggers() {
        throw new Error("getStringTriggers on Keyword called.");
        // if it's a function, we need to call it
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
}