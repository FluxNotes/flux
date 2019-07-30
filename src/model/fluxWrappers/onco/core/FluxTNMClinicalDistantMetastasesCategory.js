import TNMClinicalDistantMetastasesCategory from '../../onco/core/TNMClinicalDistantMetastasesCategory';
import FluxCancerStageCategory from '../onco/core/FluxCancerStageCategory';

class FluxTNMClinicalDistantMetastasesCategory extends FluxCancerStageCategory {
    constructor(json) {
        super(json);
        this._cancerStageCategory = TNMClinicalDistantMetastasesCategory.fromJSON(json);
        if (!this._cancerStageCategory.entryInfo) {
            this._cancerStageCategory.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TNMClinicalDistantMetastasesCategory');
        }
    }
}

export default FluxTNMClinicalDistantMetastasesCategory;
