const fs = require('fs');
const path = require('path');
const program = require('commander');
const flatten = require('flat');
const moment = require('moment');

let input;
let deltaYears;
program
    .usage('<path-to-patient-json> [options]')
    .arguments('<path-to-patient-json> <delta>')
    .action(function (pathToPatientJson, delta) {
        input = pathToPatientJson;
        deltaYears = delta;
    })
    .parse(process.argv);

// Check that input folder is specified
if (typeof input === 'undefined') {
    // print error in red text (\x1b[31m) then reset color back to normal (\x1b[0m)
    console.error('\x1b[31m','Missing path to patient JSON','\x1b[0m');
    program.help();
}

const patientEntries = JSON.parse(fs.readFileSync(input, 'utf8'));

const duration = moment.duration(deltaYears, 'y');
patientEntries.forEach((entry, i) => {
    // flatten each entry to have only one level of properties
    const flattenedEntry = flatten(entry);
    let change = false;

    for (const key in flattenedEntry) {
        const value = flattenedEntry[key];
        if (moment(value, 'DD MMM YYYY', true).isValid()) {
            // console.log(key)
            // console.log(value);
            let date = moment(value, 'DD MMM YYYY');
            // console.log(date.format('DD MMM YYYY'))
            date.add(deltaYears, 'year');
            // console.log(date.format('DD MMM YYYY'));
            // console.log(moment(value, 'DD MMM YYYY', true))
            flattenedEntry[key] = date.format('DD MMM YYYY');
            change = true;
        } else if(moment(value, 'D MMM YYYY', true).isValid()) {
            // console.log(key)
            // console.log(value)
            let date = moment(value, 'D MMM YYYY');
            date.add(deltaYears, 'year');
            // console.log(date.format('DD MMM YYYY'));
            flattenedEntry[key] = date.format('DD MMM YYYY');
            change = true;
        } else if(moment(value, 'D MMM YYYY HH:mm ZZ', true).isValid()) {
            // console.log(key)
            // console.log(value)
            let date = moment(value, 'D MMM YYYY HH:mm ZZ');
            date.add(deltaYears, 'year');
            // console.log(date.format('D MMM YYYY HH:mm ZZ'));
            flattenedEntry[key] = date.format('D MMM YYYY HH:mm ZZ');
            change = true;
        }
    }

    // unflatten entry
    if (change) {
        patientEntries[i] = flatten.unflatten(flattenedEntry);
    }
});
console.log(JSON.stringify(patientEntries));
