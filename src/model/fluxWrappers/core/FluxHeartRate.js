import HeartRate from '../../shr/core/HeartRate';

class FluxHeartRate {
    constructor(json) {
        this._heartRate = HeartRate.fromJSON(json);
    }

    get value() {
        return this._heartRate.dataValue.quantity.number;
    }

    get units() {
        return this._heartRate.dataValue.quantity.unit;
    }

    get entryInfo() {
        return this._heartRate.entryInfo;
    }

    toJSON() {
        return this._heartRate.toJSON();
    }
}

export default FluxHeartRate;
