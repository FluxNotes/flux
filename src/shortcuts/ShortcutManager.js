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
    if (trigger.name) {
        //console.log("add trigger " + trigger.name + " for shortcut " + this.currentShortcut);
        this.shortcutMap[trigger.name.toLowerCase()] = this.shortcuts[this.currentShortcut];
        this.triggersPerShortcut[this.currentShortcut].push(trigger);
    } else {
        // {"category":"staging", "valueSet":"T", "args":"7"}
        // args optional
        let args = trigger["args"];
        let category = trigger["category"];
        let valueSet = trigger["valueSet"];
        let prefix = trigger["prefix"];
        let list;
        if (args) {
            //console.log(category + "/" + valueSet + " with " + args);
            list = ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            //console.log(category + "/" + valueSet);
            list = ValueSetManager.getValueList(category, valueSet);
        }
        //console.log(list);
        if (prefix) {
            list = list.map((t) => { return { "name": prefix + t.name, "description":t.description }; });
            //list.forEach((t) => { t.name = prefix + t.name; });
        }
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
                //console.log("find child shortcuts for " + item.id);
                let list = this.childShortcuts[item.id];
                if (Lang.isUndefined(list)) {
                    list = [];
                    this.childShortcuts[item.id] = list;
                }
                let voas = item["valueObjectAttributes"];
                let childShortcutId;
                voas.forEach((voa) => {
                    childShortcutId = voa["childShortcut"];
                    if (!Lang.isUndefined(childShortcutId)) {
                        //console.log(childShortcutId);
                        if (childShortcutId && !list.includes(childShortcutId)) {
                            list.push(childShortcutId);
                        }
                    }
                });
            }
            
            this.shortcutDefinitions.push(item);
            // build up trigger to shortcut mapping
            const triggers = item["stringTriggers"];
            this.currentShortcut = item["id"];
            this.triggersPerShortcut[this.currentShortcut] = [];
            if (Lang.isArray(triggers)) {
                triggers.forEach(addTriggerForKey, this);
            } else {
                addTriggerForKey.bind(this)(triggers);
            }
        });
        //console.log(this.childShortcuts);
    }

    getValidChildShortcutsInContext(context, recurse = false) {
        const currentContextId = context.getId();
        //console.log("getValidChildShortcutsInContext " + currentContextId);
        //console.log(this.childShortcuts[currentContextId]);
        let result = this.childShortcuts[currentContextId], parentAttribute;
        //console.log(result);
        let value;
        result = result.filter((shortcutId) => {
            //console.log(shortcutId);
            //console.log(this.shortcuts[shortcutId]);
            parentAttribute = this.shortcuts[shortcutId]["parentAttribute"];
            //console.log(shortcutId + " ==> " + parentAttribute);
            if (Lang.isUndefined(parentAttribute)) return true;
            value = context.getAttributeValue(parentAttribute);
            //console.log(value);
            if (value === null) return true;
            if (Lang.isArray(value)) return value.length < this.triggersPerShortcut[shortcutId].length;
            if (Lang.isBoolean(value)) return !value;
            return (value.length === 0);
        });
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
    
    getShortcutGroupName(shortcutId) {
        return this.shortcuts[shortcutId]["shortcutGroupName"];
    }
}

export default ShortcutManager;