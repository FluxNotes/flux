import HeartRate from '../shr/vital/HeartRate';
import FluxObservation from '../base/FluxObservation';

class FluxHeartRate extends FluxObservation{
    constructor(json) {
        super();
        this._observation = HeartRate.fromJSON(json);
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

export default FluxHeartRate;