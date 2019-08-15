import BodyWeight from '../../shr/core/BodyWeight';

class FluxBodyWeight {
    constructor(json) {
        this._bodyWeight = BodyWeight.fromJSON(json);
    }

    get code() {
        return this._bodyWeight.code.value.coding[0].codeValue.code;
    }

    get entryInfo() {
        return this._bodyWeight.entryInfo;
    }

    get relevantTime() {
        return this._bodyWeight.relevantTime.value;
    }

    get units() {
        return this._bodyWeight.dataValue.value.units.coding.codeValue.value;
    }

    get value() {
        return this._bodyWeight.dataValue.value.number.decimal;
    }

    toJSON() {
        return this._bodyWeight.toJSON();
    }
}

export default FluxBodyWeight;
