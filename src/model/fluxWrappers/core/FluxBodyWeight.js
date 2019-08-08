import BodyWeight from '../../shr/core/BodyWeight';

class FluxBodyWeight {
    constructor(json) {
        this._bodyWeight = BodyWeight.fromJSON(json);
    }

    get value() {
        return this._bodyWeight.dataValue.quantity.number;
    }

    get units() {
        return this._bodyWeight.dataValue.quantity.unit;
    }

    get entryInfo() {
        return this._bodyWeight.entryInfo;
    }

    toJSON() {
        return this._bodyWeight.toJSON();
    }
}

export default FluxBodyWeight;
