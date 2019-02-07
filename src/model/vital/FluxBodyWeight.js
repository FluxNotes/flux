import FluxObservation from '../base/FluxObservation';

class FluxBodyWeight extends FluxObservation {
    constructor(json) {
        super(json);
    }

    get value() {
        return this.quantity.number;
    }

    get units() {
        return this.quantity.unit;
    }

    toJSON() {
        const inst = super.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/vital/BodyWeight' };
        return inst;
    }
}

export default FluxBodyWeight;