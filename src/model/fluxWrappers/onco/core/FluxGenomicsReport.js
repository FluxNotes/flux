import GenomicsReport from "../../../onco/core/GenomicsReport";
import FluxEntry from "../../base/FluxEntry";

class FluxGenomicsReport extends FluxEntry {
    constructor(json, patientRecord) {
        super();

        this._genomicsReport = this._entry = GenomicsReport.fromJSON(json);
        this._patientRecord = patientRecord;
    }

    get relevantTime() {
        return this._genomicsReport.relevantTime.value;
    }

    get members() {
        return this._genomicsReport.observation.map(o => this._patientRecord.getEntryFromReference(o));
    }
}

export default FluxGenomicsReport;
