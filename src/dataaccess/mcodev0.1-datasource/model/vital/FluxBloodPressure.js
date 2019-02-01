import BloodPressure from '../shr/vital/BloodPressure';
import FluxObservation from '../base/FluxObservation';

class FluxBloodPressure extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BloodPressure.fromJSON(json);
    }

    get value() {
        return this._observation.panelMembers.observation.map((comp) => {
            return comp.value.decimalValue.value;
        }).join("/");
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxBloodPressure;