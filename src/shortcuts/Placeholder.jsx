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
        this._entryShortcuts = [shortcutManager.createShortcut(null, shortcutName, patient, data, this.onUpdate.bind(this))];
        if (!data) {
            this._entryShortcuts[0].initialize();
            this._numUpdates = 0;
        } else {
            this._numUpdates = 1;
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
        return `${this._placeholderText}[[{"entryId":${this._entryShortcuts[0].getEntryId()}}]]`;
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
        if (this._numUpdates > 0 && this._entryShortcuts[index].hasData()) return this._entryShortcuts[index].getAsString();
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
        // newShortcut.initialize();
        this._entryShortcuts.push(this._shortcutManager.createShortcut(null, this._shortcutName, this._patient, undefined, this.onUpdate.bind(this)));
        this._entryShortcuts[this._entryShortcuts.length - 1].initialize();
        this._setForceRefresh();
    }

    deleteEntry(index) {
        this._entryShortcuts.splice(index, 1);
        this._setForceRefresh();
    }
}

export default Placeholder;