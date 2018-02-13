import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import PatientRecord from '../patient/PatientRecord';
import hardCodedPatient from './HardCodedPatient.json';
import hardCodedPatientMidYearDemo18 from './HardCodedPatientMidYearDemo18.json';

class HardCodedReadOnlyDataSource extends IDataSource {
    getPatient(id) {
        if (id === DataAccess.DEMO_PATIENT_ID) {
            return new PatientRecord(hardCodedPatient);
        } else if (hardCodedPatientMidYearDemo18[0]["shr.base.ShrId"] === id) {
            return new PatientRecord(hardCodedPatientMidYearDemo18);
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
    }
    getListOfPatients() {
        return [ new PatientRecord(hardCodedPatient), new PatientRecord(hardCodedPatientMidYearDemo18) ];
    }
    
    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source.");
    }
}

export default HardCodedReadOnlyDataSource;