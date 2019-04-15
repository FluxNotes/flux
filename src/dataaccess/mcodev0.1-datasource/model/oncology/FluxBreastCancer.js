import FluxEstrogenReceptorStatus from './FluxEstrogenReceptorStatus';
import FluxHER2ReceptorStatus from './FluxHER2ReceptorStatus';
import FluxHistologicGrade from './FluxHistologicGrade';
import FluxProgesteroneReceptorStatus from './FluxProgesteroneReceptorStatus';
import FluxSolidTumorCancer from './FluxSolidTumorCancer';
import FluxTumorDimensions from '../oncology/FluxTumorDimensions';
import CancerDisorder from '../mcode/CancerDisorder';

class FluxBreastCancer extends FluxSolidTumorCancer {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = CancerDisorder.fromJSON(json);
    }

    getMostRecentERReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxEstrogenReceptorStatus);
    }

    getMostRecentPRReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxProgesteroneReceptorStatus);
    }

    getMostRecentHER2ReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxHER2ReceptorStatus);
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxBreastCancer;