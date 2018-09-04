import TumorMargins from '../shr/oncology/TumorMargins';

class FluxTumorMargins {
    constructor(json, patientRecord) {
        this._patientRecord = patientRecord;
        this._tumorMargins = TumorMargins.fromJSON(json);
    }

    get entryInfo() {
        return this._tumorMargins.entryInfo;
    }

    get value() {
        return this._tumorMargins.value.coding[0].displayText.value;
    }
}

export default FluxTumorMargins;