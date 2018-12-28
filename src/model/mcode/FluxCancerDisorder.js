import FluxConditionPresentAssertion from '../base/FluxConditionPresentAssertion';
import CancerDisorder from './CancerDisorder';

class FluxCancerDisorder extends FluxConditionPresentAssertion {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = CancerDisorder.fromJSON(json);
    }
}

export default FluxCancerDisorder;