import MedicationAfterChange from '../shr/medication/MedicationAfterChange';

class FluxMedicationAfterChange {
    constructor(json) {
        this._medicationAfterChange = MedicationAfterChange.fromJSON(json);
    }
    /**
     * Get the object's value, the reference the referenced Medication.
     */
    get value() {
        return this._medicationAfterChange.value;
    }
    /**
     * Get the referenced Medication.
     */
    get reference() {
        return this._medicationAfterChange.value;
    }
    /**
     * Get the entryId of the referenced Medication.
     */
    get entryId() {
        return this._medicationAfterChange.value.entryId;
    }
    /**
     * Get the shrId of the subject.
     */
    get shrId() {
        return this._medicationAfterChange.value.shrId;
    }
    /**
     * Return a JSON representation of medicationAfterChange
     */
    toJSON() {
        return this._medicationAfterChange.toJSON();
    }
}

export default FluxMedicationAfterChange;