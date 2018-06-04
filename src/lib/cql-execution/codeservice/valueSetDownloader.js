const fs = require('fs');
const path = require('path');
const cql = require('cql-execution');
const cqlfhir = require('cql-exec-fhir');
const cqlvsac = require('cql-exec-vsac');

if (process.argv.length < 3) {
    console.error('JSON ELM file not provided.');
    process.exit(1);
}

let vsacUser, vsacPass;
if (process.argv.length == 5) {
    [vsacUser, vsacPass] = process.argv.slice(3);
}

// Set up the library
const elmFile = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const library = new cql.Library(elmFile);

// Extract the value sets from the ELM
let valueSets = [];
if (elmFile.library && elmFile.library.valueSets && elmFile.library.valueSets.def) {
    valueSets = elmFile.library.valueSets.def;
}

// Set up the code service, loading from the cache if it exists
const codeService = new cqlvsac.CodeService(path.join(__dirname, 'vsac_cache'), true);
// Ensure value sets, downloading any missing value sets
codeService.ensureValueSets(valueSets, vsacUser, vsacPass)
    .then(() => {
        // Value sets are loaded
        console.log('Value sets downloaded!');
    })
    .catch((err) => {
        // There was an error downloading the value sets!
        console.error('Error downloading value sets', err);
    });