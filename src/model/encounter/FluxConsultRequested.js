import ConsultRequested from '../shr/encounter/ConsultRequested';
import Reference from '../Reference';
import Lang from 'lodash';

class FluxConsultRequested {
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
            this._consultRequested = ConsultRequested.fromJSON(clonedJSON);
        } else {
            this._consultRequested = new ConsultRequested();
        }
    }

    get ReferralDate() {
        return this._referralDate;
    }

    set referralDate(date) {
        this._referralDate = date;
    }

    get entryInfo() {
        return this._consultRequested.entryInfo;
    }

    get reasons() {
        return this._consultRequested.reason;
    }

    get expectedPerformanceTime() {
        return this._consultRequested._encounter.timePeriod.beginDateTime.value;
    }

    get practitioner() {
        if (this._consultRequested.expectedPerformer)
            return this._consultRequested.expectedPerformer.value.person.name;
        return null;
    }

    get department() {
        if (this._consultRequested.expectedPerformer) {
            let org = this._consultRequested.expectedPerformer.value.person.partOf;
            while (org && org.type.value.coding[0].code.value !== 'dept') {
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
        if (this._consultRequested.expectedPerformer) {
            let org = this._consultRequested.expectedPerformer.value.person.partOf;
            while (org && org.type.value.coding[0].code.value !== 'prov') {
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
        if (this._consultRequested.author) {
            return this._consultRequested.author.value;
        } else {
            return null;
        }
    }

    get informant() {
        if (this._consultRequested.informant) {
            return this._consultRequested.informant.value;
        } else {
            return null;
        }
    }

    toJSON() {
        const json = this._consultRequested.toJSON();

        if (this._resultingClinicalNote) json.ResultingClinicalNote = this._resultingClinicalNote.toJSON();

        return json;
    }
}

export default FluxConsultRequested;
