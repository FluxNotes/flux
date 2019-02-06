import TumorDimensions from './TumorDimensions';
import FluxObservation from '../base/FluxObservation';

class FluxTumorDimensions extends FluxObservation {
    constructor(json) {
        super();
        this._tumorDimensions = this._observation = this._entry = TumorDimensions.fromJSON(json);
    }

    get entryInfo() {
        return this._tumorDimensions.entryInfo;
    }

    /**
     *  Getter for quantity
     *  will return object with properties value and unit
     */
    get quantity() {
        return {
            number: this._tumorDimensions.value.decimalValue.value,
            unit: this._tumorDimensions.value.units.value.code
        };
    }

    toJSON() {
        return this._tumorDimensions.toJSON();
    }
}

export default FluxTumorDimensions;