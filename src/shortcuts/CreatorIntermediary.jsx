import Shortcut from './Shortcut';
import Lang from 'lodash';

export default class CreatorIntermediary extends Shortcut {
    constructor(onUpdate, metadata) {
        super();
        this.metadata = metadata;
        this.text = "#" + this.metadata["name"];

        // get attribute descriptions
        this.onUpdate = onUpdate;
        this.setAttributeValue = this.setAttributeValue.bind(this);
    }

    initialize(contextManager, trigger = undefined, updatePatient = true) {
        super.initialize(contextManager, trigger, updatePatient);

        // const knownParent = this.metadata["knownParentContexts"];

        // if (knownParent) {
        //     this.parentContext = contextManager.getActiveContextOfType(knownParent);
        // } else {
        //     this.parentContext = contextManager.getCurrentContext();
        // }
        super.determineParentContext(contextManager, this.metadata["knownParentContexts"], this.metadata["parentAttribute"]);

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue(this.metadata["parentAttribute"], true, false, updatePatient);
            this.parentContext.addChild(this);
        }
    }

    isContext() {
        return this.metadata.isContext;
    }

    shouldBeInContext() {
        //console.log(this.getShortcutType() + " " + this.getLabel());
        const voaList = this.metadata["valueObjectAttributes"];
        //let value, result = false;
        let isSet, result = false;
        voaList.forEach((voa) => {
            //console.log(voa);
            //value = this.getAttributeValue(voa.name);
            isSet = this.getAttributeIsSet(voa.name);
            //console.log(voa.name + ": " + isSet);
/*            if (Lang.isNull(value)) {
                result = true;
                return;
            }
            //console.log(value);
            if (Lang.isString(value)) {
                if (value.length === 0) {
                    result = true;
                    return;
                }
            } else if (Lang.isArray(value)) {
                if (value.length === 0) {
                    result = true;
                    return;
                }
            } else if (Lang.isBoolean(value)) {
                if (!value) {
                    result = true;
                    return;
                }
            }*/
            if (!isSet) {
                result = true;
                return;
            }
        });
        //console.log(this.getShortcutType() + " (CreatorIntermediary) is in context: " + result);
        return result;
    }

    getShortcutType() {
        return this.metadata["id"];
    }

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        this.parentContext.setAttributeValue(this.metadata["parentAttribute"], false, false);
        this.parentContext.removeChild(this);
        return result;
    }
    
    getAttributeIsSet(name) {
        const voaList = this.metadata["valueObjectAttributes"];
        let result = voaList.filter(function (item) {
            return item.name === name;
        });
        if (result && result[0]) {
            return this.parentContext.getAttributeIsSet(result[0].toParentAttribute);
        } else {
            throw new Error("Unknown attribute " + name + " on " + this.metadata["id"]);
        }
    }

    getAttributeValue(name) {
        //console.log("getAttribute of " + this.metadata["id"] + " called " + name);
        //"valueObjectAttributes": [  {"name":"date", "toParentAttribute":"asOfDateDate"} ],
        const voaList = this.metadata["valueObjectAttributes"];
        let result = voaList.filter(function (item) {
            return item.name === name;
        });
        if (result && result[0]) {
            return this.parentContext.getAttributeValue(result[0].toParentAttribute);
        } else {
            throw new Error("Unknown attribute " + name + " on " + this.metadata["id"]);
        }
    }

    isAttributeSupported(name) {
        const voaList = this.metadata["valueObjectAttributes"];
        let result = voaList.filter(function (item) {
            return item.name === name;
        });
        return (result && result[0]);
    }

    setAttributeValue(name, value, publishChanges = true, updatePatient = true) {
        const voaList = this.metadata["valueObjectAttributes"];
        let result = voaList.filter(function (item) {
            return item.name === name;
        });
        if (result && result[0]) {
            this.parentContext.setAttributeValue(result[0].toParentAttribute, value, publishChanges, updatePatient);
            if (this.isContext()) this.updateContextStatus();
        } else {
            throw new Error("Unknown attribute " + name + " on " + this.metadata["id"]);
        }
    }

    getLabel() {
        return this.metadata["name"];
    }

    getText() {
        return "#" + this.metadata["name"];
    }

    getId() {
        return this.metadata["id"];
    }

    getPrefixCharacter() {
        return "#";
    }
}