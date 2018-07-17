# Patient JSON Date Changer

This tool is designed to change all of the dates in each of the entries in a patient JSON.  One of the parameters passed to the node service is the entryid of an encounter.  The tool will calculate the difference of the current date and the date of the encounter and will add that difference to all of the dates.

## Using the date changer

The date changer can be executed (local command line) by running the following command:

```bash
node app.js <path-to-patient-json> <encounter-entryid>
```

* The program expects the JSON file provided to be an array of SHR entries.
* The program will overwrite the file that was passed in and will create a backup using the same path but adding `'.backup'` to the end.
  * For example, the backup file that will be created for `HardCodedPatientMidYearDemo18.json` will named `HardCodedPatientMidYearDemo18.json.backup`.

For example:

```bash
node app.js ../../dataaccess/HardCodedPatientMidYearDemo18.json 100
```

will search the patient entries for an `EncounterRequested` with an `entryid` of 100.  It will then use the `ActionContext.ExpectedPerformanceTime.Value` to calculate the difference to add to the dates.
