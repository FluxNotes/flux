import './model/init.js';
import IDataSource from '../IDataSource';
import MCODEV01ObjectFactory from './model/FluxObjectFactory';
import patientJson from '../HardCodedSarcomaPatient.json';
import PatientRecord from '../../patient/PatientRecord.jsx';
import EntryMapper from './EntryMapper.js';

class HardCodedMcodeV01DataSource extends IDataSource {
    getPatient() {
        console.log(patientJson);
        const mcodeV01Entries = patientJson.map(entry => MCODEV01ObjectFactory.createInstance(entry));
        const fluxEntries = EntryMapper.mapEntries(mcodeV01Entries);

        console.log(mcodeV01Entries);
        console.log(fluxEntries);
        return new PatientRecord(fluxEntries);
    }
}

export default HardCodedMcodeV01DataSource;