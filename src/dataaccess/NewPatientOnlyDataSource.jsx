import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';

class NewPatientOnlyDataSource extends IDataSource {
    constructor() { 
        super();
        this._gestalt = { 
            create: { 
                isSupported: true,
                async: false,
                sync: true
            },
            read: { 
                isSupported: false,
                async: false,
                sync: false
            },
            update: { 
                isSupported: false,
                async: false,
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
        return this._gestalt;
    } 
    getPatient(id) {
        console.error("loading of patients is not implemented in new patient only data source.");
    }
    getListOfPatients() {
        console.error("listing of patients is not implemented in new patient only data source.");
    }
    
    newPatient() {
        return new PatientRecord(null);
    }
    
    savePatient(patient) {
        console.error("saving of patients is not implemented in new patient only data source.");
    }
}

export default NewPatientOnlyDataSource;