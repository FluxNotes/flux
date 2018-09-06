import BodyTemperature from '../shr/vital/BodyTemperature';
import FluxObservation from '../finding/FluxObservation';

class FluxBodyTemperature extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BodyTemperature.fromJSON(json);
    }

    get value() {
        return this._observation._quantity._decimal;
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxBodyTemperature;