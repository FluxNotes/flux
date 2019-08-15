import ReferralRequest from '../../shr/core/ReferralRequest';
import Reference from '../../Reference';
import Lang from 'lodash';

class FluxReferralRequest {
    constructor(json, patientRecord) {
        if (json) {
            this._referralRequest = ReferralRequest.fromJSON(json);
        } else {
            this._referralRequest = new ReferralRequest();
        }

        this._patientRecord = patientRecord;
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
        if (this._referralRequest.referralRecipient)
            return this._patientRecord.getEntryFromReference(this._referralRequest.referralRecipient.value).person.humanName[0].nameAsText.value;
        return null;
    }

    // get department() {
    //     if (this._referralRequest.expectedPerformer) {
    //         let org = this._referralRequest.expectedPerformer.value.person.partOf;
    //         while (org && org.type.value.coding[0].codeValue !== 'dept') {
    //             org = org.partOf;
    //         }
    //         if (org) {
    //             return org.organizationName.value;
    //         }
    //         return null;
    //     }
    //     return null;
    // }

    // get provider() {
    //     if (this._referralRequest.expectedPerformer) {
    //         let org = this._referralRequest.expectedPerformer.value.person.partOf;
    //         while (org && org.type.value.coding[0].codeValue !== 'prov') {
    //             org = org.partOf;
    //         }
    //         if (org) {
    //             return org.organizationName.value;
    //         }
    //         return null;
    //     }
    //     return null;
    // }

    // get author() {
    //     if (this._referralRequest.author) {
    //         return this._referralRequest.author.value;
    //     } else {
    //         return null;
    //     }
    // }

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
