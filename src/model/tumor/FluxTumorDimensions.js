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
            number: this._tumorDimensions.findingResult.value.number.decimal,
            unit: this._tumorDimensions.findingResult.value.units.coding.code,
        };
    }

    toJSON() {
        return this._tumorDimensions.toJSON();
    }
}

export default FluxTumorDimensions;