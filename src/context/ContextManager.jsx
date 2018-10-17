import Lang from 'lodash'
import Collection from 'lodash'
import PatientContext from './PatientContext';

class ContextManager {
    constructor(patient, onContextUpdate) {
        this.patient = patient;
        this.patientContext = new PatientContext(patient);
        this.contexts = []; // patient context is kept separately
        this.activeContexts = []; // patient context is always active
        this.onContextUpdate = onContextUpdate;
        this.subscribers = [];
    }
    
    subscribe = (subscriber, callback) => {     
        const isAlreadyASubscriber = Collection.includes(this.subscribers, subscriber);
        if (!isAlreadyASubscriber) { 
            this.subscribers.push({
                subscriber,
                callback,
            })
        }
    }

    endNonGlobalContexts() {
        let contextsToKeep = [];
        this.contexts.forEach((item, i) => {
            if (item.isGlobalContext()) {
                contextsToKeep.push(item);
            }
        });

        this.contexts = contextsToKeep;

        contextsToKeep = [];
        this.activeContexts.forEach((item, i) => {
            if (item.isGlobalContext()) {
                contextsToKeep.push(item);
            }
        });
        this.activeContexts = contextsToKeep;
    }

    setIsBlock1BeforeBlock2(isBlock1BeforeBlock2) {
        this.isBlock1BeforeBlock2 = isBlock1BeforeBlock2;
    }

    getIsBlock1BeforeBlock2() {
        return this.isBlock1BeforeBlock2;
    }

    getActiveContexts() {
        return this.activeContexts;
    }
    
    getActiveSingleHashtagKeywordShortcuts(shortcutManager) { 
        return this.getActiveContexts().reduce((listOfSingleHashtagKeywordShortcuts, currentActiveShortcut) => { 

            if (shortcutManager.isShortcutInstanceOfSingleHashtagKeyword(currentActiveShortcut)) {
                listOfSingleHashtagKeywordShortcuts.push(currentActiveShortcut);
            }
            return listOfSingleHashtagKeywordShortcuts
        }, [])
    }

    // Returns objects corresponding to all currently valid shortcuts, 
    // Ordering them from the most recently active context down to the patient context 
    // ShortcutObjects have an 'id': a string associated to their unique shortcut id
    // and they have a 'parentId': a string associated with their parent context, if they have one other than patientContext
    getCurrentlyValidShortcuts(shortcutManager) {
        let result = [];
        let childIds = [];
        this.activeContexts.forEach((shortcut) => {
            // GQ changed the recurse argument (2nd) to false below. Don't want it to get child shortcuts of each context unless
            // they are in context too. If a shortcut is in context, it will be a separate entry in the active contexts list
            // so we'll get the correct shortcuts that way
            childIds = shortcutManager.getValidChildShortcutsInContext(shortcut, false);
            const shortcutId = shortcut.getId();
            childIds.forEach((childId) => {
                // DP added this to the loop
                if (Lang.isUndefined(result.find((shortcutObject) => shortcutObject.id === childId))) { 
                    const childObj = {
                        id: childId,
                        parentId: shortcutId,
                    }
                    result.push(childObj);  
                } 
            });
        });
        // Make sure we add all the patientContext shortcuts
        result = result.concat(shortcutManager.getValidChildShortcutsInContext(this.patientContext, true).map((shortcutId) => {
            return  {
                id: shortcutId
            }
        }));
        return result;
    }

    isContextOfTypeActive(contextType) {
        return !Lang.isUndefined(this.getActiveContextOfType(contextType));
    }

    isContextOfTypeWithValueOfTypeActive(contextType, valueType) {
        let shortcut = this.getActiveContextOfType(contextType);
        if (Lang.isUndefined(shortcut)) return false;
        let object = shortcut.getValueObject();
        return (object.entryInfo.entryType[0] === valueType);
    }

    // returns undefined if not found
    getActiveContextOfType = (contextType) => {
        let context = Collection.find(this.activeContexts, (item) => {
            return (item.getShortcutType() === contextType);
        });

        return context;
    }

    contextUpdated = () => {
        this.onContextUpdate();
        // After updating, update all subscribers
        for (const subscriberObj of this.subscribers) { 
            const { callback } = subscriberObj;
            callback(this);
        }
    }

    adjustActiveContexts(shouldContextBeActive) {
        this.activeContexts = [];
        this.contexts.forEach((context) => {
            if (shouldContextBeActive(context)) {
                this.activeContexts.push(context);
            }
        });
    }

    getContextsBeforeShortcut(shortcut, contextType = undefined) {
        if (!shortcut.getKey()) return; // if the key hasn't been set for a shortcut yet then it shouldn't be added
        let contextsBeforeShortcut = [];
        this.contexts.forEach((context) => {
            // check if provided shortcut is after the context. If yes, we have a valid context for the shortcut
            if (!this.isBlock1BeforeBlock2(shortcut.getKey(), 0, context.getKey(), 0)) {
                if (Lang.isUndefined(contextType) || Lang.isNull(contextType) || context.getShortcutType() === contextType) {
                    contextsBeforeShortcut.push(context);
                }
            }
        });
        return contextsBeforeShortcut;
    }

    addShortcutToContext(shortcut) {
        if (!shortcut.getKey()) return; // if the key hasn't been set for a shortcut yet then it shouldn't be added
        //console.log("adding shortcut to context: " + shortcut.getShortcutType());
        const numContexts = this.contexts.length;
        let index = -1;
        for (var i = 0; i < numContexts; i++) {
            // check if current selection (first block key is null) is after the context. If yes, we have our
            // insertion point
            if (!this.isBlock1BeforeBlock2(null, 0, this.contexts[i].getKey(), 0)) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            /*  Changed this from push to unshift to fix context ordering when loading in a note.
             *  This seems to work since the cursor is always at the beginning when loading in a note.
             *  Also tested copy and pasting and normal insertion of shortcuts into the note and those actions do not seem to be affected.
             *  If unintended consequences are found in the future, this change can be reversed and we can find a new solution.
             */  
            this.contexts.unshift(shortcut);
        } else {
            this.contexts.splice(index, 0, shortcut);
        }

        //when adding a new shortcut to context, we assume cursor ends up after it so its active
        this.activeContexts.unshift(shortcut);
        if (!shortcut.needToSelectValueFromMultipleOptions()) {
            if (this.onContextUpdate) { this.contextUpdated(); }
        }
    }

    removeShortcutFromContext(shortcut) {
        var index = -1;
        this.contexts.forEach((item, i) => {
            if (item === shortcut) index = i;
        });

        if (index === -1) return;
        this.contexts.splice(index, 1);

        this.removeShortcutFromActiveContexts(shortcut);
    }

    removeShortcutFromActiveContexts(shortcut) {
        var index = -1;
        this.activeContexts.forEach((item, i) => {
            if (item === shortcut) index = i;
        });
        if (index === -1) return;
        this.activeContexts.splice(index, 1);
    }

    getPatient() {
        return this.patient;
    }

    getPatientContext() {
        return this.patientContext;
    }

    getCurrentContext() {
        const mostRecentContext = this.activeContexts[0];
        if (!Lang.isUndefined(mostRecentContext) || !Lang.isNull(mostRecentContext)) {
            return mostRecentContext;
        } else {
            return this.patientContext;
        }
    }

    clearContexts() {
        this.contexts = [];
        this.activeContexts = [];
        this.contextUpdated();
    }

    // Clears all non active contexts from this.contexts
    // Only used after picking options from template
    // When choosing options, many unncessary contexts get added
    clearNonActiveContexts() {
        this.contexts = this.contexts.filter((context) => {
            return this.activeContexts.includes(context);
        });
    }
}

export default ContextManager;
