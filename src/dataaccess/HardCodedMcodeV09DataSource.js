import IDataSource from './IDataSource';
import BreastMainTreatmentDiabetesHypertensionJaneV09 from './BreastMainTreatmentDiabetesHypertensionJaneV09.json';
import PatientRecord from '../patient/PatientRecord.jsx';
import  * as McodeV05EntryMapper from './McodeV05EntryMapper';

class HardCodedMcodeV09DataSource extends IDataSource {
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
        if (BreastMainTreatmentDiabetesHypertensionJaneV09[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJaneV09;
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        return new PatientRecord(McodeV05EntryMapper.mapEntries(patientJSON));
    }

    getListOfPatients() {
        const patients = [ BreastMainTreatmentDiabetesHypertensionJaneV09 ];
        return patients.map(p => new PatientRecord(p));
    }

    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }

    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedMcodeV09DataSource;
