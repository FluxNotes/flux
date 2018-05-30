import cql from 'cql-execution';
import cqlfhir from 'cql-exec-fhir';
import exampleCql from './example/gender';
import examplePatient1 from './example/exampleFHIRPatient1.json';
import examplePatient2 from './example/exampleFHIRPatient2.json';

/*
 *  returns CQL execution results when passed in a measure and set of patients
 *  cql is a javascript file compiled from coffeescript, which was converted from a CQL file defining logic
 *  psource is an array of patients each represented as a FHIR bundle
 */ 
exports.getCQLResults = (cqlLogic, psource) => {
    // Executes measure against the patient source
    const lib = new cql.Library(cqlLogic);
    const executor = new cql.Executor(lib);

    // const patientSource = new cql.PatientSource(psource);
    const patientSource = cqlfhir.PatientSource.FHIRv102();
    patientSource.loadBundles(psource);
    
    return executor.exec(patientSource);
}

// returns CQL Results using example measure(age.cql -> age.coffee -> (age.js, age.js.map))
// and example patient source
exports.getExampleCQLResults = () => {
    return exports.getCQLResults(exampleCql, [examplePatient1, examplePatient2]);
}