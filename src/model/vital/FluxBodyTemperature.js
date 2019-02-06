import FluxObservation from '../base/FluxObservation';

class FluxBodyTemperature extends FluxObservation {
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
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/vital/BodyTemperature' };
        return inst;
    }
}

export default FluxBodyTemperature;