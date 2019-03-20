import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import { getReceptorCodeableConcept } from '../../lib/receptor_lookup.jsx';
import ProgesteroneReceptorStatus from './ProgesteroneReceptorStatus';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';

class FluxProgesteroneReceptorStatus {
    constructor(json) {
        this._entry = this._progesteroneReceptorStatus = ProgesteroneReceptorStatus.fromJSON(json);
        if (!this._progesteroneReceptorStatus.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/brca/ProgesteroneReceptorStatus';
            this._progesteroneReceptorStatus.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._progesteroneReceptorStatus.entryInfo;
    }

    get metadata() {
        return this._progesteroneReceptorStatus.metadata;
    }

    set metadata(metadata) {
        this._progesteroneReceptorStatus.metadata = metadata;
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._progesteroneReceptorStatus.findingResult || !this._progesteroneReceptorStatus.findingResult.value) return null;
        return this._progesteroneReceptorStatus.findingResult.value.coding[0].displayText.value;
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._progesteroneReceptorStatus.findingResult = new FindingResult();
        this._progesteroneReceptorStatus.findingResult.value = getReceptorCodeableConcept(statusVal);
    }

    get specificFocusOfFinding() {
        if (!this._progesteroneReceptorStatus.specificFocusOfFinding) return null;
        return this._progesteroneReceptorStatus.specificFocusOfFinding.value;
    }

    set specificFocusOfFinding(val) {
        this._progesteroneReceptorStatus.specificFocusOfFinding = val;
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
        if (!this._progesteroneReceptorStatus.relevantTime) return null;
        return this._progesteroneReceptorStatus.relevantTime.value;
    }

    get statusSign() {
        return this.status === 'Positive' ? '+' : '-';
    }

    get abbreviatedName() {
        return 'PR';
    }

    toJSON() {
        return this._progesteroneReceptorStatus.toJSON();
    }
}

export default FluxProgesteroneReceptorStatus;