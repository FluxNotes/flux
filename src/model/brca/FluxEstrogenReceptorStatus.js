import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import EstrogenReceptorStatus from './EstrogenReceptorStatus';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxEstrogenReceptorStatus {
    constructor(json) {
        this._entry = this._estrogenReceptorStatus = EstrogenReceptorStatus.fromJSON(json);
        if (!this._estrogenReceptorStatus.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/brca/EstrogenReceptorStatus';
            this._estrogenReceptorStatus.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._estrogenReceptorStatus.entryInfo;
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._estrogenReceptorStatus.findingResult || !this._estrogenReceptorStatus.findingResult.value) return null;
        return this._estrogenReceptorStatus.findingResult.value.coding[0].displayText.value; 
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._estrogenReceptorStatus.value = lookup.getReceptorCodeableConcept(statusVal);
    }

    get specificFocusOfFinding() {
        if (!this._estrogenReceptorStatus.specificFocusOfFinding) return null;
        return this._estrogenReceptorStatus.specificFocusOfFinding.value;
    }

    get relevantTime() {
        if (!this._estrogenReceptorStatus.relevantTime) return null;
        return this._estrogenReceptorStatus.relevantTime.value;
    }

    toJSON() {
        return this._estrogenReceptorStatus.toJSON();
    }
}

export default FluxEstrogenReceptorStatus;
