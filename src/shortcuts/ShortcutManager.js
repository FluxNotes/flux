//import Lang from 'lodash'
/*import ConditionInserter from './ConditionInserter';
import PatientInserter from './PatientInserter';
import StageInserter from './StageInserter';*/
import CreatorBase from './CreatorBase';
import CreatorIntermediary from './CreatorIntermediary';
import CreatorChild from './CreatorChild';
import InsertValue from './InsertValue';
import ValueSetManager from '../lib/ValueSetManager';
import shortcutMetadata from './Shortcuts.json';
import Lang from 'lodash';

function addTriggerForKey(trigger) {
    //console.log("add trigger " + trigger.name + " for shortcut " + this.currentShortcut);
    if (trigger.name) {
        this.shortcutMap[trigger.name.toLowerCase()] = this.shortcuts[this.currentShortcut];
    } else {
        // {"category":"staging", "valueSet":"T", "args":"7"}
        // args optional
        let args = trigger["args"];
        let category = trigger["category"];
        let valueSet = trigger["valueSet"];
        let list;
        if (args) {
            //console.log(category + "/" + valueSet + " with " + args);
            list = ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            //console.log(category + "/" + valueSet);
            list = ValueSetManager.getValueList(category, valueSet);
        }
        //console.log(list);
        this.triggersPerShortcut[this.currentShortcut] = list;
        list.forEach(addTriggerForKey, this);
    }
}

class ShortcutManager {
    shortcutDefinitions = [];
    shortcutMap = {};
    
    getAllShortcutDefinitions() {
        return this.shortcutDefinitions;
    }
    
    getAllStringTriggers() {
        return Object.keys(this.shortcutMap);
    }
    
    constructor(shortcutList) {
        this.shortcutsToSupportList = shortcutList;
        this.loadShortcutMetadata(shortcutList, shortcutMetadata);
        /*
        for (var key in this.shortcuts) {
            this.shortcutClasses.push(this.shortcuts[key]);
            const triggers = this.shortcuts[key].getStringTriggers();
            this.currentShortcut = key;
            triggers.forEach(addTriggerForKey, this);
        }*/
    }
    
    getSupportedShortcuts() {
        return this.shortcutsToSupportList;
    }
    
    createShortcut(definition, trigger, onUpdate, object) {
/*        if (!Lang.includes(this.shortcutsToSupportList, shortcutType.toLowerCase())) {
            throw new Error("Invalid shortcut type: " + shortcutType);
        }*/
        //console.log("create shortcut for " + trigger);
        //console.log(this.shortcutMap);
        let className;
        let metadata;
        if (!Lang.isNull(definition)) {
            metadata = definition;
            //console.log("by definition:");
        } else {
            metadata = this.shortcutMap[trigger.toLowerCase()];
            //console.log("by trigger " + trigger);
        }
        //console.log(metadata);
        if (Lang.isUndefined(metadata)) {
            throw new Error("Unknown trigger '" + trigger + "'. No structured phrase found.");
        }
        className = metadata["type"];
        //console.log(className);
        if (className === "CreatorBase") {
            return new CreatorBase(onUpdate, metadata);
        } else if (className === "CreatorChild") {
            return new CreatorChild(onUpdate, metadata);
        } else if (className === "CreatorIntermediary") {
            return new CreatorIntermediary(onUpdate, metadata);
        } else if (className === "InsertValue") {
            return new InsertValue(onUpdate, metadata);
        } else {
            console.error("unsupported type: " + className);
            return null;
        }
        //return new className(onUpdate, metadata);
    }
    
    loadShortcutMetadata(shortcutList, shortcutMetadata) {
        //console.log(shortcutMetadata);
        this.childShortcuts = {};
        this.shortcuts = {};
        this.triggersPerShortcut = {};
        shortcutMetadata.forEach((item) => {
            //console.log("shortcut " + item["id"])
            this.shortcuts[item["id"]] = item;

            // add as child to its known parent
            if (item["knownParentContexts"]) {
                const parent = item["knownParentContexts"];
                //console.log("parent = " + parent);
                let list = this.childShortcuts[parent];
                if (Lang.isUndefined(list)) {
                    list = [];
                    this.childShortcuts[parent] = list;
                }
                if (!list.includes(item.id)) {
                    list.push(item.id);
                }
            }
            
            // add known children to it
            if (item["valueObjectAttributes"]) {
                let list = this.childShortcuts[item.id];
                if (Lang.isUndefined(list)) {
                    list = [];
                    this.childShortcuts[item.id] = list;
                }
                let voas = item["valueObjectAttributes"];
                voas.forEach((voa) => {
                    if (voa["childShortcut"] && !list.includes(voa["childShortcut"])) {
                        list.push(voa["childShortcut"]);
                    }
                });
            }
            
            this.shortcutDefinitions.push(item);
            // build up trigger to shortcut mapping
            const triggers = item["stringTriggers"];
            this.currentShortcut = item["id"];
            this.triggersPerShortcut[this.currentShortcut] = triggers;
            if (Lang.isArray(triggers)) {
                triggers.forEach(addTriggerForKey, this);
            } else {
                addTriggerForKey.bind(this)(triggers);
                //let list = ShortcutManager.callFunctionInModule(triggers);
                //list.forEach(addTriggerForKey, this);
            }
        });
        //console.log(this.childShortcuts);
    }
    
    getValidChildShortcutsInContext(context, recurse = false) {
        const currentContextId = context.getId();
        //console.log("getValidChildShortcutsInContext" + currentContextId);
        //console.log(this.childShortcuts[currentContextId]);
        let result = this.childShortcuts[currentContextId];
		if (recurse) {
			context.getChildren().forEach((subcontext) => {
				result = result.concat(this.getValidChildShortcutsInContext(subcontext, true));
			});
		}        
        return result;
        //return context.getValidChildShortcuts();
    }
    
    getTriggersForShortcut(shortcutId) {
        //console.log("getTriggersForShortcut " + shortcutId);
        //console.log(this.triggersPerShortcut[shortcutId]);
        return this.triggersPerShortcut[shortcutId];
    }
}

export default ShortcutManager;