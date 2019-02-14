import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import EstrogenReceptorStatus from './EstrogenReceptorStatus';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';

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

    get metadata() {
        return this._estrogenReceptorStatus.metadata;
    }

    set metadata(metadata) {
        this._estrogenReceptorStatus.metadata = metadata;
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
        this._estrogenReceptorStatus.findingResult = new FindingResult();
        this._estrogenReceptorStatus.findingResult.value = lookup.getReceptorCodeableConcept(statusVal);
    }

    get specificFocusOfFinding() {
        if (!this._estrogenReceptorStatus.specificFocusOfFinding) return null;
        return this._estrogenReceptorStatus.specificFocusOfFinding.value;
    }

    set specificFocusOfFinding(val) {
        this._estrogenReceptorStatus.specificFocusOfFinding = val;
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
        if (!this._estrogenReceptorStatus.relevantTime) return null;
        return this._estrogenReceptorStatus.relevantTime.value;
    }

    toJSON() {
        return this._estrogenReceptorStatus.toJSON();
    }
}

export default FluxEstrogenReceptorStatus;
