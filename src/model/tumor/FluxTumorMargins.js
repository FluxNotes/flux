import TumorMargins from './TumorMargins';
import FluxObservation from '../base/FluxObservation';

class FluxTumorMargins extends FluxObservation {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._tumorMargins = this._observation = this._entry = TumorMargins.fromJSON(json);
    }

    get entryInfo() {
        return this._tumorMargins.entryInfo;
    }

    get value() {
        return this._tumorMargins.value.coding[0].displayText.value;
    }
}

export default FluxTumorMargins;