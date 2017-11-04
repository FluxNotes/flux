import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';

class NewPatientOnlyDataSource extends IDataSource {
    getPatient(id) {
        console.error("loading of patients is not implemented in new patient only data source.");
    }
    getListOfPatients() {
        console.error("listing of patients is not implemented in new patient only data source.");
    }
    
    newPatient() {
        return new PatientRecord(null);
    }
    
    savePatient(patient) {
        console.error("saving of patients is not implemented in new patient only data source.");
    }
}

export default NewPatientOnlyDataSource;