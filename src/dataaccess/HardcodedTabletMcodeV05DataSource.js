import IDataSource from './IDataSource';
import BreastMainTreatmentTry3Ella from './BreastMainTreatmentTry3EllaV05.json';
import GistAdjuvantIhanos from './GistAdjuvantIhanosV05.json';
import PatientRecord from '../patient/PatientRecord';
import  * as McodeV05EntryMapper from './McodeV05EntryMapper';
import moment from 'moment';


class HardcodedTabletMcodeV05DataSource extends IDataSource {
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

        const ellaNewNoteContent = '@condition[[{"text":"Invasive ductal carcinoma of breast","entryId":"8"}]] <disease status>';
        const ihanosNewNoteContent = '@condition[[{"text":"Gastrointestinal stromal tumor","entryId":"8"}]] <disease status> <toxicity>';
        const today = new moment().format('MM/DD/YYYY');
        this._ellaPatient = new PatientRecord(McodeV05EntryMapper.mapEntries(BreastMainTreatmentTry3Ella));
        this._ihanosPatient = new PatientRecord(McodeV05EntryMapper.mapEntries(GistAdjuvantIhanos));

        this._ellaPatient.addClinicalNote(today, 'Point of Care Note', 'MCI', 'Dr. Mona341 Brown483', '', ellaNewNoteContent, false);
        this._ihanosPatient.addClinicalNote(today, 'Point of Care Note', 'MCI', 'Dr. Mona341 Brown483', '', ihanosNewNoteContent, false);
    }

    getGestalt() {
        return this._gestalt;
    }

    getPatient(id) {
        let patient = null;
        if (BreastMainTreatmentTry3Ella[0]["ShrId"] === id) {
            patient = this._ellaPatient;
        } else if (GistAdjuvantIhanos[0]['ShrId'] === id) {
            patient = this._ihanosPatient;
        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        return patient;
    }

    getListOfPatients() {
        return [ this._ellaPatient, this._ihanosPatient ];
    }

    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }

    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardcodedTabletMcodeV05DataSource;