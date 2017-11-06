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
        const callback = function(error, data, response) { 
            console.log(response.text)
            return new PatientRecord(response.text);
        }
        return this.api.getPatientById(id, callback);
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