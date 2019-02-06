import Observation from '../shr/base/Observation';

class FluxKITVariant {
    constructor(json) {
        this._kitVariant = Observation.fromJSON(json);
    }

    get entryInfo() {
        return this._kitVariant.entryInfo;
    }
    
    get abbreviatedName() {
        return this._kitVariant.specificFocusOfFinding.value.coding[0].displayText.value || 'KIT';
    }

    get value() {
        return this._kitVariant.value.coding[0].displayText.value;
    }

    toJSON() {
        const inst = this._kitVariant.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/KITVariant' };
        return inst;
    }
}

export default FluxKITVariant;