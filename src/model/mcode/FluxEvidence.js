import CodeableConcept from '../shr/core/CodeableConcept';

export default class FluxEvidence {
    constructor(json) {
        this._value = CodeableConcept.fromJSON(json.Value);
    }

    get value() {
        return this._value.coding[0].displayText.value
    }

    set value(value) {
        this._value = value;
    }
}