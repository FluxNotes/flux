class StructuredFieldMapManager { 
    constructor () { 
        this._keyToShortcutMap = new Map();
        this._idToShortcutMap = new Map();
        this._idToKeysMap = new Map();
        this._placeholders = [];
    }

    clearStructuredFieldMap() { 
        this.clearKeyToShortcutMap();
        this.clearIdToShortcutMap();
        this.clearIdToKeysMap();
        this._placeholders = [];
    }

    clearKeyToShortcutMap() {
        this._keyToShortcutMap = new Map();
    }

    clearIdToShortcutMap() {
        this._idToShortcutMap = new Map()
    }

    clearIdToKeysMap() {
        this._idToKeysMap = new Map();
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

    get idToKeysMap() {
        return this._idToKeysMap;
    }

    set idToKeysMap(idToKeysMap) {
        this._idToKeysMap = idToKeysMap;
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

    // returns key from _keyToShortcupMap corresponding to shortcut that has a valueObject with matching entryIds
    getKeyFromEntryId(entryId) {
        let resultKey = null;

        this._keyToShortcutMap.forEach((shortcut, k) => {
            if (shortcut.valueObject) {
                if (shortcut.valueObject.entryInfo.entryId === entryId) resultKey = k;
            }
        });

        return resultKey;
    }
}

export default StructuredFieldMapManager;