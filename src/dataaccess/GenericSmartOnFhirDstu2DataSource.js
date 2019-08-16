import McodeV09SmartOnFhirDataSource from "./McodeV09SmartOnFhirDataSource";
import processFHIRResources from './utils/fhir-entry-processor';
import {mappers} from 'fhir-mapper';

class GenericSmartOnFhirDstu2DataSource extends McodeV09SmartOnFhirDataSource {
    constructor(props) {
        super(props);
        this.mapper = props && props.mapper ? mappers[props.mapper] : null;
    }

    getPatient(id, callback) {
        super.fetchResources()
            .then(resources => callback(processFHIRResources(resources, this._client.patient.id, this.mapper)));
    }
}

export default GenericSmartOnFhirDstu2DataSource;