import FluxConditionPresentAssertion from '../base/FluxConditionPresentAssertion';
import CancerDisorderPresent from './CancerDisorderPresent';

class FluxCancerDisorderPresent extends FluxConditionPresentAssertion {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = CancerDisorderPresent.fromJSON(json);
    }
}

export default FluxCancerDisorderPresent;