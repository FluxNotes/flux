import Patient from '../patient/Patient';
import hardCodedPatient from './HardCodedPatient.json';

export default class DataAccess {
    static DEMO_PATIENT_ID = "-1";
    
    getPatient(id) {
        if (id === DataAccess.DEMO_PATIENT_ID) {
            return new Patient(hardCodedPatient);
        } else {
            console.log("loading of patients other than the hard-coded demo patient is not implemented yet.");
            // actually load
        }
    }
    
    getListOfPatients() {
        return [ new Patient(hardCodedPatient) ];
    }
    
    newPatient() {
        return new Patient(null);
    }
    
    savePatient(patient) {
        console.log("Saving of patients is not implemented yet.");
    }
}