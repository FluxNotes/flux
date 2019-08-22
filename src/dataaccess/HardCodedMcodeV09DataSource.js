import IDataSource from './IDataSource';
import BreastMainTreatmentDebra from './BreastMainTreatmentDebraV09.json';
import BreastMainTreatmentTry3Ella from './BreastMainTreatmentTry3EllaV09.json';
import GistAdjuvantIhanos from './GistAdjuvantIhanosV09.json';
import BreastMainTreatmentDiabetesHypertensionJane from './BreastMainTreatmentDiabetesHypertensionJaneV09.json';

import PatientRecord from '../patient/PatientRecord.jsx';

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
        if (BreastMainTreatmentDebra[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentDebra;
        } else if (BreastMainTreatmentTry3Ella[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentTry3Ella;
        } else if (GistAdjuvantIhanos[0].ShrId.Value === id) {
            patientJSON = GistAdjuvantIhanos;
        } else if (BreastMainTreatmentDiabetesHypertensionJane[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJane;
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        return new PatientRecord(patientJSON);
    }

    getListOfPatients() {
        const patients = [ BreastMainTreatmentDebra, BreastMainTreatmentDiabetesHypertensionJane ];
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
