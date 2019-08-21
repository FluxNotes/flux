import MedicationStatement from '../../shr/core/MedicationStatement';
import FluxMedicationStatementAfterChange from './FluxMedicationStatementAfterChange';
import * as codeableConceptUtils from '../../CodeableConceptUtils';
import _ from 'lodash';
import moment from 'moment';
import FluxMedicationBase from './FluxMedicationBase';
import StatementDateTime from '../../shr/core/StatementDateTime';
import TreatmentIntent from '../../shr/core/TreatmentIntent';

class FluxMedicationStatement extends FluxMedicationBase {
    constructor(json, patientRecord) {
        super(json);
        this._entry = this._medicationStatement = MedicationStatement.fromJSON(json);
        this._patientRecord = patientRecord;
        if (!this._medicationStatement.entryInfo) {
            this._medicationStatement.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/core/MedicationStatement');
            const today = new moment().format('D MMM YYYY');
            const statementDateTime = new StatementDateTime();
            statementDateTime.dateTime = today;
            this._medicationStatement.statementDateTime = statementDateTime;
        }
    }

    get metadata() {
        return this._medicationStatement.metadata;
    }

    set metadata(metadata) {
        this._medicationStatement.metadata = metadata;
    }

    /**
     * Get the MedicationStatementAfterChange object.
     * Returns medicationRequested object
     */
    get medicationStatementAfterChange() {
        if (!this._medicationStatement.medicationStatementAfterChange) return null;
        return this._medicationStatement.medicationStatementAfterChange;
    }

    /**
     * Get the type of medication change
     * Returns type as a string
     */
    get type() {
        return this._medicationStatement.treatmentIntent.value.coding[0].codeValue.value;
    }

    set type(code) {
        if (!this._medicationStatement.treatmentIntent) {
            this._medicationStatement.treatmentIntent = new TreatmentIntent();
        }

        this._medicationStatement.treatmentIntent.value = codeableConceptUtils.getCodeableConceptFromTuple({value: code, codeSystem: "http://standardhealthrecord.org/spec/shr/medication/cs/#MedicationChangeTypeCS", displayText: code} );
    }

    /**
     * Getter for when the medicationChange happened, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get lastUpdated() {
        return this._medicationStatement.metadata.lastUpdated.dateTime;
    }

    // Set dosage of medicationStatementAfterChange
    set afterDosage(amount) {
        if (!amount) {
            if (this.medicationStatementAfterChange) {
                this.removeMedicationAfterAndMedicationStopDate();
            } else {
                // Set Stored value to null
                this.medAfterDoseAmount = null;
            }
        } else {
            if (this._medicationStatement.medicationStatementAfterChange) {
                const medAfter = this._patientRecord.getEntryFromReference(this.medicationStatementAfterChange.value);
                medAfter.dose = amount;
            } else if (this.stopDate) {
                const medAfter = this.createMedicationAfterFromMedicationStopDate();
                medAfter.dose = amount;
            } else {
                // Store value until medBefore is set
                this.medAfterDoseAmount = amount;
            }
        }
    }

    get relatedRequest() {
        return this._medicationStatement.relatedRequest ? this._medicationStatement.relatedRequest.value: null;
    }

    // Clones medicationBefore and sets medicationAfter to cloned object
    // Sets endDate for medicationBefore and sets startDate for medAfter
    // Adds medicationAfter to patient
    createMedicationAfterFromMedicationStopDate() {
        const medBefore = this._patientRecord.getEntryFromReference(this._medicationStatement);
        const today = new moment().format('D MMM YYYY');
        const medAfter = _.cloneDeep(medBefore);

        // set stopDate to today
        medBefore.stopDate = today;

        // set start date for medicationAfter
        medAfter.startDate = today;
        this._patientRecord.addEntryToPatient(medAfter);
        const medAfterChange = new FluxMedicationStatementAfterChange();
        medAfterChange.value = this._patientRecord.createEntryReferenceTo(medAfter);
        this._medicationStatement.medicationStatementAfterChange = [medAfterChange];

        return medAfter;
    }

    // Removes medicationAfter from patient record and resets end date 
    removeMedicationAfterAndMedicationStopDate() {
        // Delete medicationAfterChange entry if no amount and reset end date
        const medAfter = this._patientRecord.getEntryFromReference(this.medicationStatementAfterChange.value);
        this._patientRecord.removeEntryFromPatient(medAfter);
        this._medicationStatement.medicationStatementAfterChange = null;
        if (this.stopDate) {
            this.stopDate = medAfter.stopDate;
        }
    }

    get startDate() {
        return this._medicationStatement.occurrenceTimeOrPeriod.value.beginDateTime.dateTime;
    }

    get whenChanged() {
        return this._medicationStatement.statementDateTime.dateTime;
    }
}

export default FluxMedicationStatement;
