import FluxObservation from '../base/FluxObservation';

class FluxBloodPressure extends FluxObservation {
    constructor(json) {
        super(json);
    }

    get value() {
        return this._observation.panelMembers.observation.map((comp) => {
            return comp.value.decimalValue.value;
        }).join("/");
    }

    toJSON() {
        const inst = super.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/vital/BloodPressure' };
        return inst;
    }
}

export default FluxBloodPressure;