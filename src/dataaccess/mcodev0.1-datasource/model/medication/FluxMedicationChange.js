import FluxEntry from '../base/FluxEntry';
import MedicationChange from '../shr/medication/MedicationChange';
import FluxMedicationBeforeChange from './FluxMedicationBeforeChange';
import FluxMedicationAfterChange from './FluxMedicationAfterChange';
import TopicCode from '../shr/base/TopicCode';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import * as codeableConceptUtils from '../CodeableConceptUtils.jsx';
import Lang from 'lodash';
import moment from 'moment';

class FluxMedicationChange extends FluxEntry {
    constructor(json, patientRecord) {
        super(json);
        this._entry = this._medicationChange = MedicationChange.fromJSON(json);
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
            // Create a new Flux Medication Before Change object to add the medication value to
            this._medicationChange.medicationBeforeChange = new FluxMedicationBeforeChange();
            this._medicationChange.medicationBeforeChange.value = this._patientRecord.createEntryReferenceTo(medication);

            if (this.medAfterDoseAmount && !this.medicationAfterChange) {
                const medAfter = this.createMedicationAfterFromMedicationBefore();
                medAfter.dose = this.medAfterDoseAmount;
            }
        } else {
            if (this.medicationAfterChange) {
                this.removeMedicationAfterAndMedicationBefore();
            }
            this._medicationChange.medicationBeforeChange = null;
        }
    }

    /**
     * Get the MedicationAfterChange object.
     * Returns medicationRequested object
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
        return this._medicationChange.topicCode.value.coding[0].code.value;
    }

    set type(code) {
        if (!this._medicationChange.topicCode) {
            this._medicationChange.topicCode = new TopicCode();
        }

        this._medicationChange.topicCode.value = codeableConceptUtils.getCodeableConceptFromTuple({value: code, codeSystem: "http://standardhealthrecord.org/spec/shr/medication/cs/#MedicationChangeTypeCS", displayText: code} );
    }

    /**
     * Getter for when the medicationChange happened, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenChanged() {
        return this._medicationChange.entryInfo.creationTime.value;
    }

    // Set dosage of medicationAfterChange
    set afterDosage(amount) {
        if (!amount) {
            if (this.medicationAfterChange) {
                this.removeMedicationAfterAndMedicationBefore();
            } else {
                // Set Stored value to null
                this.medAfterDoseAmount = null;
            }
        } else {
            if (this._medicationChange.medicationAfterChange) {
                const medAfter = this._patientRecord.getEntryFromReference(this.medicationAfterChange.value);
                medAfter.dose = amount;
            } else if (this.medicationBeforeChange) {
                const medAfter = this.createMedicationAfterFromMedicationBefore();
                medAfter.dose = amount;
            } else {
                // Store value until medBefore is set
                this.medAfterDoseAmount = amount;
            }
        }
    }

    // Clones medicationBefore and sets medicationAfter to cloned object
    // Sets endDate for medicationBefore and sets startDate for medAfter
    // Adds medicationAfter to patient
    createMedicationAfterFromMedicationBefore() {
        const medBefore = this._patientRecord.getEntryFromReference(this.medicationBeforeChange.value);
        const today = new moment().format('D MMM YYYY');
        const medAfter = Lang.cloneDeep(medBefore);

        // set endDate of medicationBefore to today
        medBefore.endDate = today;

        // set start date for medicationAfter
        medAfter.startDate = today;
        this._patientRecord.addEntryToPatient(medAfter);
        this._medicationChange.medicationAfterChange = new FluxMedicationAfterChange();
        this._medicationChange.medicationAfterChange.value = this._patientRecord.createEntryReferenceTo(medAfter);

        return medAfter;
    }

    // Removes medicationAfter from patient record and resets end date for medicationBefore
    removeMedicationAfterAndMedicationBefore() {
        // Delete medicationAfterChange entry if no amount and reset end date for medicationBefore
        const medAfter = this._patientRecord.getEntryFromReference(this.medicationAfterChange.value);
        this._patientRecord.removeEntryFromPatient(medAfter);
        this._medicationChange.medicationAfterChange = null;
        if (this.medicationBeforeChange) {
            const medBefore = this._patientRecord.getEntryFromReference(this.medicationBeforeChange.value);
            medBefore.endDate = medAfter.endDate;
        }
    }

    /**
     * Return a JSON representation of medicationChange
     */
    toJSON() {
        return this._medicationChange.toJSON();
    }
}

export default FluxMedicationChange;
