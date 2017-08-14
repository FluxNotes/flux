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
		console.log("ContextManager. looking for context of type " + contextType + " with value of type " + valueType);
		let shortcut = this.getActiveContextOfType(contextType);
		console.log(shortcut);
		if (Lang.isUndefined(shortcut)) return false;
		let object = shortcut.getValueObject();
		console.log(object);
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

	getPatient() {
		return this.patient;
	}
	
	getPatientContext() {
		return this.patientContext;
	}

/*	addContext(contextObject) {
		this.contexts.push(contextObject);
	}
	
	getContextObjectOfType(type) {
		let objs = this.contexts.filter((item) => { return item.entryType[0] === type });
		if (objs.length === 0) return null;
		return objs[objs.length - 1];
	}*/
}

export default ContextManager;