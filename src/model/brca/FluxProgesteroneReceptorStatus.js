import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import ProgesteroneReceptorStatus from './ProgesteroneReceptorStatus';

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
        this._progesteroneReceptorStatus.value = lookup.getReceptorCodeableConcept(statusVal);
    }

    get specificFocusOfFinding() {
        if (!this._progesteroneReceptorStatus.specificFocusOfFinding) return null;
        return this._progesteroneReceptorStatus.specificFocusOfFinding.value;
    }

    get relevantTime() {
        if (!this._progesteroneReceptorStatus.relevantTime) return null;
        return this._progesteroneReceptorStatus.relevantTime.value;
    }

    toJSON() {
        return this._progesteroneReceptorStatus.toJSON();
    }
}

export default FluxProgesteroneReceptorStatus;