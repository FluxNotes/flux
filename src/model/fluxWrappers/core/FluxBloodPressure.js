import BloodPressure from "../../shr/core/BloodPressure";

class FluxBloodPressure {
    constructor(json) {
        this._bloodPressure = BloodPressure.fromJSON(json);
    }

    get dataValue() {
        return this._bloodPressure.dataValue;
    }

    get entryInfo() {
        return this._bloodPressure.entryInfo;
    }

    toJSON() {
        return this._bloodPressure.toJSON();
    }
}

export default FluxBloodPressure;
