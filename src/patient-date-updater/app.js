const fs = require('fs');
const program = require('commander');
const flatten = require('flat');
const moment = require('moment');

let input, entryid;
program
    .usage('<path-to-patient-json> [encounter-entryid]')
    .arguments('<path-to-patient-json> [encounter-entryid]')
    .option('-o, --output', 'Output all dates in the record')
    .option('-O, --ordered-output', 'Output all dates in chronological order')
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
const output = program.output;
const showMeta = false;
const orderedOutput = program.orderedOutput;
const patientEntries = JSON.parse(fs.readFileSync(input, 'utf8'));
let encounter;
if (entryid) {
    encounter = patientEntries.find(entry => entry.EntryType.Value === 'http://standardhealthrecord.org/spec/shr/encounter/ConsultRequested' && entry.EntryId === entryid);
    // Encounter not found in patient entries so exit the program
    if (encounter === undefined) {
        console.error(`Encounter with entryid ${entryid} not found.`);
        process.exit(1);
    }
}

// Save backup
fs.writeFileSync(`${input}.backup`, JSON.stringify(patientEntries, null, 4), 'utf8');
console.log(`Saved backup JSON file to ${input}.backup`);

let today, deltaDuration;
if (encounter) {
    // encounterDateValue grabs the correct date value based on whether the patient JSON is in mCODE v0.1 or v0.5
    const encounterDateValue = encounter.Encounter.TimePeriod.TimePeriodStart ? encounter.Encounter.TimePeriod.TimePeriodStart.Value : encounter.Encounter.TimePeriod.BeginDateTime.Value;
    const encounterDate = moment(encounterDateValue, 'D MMM YYYY HH:mm ZZ').startOf('day');
    today = moment().startOf('day');
    deltaDuration = moment.duration(today.diff(encounterDate));
}


const entries = {};
patientEntries.forEach((entry, i) => {
    // flatten each entry to have only one level of properties to make it easier to traverse
    const flattenedEntry = flatten(entry);
    let change = false;
    let isDate;
    const entryId = flattenedEntry.EntryId
    const entryType = flattenedEntry["EntryType.Value"].split('/').slice(-1)[0];
    if (output && !orderedOutput) {
        console.log(entryId + '\t' + entryType);
    }

    for (const key in flattenedEntry) {
        const entry = { entryId: entryId, entryType: entryType }
        const value = flattenedEntry[key];
        isDate = false;
        /*
         *  Check for three different formats that dates in patient entries can have
         *  If a date is found, a delta is added and date on the entry is changed to the new date
         */
        if (moment(value, 'DD MMM YYYY', true).isValid()) {
            const date = moment(value, 'DD MMM YYYY');
            isDate = true;
            if (encounter) {
                date.add(deltaDuration);
                flattenedEntry[key] = date.format('DD MMM YYYY');
                change = true;
            }
            entry.date = date;
        } else if (moment(value, 'D MMM YYYY', true).isValid()) {
            const date = moment(value, 'D MMM YYYY');
            isDate = true;
            if (encounter) {
                date.add(deltaDuration);
                flattenedEntry[key] = date.format('DD MMM YYYY');
                change = true;
            }
            entry.date = date;

        } else if (moment(value, 'D MMM YYYY HH:mm ZZ', true).isValid()) {
            const date = moment(value, 'D MMM YYYY HH:mm ZZ');
            isDate = true;
            if (encounter) {
                // Keep encounter time
                date.add(deltaDuration.asDays(), 'd');
                flattenedEntry[key] = date.format('D MMM YYYY HH:mm ZZ');
                change = true;
            }
            entry.date = date;
        }
        if (orderedOutput && isDate) {
            entry.key = key;
            entry.value = value;
            if(entries[entry.entryId]){
                entries[entry.entryId].push(entry);
            }else{
                entries[entry.entryId]=[entry];
            }
        } else if (output && isDate) {
            log(key, value);
        }
    }

    // unflatten entry
    if (change) {
        patientEntries[i] = flatten.unflatten(flattenedEntry);
    }
});
if (orderedOutput) {
    const newEntries = flattenOrderedOutput(entries);
    newEntries.sort(sortByDate);
    newEntries.forEach((e) => {
        logInOrder(e.entryId, e.entryType, e.key, e.value);
    })
}

if (encounter) {
    const resultJSON = JSON.stringify(patientEntries, null, 4);
    fs.writeFile(input, resultJSON, 'utf8', (err) => {
        if (err) throw err;
        console.log('DONE');
    });
}


function log(key, value) {
    console.log(`\t\t${key}: ${value}`);
}

function flattenOrderedOutput(entries) {
    let returnEntries = [];
    Object.keys(entries).forEach((entryListIndex)=>{
        let total = [];
        let metadata = [];
        entries[entryListIndex].forEach((entry)=>{
            if(entry.key.toLowerCase().split(".").indexOf("metadata")>-1){
                metadata.push(entry);
            }else{
                // pretty much everything has "Value" tacked to the end, so we lop it off
                const valueCheck = entry.key.split(".");
                valueCheck.splice(valueCheck.indexOf("Value"),1);
                entry.key = valueCheck.join('.');
                total.push(entry);
            }
        })
        if(total.length>0) {
            returnEntries = returnEntries.concat(total);
        }else if(metadata.length>0 && showMeta){
            returnEntries.push(metadata[0])
        }
    })
    return returnEntries;
}

function logInOrder(id, type, key, value) {
    key = type + '.' + key;
    key = key.padStart(key.length + 5 - id.length);
    value = value.padStart(80 - key.length - id.length + value.length);
    console.log(`[${id}] ${key}: ${value}`);
}

function sortByDate(a, b) {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
}