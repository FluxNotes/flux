import TumorDimensions from '../../onco/core/TumorDimensions';
import FluxObservation from '../core/FluxObservation';

class FluxTumorDimensions extends FluxObservation {
    constructor(json) {
        super();
        this._tumorDimensions = this._observation = this._entry = TumorDimensions.fromJSON(json);
    }

    get entryInfo() {
        return this._tumorDimensions.entryInfo;
    }

    toJSON() {
        return this._tumorDimensions.toJSON();
    }
}

export default FluxTumorDimensions;
