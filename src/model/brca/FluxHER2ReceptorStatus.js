import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import HER2ReceptorStatus from './HER2ReceptorStatus';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';

class FluxHER2ReceptorStatus {
    constructor(json) {
        this._entry = this._her2ReceptorStatus = HER2ReceptorStatus.fromJSON(json);
        if (!this._her2ReceptorStatus.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/brca/HER2ReceptorStatus';
            this._her2ReceptorStatus.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._her2ReceptorStatus.entryInfo;
    }

    get metadata() {
        return this._her2ReceptorStatus.metadata;
    }

    set metadata(metadata) {
        this._her2ReceptorStatus.metadata = metadata;
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._her2ReceptorStatus.findingResult || !this._her2ReceptorStatus.findingResult.value) return null;
        return this._her2ReceptorStatus.findingResult.value.coding[0].displayText.value;
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._her2ReceptorStatus.findingResult = new FindingResult();
        this._her2ReceptorStatus.findingResult.value = lookup.getReceptorCodeableConcept(statusVal);
    }

    get specificFocusOfFinding() {
        if (!this._her2ReceptorStatus.specificFocusOfFinding) return null;
        return this._her2ReceptorStatus.specificFocusOfFinding.value;
    }

    set specificFocusOfFinding(val) {
        this._her2ReceptorStatus.specificFocusOfFinding = val;
    }

    setSpecificFocusOfFinding(obj) {
        if (!obj) {
            this.specificFocusOfFinding = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let sff = new SpecificFocusOfFinding();
            sff.value = ref;
            this.specificFocusOfFinding = sff;
        }
    }

    get relevantTime() {
        if (!this._her2ReceptorStatus.relevantTime) return null;
        return this._her2ReceptorStatus.relevantTime.value;
    }

    get statusSign() {
        return this.status === 'Positive' ? '+' : '-';
    }

    get abbreviatedName() {
        return 'HER2';
    }

    toJSON() {
        return this._her2ReceptorStatus.toJSON();
    }
}

export default FluxHER2ReceptorStatus;