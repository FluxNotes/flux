export default class FluxEvidence {
    constructor(json) {
        this._value = json.value;
    }

    get value() {
        return this._value.coding[0].displayText.value
    }

    set value(value) {
        this._value = value;
    }
}