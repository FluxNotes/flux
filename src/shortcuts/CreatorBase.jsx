import EntryShortcut from './EntryShortcut';
import _ from 'lodash';

export default class CreatorBase extends EntryShortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super(metadata);
        this.isSetByLabel = {};
        this.onUpdate = onUpdate;
        this.patient = patient;
        this._initializeValueObject(metadata, patient, shortcutData);
        this._initializeValueObjectAttributes(metadata);
        this.setAttributeValue = this.setAttributeValue.bind(this);
    }

    getAttributeIsSetByLabel(name) {
        return this.isSetByLabel[name];
    }

    setAttributeIsSetByLabel(name, val) {
        this.isSetByLabel[name] = val;
    }

    get isComplete() {
        return this.hasParentContext() && this.hasChildren();
    }

    get isMissingParent() {
        return !this.hasParentContext();
    }

    get potentialParents() {
        const knownParent = this.metadata["knownParentContexts"];
        if (knownParent === 'Patient' || knownParent === undefined) return [];
        console.log(knownParent);
        if (_.isArray(knownParent)) {
            return knownParent;
        } else if (_.isString(knownParent)) {
            return [knownParent];
        } else {
            console.warn("unknown type for knownParent: element looks like ", knownParent);
            return [];
        }
    }
}
