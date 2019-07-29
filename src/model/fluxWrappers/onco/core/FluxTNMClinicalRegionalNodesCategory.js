import FluxCancerStageCategory from '../onco/core/FluxCancerStageCategory';
import TNMClinicalRegionalNodesCategory from '../../onco/core/TNMClinicalRegionalNodesCategory';

class FluxTNMClinicalRegionalNodesCategory extends FluxCancerStageCategory {
    constructor(json) {
        super(json);
        this._cancerStageCategory = TNMClinicalRegionalNodesCategory.fromJSON(json);
        if (!this._cancerStageCategory.entryInfo) {
            this._cancerStageCategory.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TNMClinicalRegionalNodesCategory');
        }
    }
}

export default FluxTNMClinicalRegionalNodesCategory;
