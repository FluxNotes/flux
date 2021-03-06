import MedicationCodeOrReference from '../../shr/core/MedicationCodeOrReference';
import RecurrencePattern from '../../shr/core/RecurrencePattern';
import Type from '../../shr/core/Type';
import FluxEntry from '../base/FluxEntry';
import moment from 'moment';
import * as lookup from '../../../lib/MedicationInformationService.jsx';

class FluxMedicationBase extends FluxEntry {

    /*
     *  Getter for entryId
     *  Returns string corresponding to entryId
     */
    get entryId() {
        return this._entry.entryInfo.entryId.id;
    }

    /*
     *  Getter for medication
     *  Returns displayText string for medication
     */
    get medication() {
        let med = this.medicationByCode;
        if (med) {
            if (med.coding && med.coding[0]) {
                return this._displayTextOrCode(med.coding[0]);
            }
            return null;
        }

        med = this.medicationByReference;
        if (med) {
            if (med.type && med.type.value && med.type.value.coding && med.type.value.coding[0]) {
                return this._displayTextOrCode(med.type.value.coding[0]);
            }
        }
        return null;
    }

    /**
     *  Setter for medication
     */
    set medication(medicationName) {
        const medicationCodeOrReference = new MedicationCodeOrReference();
        const type = new Type();
        type.value = lookup.getCodeableConceptFromName(medicationName);
        medicationCodeOrReference.type = type;
        this._entry.medicationCodeOrReference = medicationCodeOrReference;
    }

    get medicationCodeOrReference() {
        return this._entry.medicationCodeOrReference;
    }

    set medicationCodeOrReference(medicationCodeOrReference) {
        this._entry.medicationCodeOrReference = medicationCodeOrReference;
    }

    get medicationByCode() {
        if (!this._entry.medicationCodeOrReference || !this._entry.medicationCodeOrReference.value) return undefined;
        const mcrv = this._entry.medicationCodeOrReference.value;
        if (mcrv.entryId && mcrv.entryType) {
            // it's a Reference
            return undefined;
        }
        return mcrv; // should be a CodeableConcept
    }

    get medicationByReference() {
        if (!this._entry.medicationCodeOrReference || !this._entry.medicationCodeOrReference.value) return undefined;
        const mcrv = this._entry.medicationCodeOrReference.value;
        if (mcrv.entryId && mcrv.entryType) {
            // it's a Reference
            return this._patientRecord.getEntryFromReference(mcrv);
        }
        return undefined;
    }

    /*
     *  Getter for medication over the counter flag
     *  Returns boolean value for medicationsOrCode of medication type. Returns undefined for codeable concepts.
     */
    get overTheCounter() {
        const med = this.medicationByReference;
        if (!med || !med.overTheCounter) {
            // it's either missing or a CodeableConcept. someday maybe we want a lookup?
            // but for now nothing we can do
            return undefined;
        }
        return med.overTheCounter.value;
    }

    /*
     *  Getter for amountPerDose
     *  Returns object with value and units
     */
    get amountPerDose() {
        if (!this._entry.dosage
            || !this._entry.dosage.doseAmount
            || !this._entry.dosage.doseAmount.value) return null;
        return {
            value: this._entry.dosage.doseAmount.value.number.decimal,
            units: this._entry.dosage.doseAmount.value.units.coding.codeValue.value
        };
    }

    set dose(amount) {
        if (!this._entry.dosage || !this._entry.dosage.doseAmount) return;
        this._entry.dosage.doseAmount.value.number.decimal = amount;
    }

    get dosage() {
        return this._entry.dosage;
    }

    set dosage(dosage) {
        this._entry.dosage = dosage;
    }

    /*
     *  Getter for timingOfDoses
     *  Returns object with value and units
     */
    get timingOfDoses() {
        if (!this._entry.dosage
            || !this._entry.dosage.timingOfDoses) return null;
        let timingOfDoses = this._entry.dosage.timingOfDoses;
        if (timingOfDoses.timing
            && timingOfDoses.timing.recurrencePattern instanceof RecurrencePattern) {
            let units;
            if (timingOfDoses.timing.recurrencePattern.recurrenceInterval.duration.units.value.codeValue.value === 'd') {
                units = 'per day';
            }
            return {
                value: timingOfDoses.timing.recurrencePattern.recurrenceInterval.duration.number.value,
                units: units
            };
        } else if (timingOfDoses.timing.recurrenceRange) {
            return {
                value: timingOfDoses.timing.recurrenceRange.value.positiveInt,
                units: 'cycles'
            }
        } else if (timingOfDoses.timing.timingCode) {
            return {
                value: timingOfDoses.timing.timingCode.value.coding[0].displayText.value,
                units: null
            }
        }

        return null;
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._entry.status.value; //.coding[0].displayText.value.value;
    }

    /*
     * Getter for prescribed by, using Author as the prescribing doctor
     * Returns author string
     */
    get prescribedBy() {
        if (this._entry.metadata && this._entry.metadata.informationRecorder) {
            return this._entry.metadata.informationRecorder; 
        }

        if (this._entry.medicationRequester && this._entry.medicationRequester.value) {
            const requester = this._patientRecord.getEntryFromReference(this._entry.medicationRequester.value);
            if (requester 
                && requester.person 
                && requester.person.humanName 
                && requester.person.humanName[0]
                && requester.person.humanName[0].nameAsText) {
                return requester.person.humanName[0].nameAsText.value;
            }
        } 

        return null;
    }

    /*
     * Getter for when prescribed, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenPrescribed() {
        if (this._entry.metadata
            && this._entry.metadata.authoredDateTime) {
            return this._entry.metadata.authoredDateTime.dateTime;
        }
        if (this._entry.statementDateTime) {
            return this._entry.statementDateTime.dateTime;
        }
        return null;
    }

    /*
     *  Getter for reason list for this medication
     *  Returns array of reasons
     */
    get reasons() {
        const reasons = [];
        if (this._entry.reasonCode) reasons.push(...this._entry.reasonCode);
        if (this._entry.reasonReference) reasons.push(...this._entry.reasonReference);
        return reasons;
    }

    get reasonReference() {
        return this._entry.reasonReference;
    }

    set reasonReference(reasonReference) {
        this._entry.reasonReference = reasonReference;
    }

    get code() {
        let med = this.medicationByCode;
        if (med) {
            if (med.coding && med.coding[0] && med.coding[0].codeValue) {
                return med.coding[0].codeValue.value;
            }
            return null;
        }

        med = this.medicationByReference;
        if (med) {
            if (med.type && med.type.value && med.type.value.coding && med.type.value.coding[0] && med.type.value.coding[0].codeValue) {
                return med.type.value.coding[0].codeValue.value;
            }
        }
        return null;
    }

    get routeIntoBody() {
        if (!this._entry.dosage || !this._entry.dosage.routeIntoBody) return null;
        return this._displayTextOrCode(this._entry.dosage.routeIntoBody.value.coding[0]);
    }

    get numberOfRefillsAllowed() {
        if (!this._entry.numberOfRefillsAllowed) return null;
        return this._entry.numberOfRefillsAllowed.value;
    }

    get asNeededIndicator() {
        if (!this._entry.dosage
            || !this._entry.dosage.asNeededIndicator) {
            return null;
        }
        return this._entry.dosage.asNeededIndicator.value;
    }

    get doseInstructionsText() {
        if (!this._entry.dosage
            || !this._entry.dosage.dosageInstructionsText) {
            return null;
        }
        return this._entry.dosage.dosageInstructionsText.value;
    }

    isActiveAsOf(date) {
        const start = new moment(this.startDate, "D MMM YYYY");
        const end = new moment(this.endDate, "D MMM YYYY");
        if (start && start > date) return false;
        if (end && end < date) return false;
        return true;
    }

    isActiveBetween(lowerDate, upperDate) {
        const start = new moment(this.startDate, "D MMM YYYY");
        const end = new moment(this.endDate, "D MMM YYYY");

        // If the start date is in the future
        if (start && start > upperDate) return false;

        // If the medication ended before the lowerDate
        if (end && end < lowerDate) return false;

        return true;
    }

    /**
     * Return a JSON representation of medicationRequested
     */
    toJSON() {
        return this._entry.toJSON();
    }
}

export default FluxMedicationBase;
