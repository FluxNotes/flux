import McodeV09SmartOnFhirDataSource from "./McodeV09SmartOnFhirDataSource";
import processFHIRResources from './utils/fhir-entry-processor';
import mappers from './mappers';

class GenericSmartOnFhirDstu2DataSource extends McodeV05SmartOnFhirDataSource {
    constructor(props) {
        super(props);
        if(props && typeof props.mapper === 'string'){
            this.mapper = mappers[props.mapper]
        }else{
            this.mapper = props && props.mapper ? props.mapper: null;
        }
    }

    getPatient(id, callback) {
        super.fetchResources()
            .then(resources => callback(processFHIRResources(resources, this._client.patient.id, this.mapper)));
    }
}

export default GenericSmartOnFhirDstu2DataSource;