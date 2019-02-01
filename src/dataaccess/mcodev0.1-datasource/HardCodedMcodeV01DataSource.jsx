import './model/init.js';
import IDataSource from '../IDataSource';
import ObjectFactory from './model/ObjectFactory';
import FluxObjectFactory from '../../model/FluxObjectFactory';
import patientJson from '../HardCodedSarcomaPatient.json';
import PatientRecord from '../../patient/PatientRecord.jsx';
import Patient from './model/shr/entity/Patient.js';
import FluxPatient from '../../model/entity/FluxPatient.js';
import Entry from '../../model/shr/base/Entry.js';
import EntryType from '../../model/shr/base/EntryType.js';

class HardCodedMcodeV01DataSource extends IDataSource {
    getPatient() {
        console.log(patientJson);
        const patientRecord = new PatientRecord();
        const mcodeV01Entries = [];
        const fluxEntries = [];
        patientJson.forEach(entry => {
            try {
                const result = ObjectFactory.createInstance(entry);
                mcodeV01Entries.push(result);
            } catch(err) {
                console.log('error');
                console.log(entry);
                // fluxEntries.push(FluxObjectFactory.createInstance(entry));
            }
        });

        // mcodeV01Entries.forEach(entry => {
        //     if (entry instanceof Patient) {
        //         const newPatient = new FluxPatient();
        //         newPatient.entryInfo = new Entry();
        //         newPatient.entryInfo.entryId = entry.entryInfo.entryId;
        //         newPatient.entryInfo.shrId = entry.entryInfo.shrId;
        //         newPatient.entryInfo.entryType = new EntryType();
        //         newPatient.entryInfo.entryType.uri = entry.entryInfo.entryType.uri;
        //         newPatient.patientRecord = patientRecord;
        //         console.log(newPatient);
        //         fluxEntries.push(newPatient);
        //     }
        // });
        console.log(mcodeV01Entries);
        console.log(fluxEntries);
    }
}

export default HardCodedMcodeV01DataSource;