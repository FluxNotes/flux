import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import PatientRecord from '../patient/PatientRecord';
import hardCodedPatient from './HardCodedPatient.json';
import hardCodedPatient2 from './HardCodedPatient2.json';
import hardCodedPatientMidYearDemo18 from './HardCodedPatientMidYearDemo18.json';
import hardCodedSarcomaPatient from './HardCodedSarcomaPatient.json';
import curationPatient from './sample_curation_output.json';

class HardCodedReadOnlyDataSource extends IDataSource {
    constructor() { 
        super();
        this._gestalt = { 
            create: { 
                isSupported: false,
                async: false,
                sync: false
            },
            read: {
                isSupported: true,
                async: false,
                sync: true
            },
            update: { 
                isSupported: false,
                async: false,
                sync: false
            },
            delete: { 
                isSupported: false,
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
            return new PatientRecord(hardCodedPatient);
        } else if (hardCodedPatient2[0]["ShrId"] === id) {
            return new PatientRecord(hardCodedPatient2);
        } else if (hardCodedPatientMidYearDemo18[0]["ShrId"] === id) {
            return new PatientRecord(hardCodedPatientMidYearDemo18);
        } else if (curationPatient[0]["ShrId"].Value === id) {
            return new PatientRecord(curationPatient); 
        } else if (hardCodedSarcomaPatient[0]['ShrId'] === id) {
            return new PatientRecord(hardCodedSarcomaPatient)
        }
        else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
    }
    getListOfPatients() {
        return [ new PatientRecord(hardCodedPatient), new PatientRecord(hardCodedPatientMidYearDemo18), new PatientRecord(hardCodedSarcomaPatient) ];
    }
    
    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedReadOnlyDataSource;