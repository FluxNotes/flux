import FluxEntry from "../base/FluxEntry";
import ECOGPerformanceStatus from "./ECOGPerformanceStatus";

class FluxECOGPerformanceStatus extends FluxEntry {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._entry = ECOGPerformanceStatus.fromJSON(json);
    }

    get entryInfo() {
        return this._entry.entryInfo;
    }
    
}

export default FluxECOGPerformanceStatus;