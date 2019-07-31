import BodyTemperature from '../../shr/core/BodyTemperature';

class FluxBodyTemperature {
    constructor(json) {
        this._bodyTemperature = BodyTemperature.fromJSON(json);
    }

    get value() {
        return this._bodyTemperature.dataValue.quantity.number;
    }

    get units() {
        return this._bodyTemperature.dataValue.quantity.unit;
    }

    toJSON() {
        return this._bodyTemperature.toJSON();
    }
}

export default FluxBodyTemperature;
