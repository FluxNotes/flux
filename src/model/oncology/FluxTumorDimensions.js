import TumorDimensions from '../shr/oncology/TumorDimensions';

class FluxTumorDimensions {
    constructor(json) {
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

    toJSON() {
        return this._tumorDimensions.toJSON();
    }
}

export default FluxTumorDimensions;