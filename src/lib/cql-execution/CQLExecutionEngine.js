import cql from 'cql-execution';
import exampleMeasure from './example/age';
import examplePatientSource from './example/examplePatientSource.json';

/*
 *  returns CQL execution results when passed in a measure and set of patients
 *  measure is a javascript file compiled from coffeescript, which was converted from a CQL file defining the measure
 *  psource is an array of patients each represented as a FHIR bundle
 */ 
exports.getCQLResults = (measure, psource) => {
    // Executes measure against the patient source
    const lib = new cql.Library(measure);
    const executor = new cql.Executor(lib);
    const patientSource = new cql.PatientSource(psource);
    
    return executor.exec(patientSource);
}

// returns CQL Results using example measure(age.cql -> age.coffee -> (age.js, age.js.map))
// and example patient source
exports.getExampleCQLResults = () => {
    return exports.getCQLResults(exampleMeasure, examplePatientSource);
}