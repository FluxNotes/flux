import MedicationChange from '../shr/medication/MedicationChange';

class FluxMedicationChange {
    constructor(json) {
        this._medicationChange = MedicationChange.fromJSON(json);
    }
    /**
     * Get the entry information.
     * Returns entryInfo object
     */
    get entryInfo() {
        return this._medicationChange.entryInfo;
    }
    /**
     * Get the MedicationBeforeChange object.
     * Returns medicaitonRequested object
     */
    get medicationBeforeChange() {
      return this._medicationChange.medicationBeforeChange;
    }

    /**
     * Get the MedicationAfterChange object.
     * Returns medicaitonRequested object
     */
    get medicationAfterChange() {
      return this._medicationChange.medicationAfterChange;
    }
    /** 
     * Get the type of medication change
     * Returns type as a string
     */
    get type() { 
        // // Return displayText if possible
        // return (this._medicationChange.type.value.coding[0].displayText.value 
        //     ? this._medicationChange.type.value.coding[0].displayText.value
        //     : this._medicationChange.type.value.coding[0].code
        // );
        // Return code
        return this._medicationChange.type.value.coding[0].code;
    }
    /**
     * Getter for when the medicationChange happened, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenChanged() {
        return this._medicationChange.entryInfo.creationTime.value;
    }
}

export default FluxMedicationChange;
