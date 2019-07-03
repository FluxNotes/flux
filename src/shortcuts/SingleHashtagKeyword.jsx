import EntryShortcut from './EntryShortcut';

export default class SingleHashtagKeyword extends EntryShortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super(metadata);
        this.onUpdate = onUpdate;
        this.patient = patient;
        this._initializeValueObject(metadata, patient, shortcutData);
        this._initializeValueObjectAttributes(metadata);
        this.setAttributeValue = this.setAttributeValue.bind(this);
    }
}