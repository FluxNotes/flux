class Placeholder {
    constructor(placeholderText, shortcutName, metadata) {
        this._placeholderText = placeholderText;
        this._shortcutName = shortcutName;
        this._metadata = metadata;
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
}

export default Placeholder;