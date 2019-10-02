import McodeV09SmartOnFhirDataSource from "./McodeV09SmartOnFhirDataSource";
import processFHIRResources from './utils/fhir-entry-processor';
import mappers from './mappers';

class GenericSmartOnFhirDstu2DataSource extends McodeV09SmartOnFhirDataSource {
    constructor(props) {
        super(props);
        if (props && props.mapper) {
            const mapperClass = typeof props.mapper === 'string' ? mappers[props.mapper] : props.mapper;
            this.mapper = new mapperClass(props.mapperVariables);
        }
    }

    getPatient(id, callback) {
        super.fetchResources()
            .then(resources => callback(processFHIRResources(resources, this._client.patient.id, this.mapper)));
    }
}

export default GenericSmartOnFhirDstu2DataSource;