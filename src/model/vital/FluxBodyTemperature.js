import FluxObservation from '../base/FluxObservation';

class FluxBodyTemperature extends FluxObservation {
    get value() {
        return this.quantity.number;
    }

    get units() {
        return this.quantity.unit;
    }

    toJSON() {
        const inst = super.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/vital/BodyTemperature' };
        return inst;
    }
}

export default FluxBodyTemperature;
