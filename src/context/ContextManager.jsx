export default class ContextManager {
	constructor(patient) {
		this.patient = patient;
		this.contexts = [];
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