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

	getCurrentlyValidShortcuts(shortcutManager) {
		//let result = this.patientContext.getValidChildShortcuts(true);
        let result = shortcutManager.getValidChildShortcutsInContext(this.patientContext, true);
        let childResults;
		this.activeContexts.forEach((shortcut) => {
			//result = result.concat(shortcut.getValidChildShortcuts(true));
            //result = result.concat(shortcutManager.getValidChildShortcutsInContext(shortcut, true));
            childResults = shortcutManager.getValidChildShortcutsInContext(shortcut, true);
            childResults.forEach((child) => {
                if (!result.includes(child)) result.push(child);
            });
		});
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
	getActiveContextOfType(contextType) {
		let context = Collection.find(this.activeContexts, (item) => {
			return (item.getShortcutType() === contextType);
		});

		return context;
	}

	contextUpdated() {
		this.onContextUpdate();
	}

    adjustActiveContexts(shouldContextBeActive) {
        this.activeContexts = [];
        this.contexts.forEach((context) => {
            if (shouldContextBeActive(context)) {
                this.activeContexts.push(context);
            }
        });
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
            this.contexts.unshift(shortcut);
        } else {
            this.contexts.splice(index, 0, shortcut);
        }

        //when adding a new shortcut to context, we assume cursor ends up after it so its active
		this.activeContexts.unshift(shortcut);
		if (!shortcut.needToSelectValueFromMultipleOptions()) {
			if (this.onContextUpdate) { this.onContextUpdate(); }
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
        this.onContextUpdate();
    }
}

export default ContextManager;
