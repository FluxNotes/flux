import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import Patient from '../patient/Patient';
import hardCodedPatient from './HardCodedPatient.json';

class HardCodedReadOnlyDataAccess extends IDataSource {
    getPatient(id) {
        if (id === DataAccess.DEMO_PATIENT_ID) {
            return new Patient(hardCodedPatient);
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
    }
    getListOfPatients() {
        return [ new Patient(hardCodedPatient) ];
    }
    
    newPatient() {
        return new Patient(null);
    }
    
    savePatient(patient) {
        console.log("Saving of patients is not implemented in hard-coded read only patient data source.");
    }
}

export default HardCodedReadOnlyDataAccess;