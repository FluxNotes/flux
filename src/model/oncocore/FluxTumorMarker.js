import FluxEntry from '../base/FluxEntry';
import * as lookup from '../../lib/receptor_lookup.jsx';
import TumorMarker from './TumorMarker';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';
import FindingTopicCode from '../shr/base/FindingTopicCode';

class FluxTumorMarker extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._tumorMarker = TumorMarker.fromJSON(json);
        if (!this._tumorMarker.entryInfo) {
            this._tumorMarker.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/genetics/TumorMarker');
        }
    }

    get entryInfo() {
        return this._tumorMarker.entryInfo;
    }

    set entryInfo(entryInfo) {
        this._tumorMarker.entryInfo = entryInfo;
    }

    get metadata() {
        return this._tumorMarker.metadata;
    }

    set metadata(metadata) {
        this._tumorMarker.metadata = metadata;
    }
    
    get relevantTime() {
        if (!this._tumorMarker.relevantTime) return null;
        return this._tumorMarker.relevantTime.value;
    }

    set relevantTime(relevantTime) {
        this._tumorMarker.relevantTime = relevantTime;
    }

    get findingResult() { 
        if (!this._tumorMarker.findingResult) return null;
        return this._tumorMarker.findingResult;
    }

    set findingResult(findingResult) { 
        this._tumorMarker.findingResult = findingResult;
    }

    get findingStatus() { 
        if (!this._tumorMarker.findingStatus) return null;
        return this._tumorMarker.findingStatus;
    }

    set findingStatus(findingStatus) { 
        this._tumorMarker.findingStatus = findingStatus;
    }


    get receptorTypeCodeableConcept(){
        if (!(this._tumorMarker.findingTopicCode && this._tumorMarker.findingTopicCode.value && this._tumorMarker.findingTopicCode.value.coding && this._tumorMarker.findingTopicCode.value.coding.length > 0)) return null;
        return this._tumorMarker.findingTopicCode.value.coding[0];
    }
    
    // Returns a human-readable display text string
    get receptorType() { 
        if (!this.receptorTypeCodeableConcept) return null;
        return this.receptorTypeCodeableConcept.displayText.value;
    }

    set receptorType(typeVal) {
        this._tumorMarker.findingTopicCode = new FindingTopicCode();
        this._tumorMarker.findingTopicCode.value = lookup.getReceptorTypeCodeableConcept(typeVal);
    }

    setReceptorType(receptorType) {
        if (!receptorType) {
            this.receptorType = null;
        } else {
            this.receptorType = receptorType;
        }
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
        this._tumorMarker.findingResult.value = lookup.getReceptorValueCodeableConcept(statusVal);
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

    get statusSign() {
        return this.status === 'Positive' ? '+' : '-';
    }

    toJSON() {
        return this._tumorMarker.toJSON();
    }
}

export default FluxTumorMarker;