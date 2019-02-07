import IDataSource from '../IDataSource';
<<<<<<< HEAD
import DataAccess from '../DataAccess';
import BreastMainTreatmentDebra from '../BreastMainTreatmentDebra.json';
import BreastMainTreatmentDiabetesHypertensionJane from '../BreastMainTreatmentDiabetesHypertensionJane.json';
import BreastMainTreatmentTry3Ella from '../BreastMainTreatmentTry3Ella.json';
import GistAdjuvantIhanos from '../GistAdjuvantIhanos.json';
=======
import MCODEV01ObjectFactory from './model/FluxObjectFactory';
import DataAccess from '../DataAccess';
import hardCodedPatient from '../HardCodedPatient.json';
import hardCodedPatientMidYearDemo18 from '../HardCodedPatientMidYearDemo18.json';
import hardCodedSarcomaPatient from '../HardCodedSarcomaPatient.json';
>>>>>>> Better mapping of dosages.
import curationPatient from '../sample_curation_output.json';
import PatientRecord from '../../patient/PatientRecord.jsx';
import EntryMapper from './EntryMapper.js';

class HardCodedMcodeV01DataSource extends IDataSource {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    getPatient() {
        console.log(patientJson);
        const mcodeV01Entries = patientJson.map(entry => MCODEV01ObjectFactory.createInstance(entry));
=======
    getPatient(id) {
        let patientJSON;
        if (id === DataAccess.DEMO_PATIENT_ID) {
            patientJSON = hardCodedPatient;
        } else if (hardCodedPatientMidYearDemo18[0]["ShrId"] === id) {
            patientJSON = hardCodedPatientMidYearDemo18;
        } else if (curationPatient[0]["ShrId"].Value === id) {
            patientJSON = curationPatient; 
        } else if (hardCodedSarcomaPatient[0]['ShrId'] === id) {
            patientJSON = hardCodedSarcomaPatient;
        }
        else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        console.log(patientJSON);
        const mcodeV01Entries = patientJSON.map(entry => MCODEV01ObjectFactory.createInstance(entry));
>>>>>>> Better mapping of dosages.
        const fluxEntries = EntryMapper.mapEntries(mcodeV01Entries);
>>>>>>> Added entry mapping for GIST and MedicationRequested.

    getPatient(id) {
        let patientJSON;
        if (id === DataAccess.DEMO_PATIENT_ID) {
            patientJSON = BreastMainTreatmentDebra;
        } else if (BreastMainTreatmentDiabetesHypertensionJane[0]["ShrId"] === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJane;
        } else if (BreastMainTreatmentTry3Ella[0]["ShrId"] === id) {
            patientJSON = BreastMainTreatmentTry3Ella;
        } else if (curationPatient[0]["ShrId"].Value === id) {
            patientJSON = curationPatient; 
        } else if (GistAdjuvantIhanos[0]['ShrId'] === id) {
            patientJSON = GistAdjuvantIhanos;
        }
        else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }

        return new PatientRecord(EntryMapper.mapEntries(patientJSON));
    }

    getListOfPatients() {
        const patients = [ BreastMainTreatmentDebra, BreastMainTreatmentDiabetesHypertensionJane, BreastMainTreatmentTry3Ella, GistAdjuvantIhanos ].map(p => EntryMapper.mapEntries(p));
        return patients.map(p => new PatientRecord(p));
    }

    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedMcodeV01DataSource;
