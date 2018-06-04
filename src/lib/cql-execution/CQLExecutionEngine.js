import cql from 'cql-execution';
import cqlfhir from 'cql-exec-fhir';
import CodeService from './codeservice/CodeService';
import valueset_db from './codeservice/vsac_cache/valueset-db.json';
import exampleCql from './example/cql/PALLASpatient';
import examplePatient1 from './example/patients/exampleFHIRPatient1.json';
import examplePatient2 from './example/patients/exampleFHIRPatient2.json';
import examplePatient3 from './example/patients/No_Foot_Exam.json';
import examplePatient4 from './example/patients/Old_Foot_Exam.json';

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

// returns CQL Results using example CQL logic(age.cql -> age.JSON)
// and example patient source
exports.getExampleCQLResults = () => {
    return exports.getCQLResults(exampleCql, [examplePatient1, examplePatient2, examplePatient3, examplePatient4]);
}