import EncounterRequested from '../shr/encounter/EncounterRequested';

class FluxEncounterRequested {
    constructor(json) {
        this._encounterRequested = EncounterRequested.fromJSON(json);
    }
}

export default FluxEncounterRequested;