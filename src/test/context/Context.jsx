import Lang from 'lodash';

export default class Context {
	constructor() {
		this.children = [];
	}
	getValidChildShortcuts(recurse = false) {
		return [];
	}
	
	getChildren() {
		return this.children;
	}
	
	getLabel() {
		throw new Error("Invalid context. " + this.constructor.name);
	}
	getValueObject() {
		return this.valueObject;
	}
	setValueObject(valueObject) {
		this.valueObject = valueObject;
	}
	getAttributeValue(name) {
		throw new Error("[getAttributeValue]Unsupported attribute " + name + " for context shortcut " + this.constructor.name);
	}
	setAttributeValue(name, value, publishChanges) {
		throw new Error("[setAttributeValue]Unsupported attribute " + name + " for context shortcut " + this.constructor.name);
	}
	onValueChange(name, handleValueChange) {
		let l = this.valueChangeHandlers[name];
		if (Lang.isUndefined(l) || Lang.isNull(l)) {
			l = [];
			this.valueChangeHandlers[name] = l;
		}
		l.push(handleValueChange);
	}	
	notifyValueChangeHandlers(name) {
		console.log("notifyValueChangeHandlers START");
		let l = this.valueChangeHandlers[name];
		console.log("# of value handlers for " + name + ": " + l.length);
		l.forEach((h) => {
			console.log("call handler for value change for " + name);
			h(this.getAttributeValue(name));
		});
		console.log("notifyValueChangeHandlers DONE");
	}
	
	isContext() {
		return true;
	}
}