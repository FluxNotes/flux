import FluxCondition from './FluxCondition';
import ConditionPresentAssertion from '../shr/base/ConditionPresentAssertion';

class FluxInjury extends FluxCondition {
    constructor(json) {
        super();
        this._condition = ConditionPresentAssertion.fromJSON(json);
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxInjury;