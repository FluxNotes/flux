import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';
// import hardCodedFHIRPatient from './HardCodedFHIRPatient.json';
import request from 'sync-request';

class FHIRApiDataSource extends IDataSource {
    constructor() { 
        super();
        this._gestalt = { 
            requestTypes: {
                async: false,
                sync: true
            },
            create: false,
            read: true,
            update: false,
            delete: false
        };
    }
    getGestalt() { 
        return this._gestalt;
    }
    getPatient(id) {
        // REST Call to get FHIR patient from SyntheticMASS
        const url = 'https://syntheticmass.mitre.org/fhir/Patient?_id=58b3663f3425def0f0f6bffd&_count=20&_format=json&_revinclude=*';
        const res = request('GET', url);
        const patient = new PatientRecord();
        patient.fromFHIR(JSON.parse(res.getBody()));
        // patient.fromFHIR(hardCodedFHIRPatient);
        return patient;
    }
    getListOfPatients() {
        console.error("listing of patients is not implemented in fhirapidataSource.");
    }
    
    newPatient() {
        console.error("creating a new patient is not implemented in fhirapidataSource.");
    }
    
    savePatient(patient) {
        console.error("saving of patients is not implemented in fhirapidataSource.");
    }
}

export default FHIRApiDataSource;