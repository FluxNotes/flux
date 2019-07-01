import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import Lang from 'lodash';
import InsertValue from '../shortcuts/InsertValue';
import CreatorBase from '../shortcuts/CreatorBase';
import UpdaterBase from '../shortcuts/UpdaterBase';

export default class NoteParser {

    constructor(shortcutManager = undefined, contextManager = undefined) {
        if (Lang.isUndefined(shortcutManager)) {
            this.shortcutManager = new ShortcutManager();
        } else {
            this.shortcutManager = shortcutManager;
        }
        if (Lang.isUndefined(contextManager)) {
            const dataAccess = new DataAccess("NewPatientOnlyDataSource");
            this.patient = dataAccess.newPatient();
            this.contextManager = new ContextManager(this.patient);
            this.contextManager.setIsBlock1BeforeBlock2(() => {
                return true;
            });
            this.contextManager.setGetContextsBeforeSelection(() => {
                return true;
            });
        } else {
            this.contextManager = contextManager;
        }
        this.allStringTriggersRegExp = undefined;
        //this.triggerMap = {};

        // build up all trigger string regular expression
        const allTriggers = this.shortcutManager.getAllStringTriggers();
        const allShortcuts = this.shortcutManager.getAllShortcutDefinitions();

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
    }

    getAllTriggersRegularExpression() {
        return this.allStringTriggersRegExp;
    }

    // Update shortcuts and update patients accordingly
    handleShortcutUpdate = (s) => {
        s.updatePatient(this.patient, this.contextManager, null);
    }

    createShortcut(triggerOrKeywordObject) {
        const triggerOrKeywordText = (Lang.isUndefined(triggerOrKeywordObject.trigger)) ? triggerOrKeywordObject.keyword : triggerOrKeywordObject.trigger;
        const shortcut = this.shortcutManager.createShortcut(
            triggerOrKeywordObject.definition, triggerOrKeywordText, this.patient,
            triggerOrKeywordObject.selectedValue, this.handleShortcutUpdate);
        shortcut.setSource("parsed note");
        shortcut.initialize(this.contextManager, triggerOrKeywordText, true, triggerOrKeywordObject.selectedValue);

        if (shortcut instanceof CreatorBase || shortcut instanceof UpdaterBase) {
            shortcut.updatePatient(this.patient, this.contextManager, null);
        }

        if (shortcut instanceof InsertValue) {
            const object = shortcut.createObjectForParsing(triggerOrKeywordObject.selectedValue, this.contextManager);
            this.patient.addEntryToPatient(object);
            shortcut.setValueObject(object);
        }

        shortcut.setKey("1");

        return shortcut;
    }

    /**
     *
     * @param {*} note text to parse which may contain structured phrases currently including @inserters, #creators, and <placeholders>.
     * @returns list with 2 elements:
     *          0: list of found triggers and placeholders each represented as an object as follows (in order found in text):
     *              {   trigger: <found trigger string>,
     *                  definition: <metadata for shortcut>,
     *                  selectedValue: <found value information within [[]]>,
     *                  isPickList: <true if need to pick value>}
     *              {   placeholder: <found placeholder string>,
     *                  selectedValue: <found value information within [[]]>}
     *          1: potential structured phrases found that don't match any registered structured phrases
     */
    getListOfTriggersAndPlaceholdersFromText(note) {
        const unrecognizedTriggers = [];
        let textInAngleBrackets;
        const styleTags = ['<strong>', '</strong>', '<em>', '</em>', '<u>', '</u>', '<ul>', '</ul>', '<ol>', '</ol>', '<li>', '</li>'];
        const triggerChars = ['#', '@', '<'];
        const matches = [];
        let match, substr, nextPos, found;
        const checkForTriggerRegExpMatch = (tocheck) => {
            match = substr.match(tocheck.regexp);
            if (!Lang.isNull(match)) {
                matches.push({trigger: match[0], definition: tocheck.definition, isPickList: tocheck.definition.getData && tocheck.definition.getData.itemKey});
                found = true;
            }
        };
        let hashPos = this.getNextTriggerIndex(note, triggerChars, 0);
        while (hashPos !== -1) {
            if (note.charAt(hashPos) === '<') {
                nextPos = note.indexOf(">", hashPos+1);
                if (nextPos === -1) { // not a template
                    nextPos = this.getNextTriggerIndex(note, triggerChars, hashPos + 1);
                } else {
                    textInAngleBrackets = note.substring(hashPos, nextPos + 1).toLowerCase();
                    if (styleTags.includes(textInAngleBrackets)) {
                        // style
                        //matches.push({ style: textInAngleBrackets });
                    } else {
                        const possibleValue = note.substring(nextPos + 1);
                        let selectedValue = null;

                        // Check if the shortcut is an inserter (check for '[['). If it is, grab the selected value
                        if (possibleValue.startsWith("[[")) {
                            const posOfEndBrackets = possibleValue.indexOf("]]");
                            selectedValue = possibleValue.substring(2, posOfEndBrackets);
                        }
                        matches.push({placeholder: textInAngleBrackets, selectedValue });
                    }
                    nextPos = this.getNextTriggerIndex(note, triggerChars, nextPos + 1);
                    hashPos = nextPos;
                    continue;
                }
            } else {
                nextPos = this.getNextTriggerIndex(note, triggerChars, hashPos + 1);
            }
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
                    unrecognizedTriggers.push(substr);
                }
            } else {
                const possibleValue = substr.substring(match[0].length);
                let selectedValue = null;

                // Check if the shortcut is an inserter (check for '[['). If it is, grab the selected value
                if (possibleValue.startsWith("[[")) {
                    const posOfEndBrackets = possibleValue.indexOf("]]");
                    selectedValue = possibleValue.substring(2, posOfEndBrackets);
                }
                const def = this.shortcutManager.getMetadataForTrigger(match[0]);
                matches.push({trigger: match[0], definition: def, selectedValue, isPickList: def.getData && def.getData.itemKey });
            }
            hashPos = nextPos;
        }
        return [matches, unrecognizedTriggers];
    }

    getListOfTriggersFromText(note) {
        const unrecognizedTriggers = [];
        const triggerChars = ['#', '@'];
        let pos = 0;
        const matches = [];
        let match, substr, nextPos, found;
        const checkForTriggerRegExpMatch = (tocheck) => {
            match = substr.match(tocheck.regexp);
            if (!Lang.isNull(match)) {
                matches.push({trigger: match[0], definition: tocheck.definition});
                found = true;
            }
        };
        let hashPos = this.getNextTriggerIndex(note, triggerChars, pos);
        while (hashPos !== -1) {
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
                    unrecognizedTriggers.push(substr);
                }
            } else {
                const possibleValue = substr.substring(match[0].length);
                let selectedValue = null;

                // Check if the shortcut is an inserter (check for '[['). If it is, grab the selected value
                if (possibleValue.startsWith("[[")) {
                    const posOfEndBrackets = possibleValue.indexOf("]]");
                    selectedValue = possibleValue.substring(2, posOfEndBrackets);
                }
                const def = this.shortcutManager.getMetadataForTrigger(match[0]);
                matches.push({trigger: match[0], definition: def, selectedValue: selectedValue, isPickList: def.getData && def.getData.itemKey });
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
        const indexes = triggerPrefixes.map((triggerPrefix) => {
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
        // Get currently active KeywordShortcuts
        const listOfKeywordShortcuts = this.contextManager.getActiveKeywordShortcuts(this.shortcutManager);

        if (Lang.isUndefined(listOfKeywordShortcuts)) return [];
        // For each keywordShortcut
        for (const keywordShortcut of listOfKeywordShortcuts) {
            // Get all types of keywords
            const keywordClassesForShortcut = this.getAllKeywordClassesForKeywordShortcut(keywordShortcut);
            // For each type of keywords
            for (const curKeywordClass of keywordClassesForShortcut) {
                // get all keywordObjects for that type of keyword (representing all possibble values of that keyword)
                const keywordObjects = this.getKeywordsBasedOnKeywordShortcutClass(curKeywordClass);
                // scan text for any of those keywordObject Values
                const foundKeyword = this.scanTextForAnyKeywordObjects(note, keywordObjects);
                if (foundKeyword) {
                    // if keyword in text, add to our list of found keywords
                    const keywordText = foundKeyword.name.toLowerCase();
                    keywordsFoundInText.push({
                        keyword: keywordText,
                        definition: this.shortcutManager.getMetadataForTrigger(keywordText)
                    });
                }
            }
        }
        return keywordsFoundInText;
    }

    // Given keywordsObjects representing potential keyword values and text, find the first keywordObject who appears in our text
    scanTextForAnyKeywordObjects(text, keywordObjects) {
        for (const keywordObj of keywordObjects) {
            if (text.toLowerCase().indexOf(keywordObj.name.toLowerCase()) !== -1) {
                return keywordObj;
            }
        }
    }

    // Given a keywordShortcutClass, get all of the associated keywords
    getKeywordsBasedOnKeywordShortcutClass(keywordShortcutClass) {
        return this.shortcutManager.getKeywordsForShortcut(keywordShortcutClass);
    }

    // Given a KeywordShortcut, return all possible child keywordClasses
    getAllKeywordClassesForKeywordShortcut(keywordShortcut) {
        return this.shortcutManager.getValidChildShortcutsInContext(keywordShortcut);
    }

    parse(note) {
        this.note = note;
        const result = this.getListOfTriggersFromText(note);
        const structuredPhrases = result[0];
        structuredPhrases.map(this.createShortcut.bind(this));
        const foundKeywords = this.getAllKeywordsFromText(note);
        foundKeywords.map(this.createShortcut.bind(this));

        return [this.patient.getEntries(), result[1]];
    }
}