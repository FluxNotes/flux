import BodyTemperature from '../shr/vital/BodyTemperature';
import FluxObservation from '../base/FluxObservation';

class FluxBodyTemperature extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BodyTemperature.fromJSON(json);
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

export default FluxBodyTemperature;