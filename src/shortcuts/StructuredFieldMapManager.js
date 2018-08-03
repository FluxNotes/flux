class StructuredFieldMapManager { 
    constructor () { 
        this._keyToShortcutMap = new Map();
        this._idToShortcutMap = new Map()

        //this._keyToPlaceholderMap = new Map();
        //this._idToPlaceholderMap = new Map();
        this._placeholders = [];
    }

    clearStructuredFieldMap() { 
        this.clearKeyToShortcutMap();
        this.clearIdToShortcutMap();
        //this.clearKeyToPlaceholderMap();
        //this.clearIdToPlaceholderMap();
        this._placeholders = [];
    }

    clearKeyToShortcutMap() {
        this._keyToShortcutMap = new Map();
    }

    clearIdToShortcutMap() {
        this._idToShortcutMap = new Map()
    }

    // clearKeyToPlaceholderMap() {
    //     this._keyToPlaceholderMap = new Map();
    // }

    // clearIdToPlaceholderMap() {
    //     this._idToPlaceholderMap = new Map()
    // }

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


    // get keyToPlaceholderMap() { 
    //     return this._keyToPlaceholderMap;
    // }

    // set keyToPlaceholderMap(keyToPlaceholderMap) { 
    //     this._keyToPlaceholderMap = keyToPlaceholderMap;
    // }

    // get idToPlaceholderMap() { 
    //     return this._idToPlaceholderMap;
    // }

    // set idToPlaceholderMap(idToPlaceholderMap) { 
    //     this._idToPlaceholderMap = idToPlaceholderMap;
    // }

    addPlaceholder(placeholder) {
        this._placeholders.push(placeholder);
    }

    removePlaceholder(placeholder) {
        const index = this._placeholders.indexOf(placeholder);
        if (index > -1) {
            this._placeholders.splice(index, 1);
        }
        // this._keyToPlaceholderMap.delete(key);
        // this._idToPlaceholderMap.delete(shortcut.metadata.id)
    }

    get placeholders() {
        return this._placeholders;
    }
}

export default StructuredFieldMapManager;