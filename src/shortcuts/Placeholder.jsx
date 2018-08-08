class Placeholder {
    constructor(placeholderText, shortcutName, data, metadata, shortcutManager, contextManager, patient, clinicalNote, setForceRefresh) {
        this._placeholderText = placeholderText;
        this._shortcutName = shortcutName;
        this._metadata = metadata;
        this._shortcutManager = shortcutManager;
        this._contextManager = contextManager;
        this._patient = patient;
        this._clinicalNote = clinicalNote;
        this._setForceRefresh = setForceRefresh;
        let shortcuts = [];
        if (data) {
            let parsedData = JSON.parse(data);
            parsedData.entryIds.forEach((id) => {
                shortcuts.push(shortcutManager.createShortcut(null, shortcutName, patient, `{"entryId":${id}}`, this.onUpdate.bind(this)));
            });
            this._entryShortcuts = shortcuts;
            this._numUpdates = 1;
        } else {
            this._entryShortcuts = [shortcutManager.createShortcut(null, shortcutName, patient, undefined, this.onUpdate.bind(this))];
            this._entryShortcuts[0].initialize();
            this._numUpdates = 0;
        }
    }

    onBeforeDeleted() {
        if (this._entryShortcuts) {
            this._entryShortcuts.forEach(entryShortcut => entryShortcut.onBeforeDeleted());
        }
        return true;
    }

    onUpdate = (shortcut) => {
        if (shortcut.hasParentContext()) {
            this._numUpdates++;
            shortcut.updatePatient(this._patient, this._contextManager, this._clinicalNote);
        }
    }

    get placeholderText() {
        return this._placeholderText;
    }

    get shortcutName() {
        return this._shortcutName;
    }

    get metadata() {
        return this._metadata;
    }

    get done() {
        return this._done;
    }

    set done(d) {
        this._done = d;
    }

    get entryShortcuts() {
        return this._entryShortcuts;
    }

    getResultText() {
        if (!this._entryShortcuts[0].getEntryId()) return this._placeholderText;
        let ids = [];
        this._entryShortcuts.forEach((shortcut) => {
            ids.push(shortcut.getEntryId());
        });
        return `${this._placeholderText}[[{"entryIds":[${ids}]}]]`;
    }

    get multiplicity() {
        return this._metadata.formSpec.multiplicity;
    }

    getAttributeValue(name, index = 0) {
        return this._entryShortcuts[index].getAttributeValue(name);
    }

    setAttributeValue(name, value, index = 0) {
        if (!this._entryShortcuts[index].hasParentContext()) {
            this._entryShortcuts[index].establishParentContext(this._contextManager);
        }
        
        if (!this._entryShortcuts[index].hasParentContext()) {
            return "no parent context so no setting values";
        } else {
            this._entryShortcuts[index].setAttributeValue(name, value);
            this._setForceRefresh();
            return null;
        }
    }

    getTextToDisplayInNote(index = 0) {
        if (this._numUpdates > 0 && this._entryShortcuts[index].hasData()) {
            let displayText = "";
            this._entryShortcuts.forEach((shortcut) => {
                displayText += `${shortcut.getAsString()}. `;
            });
            return displayText;
        }
        return this._placeholderText;
    }

    getKey() {
        return this.key;
    }

    setKey(key, index = 0) {
        this.key = key;
        this._entryShortcuts[index].setKey(key);
    }

    addEntry() {
        this._entryShortcuts.push(this._shortcutManager.createShortcut(null, this._shortcutName, this._patient, undefined, this.onUpdate.bind(this)));
        this._entryShortcuts[this._entryShortcuts.length - 1].initialize();
        this._setForceRefresh();
    }

    deleteEntry(index) {
        if (this._entryShortcuts[index].onBeforeDeleted()) {
            this._entryShortcuts.splice(index, 1);
            this._setForceRefresh();
        }
    }
}

export default Placeholder;