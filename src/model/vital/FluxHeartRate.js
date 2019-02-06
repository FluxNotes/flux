import FluxObservation from '../base/FluxObservation';

class FluxHeartRate extends FluxObservation {
    constructor(json) {
        super(json);
    }

    get value() {
        return this._observation.quantity.decimalValue.decimal;
    }

    get units() {
        return this._observation.quantity.units.value.code;
    }

    toJSON() {
        const inst = super.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/vital/HeartRate' };
        return inst;
    }
}

export default FluxHeartRate;