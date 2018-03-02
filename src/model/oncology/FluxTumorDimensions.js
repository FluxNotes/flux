import TumorDimensions from '../shr/oncology/TumorDimensions';
import FluxObject from '../base/FluxObject';

class FluxTumorDimensions extends FluxObject {
    constructor(json) {
        super();
        this._tumorDimensions = TumorDimensions.fromJSON(json);
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
            value: this._tumorDimensions.value.decimal,
            unit: this._tumorDimensions.value.units.value.code
        };
    }
}

export default FluxTumorDimensions;