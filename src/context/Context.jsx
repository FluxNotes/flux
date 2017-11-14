import Lang from 'lodash';

export default class Context {
	constructor() {
		this.children = [];
	}
	initialize(contextManager) {
        this.contextManager = contextManager;
        this.isInContext = false;
	}
    
    getId() {
        throw new Error("implement getId in all Context implementations. not done in " + constructor.name);
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
    shouldBeInContext() {
        return true;
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
	
    updateContextStatus() {
        if (this.contextManager) {
            const shouldBeInContext = this.shouldBeInContext();
            //console.log("updateContextStatus: " + this.constructor.name);
            //console.log(this.isInContext + " <==> " + shouldBeInContext);
            if (this.isInContext === shouldBeInContext) return;
            if (shouldBeInContext) { // put in contextManager
                this.contextManager.addShortcutToContext(this);
                this.isInContext = true;
            } else { // take out of contextManager
                this.contextManager.removeShortcutFromContext(this);
                this.isInContext = false;
            }
        }
    }
    
    getKey() {
        return this.key;
    }
    setKey(key) {
        //console.log("setKey: " + this.constructor.name);
        this.key = key;
		if (this.isContext()) {
            this.contextManager.addShortcutToContext(this);
            this.isInContext = true;
		}
    }

	isContext() {
		return true;
	}
}