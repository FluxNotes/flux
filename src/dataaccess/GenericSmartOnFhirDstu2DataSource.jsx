import McodeV05SmartOnFhirDataSource from "./McodeV05SmartOnFhirDataSource";
import processFHIRResources from './utils/fhir-entry-processor';
import mappers from 'fhir-mapper';

class GenericSmartOnFhirDstu2DataSource extends McodeV05SmartOnFhirDataSource {
    constructor(props) {
        super();
        this.mapper = props && props.mapper ? mappers[props.mapper] : null;
    }

    getPatient(id, callback) {
        super.fetchResources()
            .then(resources => callback(processFHIRResources(resources, this._client.patient.id, this.mapper)));
    }
}

export default GenericSmartOnFhirDstu2DataSource;