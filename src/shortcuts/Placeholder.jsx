class Placeholder {
    constructor(placeholderText, shortcutName, metadata, shortcutManager) {
        this._placeholderText = placeholderText;
        this._shortcutName = shortcutName;
        this._metadata = metadata;
        this._shortcutManager = shortcutManager;
        this._entryShortcut = shortcutManager.createShortcut(null, shortcutName);
        this._entryShortcut.initialize(); // cause defaulting
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
        this._entryShortcut.setAttributeValue(name, value);
    }

    getTextToDisplayInNote() {
        if (this._entryShortcut.hasData()) return this._entryShortcut.getAsString();
        return this._placeholderText;
    }
}

export default Placeholder;