import BodyTemperature from '../shr/vital/BodyTemperature';
import FluxObservation from '../base/FluxObservation';

class FluxBodyTemperature extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BodyTemperature.fromJSON(json);
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

export default FluxBodyTemperature;