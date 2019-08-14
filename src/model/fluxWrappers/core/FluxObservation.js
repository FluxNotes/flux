import FluxEntry from '../base/FluxEntry';
import Observation from '../../shr/core/Observation';
import Quantity from '../../shr/core/Quantity';

class FluxObservation extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._observation = Observation.fromJSON(json);
    }

    get entryInfo() {
        return this._observation.entryInfo;
    }

    get metadata() {
        return this._observation.metadata;
    }

    set metadata(metadata) {
        this._observation.metadata = metadata;
    }

    /**
     *  Getter for quantity
     *  If _value is an instance of Quantity, will return object with properties number and unit
     *  Otherwise return null;
     */
    get quantity() {
        if (this._observation.dataValue 
            && this._observation.dataValue.value instanceof Quantity) {
            return {
                number: this._observation.dataValue.value.number.decimal,
                unit: this._observation.dataValue.value.units.coding.codeValue,
            };
        } else {
            return null;
        }
    }

    get name() {
        if (this._observation.category
            && this._observation.category.value.coding
            && this._observation.category.value.coding.length > 0
            && this._observation.category.value.coding[0].displayText) {
            return this._observation.category.value.coding[0].displayText.value;
        } else {
            return null;
        }
    }

    get codeableConceptCode() {
        if (this._observation.category
            && this._observation.category.value.coding
            && this._observation.category.value.coding.length > 0
            && this._observation.category.value.coding[0].codeValue) {
            return this._observation.category.value.coding[0].codeValue;
        } else {
            return null;
        }
    }

    get relevantTime() {
        if (this._observation.relevantTime) {
            return this._observation.relevantTime.value;
        } else {
            return null;
        }
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxObservation;