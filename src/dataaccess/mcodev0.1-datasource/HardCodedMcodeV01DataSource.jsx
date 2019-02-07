import './model/init.js';
import IDataSource from '../IDataSource';
import MCODEV01ObjectFactory from './model/FluxObjectFactory';
import DataAccess from '../DataAccess';
import hardCodedPatient from '../HardCodedPatient.json';
import hardCodedPatientMidYearDemo18 from '../HardCodedPatientMidYearDemo18.json';
import hardCodedSarcomaPatient from '../HardCodedSarcomaPatient.json';
import curationPatient from '../sample_curation_output.json';
import PatientRecord from '../../patient/PatientRecord.jsx';
import EntryMapper from './EntryMapper.js';

class HardCodedMcodeV01DataSource extends IDataSource {
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
        const fluxEntries = EntryMapper.mapEntries(mcodeV01Entries);

        console.log(mcodeV01Entries);
        console.log(fluxEntries);
        return new PatientRecord(fluxEntries);
    }
}

export default HardCodedMcodeV01DataSource;