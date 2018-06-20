import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import PatientRecord from '../patient/PatientRecord';
import FluxMedicationRequested from '../model/medication/FluxMedicationRequested';
import Lang from 'lodash';

export default class NoteParser {
    constructor(shortcutManager = undefined, contextManager = undefined) {
        if (Lang.isUndefined(shortcutManager)) {
            this.shortcutManager = new ShortcutManager();
        } else {
            this.shortcutManager = shortcutManager;
        }
        if (Lang.isUndefined(contextManager)) {
            let dataAccess = new DataAccess("NewPatientOnlyDataSource");
            let patient = dataAccess.newPatient();
            this.contextManager = new ContextManager(patient);
            this.contextManager.setIsBlock1BeforeBlock2(() => {
                return true;
            });
        } else {
            this.contextManager = contextManager;
        }
        this.allStringTriggersRegExp = undefined;
        //this.triggerMap = {};

        // build up all trigger string regular expression
        let allTriggers = this.shortcutManager.getAllStringTriggers();
        //console.log(allTriggers);
        let allShortcuts = this.shortcutManager.getAllShortcutDefinitions();

        this.allStringTriggersRegExp = new RegExp("(" + allTriggers.join("|") + ")", 'i');

        // build list of regular expression triggers
        this.allTriggersRegExps = [];
        let regexp;
        allShortcuts.forEach((def) => {
            regexp = def.regexpTrigger;
            if (regexp) {
                this.allTriggersRegExps.push({regexp: regexp, definition: def});
            }
        });

        this.patientRecord = [];
    }

    getAllTriggersRegularExpression() {
        return this.allStringTriggersRegExp;
    }

    createShortcut(triggerOrKeywordObject) {
        const triggerOrKeywordText = (Lang.isUndefined(triggerOrKeywordObject.trigger)) ? triggerOrKeywordObject.keyword : triggerOrKeywordObject.trigger
        const shortcut = this.shortcutManager.createShortcut(triggerOrKeywordObject.definition, triggerOrKeywordText, this.patientRecord); //, onUpdate, object
        shortcut.initialize(this.contextManager, triggerOrKeywordText, true, triggerOrKeywordObject.selectedValue);
        shortcut.setKey("1");
        return shortcut;
    }

    // This method takes in a trigger. If the trigger is a pick list (a shortcut that has multiple options) return true, otherwise return false
    isPickList(trigger) {
        // Note: only pick list triggers have an itemKey in getData
       return (trigger.definition.getData && trigger.definition.getData.itemKey);
    }

    getListOfTriggersFromText(note) {
        let unrecognizedTriggers = [];
        const triggerChars = ['#', '@'];
        let pos = 0;
        let matches = [];
        let match, substr, nextPos, found;
        let checkForTriggerRegExpMatch = (tocheck) => {
            match = substr.match(tocheck.regexp);
            if (!Lang.isNull(match)) {
                //console.log("matched " + tocheck.regexp);
                matches.push({trigger: match[0], definition: tocheck.definition});
                found = true;
            }
        }
        let hashPos = this.getNextTriggerIndex(note, triggerChars, pos);
        while (hashPos !== -1) {
            //console.log(hashPos);
            nextPos = this.getNextTriggerIndex(note, triggerChars, hashPos + 1);
            if (nextPos === -1) {
                substr = note.substring(hashPos);
            } else {
                substr = note.substring(hashPos, nextPos);
            }
            match = substr.match(this.allStringTriggersRegExp);
            if (Lang.isNull(match)) {
                found = false;
                this.allTriggersRegExps.forEach(checkForTriggerRegExpMatch);
                if (!found) {
                    //console.log("not a recognized structured phrase: " + substr);
                    unrecognizedTriggers.push(substr);
                }
            } else {
                let possibleValue = substr.substring(match[0].length);
                let selectedValue = null;

                 // Check if the shortcut is an inserter (check for '[['). If it is, grab the selected value
                if (possibleValue.startsWith("[[")) {

                    console.log("found an inserter");
                    let posOfEndBrackets = possibleValue.indexOf("]]");
                    selectedValue = possibleValue.substring(2, posOfEndBrackets);
                    console.log("selected value");
                    console.log(selectedValue);

                }
                matches.push({trigger: match[0], definition: this.shortcutManager.getMetadataForTrigger(match[0]), selectedValue: selectedValue});
            }
            pos = hashPos + 1;
            hashPos = nextPos;
        }
        return [matches, unrecognizedTriggers];
    }

    getNextTriggerIndex(note, triggerPrefixes, pos) {
        // Handle a saved, empty note
        if (Lang.isUndefined(note)) {
            return -1;
        }
        let indexes = triggerPrefixes.map((triggerPrefix) => {
            return note.indexOf(triggerPrefix, pos);
        });
        let triggerPos = -1;
        indexes.forEach((i) => {
            if (i >= 0) {
                if (triggerPos === -1) {
                    triggerPos = i;
                } else {
                    triggerPos = Math.min(triggerPos, i);
                }
            }
        });
        return triggerPos;
    }

    // Given a note, create a list of all keywords found in the note and their definitions
    getAllKeywordsFromText (note) { 
        const keywordsFoundInText = [];
        // Get currently active singleHashtagShortcuts 
        const listOfSingleHashtagKeywordShortcuts = this.contextManager.getActiveSingleHashtagKeywordShortcuts(this.shortcutManager);
        if (Lang.isUndefined(listOfSingleHashtagKeywordShortcuts)) return [];
        // For each singleHashtagShortcut 
        for (const singleHashtagShortcut of listOfSingleHashtagKeywordShortcuts) { 
            // Get all types of keywords 
            const keywordClassesForShortcut = this.getAllKeywordClassesForSingleHashtagKeywordShortcut(singleHashtagShortcut)
            // For each type of keywords 
            for (const curKeywordClass of keywordClassesForShortcut) { 
                // get all keywordObjects for that type of keyword (representing all possibble values of that keyword)
                const keywordObjects = this.getKeywordsBasedOnKeywordShortcutClass(curKeywordClass)
                // scan text for any of those keywordObject Values 
                const foundKeyword = this.scanTextForAnyKeywordObjects(note, keywordObjects)
                if (foundKeyword) { 
                    // if keyword in text, add to our list of found keywords
                    const keywordText = foundKeyword.name.toLowerCase()
                    keywordsFoundInText.push({
                        keyword: keywordText, 
                        definition: this.shortcutManager.getMetadataForTrigger(keywordText)
                    });
                }
            }
        }
        return keywordsFoundInText
    }

    // Given keywordsObjects representing potential keyword values and text, find the first keywordObject who appears in our text
    scanTextForAnyKeywordObjects(text, keywordObjects) { 
		for (const keywordObj of keywordObjects) { 
			if (text.toLowerCase().indexOf(keywordObj.name.toLowerCase()) !== -1) { 
				return keywordObj
			}
        }
	}

    // Given a keywordShortcutClass, get all of the associated keywords
    getKeywordsBasedOnKeywordShortcutClass(keywordShortcutClass) { 
        return this.shortcutManager.getKeywordsForShortcut(keywordShortcutClass)
    }

    // Given a singleHashtagKeywordShortcut, return all possible child keywordClasses 
    getAllKeywordClassesForSingleHashtagKeywordShortcut(singleHashtagKeywordShortcut) { 
        return this.shortcutManager.getValidChildShortcutsInContext(singleHashtagKeywordShortcut)
    }
    
    parse(note) {
        this.patientRecord = new PatientRecord();
        // let med = new FluxMedicationRequested();
        // this.patientRecord.addEntryToPatient(med);
        // console.log("parse: " + note);
        const result = this.getListOfTriggersFromText(note);
        const structuredPhrases = result[0];
        //console.log(structuredPhrases);
        let data = structuredPhrases.map(this.createShortcut.bind(this));

        const foundKeywords = this.getAllKeywordsFromText(note);
        data = data.concat(foundKeywords.map(this.createShortcut.bind(this)));
        // console.log(data)
        let dataObj;
        data.forEach((item) => {
            dataObj = item.getValueObject();
            if (!Lang.isUndefined(dataObj)) {
                this.patientRecord.addEntryToPatient(dataObj);
            }
        });
        return [this.patientRecord.getEntries(), result[1]];
    }
}