import ConsultRequested from '../shr/encounter/ConsultRequested';

class FluxConsultRequested {
    constructor(json) {
        this._consultRequested = ConsultRequested.fromJSON(json);
    }

    get entryInfo() {
        return this._consultRequested.entryInfo;
    }

    get reasons() {
        return this._consultRequested.reason;
    }

    get expectedPerformanceTime() {
        return this._consultRequested._encounter.timePeriod.timePeriodStart.value;
    }

    get practitioner() {
        if (this._consultRequested.expectedPerformer)
            return this._consultRequested.expectedPerformer.value.person.name; 
        return null;
    }

    get department() {
        if (this._consultRequested.expectedPerformer) {
            let org = this._consultRequested.expectedPerformer.value.person.partOf;
            while (org && org.type.value.coding[0].code !== 'dept') {
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
            while (org && org.type.value.coding[0].code !== 'prov') {
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
        return this._consultRequested.toJSON();
    }
}

export default FluxConsultRequested;