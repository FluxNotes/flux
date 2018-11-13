import Encounter from '../shr/encounter/Encounter';

class FluxEncounter {
    constructor(json) {
        this._encounter = Encounter.fromJSON(json);
    }

    get entryInfo() {
        return this._encounter.entryInfo;
    }

    get reasons() {
        return this._encounter.actionContext.reason;
    }

    get expectedPerformanceTime() {
        return this._encounter.actionContext.expectedPerformanceTime.value;
    }

    get practitioner() {
        if (this._encounter.actionContext.expectedPerformer)
            return this._encounter.actionContext.expectedPerformer.value.party.name; 
        return null;
    }

    get department() {
        if (this._encounter.serviceProvider) {
            let org = this._encounter.serviceProvider.value;
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
        if (this._encounter.serviceProvider) {
            let org = this._encounter.serviceProvider.value;
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
        if (this._encounter.author) {
            return this._encounter.author.value;
        } else {
            return null;
        }
    }

    get informant() {
        if (this._encounter.informant) {
            return this._encounter.informant.value;
        } else {
            return null;
        }
    }

    toJSON() {
        return this._encounter.toJSON();
    }
}

export default FluxEncounter;