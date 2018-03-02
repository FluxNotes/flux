import BRCA2Variant from '../shr/oncology/BRCA2Variant';
import FluxObject from '../base/FluxObject';

class FluxBRCA2Variant extends FluxObject {
    constructor(json) {
        super();
        this._brca2Variant = BRCA2Variant.fromJSON(json);
    }

    get abbreviatedName() {
        return 'BRCA2';
    }
    
    get value() {
        return this._brca2Variant.value.coding[0].displayText.value;
    }
}

export default FluxBRCA2Variant;