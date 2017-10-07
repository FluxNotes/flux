//import Patient from '../patient/Patient';
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
            let dataAccess = new DataAccess();
            let patient = dataAccess.newPatient();
            this.contextManager = new ContextManager(patient);
            this.contextManager.setIsBlock1BeforeBlock2(() => { return true; });
        } else {
            this.contextManager = contextManager;
        }
        this.allTriggersRegExp = undefined;
        this.triggerMap = {};
        
        let allTriggers = [];
        let allShortcuts = this.shortcutManager.getAllShortcutClasses();
        let curTriggers;
        allShortcuts.forEach((shortcutC) => {
            curTriggers = shortcutC.getTriggers().map((obj) => { return obj.name; });;
            allTriggers = allTriggers.concat(curTriggers);          
            curTriggers.forEach((item) => {
                this.triggerMap[item.toLowerCase()] = shortcutC; 
            });
        });
        this.allTriggersRegExp = new RegExp("(" + allTriggers.join("|") + ")", 'gi');
        this.patientRecord = [];
    }
    
    getAllTriggersRegularExpression() {
        return this.allTriggersRegExp;
    }
    
    createShortcut(trigger) {
        const shortcutC = this.triggerMap[trigger.toLowerCase()];
        const shortcut = new shortcutC();
        shortcut.initialize(this.contextManager, trigger);
        shortcut.setKey(null);
        return shortcut;
    }
    
    getListOfTriggersFromText(note) {
        const matches =  note.match(this.allTriggersRegExp);
        if (Lang.isNull(matches)) { 
            return [];
        } else { 
            return matches;
        }
    }
    
    parse(note) {
        this.patientRecord = [];
        // console.log("parse: " + note);
        const structuredPhrases = this.getListOfTriggersFromText(note);
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
        return this.patientRecord;
    }
}