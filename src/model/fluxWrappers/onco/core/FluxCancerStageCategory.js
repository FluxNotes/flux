import FluxEntry from '../../base/FluxEntry';
import CancerStageCategory from '../../../onco/core/CancerStageCategory';
import DataValue from '../../../shr/core/DataValue';

class FluxCancerStageCategory extends FluxEntry {
    constructor(json) {
        super(json);
        this._cancerStageCategory = CancerStageCategory.fromJSON(json);
        if (!this._cancerStageCategory.entryInfo) {
            this._cancerStageCategory.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/CancerStageCategory');
        }
    }

    get entryInfo() {
        return this._cancerStageCategory.entryInfo;
    }

    get metadata() {
        return this._cancerStageCategory.metadata;
    }

    set metadata(metadata) {
        this._cancerStageCategory.metadata = metadata;
    }

    get value() {
        if (!this._cancerStageCategory.dataValue || !this._cancerStageCategory.dataValue.value) return null;
        return this._cancerStageCategory.dataValue.value.coding[0].displayText.value;
    }

    set value(val) {
        this._cancerStageCategory.dataValue = new DataValue();
        this._cancerStageCategory.dataValue.value = val;
    }

    toJSON() {
        return this._cancerStageCategory.toJSON();
    }
}

export default FluxCancerStageCategory;
