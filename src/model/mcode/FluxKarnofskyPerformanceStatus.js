import FluxEntry from "../base/FluxEntry";
import KarnofskyPerformanceStatus from "./KarnofskyPerformanceStatus";

class FluxKarnofskyPerformanceStatus extends FluxEntry {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._entry = KarnofskyPerformanceStatus.fromJSON(json);
    }

    get entryInfo() {
        return this._entry.entryInfo;
    }
    
}

export default FluxKarnofskyPerformanceStatus;