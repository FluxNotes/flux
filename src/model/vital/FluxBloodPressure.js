import FluxObservation from '../base/FluxObservation';

class FluxBloodPressure extends FluxObservation {
    constructor(json, patientRecord) {
        super(json);
        this._patientRecord = patientRecord;
    }

    get value() {
        return this._observation.panelMembers.observation.map(m => this._patientRecord.getEntryFromReference(m).quantity.number.decimal).join("/");
    }

    toJSON() {
        const inst = super.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/vital/BloodPressure' };
        return inst;
    }
}

export default FluxBloodPressure;
