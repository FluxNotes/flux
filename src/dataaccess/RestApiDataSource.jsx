import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';
import PatientApi from 'patient_api'

class RestApiDataSource extends IDataSource {
    constructor() { 
        super();
        this.api = new PatientApi.DefaultApi()

        // this.callback = function(error, data, response) {
        //   if (error) {
        //     console.error(error);
        //   } else {
        //     console.log('API called successfully.');
        //   }
        // };
    }
    getPatient(id) {
        // TODO: This should be used intead of the synchronous call below
        // const callback = function(error, data, response) {
        //     return new PatientRecord(response.text);
        // }
        // return this.api.getPatientById(id, callback);
        
        // Synchronous call
        // TODO: javascript client generated code was changed to be synchronous. It should be changed back and
        // the above async code should be used instead.
        const patient = this.api.getPatientById(id);
        return new PatientRecord(JSON.parse(patient));
    }
    getListOfPatients() {
        console.error("listing of patients is not implemented in restapidataSource.");
    }
    
    newPatient() {
        console.error("creating a new patient is not implemented in restapidataSource.");
    }
    
    savePatient(patient) {
        console.error("saving of patients is not implemented in restapidataSource.");
    }
}

export default RestApiDataSource;