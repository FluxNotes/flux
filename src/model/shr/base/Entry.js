import Reference from '../../Reference';

/** Generated from SHR definition for shr.base.Entry */
class Entry {
    constructor(json) {
        this._shrId = json.shrId;
        this._entryId = json.entryId;
        this._version = json.version;
        this._entryType = json.entryType;
        if (json.focalSubject) this._focalSubject = new Reference(json.focalSubject.shrId, json.focalSubject.entryId, json.focalSubject.entryType);
        this._originalCreationDate = json.originalCreationDate;
        this._lastUpdateDate = json.lastUpdateDate;
    }

  /**
   * Getter for shr.base.ShrId
   */
  get shrId() {
    return this._shrId;
  }

  /**
   * Setter for shr.base.ShrId
   */
  set shrId(shrIdVal) {
    this._shrId = shrIdVal;
  }

  /**
   * Getter for shr.base.EntryId
   */
  get entryId() {
    return this._entryId;
  }

  /**
   * Setter for shr.base.EntryId
   */
  set entryId(entryIdVal) {
    this._entryId = entryIdVal;
  }

  /**
   * Getter for shr.core.Version
   */
  get version() {
    return this._version;
  }

  /**
   * Setter for shr.core.Version
   */
  set version(versionVal) {
    this._version = versionVal;
  }

  /**
   * Getter for shr.base.EntryType[]
   */
  get entryType() {
    return this._entryType;
  }

  /**
   * Setter for shr.base.EntryType[]
   */
  set entryType(entryTypeVal) {
    this._entryType = entryTypeVal;
  }

  /**
   * Getter for shr.base.FocalSubject
   */
  get focalSubject() {
    return this._focalSubject;
  }

  /**
   * Setter for shr.base.FocalSubject
   */
  set focalSubject(focalSubjectVal) {
    this._focalSubject = focalSubjectVal;
  }

  /**
   * Getter for shr.base.SubjectIsThirdPartyFlag
   */
  get subjectIsThirdPartyFlag() {
    return this._subjectIsThirdPartyFlag;
  }

  /**
   * Setter for shr.base.SubjectIsThirdPartyFlag
   */
  set subjectIsThirdPartyFlag(subjectIsThirdPartyFlagVal) {
    this._subjectIsThirdPartyFlag = subjectIsThirdPartyFlagVal;
  }

  /**
   * Getter for shr.base.Narrative
   */
  get narrative() {
    return this._narrative;
  }

  /**
   * Setter for shr.base.Narrative
   */
  set narrative(narrativeVal) {
    this._narrative = narrativeVal;
  }

  /**
   * Getter for shr.base.Informant
   */
  get informant() {
    return this._informant;
  }

  /**
   * Setter for shr.base.Informant
   */
  set informant(informantVal) {
    this._informant = informantVal;
  }

  /**
   * Getter for shr.base.Author
   */
  get author() {
    return this._author;
  }

  /**
   * Setter for shr.base.Author
   */
  set author(authorVal) {
    this._author = authorVal;
  }

  /**
   * Getter for shr.base.AssociatedEncounter
   */
  get associatedEncounter() {
    return this._associatedEncounter;
  }

  /**
   * Setter for shr.base.AssociatedEncounter
   */
  set associatedEncounter(associatedEncounterVal) {
    this._associatedEncounter = associatedEncounterVal;
  }

  /**
   * Getter for shr.base.OriginalCreationDate
   */
  get originalCreationDate() {
    return this._originalCreationDate;
  }

  /**
   * Setter for shr.base.OriginalCreationDate
   */
  set originalCreationDate(originalCreationDateVal) {
    this._originalCreationDate = originalCreationDateVal;
  }

  /**
   * Getter for shr.base.LastUpdateDate
   */
  get lastUpdateDate() {
    return this._lastUpdateDate;
  }

  /**
   * Setter for shr.base.LastUpdateDate
   */
  set lastUpdateDate(lastUpdateDateVal) {
    this._lastUpdateDate = lastUpdateDateVal;
  }

  /**
   * Getter for shr.base.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Setter for shr.base.Language
   */
  set language(languageVal) {
    this._language = languageVal;
  }

  // Ommitting getter/setter for field: TBD<SecurityLabel>[]

  // Ommitting getter/setter for field: TBD<Tag>[]

}

export default Entry;
