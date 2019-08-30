import BloodPressure from "../../shr/core/BloodPressure";

class FluxBloodPressure {
    constructor(json) {
        this._bloodPressure = BloodPressure.fromJSON(json);
    }

    get code() {
        return this._bloodPressure.code.value.coding[0].codeValue.code;
    }

    get dataValue() {
        return this._bloodPressure.dataValue;
    }

    get entryInfo() {
        return this._bloodPressure.entryInfo;
    }

    get relevantTime() {
        return this._bloodPressure.relevantTime.value;
    }

    get value() {
        return this._bloodPressure.components.map(r => r.dataValue.value.number.decimal).join('/');
    }

    toJSON() {
        return this._bloodPressure.toJSON();
    }
}

export default FluxBloodPressure;
