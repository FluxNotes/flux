import Observation from '../shr/base/Observation';

class FluxMitoticRate {
    constructor(json, patientRecord) {
        this._patientRecord = patientRecord;
        this._observationComponent = Observation.fromJSON(json);
    }

    get value() {
        return this._observationComponent.value.coding[0].displayText.value;
    }
}

export default FluxMitoticRate;