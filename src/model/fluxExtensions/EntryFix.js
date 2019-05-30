import Entry from '../shr/base/Entry';

export default class EntryFix extends Entry {
  /**
   * Get the SourceClinicalNote.
   * @returns {SourceClinicalNote} The shr.base.SourceClinicalNote
   */
  get sourceClinicalNote() {
    return this._sourceClinicalNote;
  }

  /**
   * Set the SourceClinicalNote.
   * @param {SourceClinicalNote} sourceClinicalNote - The shr.base.SourceClinicalNote
   */
  set sourceClinicalNote(sourceClinicalNote) {
    this._sourceClinicalNote = sourceClinicalNote;
  }

  /**
   * Serializes an instance of the Entry class to a JSON object.
   * The JSON is expected to be valid against the Entry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = super.toJSON()
    if (this.sourceClinicalNote != null) {
      inst['SourceClinicalNote'] = typeof this.sourceClinicalNote.toJSON === 'function' ? this.sourceClinicalNote.toJSON() : this.sourceClinicalNote;
    }
    return inst;
  }
}