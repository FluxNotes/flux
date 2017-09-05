import Patient from '../patient/Patient';
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import Lang from 'lodash'
import util from 'util';

export default class NoteParser {
    constructor() {
        this.patient = new Patient(false);
        this.shortcutManager = new ShortcutManager();
        this.contextManager = new ContextManager(this.patient);
        this.contextManager.setIsBlock1BeforeBlock2(() => { return true; });
        this.allTriggersRegExp = undefined;
        this.triggerMap = {};
        
        let allTriggers = [];
        let allShortcuts = this.shortcutManager.getAllShortcutClasses();
        let curTriggers;
        allShortcuts.forEach((shortcutC) => {
            curTriggers = shortcutC.getTriggers();
            allTriggers = allTriggers.concat(curTriggers);          
            curTriggers.forEach((item) => {
               this.triggerMap[item.toLowerCase()] = shortcutC; 
            });
        });
        this.allTriggersRegExp = new RegExp("(" + allTriggers.join("|") + ")", 'gi');
    }
    
    createShortcut(trigger) {
        const shortcutC = this.triggerMap[trigger.toLowerCase()];
        const shortcut = new shortcutC();
        shortcut.initialize(this.contextManager, trigger);
        shortcut.setKey(null);
        return shortcut;
    }
    
    parse(note) {
        console.log("parse: " + note);
        const structuredPhrases = note.match(this.allTriggersRegExp);
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