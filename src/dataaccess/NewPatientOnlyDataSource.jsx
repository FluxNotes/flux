import IDataSource from './IDataSource';
import Patient from '../patient/Patient';

class NewPatientOnlyDataSource extends IDataSource {
    getPatient(id) {
        console.error("loading of patients is not implemented in new patient only data source.");
    }
    getListOfPatients() {
        console.error("listing of patients is not implemented in new patient only data source.");
    }
    
    newPatient() {
        return new Patient(null);
    }
    
    savePatient(patient) {
        console.error("saving of patients is not implemented in new patient only data source.");
    }
}

export default NewPatientOnlyDataSource;