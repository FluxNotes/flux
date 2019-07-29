import EvidenceType from '../../../onco/core/EvidenceType';

export default class FluxEvidenceType {
    constructor(json) {
        this._evidenceType = EvidenceType.fromJSON(json);
    }

    get value() {
        return this._evidenceType.value.coding[0].displayText.value
    }

    set value(value) {
        this._evidenceType.value = value;
    }

    toJSON() {
        return this._evidenceType.toJSON();
    }
}
