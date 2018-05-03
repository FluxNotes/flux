import MedicationChange from '../shr/medication/MedicationChange';

class FluxMedicationChange {
    constructor(json) {
        this._medicationChange = MedicationChange.fromJSON(json);
    }
    /**
     * Get the entry information.
     */
    get entryInfo() {
        return this._medicationChange.entryInfo;
    }
    /**
     * Get the MedicationBeforeChange object.
     */
    get medicationBeforeChange() {
      return this._medicationChange.medicationBeforeChange;
    }

    /**
     * Get the MedicationAfterChange object.
     */
    get medicationAfterChange() {
      return this._medicationChange.medicationAfterChange;
    }
}

export default FluxMedicationChange;
