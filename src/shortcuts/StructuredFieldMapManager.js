class StructuredFieldMapManager { 
    constructor () { 
        this._keyToShortcutMap = new Map();
        this._idToShortcutMap = new Map()
        this._placeholders = [];
    }

    clearStructuredFieldMap() { 
        this.clearKeyToShortcutMap();
        this.clearIdToShortcutMap();
        this._placeholders = [];
    }

    clearKeyToShortcutMap() {
        this._keyToShortcutMap = new Map();
    }

    clearIdToShortcutMap() {
        this._idToShortcutMap = new Map()
    }

    get keyToShortcutMap() { 
        return this._keyToShortcutMap;
    }

    set keyToShortcutMap(keyToShortcutMap) { 
        this._keyToShortcutMap = keyToShortcutMap;
    }

    get idToShortcutMap() { 
        return this._idToShortcutMap;
    }

    set idToShortcutMap(idToShortcutMap) { 
        this._idToShortcutMap = idToShortcutMap;
    }

    addPlaceholder(placeholder) {
        this._placeholders.push(placeholder);
    }

    removePlaceholder(placeholder) {
        const index = this._placeholders.indexOf(placeholder);
        if (index > -1) {
            this._placeholders.splice(index, 1);
        }
    }

    get placeholders() {
        return this._placeholders;
    }
}

export default StructuredFieldMapManager;