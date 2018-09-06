import BloodPressure from '../shr/vital/BloodPressure';
import FluxObservation from '../finding/FluxObservation';

class FluxBloodPressure extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BloodPressure.fromJSON(json);
    }

    get value() {
        return this._observation._observationComponent.map((comp) => {
            return comp.value.value;
        }).join("/");
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxBloodPressure;