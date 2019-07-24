import MedicationBeforeChange from '../shr/medication/MedicationBeforeChange';

class FluxMedicationBeforeChange {
    constructor(json) {
        this._medicationBeforeChange = MedicationBeforeChange.fromJSON(json);
    }
    /**
     * Get the object's value, the reference the referenced Medication.
     */
    get value() {
        return this._medicationBeforeChange.value;
    }

    set value(value) {
        this._medicationBeforeChange.value = value;
    }
    /**
     * Get the entryId of the referenced Medication.
     */
    get reference() {
        return this._medicationBeforeChange.value;
    }
    /**
     * Get the entryId of the referenced Medication.
     */
    get entryId() {
        return this._medicationBeforeChange.value.entryId;
    }
    /**
     * Get the shrId of the subject.
     */
    get shrId() {
        return this._medicationBeforeChange.value.shrId;
    }
    /**
     * Return a JSON representation of medicationBeforeChange
     */
    toJSON() {
        return this._medicationBeforeChange.toJSON();
    }
}

export default FluxMedicationBeforeChange;