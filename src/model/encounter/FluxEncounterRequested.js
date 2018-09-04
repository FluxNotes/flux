import EncounterRequested from '../shr/encounter/EncounterRequested';

class FluxEncounterRequested {
    constructor(json) {
        this._encounterRequested = EncounterRequested.fromJSON(json);
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

    get serviceProvider() {
        if (this._encounterRequested.serviceProvider)
            return this._encounterRequested.serviceProvider.organization.organizationName.value;
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

    toJSON() {
        return this._encounterRequested.toJSON();
    }
}

export default FluxEncounterRequested;