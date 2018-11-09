import ObservationComponent from '../../shr/finding/ObservationComponent';

class FluxMitoticRate {
    constructor(json, patientRecord) {
        this._patientRecord = patientRecord;
        this._observationComponent = ObservationComponent.fromJSON(json);
    }

    get value() {
        return this._observationComponent.value.coding[0].displayText.value;
    }
}

export default FluxMitoticRate;