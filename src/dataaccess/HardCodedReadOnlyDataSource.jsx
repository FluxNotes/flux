import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import PatientRecord from '../patient/PatientRecord';
import hardCodedPatient from './HardCodedPatient.json';

class HardCodedReadOnlyDataSource extends IDataSource {
    getPatient(id) {
        if (id === DataAccess.DEMO_PATIENT_ID) {
            return new PatientRecord(hardCodedPatient);
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
    }
    getListOfPatients() {
        return [ new PatientRecord(hardCodedPatient) ];
    }
    
    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source.");
    }
}

export default HardCodedReadOnlyDataSource;