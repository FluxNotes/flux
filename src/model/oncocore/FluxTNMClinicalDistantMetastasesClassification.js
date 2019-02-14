import FindingResult from '../shr/base/FindingResult';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import TNMClinicalDistantMetastasesClassification from './TNMClinicalDistantMetastasesClassification';

class FluxTNMClinicalDistantMetastasesClassification {
    constructor(json) {
        this._tnmClinicalDistantMetastasesClassification = TNMClinicalDistantMetastasesClassification.fromJSON(json);
        if (!this._tnmClinicalDistantMetastasesClassification.entryInfo) {
            const entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalDistantMetastasesClassification';
            this._tnmClinicalDistantMetastasesClassification.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._tnmClinicalDistantMetastasesClassification.entryInfo;
    }

    get metadata() {
        return this._tnmClinicalDistantMetastasesClassification.metadata;
    }

    set metadata(metadata) {
        this._tnmClinicalDistantMetastasesClassification.metadata = metadata;
    }

    get value() {
        if (!this._tnmClinicalDistantMetastasesClassification.findingResult || !this._tnmClinicalDistantMetastasesClassification.findingResult.value) return null;
        return this._tnmClinicalDistantMetastasesClassification.findingResult.value.coding[0].displayText.value;
    }

    set value(val) {
        this._tnmClinicalDistantMetastasesClassification.findingResult = new FindingResult();
        this._tnmClinicalDistantMetastasesClassification.findingResult.value = val;
    }

    toJSON() {
        return this._tnmClinicalDistantMetastasesClassification.toJSON();
    }
}

export default FluxTNMClinicalDistantMetastasesClassification;
