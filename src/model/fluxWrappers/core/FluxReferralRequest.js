import ReferralRequest from '../../shr/core/ReferralRequest';
import Reference from '../../Reference';
import Lang from 'lodash';

class FluxReferralRequest {
    constructor(json) {
        if (json) {
            if (json["ReferralDate"]) {
                this._referralDate = json["ReferralDate"].value;
            }

            if (json.ResultingClinicalNote) {
                const { _ShrId, _EntryId, _EntryType } = json.ResultingClinicalNote;
                this._resultingClinicalNote = new Reference(_ShrId, _EntryId, _EntryType);
            }

            // Clone the json first otherwise the backend test fails
            const clonedJSON = Lang.cloneDeep(json);
            delete clonedJSON.ReferralDate;
            delete clonedJSON.ResultingClinicalNote;
            this._referralRequest = ReferralRequest.fromJSON(clonedJSON);
        } else {
            this._referralRequest = new ReferralRequest();
        }
    }

    get referralDate() {
        return this._referralDate;
    }

    set referralDate(date) {
        this._referralDate = date;
    }

    get entryInfo() {
        return this._referralRequest.entryInfo;
    }

    get reasonReference() {
        return this._referralRequest.reasonReference;
    }

    get expectedPerformanceTime() {
        return this._referralRequest.expectedPerformanceTime.value;
    }

    get practitioner() {
        if (this._referralRequest.expectedPerformer)
            return this._referralRequest.expectedPerformer.value.practitioner.name;
        return null;
    }

    get department() {
        if (this._referralRequest.expectedPerformer) {
            let org = this._referralRequest.expectedPerformer.value.person.partOf;
            while (org && org.type.value.coding[0].codeValue !== 'dept') {
                org = org.partOf;
            }
            if (org) {
                return org.organizationName.value;
            }
            return null;
        }
        return null;
    }

    get provider() {
        if (this._referralRequest.expectedPerformer) {
            let org = this._referralRequest.expectedPerformer.value.person.partOf;
            while (org && org.type.value.coding[0].codeValue !== 'prov') {
                org = org.partOf;
            }
            if (org) {
                return org.organizationName.value;
            }
            return null;
        }
        return null;
    }

    get author() {
        if (this._referralRequest.author) {
            return this._referralRequest.author.value;
        } else {
            return null;
        }
    }

    // returns resulting clinical note reference
    get resultingClinicalNote() {
        return this._resultingClinicalNote;
    }

    // sets resulting clinical note reference
    set resultingClinicalNote(clinicalNote) {
        this._resultingClinicalNote = clinicalNote;
    }

    toJSON() {
        const json = this._referralRequest.toJSON();

        if (this._resultingClinicalNote) json.ResultingClinicalNote = this._resultingClinicalNote.toJSON();

        return json;
    }
}

export default FluxReferralRequest;
