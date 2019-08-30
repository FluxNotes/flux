import BodyTemperature from '../../shr/core/BodyTemperature';

class FluxBodyTemperature {
    constructor(json) {
        this._bodyTemperature = BodyTemperature.fromJSON(json);
    }

    get code() {
        return this._bodyTemperature.code.value.coding[0].codeValue.code;
    }

    get entryInfo() {
        return this._bodyTemperature.entryInfo;
    }

    get relevantTime() {
        return this._bodyTemperature.relevantTime.value;
    }

    get units() {
        return this._bodyTemperature.dataValue.value.units.coding.codeValue.value;
    }

    get value() {
        return this._bodyTemperature.dataValue.value.number.decimal;
    }

    toJSON() {
        return this._bodyTemperature.toJSON();
    }
}

export default FluxBodyTemperature;
