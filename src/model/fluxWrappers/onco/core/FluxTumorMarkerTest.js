import FluxEntry from '../base/FluxEntry';
import TumorMarkerTest from '../../onco/core/TumorMarkerTest';

class FluxTumorMarkerTest extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._tumorMarker = TumorMarkerTest.fromJSON(json);
        if (!this._tumorMarker.entryInfo) {
            this._tumorMarker.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TumorMarkerTest');
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

    get dataValue() { 
        if (!this._tumorMarker.dataValue) return null;
        return this._tumorMarker.dataValue;
    }

    set dataValue(dataValue) { 
        this._tumorMarker.dataValue = dataValue;
    }

    get code() {
        if (!this._tumorMarker.code) return null;
        return this._tumorMarker.code;
    }

    get specificFocusOfFinding() {
        if (!this._tumorMarker.specificFocusOfFinding) return null;
        return this._tumorMarker.specificFocusOfFinding.value;
    }

    set specificFocusOfFinding(val) {
        this._tumorMarker.specificFocusOfFinding = val;
    }

    toJSON() {
        return this._tumorMarker.toJSON();
    }
}

export default FluxTumorMarkerTest;
