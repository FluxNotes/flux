import ReferralRequest from '../../shr/core/ReferralRequest';
import Reference from '../../Reference';
import _ from 'lodash';

class FluxReferralRequest {
    constructor(json, patientRecord) {
        if (json) {
            if (json.ResultingClinicalNote) {
                const { _ShrId, _EntryId, _EntryType } = json.ResultingClinicalNote;
                this._resultingClinicalNote = new Reference(_ShrId, _EntryId, _EntryType);
            }

            // Clone the json first otherwise the backend test fails
            const clonedJSON = _.cloneDeep(json);
            delete clonedJSON.ResultingClinicalNote;

            this._referralRequest = ReferralRequest.fromJSON(clonedJSON);
        } else {
            this._referralRequest = new ReferralRequest();
        }

        this._patientRecord = patientRecord;
    }

    get entryInfo() {
        return this._referralRequest.entryInfo;
    }

    get reasonReference() {
        // DP: Is this an appropriate change here?
        return this._referralRequest.commentOrDescription.value;
    }

    get expectedPerformanceTime() {
        return this._referralRequest.expectedPerformanceTime.value.beginDateTime.value;
    }

    get practitioner() {
        if (this._referralRequest.referralRecipient) {
            for (const ref of this._referralRequest.referralRecipient) {
                if (ref.value._entryType === 'http://standardhealthrecord.org/spec/shr/core/Practitioner') {
                    const pracEntry = this._patientRecord.getEntryFromReference(ref.value);
                    if (pracEntry
                        && pracEntry.person
                        && pracEntry.person.humanName
                        && pracEntry.person.humanName[0]
                        && pracEntry.person.humanName[0].nameAsText) {
                        return pracEntry.person.humanName[0].nameAsText.value;
                    }
                }
            }
        }
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

    get provider() {
        if (this._referralRequest.referralRecipient) {
            for (const ref of this._referralRequest.referralRecipient) {
                if (ref.value._entryType === 'http://standardhealthrecord.org/spec/shr/core/Organization') {
                    const orgEntry = this._patientRecord.getEntryFromReference(ref.value);
                    if (orgEntry && orgEntry.organizationName) {
                        return orgEntry.organizationName.value;
                    }
                }
            }
        }
        return null;
    }

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
