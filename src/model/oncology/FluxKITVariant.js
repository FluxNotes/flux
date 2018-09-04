import GeneticVariant from '../shr/oncology/GeneticVariant';

class FluxKITVariant {
    constructor(json) {
        this._kitVariant = GeneticVariant.fromJSON(json);
    }
    
    get abbreviatedName() {
        return this._kitVariant.focalSubject.value.coding[0].displayText.value || 'KIT';
    }

    get value() {
        return this._kitVariant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._kitVariant.toJSON();
    }
}

export default FluxKITVariant;