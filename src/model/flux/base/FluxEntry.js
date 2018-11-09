class FluxEntry {
    get sourceClinicalNoteReference() {
        return this._entry.entryInfo.sourceClinicalNote;
    }
}

export default FluxEntry;