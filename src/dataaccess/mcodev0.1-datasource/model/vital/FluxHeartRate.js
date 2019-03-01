import HeartRate from '../shr/vital/HeartRate';
import FluxObservation from '../base/FluxObservation';

class FluxHeartRate extends FluxObservation{
    constructor(json) {
        super();
        this._observation = HeartRate.fromJSON(json);
    }

    get value() {
        return this._observation._quantity._decimal;
    }

    get units() {
        return this._observation._quantity.units.value.value;
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxHeartRate;