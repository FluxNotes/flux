import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import TumorMarker from './TumorMarker';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';

class FluxTumorMarker {
    constructor(json) {
        this._entry = this._tumorMarker = TumorMarker.fromJSON(json);
        if (!this._tumorMarker.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/genetics/TumorMarker';
            this._tumorMarker.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._tumorMarker.entryInfo;
    }

    get metadata() {
        return this._tumorMarker.metadata;
    }

    set metadata(metadata) {
        this._tumorMarker.metadata = metadata;
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._tumorMarker.findingResult || !this._tumorMarker.findingResult.value) return null;
        return this._tumorMarker.findingResult.value.coding[0].displayText.value;
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._tumorMarker.findingResult = new FindingResult();
        this._tumorMarker.findingResult.value = lookup.getReceptorCodeableConcept(statusVal);
    }

    get specificFocusOfFinding() {
        if (!this._tumorMarker.specificFocusOfFinding) return null;
        return this._tumorMarker.specificFocusOfFinding.value;
    }

    set specificFocusOfFinding(val) {
        this._tumorMarker.specificFocusOfFinding = val;
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
        if (!this._tumorMarker.relevantTime) return null;
        return this._tumorMarker.relevantTime.value;
    }

    get statusSign() {
        return this.status === 'Positive' ? '+' : '-';
    }

    toJSON() {
        return this._tumorMarker.toJSON();
    }
}

export default FluxTumorMarker;