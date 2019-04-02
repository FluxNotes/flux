import EntryShortcut from './EntryShortcut';
import Lang from 'lodash';
export default class SingleHashtagKeyword extends EntryShortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super(metadata);
        this.onUpdate = onUpdate;
        this.patient = patient;
        this._initializeValueObject(metadata, patient, shortcutData);
        this._initializeValueObjectAttributes(metadata);
        this.setAttributeValue = this.setAttributeValue.bind(this);
    }

    hasRequiredAndIncompleteVOA() {
        const voaList = this.metadata["valueObjectAttributes"];
        let value, isSettable, isRequired;
        let result = false;
        voaList.forEach((voa) => {
            value = this.getAttributeValue(voa.name);
            // Shortcuts.json defines isSettable as a string true
            isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            isRequired = Lang.isUndefined(voa.isRequired) ? false : voa.isRequired;
            if (!isRequired) {
                return;
            } else {
                if (isSettable) {
                    if (Lang.isArray(value) && value.length === 0) {
                        result = true;
                        return;
                    } else if (!this.getAttributeIsSet(voa.name)) {
                        result = true;
                        return;
                    }
                }
            }
        });
        return result;
    }

    get isComplete() {
        return !this.hasRequiredAndIncompleteVOA();
    }

    isChildRequired(child) {
        return this.valueObjectAttributes[child.metadata.parentAttribute].isRequired;
    }
}