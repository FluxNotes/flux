import FluxObservation from '../base/FluxObservation';
import Observation from '../shr/base/Observation';

class FluxBRCA2Variant extends FluxObservation {
    constructor(json) {
        super();
        this._brca2Variant = Observation.fromJSON(json);
    }

    get entryInfo() {
        return this._brca2Variant.entryInfo;
    }

    get abbreviatedName() {
        return 'BRCA2';
    }
    
    get value() {
        return this._brca2Variant.findingResult.value.coding[0].displayText.value;
    }

    toJSON() {
        const inst = this._brca2Variant.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/BRCA2Variant' };
        return inst;
    }
}

export default FluxBRCA2Variant;