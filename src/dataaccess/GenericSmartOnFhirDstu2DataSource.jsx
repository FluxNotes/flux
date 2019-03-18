import McodeV05SmartOnFhirDataSource from "./McodeV05SmartOnFhirDataSource";
import { syntheaToV05 } from 'fhir-mapper';

class GenericSmartOnFhirDstu2DataSource extends McodeV05SmartOnFhirDataSource {
    constructor() {
        super();
        this.mapper = syntheaToV05;
    }

    getPatient(id, callback) {
        return super.getPatient(id, callback, this.mapper);
    }
}

export default GenericSmartOnFhirDstu2DataSource;