import CreatorBase from './CreatorBase';
import CreatorIntermediary from './CreatorIntermediary';
import CreatorChild from './CreatorChild';
import InsertValue from './InsertValue';
import UpdaterBase from './UpdaterBase';
import SingleHashtagKeyword from './SingleHashtagKeyword';
import Placeholder from './Placeholder';
import ValueSetManager from '../lib/ValueSetManager';
import shortcutMetadata from './Shortcuts.json';
import Lang from 'lodash';
import NLPHashtag from './NLPHashtag';

// Given a trigger object, add it and any subsidiary trigger objects to our triggersPerShortcut map
function addTriggerForCurrentShortcut(triggerObject, currentShortcut) {
    if (triggerObject.name) {
        // Simple case -- the trigger is specified in object.name
        this.shortcutMap[triggerObject.name.toLowerCase()] = this.shortcuts[currentShortcut.id];
        this.triggersPerShortcut[currentShortcut.id].push(triggerObject);
    } else {
        // Complicated case -- the trigger is implicitly defined through reference to a valueset
        // Use the valueseet manager to access and find all trigger objects, recursively add them
        const category = triggerObject["category"];
        const valueSet = triggerObject["valueSet"];
        const prefix = triggerObject["prefix"];
        // args optional
        const args = triggerObject["args"];
        let list;
        if (args) {
            list = ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            list = ValueSetManager.getValueList(category, valueSet);
        }
        if (currentShortcut["knownParentContexts"]) {
            const parent = currentShortcut["knownParentContexts"];
            const parentShortcutMD = this.shortcuts[parent];
            const voa = parentShortcutMD["valueObjectAttributes"].find((item) => {
                return (item.childShortcut === currentShortcut.id);
            });
            if (!Lang.isUndefined(voa)) {
                voa["numberOfItems"] = list.length;
            }
        }
        if (prefix) {
            list = list.map((t) => { return { "name": prefix + t.name, "description":t.description }; });
        }
        list.forEach((triggerObject) => { 
            addTriggerForCurrentShortcut.bind(this)(triggerObject, currentShortcut);    
        });
    }
}

// Given a trigger object, add it and any subsidiary trigger objects to our triggersPerShortcut map
function addKeywordsForCurrentShortcut(keywordObject, currentShortcut) {
    if (keywordObject.name) {
        // Simple case -- the trigger is specified in object.name
        this.shortcutMap[keywordObject.name.toLowerCase()] = this.shortcuts[currentShortcut.id];
        this.keywordsPerShortcut[currentShortcut.id].push(keywordObject);
    } else {
        // Complicated case -- the trigger is implicitly defined through reference to a valueset
        // Use the valueseet manager to access and find all trigger objects, recursively add them
        const category = keywordObject["category"];
        const valueSet = keywordObject["valueSet"];
        const prefix = keywordObject["prefix"];
        // args optional
        const args = keywordObject["args"];
        let list;
        if (args) {
            list = ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            list = ValueSetManager.getValueList(category, valueSet);
        }
        if (currentShortcut["knownParentContexts"]) {
            const parent = currentShortcut["knownParentContexts"];
            const parentShortcutMD = this.shortcuts[parent];
            const voa = parentShortcutMD["valueObjectAttributes"].find((item) => {
                return (item.childShortcut === currentShortcut.id);
            });
            if (!Lang.isUndefined(voa)) {
                voa["numberOfItems"] = list.length;
            }
        }
        if (prefix) {
            list = list.map((t) => { return { "name": prefix + t.name, "description":t.description }; });
        }
        list.forEach((triggerObject) => { 
            addKeywordsForCurrentShortcut.bind(this)(triggerObject, currentShortcut);    
        });
    }
}

class ShortcutManager {
    constructor(shortcutList) {
        let shortcuts = shortcutList || [];
        this.shortcutDefinitions = [];
        this.shortcutMap = {};
        this.shortcutsToSupportList = shortcuts;
        this.loadShortcutMetadata(shortcuts, shortcutMetadata);
    }
    
    getAllShortcutDefinitions() {
        return this.shortcutDefinitions;
    }

    getAllShortcutsWithTriggers() {
        return this.shortcutDefinitions.filter((s) => s.stringTriggers !== undefined || s.regexpTrigger !== undefined);
    }

    getAllShortcutsWithKeywords() {
        return this.shortcutDefinitions.filter((s) => s.keywords !== undefined);
    }

    getAllPlaceholderShortcuts() {
        return this.shortcutDefinitions.filter((s) => {
            if (s.type === "CreatorBase" || s.type === "SingleHashtagKeyword" || s.type === "UpdaterBase") {
                return !Lang.isUndefined(s.formSpec);
            } else {
                return false;
            }
        });
    }
    
    getAllStringTriggers() {
        return Object.keys(this.shortcutMap);
    }

    getAllKeywords() {
        return Object.keys(this.shortcutMap);
    }
    
    getSupportedShortcuts() {
        return this.shortcutsToSupportList;
    }

    getMetadataForTrigger(trigger) {
        return this.shortcutMap[trigger.toLowerCase()];
    }

    createPlaceholder(shortcutName, placeholderText, data, contextManager, patient, clinicalNote, setForceRefresh) {
        const metadata = this.shortcutMap[shortcutName.toLowerCase()];
        return new Placeholder(placeholderText, shortcutName, data, metadata, this, contextManager, patient, clinicalNote, setForceRefresh);
    }

    createShortcut(definition, triggerOrKeyword, patient, shortcutData, onUpdate) {
        let className;
        let metadata;
        if (!Lang.isNull(definition)) {
            metadata = definition;
        } else {
            metadata = this.shortcutMap[triggerOrKeyword.toLowerCase()];
        }
        if (Lang.isUndefined(metadata)) {
            throw new Error("Unknown triggerOrKeyword '" + triggerOrKeyword + "'. No structured phrase found.");
        }
        className = metadata["type"];
        let newShortcut;
        if (className === "CreatorBase") {
            newShortcut = new CreatorBase(onUpdate, metadata, patient, shortcutData);
        } else if (className === "UpdaterBase") {
            newShortcut = new UpdaterBase(onUpdate, metadata, patient, shortcutData);
        } else if (className === "CreatorChild") {
            newShortcut = new CreatorChild(onUpdate, metadata, patient, shortcutData);
        } else if (className === "CreatorIntermediary") {
            newShortcut = new CreatorIntermediary(onUpdate, metadata, patient, shortcutData);
        } else if (className === "InsertValue") {
            newShortcut = new InsertValue(onUpdate, metadata, patient, shortcutData);
        } else if (className === "SingleHashtagKeyword") {
            newShortcut = new SingleHashtagKeyword(onUpdate, metadata, patient, shortcutData);
        } else if (className === "NLPHashtag") {
            newShortcut = new NLPHashtag(onUpdate, metadata, patient, shortcutData);
        } else {
            console.error("unsupported type: " + className);
            return null;
        }
        newShortcut.initiatingTrigger = triggerOrKeyword;
        return newShortcut;
    }
    
    loadShortcutMetadata(shortcutList, shortcutMetadata) {
        this.childShortcuts = {};
        this.parentShortcuts = {};
        this.shortcuts = {};
        this.triggersPerShortcut = {};
        this.keywordsPerShortcut = {};
        let disabled;
        shortcutMetadata.forEach((item) => {
            disabled = item["disabled"] || false;
            if (!disabled && (shortcutList.length === 0 || shortcutList.includes(item["id"]))) {
                this.shortcuts[item["id"]] = item;
                // In addition to regular id's, we want to make sure NLPId's map onto the shortcuts as well
                if(item["idForNLPEngine"]) { 
                    this.shortcuts[item["idForNLPEngine"]] = item;
                }

                // add as child to its known parent
                if (item["knownParentContexts"]) {
                    const parent = item["knownParentContexts"];

                    let parentList = this.parentShortcuts[item.id];
                    if (Lang.isUndefined(parentList)) {
                        parentList = [];
                        this.parentShortcuts[item.id] = parentList;
                    }
                    if (!parentList.includes(parent)) {
                        parentList.push(parent);
                    }

                    let childList = this.childShortcuts[parent];
                    if (Lang.isUndefined(childList)) {
                        childList = [];
                        this.childShortcuts[parent] = childList;
                    }
                    if (!childList.includes(item.id)) {
                        childList.push(item.id);
                    }
                }
                
                // add known children to it
                if (item["valueObjectAttributes"]) {
                    let childList = this.childShortcuts[item.id];
                    if (Lang.isUndefined(childList)) {
                        childList = [];
                        this.childShortcuts[item.id] = childList;
                    }
                    let voas = item["valueObjectAttributes"];
                    let childShortcutId;
                    voas.forEach((voa) => {
                        childShortcutId = voa["childShortcut"];
                        if (!Lang.isUndefined(childShortcutId)) {
                            if (childShortcutId && !childList.includes(childShortcutId)) {
                                childList.push(childShortcutId);
                            }
                            if (childShortcutId) {
                                let parentList = this.parentShortcuts[childShortcutId];
                                if (Lang.isUndefined(parentList)) {
                                    parentList = [];
                                }
                                if (!parentList.includes(item.id)) {
                                    parentList.push(item.id);
                                }
                            }
                        }
                    });
                }
                if (item["idAttributes"]) {
                    let childList = this.childShortcuts[item.id];
                    if (Lang.isUndefined(childList)) {
                        childList = [];
                        this.childShortcuts[item.id] = childList;
                    }
                    let voas = item["idAttributes"];
                    let childShortcutId;
                    voas.forEach((voa) => {
                        childShortcutId = voa["childShortcut"];
                        if (!Lang.isUndefined(childShortcutId)) {
                            if (childShortcutId && !childList.includes(childShortcutId)) {
                                childList.push(childShortcutId);
                            }
                        }
                    });
                }
                
                this.shortcutDefinitions.push(item);
                // build up trigger to shortcut mapping
                const triggers = item["stringTriggers"];
                const keywords = item["keywords"]
                if (triggers) { 
                    this.triggersPerShortcut[item.id] = [];
                    if (Lang.isArray(triggers)) {
                        triggers.forEach((trigger) => { 
                            addTriggerForCurrentShortcut.bind(this)(trigger, item);
                        });
                    } else {
                        addTriggerForCurrentShortcut.bind(this)(triggers, item);
                    }
                    if (item.label) {
                        // Add a string trigger for incomplete placeholder
                        addTriggerForCurrentShortcut.bind(this)({
                            name: item.label,
                            description: 'Incomplete placeholder for ' + item.label
                        }, item);
                    }
                }
                if (keywords) { 
                    this.keywordsPerShortcut[item.id] = [];
                    if (Lang.isArray(keywords)) {
                        keywords.forEach((keyword) => { 
                            addKeywordsForCurrentShortcut.bind(this)(keyword, item);    
                        });
                    } else {
                        addKeywordsForCurrentShortcut.bind(this)(keywords, item);
                    }
                }
            }
        });
    }

    getPossibleParentContextTriggers(shortcutId) {
        const possibleParentShortcuts = this.parentShortcuts[shortcutId];
        let resultList = [];
        
        possibleParentShortcuts.forEach((shortcutId) => {
            resultList = resultList.concat(this.getTriggersForShortcut(shortcutId));
        });

        return resultList;
    }

    getValidChildShortcutsInContext(context, recurse = false) {
        const currentContextId = context.getId();
    
        // Let's get all child shortcuts registered in shortcuts metadata via the current context
        // They can be registered in 2 ways:
        //      as a childShortcut on valueObjectAttributes
        //      OR as a shortcut having this context shortcut as a parent via knownParentContexts
        let contextValueObjectEntryTypes;
        let result = this.childShortcuts[currentContextId], parentAttribute;
        let value, parentVOAs, voa, isSettable, isSet, parentIdVOAs;
        if (Lang.isUndefined(result)) return [];

        result = result.filter((shortcutId) => {
            // to determine if a shortcut should be valid right now, we need to get its value
            // from its parent. If it's settable and not set, it's valid. If it's not settable, then it's
            // valid if it is set!
            contextValueObjectEntryTypes = this.shortcuts[shortcutId]["contextValueObjectEntryTypes"];

            if (Lang.isUndefined(contextValueObjectEntryTypes) || (!Lang.isUndefined(context.getValueObject()) && contextValueObjectEntryTypes.includes(context.getValueObject().entryInfo.entryType.value))) {
                parentAttribute = this.shortcuts[shortcutId]["parentAttribute"];
                if (Lang.isUndefined(parentAttribute)) return true;
                parentVOAs = this.shortcuts[currentContextId]["valueObjectAttributes"];
                parentIdVOAs = this.shortcuts[currentContextId]["idAttributes"];
                voa = parentVOAs.filter((item) => item.name === parentAttribute)[0];
                if (!voa) voa = parentIdVOAs.filter((item) => item.name === parentAttribute)[0];
                value = context.getAttributeValue(parentAttribute);
                isSet = context.getAttributeIsSet(parentAttribute);
                isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
                if (isSettable) { // if is settable and not set, then we want to include the shortcut
                    if (Lang.isArray(value)) return value.length < this.triggersPerShortcut[shortcutId].length;
                    return (!isSet);
                } else {
                    if (Lang.isUndefined(value) || value === null) return false;
                    if (Lang.isBoolean(value)) return !value;
                    return value.length > 0;
                }
            } else {
                if (!Lang.isUndefined(contextValueObjectEntryTypes) && Lang.isUndefined(context.getValueObject())) return true; // initial template insertion needs to allow this for now
                return false;
            }
        });
        if (recurse) {
            context.getChildren().forEach((subcontext) => {
                result = result.concat(this.getValidChildShortcutsInContext(subcontext, true));
            });
        }
        return result;
    }
    
    // context is optional
    getTriggersForShortcut(shortcutId, context) {
        if (Lang.isUndefined(this.shortcuts[shortcutId]["stringTriggers"])) { 
            return [];
        } else if (!Lang.isUndefined(context)) {
            const currentContextId = context.getId();
            const parentAttribute = this.shortcuts[shortcutId]["parentAttribute"];
            if (Lang.isUndefined(parentAttribute)) return this.triggersPerShortcut[shortcutId];
            const parentVOAs = this.shortcuts[currentContextId]["valueObjectAttributes"];
            const parentIdVOAs = this.shortcuts[currentContextId]["idAttributes"];
            let voa = parentVOAs.filter((item) => item.name === parentAttribute)[0];
            if (!voa) voa = parentIdVOAs.filter((item) => item.name === parentAttribute)[0];
            const value = context.getAttributeValue(parentAttribute);
            const isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            if (isSettable) { // if is settable and not set, then we want to include the shortcut
                if (value !== null && Lang.isArray(value)) {
                    let list = this.triggersPerShortcut[shortcutId];
                    list = list.filter((item) => {
                        return !value.includes(item.name.substring(1));
                    });
                    return list;
                }
            }
        }

        return this.triggersPerShortcut[shortcutId];
    }

    getKeywordsForShortcut(shortcutId, context) {
        if (Lang.isUndefined(this.shortcuts[shortcutId]["keywords"])) { 
            return [];
        } else if (!Lang.isUndefined(context)) {
            const currentContextId = context.getId();
            const parentAttribute = this.shortcuts[shortcutId]["parentAttribute"];
            if (Lang.isUndefined(parentAttribute)) return this.keywordsPerShortcut[shortcutId];
            const parentVOAs = this.shortcuts[currentContextId]["valueObjectAttributes"];
            const parentIdVOAs = this.shortcuts[currentContextId]["idAttributes"];
            let voa = parentVOAs.filter((item) => item.name === parentAttribute)[0];
            if (!voa) voa = parentIdVOAs.filter((item) => item.name === parentAttribute)[0];
            const value = context.getAttributeValue(parentAttribute);
            const isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            if (isSettable) { // if is settable and not set, then we want to include the shortcut
                if (value !== null && Lang.isArray(value)) {
                    let list = this.keywordsPerShortcut[shortcutId];
                    list = list.filter((item) => {
                        return !value.includes(item.name.substring(1));
                    });
                    return list;
                }
            }
        }

        return this.keywordsPerShortcut[shortcutId];
    }
    
    getShortcutGroupName(shortcutId) {
        return this.shortcuts[shortcutId]["shortcutGroupName"];
    }

    getShortcutMetadata(shortcutId) {
        return this.shortcuts[shortcutId]
    }

    getShortcutPrefix(shortcutId) {
        const shortcutMetadata = this.shortcuts[shortcutId];
        const stringTriggers = shortcutMetadata.stringTriggers;

        if (Lang.isArray(stringTriggers) && stringTriggers.length > 0) {
            return stringTriggers[0].prefix || '';
        }

        return stringTriggers.prefix || '';
    }

    isShortcutInstanceOfSingleHashtagKeyword(shortcut) {
        return shortcut instanceof SingleHashtagKeyword;
    }

    isShortcutInstanceOfNLPHashtag(shortcut) {
        return shortcut instanceof NLPHashtag
    }
}

export default ShortcutManager;