import BreastCancer from '../shr/oncology/BreastCancer';
import FluxCondition from '../condition/FluxCondition';

class FluxBreastCancer extends FluxCondition {
    constructor(json) {
        super(json);
        this._condition = BreastCancer.fromJSON(json);
    }
}

export default FluxBreastCancer;