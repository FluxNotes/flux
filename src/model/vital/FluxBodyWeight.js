import BodyWeight from '../shr/vital/BodyWeight';
import FluxObservation from '../base/FluxObservation';

class FluxBodyWeight extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BodyWeight.fromJSON(json);
    }

    get value() {
        return this._observation.quantity.decimalValue.decimal;
    }

    get units() {
        return this._observation.quantity.units.value.code;
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxBodyWeight;