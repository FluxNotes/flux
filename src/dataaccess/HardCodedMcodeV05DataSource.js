import IDataSource from './IDataSource';
import DataAccess from './DataAccess';
import BreastMainTreatmentDebra from './BreastMainTreatmentDebraV05.json';
import BreastMainTreatmentTry3Ella from './BreastMainTreatmentTry3EllaV05.json';
import GistAdjuvantIhanos from './GistAdjuvantIhanosV05.json';
import BreastMainTreatmentDiabetesHypertensionJaneV05 from './BreastMainTreatmentDiabetesHypertensionJaneV05.json';
import PatientRecord from '../patient/PatientRecord.jsx';
import  * as McodeV05EntryMapper from './McodeV05EntryMapper';

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
        if (id === DataAccess.DEMO_PATIENT_ID) {
            patientJSON = BreastMainTreatmentDebra;
        } else if (BreastMainTreatmentTry3Ella[0]["ShrId"] === id) {
            patientJSON = BreastMainTreatmentTry3Ella;
        } else if (GistAdjuvantIhanos[0]['ShrId'] === id) {
            patientJSON = GistAdjuvantIhanos;
        } else if (BreastMainTreatmentDiabetesHypertensionJaneV05[0]["ShrId"] === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJaneV05;
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        return new PatientRecord(McodeV05EntryMapper.mapEntries(patientJSON));
    }

    getListOfPatients() {
        const debra = McodeV05EntryMapper.mapEntries(BreastMainTreatmentDiabetesHypertensionJaneV05);
        const jane = McodeV05EntryMapper.mapEntries(BreastMainTreatmentDebra);
        const patients = [ debra, jane ];
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
