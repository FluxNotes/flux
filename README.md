# Flux Notes Prototype

## Features
This prototype is designed to demonstrate the concept of a clinician entering or dictating a clinical note that includes structured data embedded within it. A patient summary is shown for reference during the authoring of new clinical notes and provide incentive to identifying structured data during note authoring and review. The clinican can leverage templates for note creation. When authoring a note and within a structured field, Flux Notes displays a simple "point-of-sale" inspired "form" for choosing values that are part of the current structured field.

In addition, a no-patient version of the above concept has been created for situations where EHR integration is not possible and to facilitate use at hospitals without requiring installation. In no-patient mode, the clinican choosing the type of data being authored and then uses the point-of-sale form from above to author the content which produces the equivalent structured field text that can be pasted into their EHR's note entry area as part of authoring a clinical note.

## Getting Started

* Ensure that Node.js and Yarn are both installed.
* Git clone the repository
* Check out the master branch (or the branch you want to work in)
* In a terminal navigate into the flux folder (stay at the project root)
* Enter 'yarn install'
* Enter 'yarn start' to launch the development web server and open a browser to view the application
* To view patient mode, append patient to the end of the default url (result url would be http://localhost:3000/#/patient)

## Technical Details

For more details on the technologies used see the wiki page at https://github.com/standardhealth/flux/wiki/Flux-Capture-Prototype-%28Flux-Notes%29

## Parsing notes

A note parser can also be executed (local command line - not a web application) by (assuming the above Getting Started steps have been executed successfully):

* Enter 'yarn parse <path to note txt file or directory of files>'

For example:
* Enter 'yarn parse ./src/noteparser/samples'

will parse all the sample notes in the samples directory. To only parse note 4:
* Enter 'yarn parse ./src/noteparser/samples/note4.txt'

If a directory is specified, every file in that directory will be treated as a note and parsing will be attempted.