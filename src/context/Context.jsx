import Lang from 'lodash';

export default class Context {
	constructor() {
		this.children = [];
	}
	getValidChildShortcuts(recurse = false) {
		return [];
	}
    
    addChild(shortcut) {
        this.children.push(shortcut);
    }
    
    removeChild(shortcut) {
        var indexToDelete = -1;
        this.children.forEach((item, i) => {
            if (item === shortcut) {
                indexToDelete = i;
            }
        });
        this.children.splice(indexToDelete, 1);
    }
    
    hasChildren() {
        return (this.children.length > 0);
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
		let l = this.valueChangeHandlers[name];
        if (Lang.isUndefined(l)) return;
		l.forEach((h) => {
			h(this.getAttributeValue(name));
		});
	}
	
	isContext() {
		return true;
	}
}