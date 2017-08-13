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
	
	isContext() {
		return true;
	}
}