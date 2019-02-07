import Observation from '../shr/base/Observation';

class FluxPDGFRAVariant {
    constructor(json) {
        this._pdgfraVariant = Observation.fromJSON(json);
    }

    get entryInfo() {
        return this._pdgfraVariant.entryInfo;
    }
    
    get abbreviatedName() {
        return 'PDGFRA';
    }

    get value() {
        return this._pdgfraVariant.findingResult.value.coding[0].displayText.value;
    }

    toJSON() {
        const inst = this._pdgfraVariant.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/PDGFRAVariant' };
        return inst;
    }
}

export default FluxPDGFRAVariant;