import Patient from '../patient/Patient';
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import Lang from 'lodash'
import util from 'util';

export default class NoteParser {
    constructor(shortcutManager = undefined, contextManager = undefined) {
        if (Lang.isUndefined(shortcutManager)) {
            this.shortcutManager = new ShortcutManager();
        } else {
            this.shortcutManager = shortcutManager;
        }
        if (Lang.isUndefined(contextManager)) {
            this.contextManager = new ContextManager(new Patient(false));
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
        return note.match(this.allTriggersRegExp);
    }
    
    parse(note) {
        console.log("parse: " + note);
        const structuredPhrases = this.getListOfTriggersFromText(note);
        //console.log(structuredPhrases);
        let data = structuredPhrases.map(this.createShortcut.bind(this));
        let dataObj;
        data.forEach(function(item) {
            dataObj = item.getValueObject();
            if (!Lang.isUndefined(dataObj)) {
                console.log(util.inspect(dataObj, false, null));
            }
            //console.log(item);
        });
    }
}