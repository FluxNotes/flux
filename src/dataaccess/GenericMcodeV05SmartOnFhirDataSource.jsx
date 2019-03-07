import McodeV05SmartOnFhirDataSource from "./McodeV05SmartOnFhirDataSource";
import { syntheaToV05 } from 'fhir-mapper';

class GenericMcodeV05SmartOnFhirDataSource extends McodeV05SmartOnFhirDataSource {
    constructor() {
        super();
        this.mapper = syntheaToV05;
    }

    getPatient(id, callback) {
        return super.getPatient(id, callback, this.mapper);
    }
}

export default GenericMcodeV05SmartOnFhirDataSource;