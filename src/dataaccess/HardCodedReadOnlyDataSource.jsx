import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import Patient from '../patient/Patient';
import hardCodedPatient from './HardCodedPatient.json';

class HardCodedReadOnlyDataSource extends IDataSource {
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
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source.");
    }
}

export default HardCodedReadOnlyDataSource;