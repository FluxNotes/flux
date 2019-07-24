import FluxObservation from '../base/FluxObservation';

class FluxMitoticRate extends FluxObservation {
    constructor(json, patientRecord) {
        super(json);
        this._patientRecord = patientRecord;
    }

    get value() {
        return this._observation.value.coding[0].displayText.value;
    }

    toJSON() {
       const inst = super.toJSON();
       inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/MitoticRate' };
       return inst;
    }
}

export default FluxMitoticRate;
