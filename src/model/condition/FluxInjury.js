import FluxCondition from './FluxCondition';
import Injury from '../shr/condition/Injury';

class FluxInjury extends FluxCondition {
    constructor(json) {
        super(json);
        this._condition = Injury.fromJSON(json);
    }

}

export default FluxInjury;