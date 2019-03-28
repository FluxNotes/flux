import Lang from 'lodash';

export default class Context {
	constructor() {
        this.children = [];
        this._initialContextPosition = -1; // Where to insert the context relative to the others on creation
	}

	initialize(contextManager, trigger = undefined, updatePatient = true) {
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
    
    isAttributeSupported(name) {
        return false;
	}

	getAttributeValue(name) {
		throw new Error("[getAttributeValue]Unsupported attribute " + name + " for context shortcut " + this.constructor.name);
	}

	setAttributeValue(name, value, publishChanges, updatePatient = true) {
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
        this.key = key;
		if (this.isContext() && this.contextManager) {
            this.contextManager.addShortcutToContext(this);
            this.isInContext = true;
		}
    }

	isContext() {
		return true;
    }

    isGlobalContext() {
        return false;
    }

    get initialContextPosition() {
        return this._initialContextPosition;
    }

    set initialContextPosition(initialContextPosition) {
        this._initialContextPosition = initialContextPosition;
    }
}
