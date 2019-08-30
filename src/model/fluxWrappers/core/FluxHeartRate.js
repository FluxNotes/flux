import HeartRate from '../../shr/core/HeartRate';

class FluxHeartRate {
    constructor(json) {
        this._heartRate = HeartRate.fromJSON(json);
    }

    get code() {
        return this._heartRate.code.value.coding[0].codeValue.code;
    }

    get entryInfo() {
        return this._heartRate.entryInfo;
    }

    get relevantTime() {
        return this._heartRate.relevantTime.value;
    }

    get units() {
        return this._heartRate.dataValue.value.units.coding.codeValue.value;
    }

    get value() {
        return this._heartRate.dataValue.value.number.decimal;
    }

    toJSON() {
        return this._heartRate.toJSON();
    }
}

export default FluxHeartRate;
