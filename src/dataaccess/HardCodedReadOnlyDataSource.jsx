import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import PatientRecord from '../patient/PatientRecord';
import BreastMainTreatmentDebra from './BreastMainTreatmentDebra.json';
import BreastMainTreatmentDiabetesHypertensionJane from './BreastMainTreatmentDiabetesHypertensionJane.json';
import BreastMainTreatmentTry3Ella from './BreastMainTreatmentTry3Ella.json';
import GistAdjuvantIhanos from './GistAdjuvantIhanos.json';
import curationPatient from './sample_curation_output.json';

class HardCodedReadOnlyDataSource extends IDataSource {
    constructor() { 
        super();
        this._gestalt = { 
            create: {
                async: false,
                sync: false
            },
            read: {
                async: false,
                sync: true
            },
            update: {
                async: false,
                sync: false
            },
            delete: {
                async: false,
                sync: false
            }
        };
    }
    getGestalt() { 
        return this._gestalt
    } 
    getPatient(id) {  
        if (id === DataAccess.DEMO_PATIENT_ID) {
            return new PatientRecord(BreastMainTreatmentDebra);
        } else if (BreastMainTreatmentDiabetesHypertensionJane[0]["ShrId"] === id) {
            return new PatientRecord(BreastMainTreatmentDiabetesHypertensionJane);
        } else if (BreastMainTreatmentTry3Ella[0]["ShrId"] === id) {
            return new PatientRecord(BreastMainTreatmentTry3Ella);
        } else if (curationPatient[0]["ShrId"].Value === id) {
            return new PatientRecord(curationPatient); 
        } else if (GistAdjuvantIhanos[0]['ShrId'] === id) {
            return new PatientRecord(GistAdjuvantIhanos)
        }
        else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
    }
    getListOfPatients() {
        return [ new PatientRecord(BreastMainTreatmentDebra), new PatientRecord(BreastMainTreatmentTry3Ella), new PatientRecord(GistAdjuvantIhanos) ];
    }
    
    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedReadOnlyDataSource;