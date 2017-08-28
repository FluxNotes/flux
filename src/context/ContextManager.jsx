import Lang from 'lodash'
import PatientContext from './PatientContext';

class ContextManager {
	constructor(patient, onContextUpdate) {
		this.patient = patient;
		this.patientContext = new PatientContext(patient);
		this.activeContexts = []; // patient context is always active
		this.onContextUpdate = onContextUpdate;
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
	
	addShortcutToContext(shortcut) {
		this.activeContexts.unshift(shortcut);
		if (!shortcut.needToSelectValueFromMultipleOptions()) {
			this.onContextUpdate();
		}
	}
    
    removeShortcutFromContext(shortcut) {
        var index = -1;
        this.activeContexts.forEach((item, i) => {
            if (item === shortcut) index = i;
        });
        if (index === -1) throw new Error("Unable to remove shortcut because not found in active contexts.");
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