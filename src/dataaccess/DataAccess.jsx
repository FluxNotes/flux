import '../model/init';
import HardCodedReadOnlyDataSource from './HardCodedReadOnlyDataSource';
import NewPatientOnlyDataSource from './NewPatientOnlyDataSource';
import RestApiDataSource from './RestApiDataSource';
import FHIRApiDataSource from './FHIRApiDataSource';

export default class DataAccess {
    static DEMO_PATIENT_ID = "788dcbc3-ed18-470c-89ef-35ff91854c7d";
    
    constructor(dataSourceName) {
        if (dataSourceName === 'HardCodedReadOnlyDataSource') {
            this.dataSource = new HardCodedReadOnlyDataSource();
        } else if (dataSourceName === 'NewPatientOnlyDataSource') {
            this.dataSource = new NewPatientOnlyDataSource();
        } else if (dataSourceName === 'RestApiDataSource') {
            this.dataSource = new RestApiDataSource(); 
        } else if (dataSourceName === 'FHIRApiDataSource') {
            this.dataSource = new FHIRApiDataSource();
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