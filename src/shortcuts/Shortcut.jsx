// React Imports:
import React from 'react';
import Lang from 'lodash';

class Shortcut {
    constructor() {
        if (new.target === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
		
		this.valueChangeHandlers = {};
    }

    getAsString () { 
        return "#null"; 
    }

    getShortcutType() { 
        throw new TypeError("Primitive shortcut has no type")
    }

    getForm () { 
        return (<h2>No additional values for current shortcut</h2>);
    }
	
	getStructuredFieldSpecification() {
		return null;
	}
	
	updateValue(name, value, publishChanges) {
		throw new Error("updateValue not implemented for current shortcut");
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
	
	updatePatient(patient) {
		throw new Error("update patient not implemented for " + this.constructor.name);
	}
}

export default Shortcut;
