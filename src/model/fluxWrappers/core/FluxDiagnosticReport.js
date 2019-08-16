import DiagnosticReport from '../../shr/core/DiagnosticReport';
import FluxEntry from '../base/FluxEntry';

class FluxDiagnosticReport extends FluxEntry {
    constructor(json, patientRecord) {
        super();

        this._diagnosticReport = this._entry = DiagnosticReport.fromJSON(json);
        this._patientRecord = patientRecord;
    }

    get relevantTime() {
        return this._diagnosticReport.relevantTime.value;
    }

    get value() {
        return this._patientRecord.getEntryFromReference(this._diagnosticReport.media);
    }

    get author() {
        if (this._diagnosticReport.participation && this._diagnosticReport.participation.participant && this._diagnosticReport.participation.participant.value) {
            const author = this._patientRecord.getEntryFromReference(this._diagnosticReport.participation.participant.value);

            if (author
                && author.person 
                && author.person.humanName 
                && author.person.humanName[0]
                && author.person.humanName[0].nameAsText) {
                return author.person.humanName[0].nameAsText.value;
            }
        } 

        return null;
    }
}
export default FluxDiagnosticReport;
