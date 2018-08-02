import GeneticVariant from '../shr/oncology/GeneticVariant';

class FluxPDGFRAVariant {
    constructor(json) {
        this._pdgfraVariant = GeneticVariant.fromJSON(json);
    }
    
    get abbreviatedName() {
        return 'PDGFRA';
    }

    get value() {
        return this._pdgfraVariant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._pdgfraVariant.toJSON();
    }
}

export default FluxPDGFRAVariant;