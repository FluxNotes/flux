const fs = require('fs');
const program = require('commander');
const flatten = require('flat');
const moment = require('moment');

let input;
let entryid;
program
    .usage('<path-to-patient-json> <encounter-entryid>')
    .arguments('<path-to-patient-json> <encounter-entryid>')
    .action((pathToPatientJson, encounterEntryid) => {
        input = pathToPatientJson;
        entryid = encounterEntryid;
    })
    .parse(process.argv);

// Check that input file is specified
if (typeof input === 'undefined') {
    // print error in red text (\x1b[31m) then reset color back to normal (\x1b[0m)
    console.error('\x1b[31m', 'Missing path to patient JSON', '\x1b[0m');
    program.help();
}

const patientEntries = JSON.parse(fs.readFileSync(input, 'utf8'));
const encounter = patientEntries.find(entry => entry.EntryType.Value === 'http://standardhealthrecord.org/spec/shr/encounter/EncounterRequested' && entry.EntryId === entryid);

// Encounter not found in patient entries so exit the program
if (encounter === undefined) {
    console.error(`Encounter with entryid ${entryid} not found.`);
    process.exit(1);
}

// Save backup
fs.writeFileSync(`${input}.backup`, JSON.stringify(patientEntries, null, 4), 'utf8');
console.log(`Saved backup JSON file to ${input}.backup`);

const encounterDate = moment(encounter.ActionContext.ExpectedPerformanceTime.Value, 'D MMM YYYY HH:mm ZZ').startOf('day');
const today = moment().startOf('day');
const deltaDuration = moment.duration(today.diff(encounterDate));

patientEntries.forEach((entry, i) => {
    // flatten each entry to have only one level of properties to make it easier to traverse
    const flattenedEntry = flatten(entry);
    let change = false;

    for (const key in flattenedEntry) {
        const value = flattenedEntry[key];

        /*
         *  Check for three different formats that dates in patient entries can have
         *  If a date is found, a delta is added and date on the entry is changed to the new date
         */
        if (moment(value, 'DD MMM YYYY', true).isValid()) {
            const date = moment(value, 'DD MMM YYYY');

            date.add(deltaDuration);
            flattenedEntry[key] = date.format('DD MMM YYYY');
            change = true;
        } else if (moment(value, 'D MMM YYYY', true).isValid()) {
            const date = moment(value, 'D MMM YYYY');

            date.add(deltaDuration);
            flattenedEntry[key] = date.format('DD MMM YYYY');
            change = true;
        } else if (moment(value, 'D MMM YYYY HH:mm ZZ', true).isValid()) {
            const date = moment(value, 'D MMM YYYY HH:mm ZZ');

            // Keep encounter time
            date.add(deltaDuration.asDays(), 'd');
            flattenedEntry[key] = date.format('D MMM YYYY HH:mm ZZ');
            change = true;
        }
    }

    // unflatten entry
    if (change) {
        patientEntries[i] = flatten.unflatten(flattenedEntry);
    }
});

const resultJSON = JSON.stringify(patientEntries, null, 4);
fs.writeFile(input, resultJSON, 'utf8', (err) => {
    if (err) throw err;
    console.log('DONE');
});
