import BRCA1Variant from '../shr/oncology/BRCA1Variant';

class FluxBRCA1Variant {
    constructor(json) {
        this._brca1Variant = BRCA1Variant.fromJSON(json);
    }
    
    get abbreviatedName() {
        return 'BRCA1';
    }

    get value() {
        return this._brca1Variant.value.coding[0].displayText.value;
    }
}

export default FluxBRCA1Variant;