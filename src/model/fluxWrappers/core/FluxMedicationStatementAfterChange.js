import MedicationStatement from '../../shr/core/MedicationStatement';

class FluxMedicationStatementAfterChange {
    constructor(json) {
        this._medicationStatementAfterChange = MedicationStatement.fromJSON(json);
    }
    /**
     * Get the object's value, the reference the referenced Medication.
     */
    get value() {
        return this._medicationStatementAfterChange.value;
    }

    set value(value) {
        this._medicationStatementAfterChange.value = value;
    }

    /**
     * Get the referenced Medication.
     */
    get reference() {
        return this._medicationStatementAfterChange.value;
    }
    /**
     * Get the entryId of the referenced Medication.
     */
    get entryId() {
        return this._medicationStatementAfterChange.value.entryId;
    }
    /**
     * Get the shrId of the subject.
     */
    get shrId() {
        return this._medicationStatementAfterChange.value.shrId;
    }
    /**
     * Return a JSON representation of medicationAfterChange
     */
    toJSON() {
        return this._medicationStatementAfterChange.toJSON();
    }
}

export default FluxMedicationStatementAfterChange;