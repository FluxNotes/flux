import FluxSolidTumorCancer from './FluxSolidTumorCancer';
import Condition from '../shr/condition/Condition';

class FluxGastrointestinalStromalTumor extends FluxSolidTumorCancer {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = Condition.fromJSON(json);
    }
}
export default FluxGastrointestinalStromalTumor;
