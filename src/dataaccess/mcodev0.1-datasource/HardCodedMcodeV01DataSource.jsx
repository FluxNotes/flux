import './model/init.js';
import IDataSource from '../IDataSource';
import DataAccess from '../DataAccess';
import hardCodedPatient from '../HardCodedPatient.json';
import hardCodedPatient2 from '../HardCodedPatient2.json';
import hardCodedPatientMidYearDemo18 from '../HardCodedPatientMidYearDemo18.json';
import hardCodedSarcomaPatient from '../HardCodedSarcomaPatient.json';
import curationPatient from '../sample_curation_output.json';
import PatientRecord from '../../patient/PatientRecord.jsx';
import EntryMapper from './EntryMapper.js';

class HardCodedMcodeV01DataSource extends IDataSource {
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
            patientJSON = hardCodedPatient;
        } else if (hardCodedPatient2[0]["ShrId"] === id) {
            patientJSON = hardCodedPatient2;
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

        return new PatientRecord(EntryMapper.mapEntries(patientJSON));
    }

    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }
    
    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedMcodeV01DataSource;
