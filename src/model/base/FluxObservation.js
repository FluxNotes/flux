import FluxEntry from '../base/FluxEntry';
import Observation from '../shr/base/Observation';
import Quantity from '../shr/core/Quantity';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding.js';

class FluxObservation extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._observation = Observation.fromJSON(json);
    }
    
    get entryInfo() {
        return this._observation.entryInfo;
    }

    get metadata() {
        return this._observation.metadata;
    }

    set metadata(metadata) {
        this._observation.metadata = metadata;
    }

    /**
     *  Getter for quantity
     *  If _value is an instance of Quantity, will return object with properties number and unit
     *  Otherwise return null;
     */
    get quantity() {
        if (this._observation.findingResult.value instanceof Quantity) {
            return {
                number: this._observation.findingResult.value.number.decimal,
                unit: this._observation.findingResult.value.units.coding.code.value,
            };
        } else {
            return null;
        }
    }

    get name() { 
        if (this._observation.findingTopicCode.value.coding.length > 0) { 
            return this._observation.findingTopicCode.value.coding[0].displayText.value;
        } else { 
            return null;
        }
    }

    get codeableConceptCode() { 
        if (this._observation.findingTopicCode 
            && this._observation.findingTopicCode.value.coding 
            && this._observation.findingTopicCode.value.coding.length > 0
            && this._observation.findingTopicCode.value.coding[0].code) { 
            return this._observation.findingTopicCode.value.coding[0].code.value;
        } else { 
            return null;
        } 
    }

    get relevantTime() { 
        if (this._observation.relevantTime) { 
            return this._observation.relevantTime.value;
        } else { 
            return null;
        }
    }

    get specificFocusOfFinding() {
        if (this._observation.specificFocusOfFinding) {
            return this._observation.specificFocusOfFinding;
        }
        return null;
    }

    set specificFocusOfFinding(val) {
        this._observation.specificFocusOfFinding = val;
    }

    setSpecificFocusOfFinding(obj) {
        if (!obj) {
            this.specificFocusOfFinding = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let sff = new SpecificFocusOfFinding();
            sff.value = ref;
            this.specificFocusOfFinding = sff;
        }
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxObservation;