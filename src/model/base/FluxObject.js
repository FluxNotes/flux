import Lang from 'lodash';

export default class FluxObject {
    constructor() {
        this._clinicalNote = null;
        this._attributeClinicalNotes = {};
    }
    
    getClinicalNote() {
        return this._clinicalNote;
    }
    
    getClinicalNoteForAttribute(attributeName) {
        const note = this._attributeClinicalNotes[attributeName];
        if (Lang.isUndefined(note)) return this._clinicalNote;
        return note;
    }
    
    linkToClinicalNote(note) {
        this._clinicalNote = note;
    }
    
    linkAttributeToClinicalNote(attributeName, note) {
        this._attributeClinicalNotes[attributeName] = note;
    }
}