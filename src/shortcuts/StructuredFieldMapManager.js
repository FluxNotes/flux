class StructuredFieldMapManager { 
    constructor () { 
        this._keyToShortcutMap = new Map();
        this._idToShortcutMap = new Map()

        this._keyToPlaceholderMap = new Map();
        this._idToPlaceholderMap = new Map();
        this._placeholders = [];
    }

    clearStructuredFieldMap() { 
        this.clearKeyToShortcutMap();
        this.clearIdToShortcutMap();
        this.clearKeyToPlaceholderMap();
        this.clearIdToPlaceholderMap();
        this._placeholders = [];
    }

    clearKeyToShortcutMap() {
        this._keyToShortcutMap = new Map();
    }

    clearIdToShortcutMap() {
        this._idToShortcutMap = new Map()
    }

    clearKeyToPlaceholderMap() {
        this._keyToShortcutMap = new Map();
    }

    clearIdToPlaceholderMap() {
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


    get keyToPlaceholderMap() { 
        return this._keyToShortcutMap;
    }

    set keyToPlaceholderMap(keyToShortcutMap) { 
        this._keyToShortcutMap = keyToShortcutMap;
    }

    get idToPlaceholderMap() { 
        return this._idToShortcutMap;
    }

    set idToPlaceholderMap(idToShortcutMap) { 
        this._idToShortcutMap = idToShortcutMap;
    }

    addPlaceholder(placeholder) {
        this._placeholders.push(placeholder);
    }

    get placeholders() {
        return this._placeholders;
    }
}

export default StructuredFieldMapManager;