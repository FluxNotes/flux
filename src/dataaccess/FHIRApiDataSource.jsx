import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';
import request from 'sync-request';
import axios from 'axios';

class FHIRApiDataSource extends IDataSource {
    constructor() { 
        super();
    }
    getPatient(id) {
        const url = 'https://syntheticmass.mitre.org/fhir/Patient/58b3663e3425def0f0f6a229';
        console.log(url);
        const res = request('GET', url);
        console.log(res.getBody());

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