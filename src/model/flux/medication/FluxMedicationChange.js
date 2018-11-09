import MedicationChange from '../../shr/medication/MedicationChange';
import FluxMedicationBeforeChange from './FluxMedicationBeforeChange';
import Type from "../../shr/entity/Type";
import Entry from '../../shr/base/Entry';
import EntryType from '../../shr/base/EntryType';
import codeableConceptUtils from '../../CodeableConceptUtils.jsx';

class FluxMedicationChange {
    constructor(json, patientRecord) {
        this._medicationChange = MedicationChange.fromJSON(json);
        this._patientRecord = patientRecord;
        if (!this._medicationChange.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/medication/MedicationChange';
            this._medicationChange.entryInfo = entry;
        }
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
     * Returns medicationRequested object
     */
    get medicationBeforeChange() {     
      return this._medicationChange.medicationBeforeChange;
    }

    /**
     * Set the MedicationBeforeChange object
     */
    set medicationBeforeChange(medication) {

        if (medication) {        
            // Create a new Flux Medicaion Before Change object to add the medication value to
            this._medicationChange.medicationBeforeChange = new FluxMedicationBeforeChange();
            this._medicationChange.medicationBeforeChange.value = this._patientRecord.createEntryReferenceTo(medication);
        } else {
            this._medicationChange.medicationBeforeChange = null;
        }
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
