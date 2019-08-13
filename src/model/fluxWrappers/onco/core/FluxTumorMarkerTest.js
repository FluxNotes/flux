import FluxEntry from '../../base/FluxEntry';
import TumorMarkerTest from '../../../onco/core/TumorMarkerTest';

class FluxTumorMarkerTest extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._tumorMarkerTest = TumorMarkerTest.fromJSON(json);
        if (!this._tumorMarkerTest.entryInfo) {
            this._tumorMarkerTest.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TumorMarkerTest');
        }
    }

    get entryInfo() {
        return this._tumorMarkerTest.entryInfo;
    }

    set entryInfo(entryInfo) {
        this._tumorMarkerTest.entryInfo = entryInfo;
    }

    get metadata() {
        return this._tumorMarkerTest.metadata;
    }

    set metadata(metadata) {
        this._tumorMarkerTest.metadata = metadata;
    }
    
    get relevantTime() {
        if (!this._tumorMarkerTest.relevantTime) return null;
        return this._tumorMarkerTest.relevantTime.value;
    }

    set relevantTime(relevantTime) {
        this._tumorMarkerTest.relevantTime = relevantTime;
    }

    get dataValue() { 
        if (!this._tumorMarkerTest.dataValue) return null;
        return this._tumorMarkerTest.dataValue;
    }

    set dataValue(dataValue) { 
        this._tumorMarkerTest.dataValue = dataValue;
    }

    get code() {
        if (!this._tumorMarkerTest.code) return null;
        return this._tumorMarkerTest.code;
    }

    get receptorTypeCodeableConcept() {
        if (!this._tumorMarkerTest.code 
            || !this._tumorMarkerTest.code.value
            || !this._tumorMarkerTest.code.value.coding
            || !this._tumorMarkerTest.code.value.coding[0]) return null;
        return this._tumorMarkerTest.code.value.coding[0];
    }

    // Returns a human-readable display text string
    get receptorType() { 
        if (!this._tumorMarkerTest.code 
            || !this._tumorMarkerTest.code.value
            || !this._tumorMarkerTest.code.value.coding
            || !this._tumorMarkerTest.code.value.coding[0]) return null;
        return this._displayTextOrCode(this._tumorMarkerTest.code.value.coding[0]);
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        // TODO: TumorMarkerDataValue.value can be CodeableConcept|Quantity|Ratio
        // this assumes it's only a CodeableConcept
        if (!this._tumorMarkerTest.dataValue 
            || !this._tumorMarkerTest.dataValue.value
            || !this._tumorMarkerTest.dataValue.value.coding
            || !this._tumorMarkerTest.dataValue.value.coding[0]) return null;
        return this._displayTextOrCode(this._tumorMarkerTest.dataValue.value.coding[0]);
    }

    get specificFocusOfFinding() {
        if (!this._tumorMarkerTest.specificFocusOfFinding) return null;
        return this._tumorMarkerTest.specificFocusOfFinding.value;
    }

    set specificFocusOfFinding(val) {
        this._tumorMarkerTest.specificFocusOfFinding = val;
    }

    toJSON() {
        return this._tumorMarkerTest.toJSON();
    }
}

export default FluxTumorMarkerTest;
