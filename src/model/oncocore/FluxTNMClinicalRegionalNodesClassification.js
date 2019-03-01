import TNMClinicalRegionalNodesClassification from './TNMClinicalRegionalNodesClassification';
import FindingResult from '../shr/base/FindingResult';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';

class FluxTNMClinicalRegionalNodesClassification {
    constructor(json) {
        this._tnmClinicalRegionalNodesClassification = TNMClinicalRegionalNodesClassification.fromJSON(json);
        if (!this._tnmClinicalRegionalNodesClassification.entryInfo) {
            const entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalRegionalNodesClassification';
            this._tnmClinicalRegionalNodesClassification.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._tnmClinicalRegionalNodesClassification.entryInfo;
    }

    get metadata() {
        return this._tnmClinicalRegionalNodesClassification.metadata;
    }

    set metadata(metadata) {
        this._tnmClinicalRegionalNodesClassification.metadata = metadata;
    }

    get value() {
        if (!this._tnmClinicalRegionalNodesClassification.findingResult || !this._tnmClinicalRegionalNodesClassification.findingResult.value) return null;
        return this._tnmClinicalRegionalNodesClassification.findingResult.value.coding[0].displayText.value;
    }

    set value(val) {
        this._tnmClinicalRegionalNodesClassification.findingResult = new FindingResult();
        this._tnmClinicalRegionalNodesClassification.findingResult.value = val;
    }

    toJSON() {
        return this._tnmClinicalRegionalNodesClassification.toJSON();
    }
}

export default FluxTNMClinicalRegionalNodesClassification;
