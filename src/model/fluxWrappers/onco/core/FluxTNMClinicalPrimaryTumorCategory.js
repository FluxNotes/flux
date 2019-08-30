import FluxCancerStageCategory from './FluxCancerStageCategory';
import TNMClinicalPrimaryTumorCategory from '../../../onco/core/TNMClinicalPrimaryTumorCategory';

class FluxTNMClinicalPrimaryTumorCategory extends FluxCancerStageCategory {
    constructor(json) {
        super(json);
        this._cancerStageCategory = TNMClinicalPrimaryTumorCategory.fromJSON(json);
        if (!this._cancerStageCategory.entryInfo) {
            this._cancerStageCategory.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TNMClinicalPrimaryTumorCategory');
        }
    }
}

export default FluxTNMClinicalPrimaryTumorCategory;
