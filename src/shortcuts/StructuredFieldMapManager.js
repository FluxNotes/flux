class StructuredFieldMapManager { 
    constructor () { 
        this._keyToShortcutMap = new Map();
        this._idToShortcutMap = new Map()
    }

    clearStructuredFieldMap() { 
        this.clearKeyToShortcutMap();
        this.clearIdToShortcutMap();
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
}

export default StructuredFieldMapManager;