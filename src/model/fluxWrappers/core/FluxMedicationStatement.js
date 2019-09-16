import MedicationStatement from '../../shr/core/MedicationStatement';
import * as codeableConceptUtils from '../../CodeableConceptUtils';
import _ from 'lodash';
import moment from 'moment';
import FluxMedicationBase from './FluxMedicationBase';
import StatementDateTime from '../../shr/core/StatementDateTime';
import TreatmentIntent from '../../shr/core/TreatmentIntent';
import MedicationStatementRelatedRequest from '../../shr/core/MedicationStatementRelatedRequest';
import OccurrenceTimeOrPeriod from '../../shr/core/OccurrenceTimeOrPeriod';
import BeginDateTime from '../../shr/core/BeginDateTime';
import TimePeriod from '../../shr/core/TimePeriod';
import EndDateTime from '../../shr/core/EndDateTime';

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

    get afterDosage() {
        return this.amountPerDose ? this.amountPerDose.value : this.medAfterDoseAmount;
    }

    // Set dosage
    set afterDosage(amount) {
        if (!amount) {
            if (this.medication) {
                this.removeMedicationAfterAndRelatedRequest();
            } else {
                // Set Stored value to null
                this.medAfterDoseAmount = null;
            }
        } else {
            if (this.medication) {
                this.dose = amount;
            } else if (this.relatedRequest) {
                this.createMedicationAfterFromRelatedRequest();
                this.dose = amount;
            } else {
                // Store value until medBefore is set
                this.medAfterDoseAmount = amount;
            }
        }
    }

    get relatedRequest() {
        return this._medicationStatement.relatedRequest ? this._medicationStatement.relatedRequest.value: null;
    }

    set relatedRequest(medication) {
        if (medication) {
            // Add reference to related Medication Request
            const relatedRequest = new MedicationStatementRelatedRequest();
            relatedRequest.value = this._patientRecord.createEntryReferenceTo(medication);
            this._medicationStatement.relatedRequest = relatedRequest;

            if (this.medAfterDoseAmount && !this.medication) {
                this.createMedicationAfterFromRelatedRequest();
                this.dose = this.medAfterDoseAmount;
            }
        } else {
            if (this.medication) {
                this.removeMedicationAfterAndRelatedRequest();
            }
            this._medicationStatement.relatedRequest = null;
        }
    }

    /**
     * Sets endDate for medicationBefore and sets startDate
     * Copies over medication information from medicationBefore
     */
    createMedicationAfterFromRelatedRequest() {
        const medBefore = this._patientRecord.getEntryFromReference(this.relatedRequest);
        const today = new moment().format('D MMM YYYY');
        const clonedMedBefore = _.cloneDeep(medBefore);

        // set endDate to today
        medBefore.endDate = today;

        this.startDate = today;
        this.endDate = clonedMedBefore.endDate;
        this.medicationCodeOrReference = clonedMedBefore.medicationCodeOrReference;
        this.reasonReference = clonedMedBefore.reasonReference;
        this.dosage = clonedMedBefore.dosage;
        this.dose = null;
    }

    // Remove all medication information from MedicationStatement and reset endDate
    removeMedicationAfterAndRelatedRequest() {
        this.medication = null;
        if (this.relatedRequest) {
            const medBefore = this._patientRecord.getEntryFromReference(this.relatedRequest);
            medBefore.endDate = this.endDate;
        }
    }

    get startDate() {
        if (!this._medicationStatement.occurrenceTimeOrPeriod
            || !this._medicationStatement.occurrenceTimeOrPeriod.value
            || !this._medicationStatement.occurrenceTimeOrPeriod.value.beginDateTime) return null;

        return this._medicationStatement.occurrenceTimeOrPeriod.value.beginDateTime.dateTime;
    }

    set startDate(date) {
        if (!this._medicationStatement.occurrenceTimeOrPeriod) this._medicationStatement.occurrenceTimeOrPeriod = new OccurrenceTimeOrPeriod();
        if (!this._medicationStatement.occurrenceTimeOrPeriod.value) this._medicationStatement.occurrenceTimeOrPeriod.value = new TimePeriod();

        const beginDateTime = new BeginDateTime();
        beginDateTime.value = date;
        this._medicationStatement.occurrenceTimeOrPeriod.value.beginDateTime = beginDateTime;
    }

    get endDate() {
        if (!this._medicationStatement.occurrenceTimeOrPeriod
            || !this._medicationStatement.occurrenceTimeOrPeriod.value
            || !this._medicationStatement.occurrenceTimeOrPeriod.value.endDateTime) return null;

        return this._medicationStatement.occurrenceTimeOrPeriod.value.endDateTime.dateTime;
    }

    set endDate(date) {
        if (!this._medicationStatement.occurrenceTimeOrPeriod) this._medicationStatement.occurrenceTimeOrPeriod = new OccurrenceTimeOrPeriod();
        if (!this._medicationStatement.occurrenceTimeOrPeriod.value) this._medicationStatement.occurrenceTimeOrPeriod.value = new TimePeriod();

        const endDateTime = new EndDateTime();
        endDateTime.value = date;
        this._medicationStatement.occurrenceTimeOrPeriod.value.endDateTime = endDateTime;
    }

    get whenChanged() {
        return this._medicationStatement.statementDateTime.dateTime;
    }
}

export default FluxMedicationStatement;
