import McodeV09SmartOnFhirDataSource from "./McodeV09SmartOnFhirDataSource";
import processFHIRResources from './utils/fhir-entry-processor';


class GenericSmartOnFhirDstu2DataSource extends McodeV05SmartOnFhirDataSource {
    constructor(props={}) {
        super(props);
        this.mapper = props.mapper; 
    }

    getPatient(id, callback) {
        super.fetchResources()
            .then(resources => callback(processFHIRResources(resources, this._client.patient.id, this.mapper)));
    }
}

export default GenericSmartOnFhirDstu2DataSource;