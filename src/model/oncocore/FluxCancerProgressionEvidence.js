import CancerProgressionEvidence from './CancerProgressionEvidence';

export default class FluxCancerProgressionEvidence {
    constructor(json) {
        this._cancerProgressionEvidence = CancerProgressionEvidence.fromJSON(json);
    }

    get value() {
        return this._cancerProgressionEvidence.value.coding[0].displayText.value
    }

    set value(value) {
        this._cancerProgressionEvidence.value = value;
    }

    toJSON() {
        return this._cancerProgressionEvidence.toJSON();
    }
}
