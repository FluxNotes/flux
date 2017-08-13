import Lang from 'lodash'
import PatientContext from './PatientContext';

class ContextManager {
	constructor(patient) {
		this.patient = patient;
		this.patientContext = new PatientContext(patient);
		this.activeContexts = []; // patient context is always active
	}
	
	getCurrentlyValidShortcuts() {
		return this.patientContext.getValidChildShortcuts(true);
	}

	isContextOfTypeActive(contextType) {
		return !Lang.isUndefined(this.getActiveContextOfType(contextType));
	}
	
	isContextOfTypeWithValueOfTypeActive(contextType, valueType) {
		let shortcut = this.getActiveContextOfType(contextType);
		if (Lang.isUndefined(shortcut)) return false;
		let object = shortcut.getValue();
		return (object.entryType[0] === valueType);
	}
	
	// returns undefined if not found
	getActiveContextOfType(contextType) {
		let context = this.activeContexts.find((item) => {
			return (item.getShortcutType() === contextType);
		});
		return context;
	}
	
	

	getPatient() {
		return this.patient;
	}

	addContext(contextObject) {
		this.contexts.push(contextObject);
	}
	
	getContextObjectOfType(type) {
		let objs = this.contexts.filter((item) => { return item.entryType[0] === type });
		if (objs.length === 0) return null;
		return objs[objs.length - 1];
	}
}

export default ContextManager;