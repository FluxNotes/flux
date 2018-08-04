class Placeholder {
    constructor(placeholderText, shortcutName, metadata, shortcutManager, contextManager, patient, clinicalNote, setForceRefresh) {
        this._placeholderText = placeholderText;
        this._shortcutName = shortcutName;
        this._metadata = metadata;
        this._shortcutManager = shortcutManager;
        this._contextManager = contextManager;
        this._patient = patient;
        this._clinicalNote = clinicalNote;
        this._setForceRefresh = setForceRefresh;
        this._entryShortcut = shortcutManager.createShortcut(null, shortcutName, patient, undefined, this.onUpdate.bind(this));
        this._entryShortcut.initialize(); // cause defaulting
        this._numUpdates = 0;
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

    setAttributeValue(name, value) {
        if (!this._entryShortcut.hasParentContext()) {
            this._entryShortcut.establishParentContext(this._contextManager);
        }
        
        if (!this._entryShortcut.hasParentContext()) {
            return "no parent context so no setting values";
        } else {
            this._entryShortcut.setAttributeValue(name, value);
            this._setForceRefresh();
            return null;
        }
    }

    getTextToDisplayInNote() {
        if (this._numUpdates > 0 && this._entryShortcut.hasData()) return this._entryShortcut.getAsString();
        return this._placeholderText;
    }
}

export default Placeholder;