import FluxObservation from '../base/FluxObservation';

class FluxMitoticRate extends FluxObservation {
    constructor(json, patientRecord) {
        super(json);
        this._patientRecord = patientRecord;
    }

    get value() {
        return this._observation.value.coding[0].displayText.value;
    }
}

export default FluxMitoticRate;