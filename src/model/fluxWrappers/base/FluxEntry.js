import ClassRegistry from '../../ClassRegistry';

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
        if (!coding) return null;
        if (coding.displayText) return coding.displayText.value;
        if (coding.codeValue) return coding.codeValue.value;
        return null;
    }

    /**
     * Helper function to construct an entry with the given URI as the entry type value.
     */
    _constructEntry(uri) {
        const Entry = ClassRegistry.get('shr.base', 'Entry');
        const EntryType = ClassRegistry.get('shr.base', 'EntryType');

        let entry = new Entry();
        entry.entryType = new EntryType();
        entry.entryType.uri = uri;
        return entry;
    }
}

export default FluxEntry;
