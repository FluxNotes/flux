import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.LanguageUsed.
 */
class LanguageUsed {

  /**
   * Get the value (aliases language).
   * @returns {Language} The shr.base.Language
   */
  get value() {
    return this._language;
  }

  /**
   * Set the value (aliases language).
   * @param {Language} value - The shr.base.Language
   */
  set value(value) {
    this._language = value;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.base.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.base.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Get the SpokenLanguageProficiency.
   * @returns {SpokenLanguageProficiency} The shr.entity.SpokenLanguageProficiency
   */
  get spokenLanguageProficiency() {
    return this._spokenLanguageProficiency;
  }

  /**
   * Set the SpokenLanguageProficiency.
   * @param {SpokenLanguageProficiency} spokenLanguageProficiency - The shr.entity.SpokenLanguageProficiency
   */
  set spokenLanguageProficiency(spokenLanguageProficiency) {
    this._spokenLanguageProficiency = spokenLanguageProficiency;
  }

  /**
   * Get the WrittenLanguageProficiency.
   * @returns {WrittenLanguageProficiency} The shr.entity.WrittenLanguageProficiency
   */
  get writtenLanguageProficiency() {
    return this._writtenLanguageProficiency;
  }

  /**
   * Set the WrittenLanguageProficiency.
   * @param {WrittenLanguageProficiency} writtenLanguageProficiency - The shr.entity.WrittenLanguageProficiency
   */
  set writtenLanguageProficiency(writtenLanguageProficiency) {
    this._writtenLanguageProficiency = writtenLanguageProficiency;
  }

  /**
   * Get the LanguageQualifier array.
   * @returns {Array<LanguageQualifier>} The shr.entity.LanguageQualifier array
   */
  get languageQualifier() {
    return this._languageQualifier;
  }

  /**
   * Set the LanguageQualifier array.
   * @param {Array<LanguageQualifier>} languageQualifier - The shr.entity.LanguageQualifier array
   */
  set languageQualifier(languageQualifier) {
    this._languageQualifier = languageQualifier;
  }

  /**
   * Deserializes JSON data to an instance of the LanguageUsed class.
   * The JSON must be valid against the LanguageUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LanguageUsed} An instance of LanguageUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LanguageUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default LanguageUsed;
