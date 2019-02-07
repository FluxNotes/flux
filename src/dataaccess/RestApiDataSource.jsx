import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';
import PatientApi from 'shr_rest_client';

class RestApiDataSource extends IDataSource {
    constructor() { 
        super();
        this.api = new PatientApi.DefaultApi();
        this._gestalt = { 
            create: { 
                isSupported: false,
                async: false,
                sync: false
            },
            read: { 
                isSupported: true,
                async: true,
                sync: false
            },
            update: { 
                isSupported: true,
                async: true,
                sync: false
            },
            delete: { 
                isSupported: false,
                async: false,
                sync: false
            }
        };
    }

    getGestalt() { 
        return this._gestalt
    }

    getPatient(id, callback) {
        // Asynchronous call
        // return this.api.getPatientById(id, (error, data, response) => { 
        //     if (error) { 
        //         callback(null, error)
        //     } else { 
        //         callback(new PatientRecord(response.text));
        //     }
        // });
        //
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
        if (patient) {
            let entriesJSON = patient.entries.map(entry => {
                return entry.toJSON();
            });

            this.api.updatePatientRecord(entriesJSON);
        }
    }
}

export default RestApiDataSource;