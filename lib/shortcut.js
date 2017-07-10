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
        return '';
    }
}

module.exports = Shortcut;
