// React Imports:
import React, {Component} from 'react';

class Shortcut {
    constructor() {
        if (new.target === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
    }

    updateAttr (name, value) {
        if(name !== undefined && value !== undefined) {
            this[name] = value; 
        }
    }

    getAsString () { 
        return "Shortcut goes here"; 
    }

    getForm () { 
        return null;
    }
}

export default Shortcut;
