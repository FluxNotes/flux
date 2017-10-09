import HardCodedReadOnlyDataAccess from './HardCodedReadOnlyDataAccess';

export default class DataAccess {
    static DEMO_PATIENT_ID = "-1";
    
    constructor(dataSourceName) {
        if (dataSourceName === 'HardCodedReadOnlyDataAccess') {
            this.dataSource = new HardCodedReadOnlyDataAccess();
        } else {
            throw new Error("Unrecognized data source class name: " + dataSourceName);
        }
    }
    
    getPatient(id) {
        return this.dataSource.getPatient(id);
    }
    
    getListOfPatients() {
        return this.dataSource.getListOfPatients();
    }
    
    newPatient() {
        return this.dataSource.newPatient();
    }
    
    savePatient(patient) {
        return this.dataSource.savePatient(patient);
    }
}