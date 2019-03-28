class FluxEntry {
    get sourceClinicalNoteReference() {
        return this._entry.entryInfo.sourceClinicalNote;
    }

    /**
     * Extract a human-readable string from a code.
     *
     * @param {Coding} coding
     * @returns {string} the display text if available, otherwise the code.
     * @private
     */
    _displayTextOrCode(coding) {
        return coding.displayText ? coding.displayText.value : coding.code.value;
    }
}

export default FluxEntry;
