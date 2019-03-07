import IDataSource from './IDataSource';
import BreastMainTreatmentDiabetesHypertensionJaneV05 from './BreastMainTreatmentDiabetesHypertensionJaneV05.json';
import PatientRecord from '../patient/PatientRecord.jsx';

class HardCodedMcodeV05DataSource extends IDataSource {
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
        return this._gestalt;
    }

    getPatient(id) {
        let patientJSON;
        if (BreastMainTreatmentDiabetesHypertensionJaneV05[0]["ShrId"] === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJaneV05;
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        return new PatientRecord(patientJSON);
    }

    getListOfPatients() {
        const patients = [ BreastMainTreatmentDiabetesHypertensionJaneV05 ];
        return patients.map(p => new PatientRecord(p));
    }

    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedMcodeV05DataSource;
