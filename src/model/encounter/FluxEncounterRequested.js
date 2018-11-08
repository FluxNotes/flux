import EncounterRequested from '../shr/encounter/EncounterRequested';
import Lang from 'lodash';
class FluxEncounterRequested {
    constructor(json) {
        if (json.ReferredBy) this._referredBy = json.ReferredBy; 

        // Clone the json first otherwise the backend test fails because it looks ReferredBy
        const clonedJSON = Lang.cloneDeep(json);
        // Delete ReferredBy from the json b/c fromJson method on EncounterRequested looks for setter, which we don't have
        delete clonedJSON.ReferredBy;  
        this._encounterRequested = EncounterRequested.fromJSON(clonedJSON);        
    }

    get entryInfo() {
        return this._encounterRequested.entryInfo;
    }

    get reasons() {
        return this._encounterRequested.actionContext.reason;
    }

    get expectedPerformanceTime() {
        return this._encounterRequested.actionContext.expectedPerformanceTime.value;
    }

    get practitioner() {
        if (this._encounterRequested.actionContext.expectedPerformer)
            return this._encounterRequested.actionContext.expectedPerformer.value.party.name; 
        return null;
    }

    get department() {
        if (this._encounterRequested.serviceProvider) {
            let org = this._encounterRequested.serviceProvider.value;
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
        if (this._encounterRequested.serviceProvider) {
            let org = this._encounterRequested.serviceProvider.value;
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
        if (this._encounterRequested.author) {
            return this._encounterRequested.author.value;
        } else {
            return null;
        }
    }

    get informant() {
        if (this._encounterRequested.informant) {
            return this._encounterRequested.informant.value;
        } else {
            return null;
        }
    }

    get referredBy() {
        return this._referredBy;
    }
    
    toJSON() {
        return this._encounterRequested.toJSON();
    }
}

export default FluxEncounterRequested;