import FluxObservation from '../base/FluxObservation';
import Observation from '../shr/base/Observation';

class FluxBRCA1Variant extends FluxObservation {
    constructor(json) {
        super();
        this._brca1Variant = Observation.fromJSON(json);
    }

    get entryInfo() {
        return this._brca1Variant.entryInfo;
    }
    
    get abbreviatedName() {
        return 'BRCA1';
    }

    get value() {
        return this._brca1Variant.findingResult.value.coding[0].displayText.value;
    }

    toJSON() {
        const inst = this._brca1Variant.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/BRCA1Variant' };
        return inst;
    }
}

export default FluxBRCA1Variant;