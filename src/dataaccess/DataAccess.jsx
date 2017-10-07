import Patient from '../patient/Patient';
import hardCodedPatient from './HardCodedPatient.json';

export default class DataAccess {
    static DEMO_PATIENT_ID = "-1";

    getPatient(id) {
        if (id === DataAccess.DEMO_PATIENT_ID) {
            return new Patient(hardCodedPatient);
        } else {
            console.log("loading not implemented yet.");
            // actually load
        }
    }
    
    getListOfPatients() {
    }
    
    newPatient() {
        return new Patient(null);
    }
    
    savePatient(patient) {
    }
}