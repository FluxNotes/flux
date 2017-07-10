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

    getShortcut () { 
        return "Shortcut goes here"; 
    }

    renderForm () { 
        return '';
    }
}

module.exports = Shortcut;
