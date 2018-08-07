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
        this._entryShortcut = shortcutManager.createShortcut(null, shortcutName, patient, data, this.onUpdate.bind(this));
        if(!data) {
            this._entryShortcut.initialize(); // cause defaulting
            this._numUpdates = 0;
        } else {
            this._numUpdates = 1;
        }
    }

    onBeforeDeleted() {
        if (this._entryShortcut) {
            this._entryShortcut.onBeforeDeleted();
        }
        return true;
    }

    onUpdate = (shortcut) => { // shortcut argument will be same as this._entryShortcut
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

    getAttributeValue(name) {
        return this._entryShortcut.getAttributeValue(name);
    }

    getResultText() {
        if (!this._entryShortcut.getEntryId()) return this._placeholderText;
        return `${this._placeholderText}[[{"entryId":${this._entryShortcut.getEntryId()}}]]`;
    }

    setAttributeValue(name, value) {
        console.log(name, value);
        if (!this._entryShortcut.hasParentContext()) {
            this._entryShortcut.establishParentContext(this._contextManager);
        }
        
        if (!this._entryShortcut.hasParentContext()) {
            return "no parent context so no setting values";
        } else {
            console.log("line 62");
            console.log(this._entryShortcut);
            this._entryShortcut.setAttributeValue(name, value);
            this._setForceRefresh();
            return null;
        }
    }

    getTextToDisplayInNote() {
        if (this._numUpdates > 0 && this._entryShortcut.hasData()) return this._entryShortcut.getAsString();
        return this._placeholderText;
    }

    getKey() {
        return this.key;
    }

    setKey(key) {
        this.key = key;
        this._entryShortcut.setKey(key);
    }

}

export default Placeholder;