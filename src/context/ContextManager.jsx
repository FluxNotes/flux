import Lang from 'lodash'
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
    
	getActiveContexts() {
		return this.activeContexts;
	}
	
	getCurrentlyValidShortcuts() {
		let result = this.patientContext.getValidChildShortcuts(true);
		this.activeContexts.forEach((shortcut) => {
			result = result.concat(shortcut.getValidChildShortcuts(true));
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
		return (object.entryType[0] === valueType);
	}
	
	// returns undefined if not found
	getActiveContextOfType(contextType) {
		let context = this.activeContexts.find((item) => {
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
            this.contexts.push(shortcut);
        } else {
            this.contexts.splice(index, 0, shortcut);
        }

        //when adding a new shortcut to context, we assume cursor ends up after it so its active
		this.activeContexts.unshift(shortcut);
		if (!shortcut.needToSelectValueFromMultipleOptions()) {
			this.onContextUpdate();
		}
	}
    
    removeShortcutFromContext(shortcut) {
        var index = -1;
        this.contexts.forEach((item, i) => {
            if (item === shortcut) index = i;
        });
        if (index === -1) throw new Error("Unable to remove shortcut because not found in contexts.");
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
}

export default ContextManager;