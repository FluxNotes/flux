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
        const voaList = this.metadata["valueObjectAttributes"];
        let isSet, result = false;
        voaList.forEach((voa) => {
            isSet = this.getAttributeIsSet(voa.name);
            if (!isSet) {
                result = true;
                return;
            }
        });
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
        return this.metadata["name"];
    }

    getResultText() {
        return `${this.getPrefixCharacter()}${this.getText()}`;
    }

    getId() {
        return this.metadata["id"];
    }

    getPrefixCharacter() {
        return "#";
    }

    hasValueObjectAttributes() {
        console.log('this.metadata: ', this.metadata);
        return !Lang.isEmpty(this.metadata["valueObjectAttributes"]);
    }

    get isComplete() {
        return this.hasChildren();
    }
}