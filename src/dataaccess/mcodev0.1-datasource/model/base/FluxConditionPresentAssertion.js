//import BodySite from '../shr/entity/BodySite';
import ConditionPresentAssertion from '../shr/base/ConditionPresentAssertion';
import FluxObservation from '../base/FluxObservation';
import FluxEntry from './FluxEntry';

class FluxConditionPresentAssertion extends FluxEntry {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = ConditionPresentAssertion.fromJSON(json);
    }

    get entryInfo() {
        return this._condition.entryInfo;
    }

    get diagnosisDate() {
        if (this._condition.onset) {
            return this._condition.onset.value;
        }
        return null;
    }

    get code() {
        if (!this._condition.value) return null;
        return this._condition.value.coding[0].code.value;
    }

    get codeSystem() {
        if (!this._condition.value) return null;
        return this._condition.value.coding[0].codeSystem.value;
    }

    get codeURL() {
        return this.codeSystem + "/" + this.code;
    }

    get type() {
        if (!this._condition.value) return null;
        return this._displayTextOrCode(this._condition.value.coding[0]);
    }

    get observation() {
        const conditionEntryId = this._condition.entryInfo.entryId.value || this._condition.entryInfo.entryId;
        return this._patientRecord.getEntriesOfType(FluxObservation).filter((item) => {
            return item._observation && item._observation.specificFocusOfFinding && item._observation.specificFocusOfFinding.value._entryId === conditionEntryId;
        }).map((item) => {
            return this._patientRecord.getEntryFromReference(item);
        }) || [];
    }

    get bodySite() {
        if (!this._condition.anatomicalLocation || this._condition.anatomicalLocation.length < 1) {
            return null;
        // } else if (this._condition.anatomicalLocation[0].anatomicalLocationOrLandmarkCode instanceof BodySite) {
        //     return this._displayTextOrCode(this._condition.anatomicalLocation[0].anatomicalLocationOrLandmarkCode.value.coding[0]);
        } else { // CodeableConcept
            return this._displayTextOrCode(this._condition.anatomicalLocation[0].anatomicalLocationOrLandmarkCode.value.coding[0]);
        }
    }

    get clinicalStatus() {
        return this._condition.clinicalStatus ? this._condition.clinicalStatus.value : null;
    }

    get laterality() {
        if (    !this._condition.anatomicalLocation ||
                this._condition.anatomicalLocation.length < 1 ||
                !this._condition.anatomicalLocation[0].laterality ||
                !this._condition.anatomicalLocation[0].laterality.value) return null;
        return this._displayTextOrCode(this._condition.anatomicalLocation[0].laterality.value.coding[0]);
    }

    get author() {
        if (this._condition.author) {
            return this._condition.author.value;
        } else {
            return null;
        }
    }

    get informant() {
        if (this._condition.informant) {
            return this._condition.informant.value;
        } else {
            return null;
        }
    }

    get relatedEncounterReference() {
        if (this._condition.relatedEncounter) {
            return this._condition.relatedEncounter.value;
        } else {
            return null;
        }
    }


    /**
     * Extract a human-readable string from a code.
     *
     * @param {Coding} coding
     * @returns {string} the display text if available, otherwise the code.
     * @private
     */
    _displayTextOrCode(coding) {
        return coding.displayText ? coding.displayText.value : coding.code.value;
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxConditionPresentAssertion;