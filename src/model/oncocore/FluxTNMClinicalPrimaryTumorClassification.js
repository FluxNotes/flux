import TNMClinicalPrimaryTumorClassification from './TNMClinicalPrimaryTumorClassification';
import FindingResult from '../shr/base/FindingResult';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';

class FluxTNMClinicalPrimaryTumorClassification {
    constructor(json) {
        this._tnmClinicalPrimaryTumorClassifcation = TNMClinicalPrimaryTumorClassification.fromJSON(json);
        if (!this._tnmClinicalPrimaryTumorClassifcation.entryInfo) {
            const entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalPrimaryTumorClassification';
            this._tnmClinicalPrimaryTumorClassifcation.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._tnmClinicalPrimaryTumorClassifcation.entryInfo;
    }

    get metadata() {
        return this._tnmClinicalPrimaryTumorClassifcation.metadata;
    }

    set metadata(metadata) {
        this._tnmClinicalPrimaryTumorClassifcation.metadata = metadata;
    }

    get value() {
        if (!this._tnmClinicalPrimaryTumorClassifcation.findingResult || !this._tnmClinicalPrimaryTumorClassifcation.findingResult.value) return null;
        return this._tnmClinicalPrimaryTumorClassifcation.findingResult.value.coding[0].displayText.value;
    }

    set value(val) {
        this._tnmClinicalPrimaryTumorClassifcation.findingResult = new FindingResult();
        this._tnmClinicalPrimaryTumorClassifcation.findingResult.value = val;
    }

    toJSON() {
        return this._tnmClinicalPrimaryTumorClassifcation.toJSON();
    }
}

export default FluxTNMClinicalPrimaryTumorClassification;
