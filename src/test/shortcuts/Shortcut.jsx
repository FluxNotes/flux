import Context from '../context/Context';
import React from 'react';
import Lang from 'lodash';

class Shortcut extends Context {
    constructor() {
		super();
        if (this.constructor === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
		
		this.valueChangeHandlers = {};
    }
	
	initialize(contextManager) {
		if (this.isContext()) {
			console.log("created new context: " + newShortcut.getShortcutType());
		}
	}

	getPrefixCharacter() {
		throw new TypeError("Primitive shortcut has no prefix character")
	}
	
	// Slim App
    getAsString () { 
        return "#null"; 
    }
    getForm () { 
        return (<h2>No additional values for current shortcut</h2>);
    }

    getShortcutType() { 
        throw new TypeError("Primitive shortcut has no type")
    }
	
	updateValue(name, value, publishChanges) {
		throw new Error("updateValue not implemented for current shortcut");
	}
	
	getText() {
		return this.getShortcutType();
	}
	
	getValue(name) {
		throw new Error("updateValue not implemented for " + this.constructor.name);
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
			h(this.getValue(name));
		});
		console.log("notifyValueChangeHandlers DONE");
	}
	
	updatePatient(patient, contextManager) {
		throw new Error("update patient not implemented for " + this.constructor.name);
	}
	
	validateInCurrentContext(contextManager) {
		return []; // no errors
	}

	// by default shortcuts are not Contexts.
	isContext() {
		return false;
	}
}

export default Shortcut;
