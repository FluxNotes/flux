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

    toJSON() {
        return this._encounterRequested.toJSON();
    }
}

export default FluxEncounterRequested;