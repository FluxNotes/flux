import CancerHistologicType from '../oncocore/CancerHistologicType';
import FluxObservation from '../base/FluxObservation';

class FluxCancerHistologicType extends FluxObservation {
    constructor(json) {
        super();
        this._histologicType = this._observation = this._entry = CancerHistologicType.fromJSON(json);
    }

    get entryInfo() {
        return this._histologicType.entryInfo;
    }

    /**
     *  Getter for type
     *  This will return the displayText string from CodeableConcept Value
     */
    get type() {
        return this._displayTextOrCode(this._histologicType.value.coding[0]);
    }

    toJSON() {
        return this._histologicType.toJSON();
    }
}

export default FluxCancerHistologicType;