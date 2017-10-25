import HardCodedReadOnlyDataSource from './HardCodedReadOnlyDataSource';
import NewHardCodedReadOnlyDataSource from './NewHardCodedReadOnlyDataSource';
import NewPatientOnlyDataSource from './NewPatientOnlyDataSource';

export default class DataAccess {
    static DEMO_PATIENT_ID = "-1";
    
    constructor(dataSourceName) {
        if (dataSourceName === 'HardCodedReadOnlyDataSource') {
            this.dataSource = new HardCodedReadOnlyDataSource();
        } else if (dataSourceName === 'NewHardCodedReadOnlyDataSource') {
            this.dataSource = new NewHardCodedReadOnlyDataSource();
        } else if (dataSourceName === 'NewPatientOnlyDataSource') {
            this.dataSource = new NewPatientOnlyDataSource();
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