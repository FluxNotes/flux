import BRCA2Variant from '../../shr/oncology/BRCA2Variant';

class FluxBRCA2Variant {
    constructor(json) {
        this._brca2Variant = BRCA2Variant.fromJSON(json);
    }

    get abbreviatedName() {
        return 'BRCA2';
    }
    
    get value() {
        return this._brca2Variant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._brca2Variant.toJSON();
    }
}

export default FluxBRCA2Variant;