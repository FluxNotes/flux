import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import Lang from 'lodash'
//import util from 'util';

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
            this.contextManager.setIsBlock1BeforeBlock2(() => { return true; });
        } else {
            this.contextManager = contextManager;
        }
        this.allStringTriggersRegExp = undefined;
        //this.triggerMap = {};
        
        // build up all trigger string regular expression
        let allTriggers = this.shortcutManager.getAllStringTriggers();
        //console.log(allTriggers);
        let allShortcuts = this.shortcutManager.getAllShortcutDefinitions();
        /*let curTriggers;
        allShortcuts.forEach((shortcutC) => {
            curTriggers = shortcutC.getStringTriggers().map((obj) => { return obj.name; });;
            allTriggers = allTriggers.concat(curTriggers);          
            curTriggers.forEach((item) => {
                this.triggerMap[item.toLowerCase()] = shortcutC; 
            });
        });*/
        this.allStringTriggersRegExp = new RegExp("(" + allTriggers.join("|") + ")", 'i');
        
        // build list of regular expression triggers
        this.allTriggersRegExps = [];
        let regexp;
        allShortcuts.forEach((def) => {
           regexp = def.regexpTrigger; 
           if (regexp) {
               this.allTriggersRegExps.push({ regexp: regexp, definition: def});
           }
        });
        
        this.patientRecord = [];
    }
    
    getAllTriggersRegularExpression() {
        return this.allStringTriggersRegExp;
    }
    
    createShortcut(trigger) {
/*        let shortcutC;
        if (!Lang.isNull(trigger.shortcut)) {
            shortcutC = trigger.shortcut;
        } else {
            shortcutC = this.triggerMap[trigger.trigger.toLowerCase()];
            
        }
        const shortcut = new shortcutC();*/
        //console.log(trigger);

        console.log("in note parser createShortcut");

        const shortcut = this.shortcutManager.createShortcut(trigger.definition, trigger.trigger); //, onUpdate, object
        shortcut.initialize(this.contextManager, trigger.trigger);
        shortcut.setKey("1");
        return shortcut;
    }

    isPickList(trigger) {

        if (trigger.definition.getData) {
            if (trigger.definition.getData.itemKey) {
                return true;
            }
            else {
                return false;
            }
        } else {
            return false;
        }
    }
        
    getListOfTriggersFromText(note) {
        let unrecognizedTriggers = [];
        const triggerChars = [ '#', '@' ];
        let pos = 0;
        let matches = [];
        let match, substr, nextPos, found;
        let checkForTriggerRegExpMatch = (tocheck) => {
            //console.log(tocheck.regexp + " against '" + substr + "'");
            //console.log(tocheck);
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
                //console.log(match[0]);
                // this.allTriggersRegExps.forEach(checkForTriggerRegExpMatch);
                matches.push({trigger: match[0], definition: this.shortcutManager.getMetadataForTrigger(match[0])}); // new line that sets definition
                // matches.push({trigger: match[0], definition: null}); // Original line
            }
            pos = hashPos + 1;
            hashPos = nextPos;
        }
        return [ matches, unrecognizedTriggers ];
    }
    
    getNextTriggerIndex(note, triggerPrefixes, pos) {
        // Handle a saved, empty note
        if(Lang.isUndefined(note)){
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
/*        let triggerPos = note.indexOf('#', pos);
        let triggerPos2 = note.indexOf('@', pos);
        if (atPos != -1 && atPos < hashPos) hashPos = atPos;
 */       
        return triggerPos;
    }
    
    parse(note) {
        this.patientRecord = [];
        // console.log("parse: " + note);
        const result = this.getListOfTriggersFromText(note);
        const structuredPhrases = result[0];
        //console.log(structuredPhrases);
        let data = structuredPhrases.map(this.createShortcut.bind(this));
        let dataObj;
        data.forEach((item) => {
            dataObj = item.getValueObject();
            if (!Lang.isUndefined(dataObj)) {
                //console.log(util.inspect(dataObj, false, null));
                this.patientRecord.push(dataObj);
            }
        });
        return [ this.patientRecord, result[1] ];
    }
}