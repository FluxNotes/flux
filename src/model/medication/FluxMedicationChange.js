import MedicationChange from '../shr/medication/MedicationChange';
import Type from "../shr/entity/Type";
import codeableConceptUtils from '../CodeableConceptUtils.jsx';

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
        console.log(this._medicationChange);
        console.log(this._medicationChange.medicationBeforeChange);
      return this._medicationChange.medicationBeforeChange;
    }

    set medicationBeforeChange(medication) {
        this._medicationChange.medicationBeforeChange = medication;
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
        // Return code
        return this._medicationChange.type.value.coding[0].code;
    }

    set type(code) {

        if (!this._medicationChange.type) {
            this._medicationChange.type = new Type();
        }
        this._medicationChange.type.value = codeableConceptUtils.getCodeableConceptFromTuple({value: code, codeSystem: "http://standardhealthrecord.org/spec/shr/medication/cs/#MedicationChangeTypeCS", displayText: code} );

    }

    /**
     * Getter for when the medicationChange happened, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenChanged() {
        return this._medicationChange.entryInfo.creationTime.value;
    }
    /**
     * Return a JSON representation of medicationChange
     */
    toJSON() {
        return this._medicationChange.toJSON();
    }
}

export default FluxMedicationChange;
