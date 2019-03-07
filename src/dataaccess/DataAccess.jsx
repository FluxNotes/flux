import '../model/init';
import NewPatientOnlyDataSource from './NewPatientOnlyDataSource';
import RestApiDataSource from './RestApiDataSource';
import FHIRApiDataSource from './FHIRApiDataSource';
import HardCodedMcodeV05DataSource from './HardCodedMcodeV05DataSource';
import McodeV05SmartOnFhirDataSource from './McodeV05SmartOnFhirDataSource'
import HardCodedMcodeV01DataSource from './mcodev0.1-datasource/HardCodedMcodeV01DataSource';
import GenericMcodeV05SmartOnFhirDataSource from './GenericMcodeV05SmartOnFhirDataSource';

export default class DataAccess {
    static DEMO_PATIENT_ID = "788dcbc3-ed18-470c-89ef-35ff91854c7d";

    constructor(dataSourceName) {
        if (dataSourceName === 'NewPatientOnlyDataSource') {
            this.dataSource = new NewPatientOnlyDataSource();
        } else if (dataSourceName === 'RestApiDataSource') {
            this.dataSource = new RestApiDataSource();
        } else if (dataSourceName === 'FHIRApiDataSource') {
            this.dataSource = new FHIRApiDataSource();
        } else if (dataSourceName === 'HardCodedMcodeV01DataSource') {
            this.dataSource = new HardCodedMcodeV01DataSource();
        } else if (dataSourceName === 'HardCodedMcodeV05DataSource') {
            this.dataSource = new HardCodedMcodeV05DataSource();
        } else if (dataSourceName === 'McodeV05SmartOnFhirDataSource') {
            this.dataSource = new McodeV05SmartOnFhirDataSource();
        } else if (dataSourceName === 'GenericMcodeV05SmartOnFhirDataSource') {
            this.dataSource = new GenericMcodeV05SmartOnFhirDataSource();
        } else {
            throw new Error("Unrecognized data source class name: " + dataSourceName);
        }
    }

    getPatient(id, callback) {
        return this.dataSource.getPatient(id, callback);
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

    getGestalt() {
        return this.dataSource.getGestalt();
    }
}