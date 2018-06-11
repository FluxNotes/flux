import cql from 'cql-execution';
import cqlfhir from 'cql-exec-fhir';
import CodeService from './codeservice/CodeService';
import valueset_db from './codeservice/vsac_cache/valueset-db.json';


/*
 *  returns CQL execution results when passed in a CQL file(JSON ELM) and set of patients
 *  cqlLogic is a JSON ELM file, which was converted from a CQL file defining logic
 *  psource is an array of patients each represented as a FHIR bundle
 */ 
exports.getCQLResults = (cqlLogic, psource) => {
    // Set up library
    const lib = new cql.Library(cqlLogic);

    // Create Patient Source
    const patientSource = cqlfhir.PatientSource.FHIRv102();

    // Load patientsource with patients
    patientSource.loadBundles(psource);
    
    // Set up code service and load valuesets
    const codeService = new CodeService(valueset_db);
    
    const executor = new cql.Executor(lib, codeService);
    return executor.exec(patientSource);
}
