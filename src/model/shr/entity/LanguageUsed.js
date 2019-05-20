import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.LanguageUsed.
 */
class LanguageUsed {

  /**
   * Get the Language.
   * @returns {Language} The shr.core.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * This field/value is required.
   * @param {Language} language - The shr.core.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Set the Language and return 'this' for chaining.
   * This field/value is required.
   * @param {Language} language - The shr.core.Language
   * @returns {LanguageUsed} this.
   */
  withLanguage(language) {
    this.language = language; return this;
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
   * Set the SpokenLanguageProficiency and return 'this' for chaining.
   * @param {SpokenLanguageProficiency} spokenLanguageProficiency - The shr.entity.SpokenLanguageProficiency
   * @returns {LanguageUsed} this.
   */
  withSpokenLanguageProficiency(spokenLanguageProficiency) {
    this.spokenLanguageProficiency = spokenLanguageProficiency; return this;
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
   * Set the WrittenLanguageProficiency and return 'this' for chaining.
   * @param {WrittenLanguageProficiency} writtenLanguageProficiency - The shr.entity.WrittenLanguageProficiency
   * @returns {LanguageUsed} this.
   */
  withWrittenLanguageProficiency(writtenLanguageProficiency) {
    this.writtenLanguageProficiency = writtenLanguageProficiency; return this;
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
   * Set the LanguageQualifier array and return 'this' for chaining.
   * @param {Array<LanguageQualifier>} languageQualifier - The shr.entity.LanguageQualifier array
   * @returns {LanguageUsed} this.
   */
  withLanguageQualifier(languageQualifier) {
    this.languageQualifier = languageQualifier; return this;
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

  /**
   * Serializes an instance of the LanguageUsed class to a JSON object.
   * The JSON is expected to be valid against the LanguageUsed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/LanguageUsed' } };
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.spokenLanguageProficiency != null) {
      inst['SpokenLanguageProficiency'] = typeof this.spokenLanguageProficiency.toJSON === 'function' ? this.spokenLanguageProficiency.toJSON() : this.spokenLanguageProficiency;
    }
    if (this.writtenLanguageProficiency != null) {
      inst['WrittenLanguageProficiency'] = typeof this.writtenLanguageProficiency.toJSON === 'function' ? this.writtenLanguageProficiency.toJSON() : this.writtenLanguageProficiency;
    }
    if (this.languageQualifier != null) {
      inst['LanguageQualifier'] = this.languageQualifier.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the LanguageUsed class.
   * The FHIR must be valid against the LanguageUsed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {LanguageUsed} An instance of LanguageUsed populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new LanguageUsed();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Language-extension');
      if (match_1 != null) {
        inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-SpokenLanguageProficiency-extension');
      if (match_2 != null) {
        inst.spokenLanguageProficiency = FHIRHelper.createInstanceFromFHIR('shr.entity.SpokenLanguageProficiency', match_2, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-WrittenLanguageProficiency-extension');
      if (match_3 != null) {
        inst.writtenLanguageProficiency = FHIRHelper.createInstanceFromFHIR('shr.entity.WrittenLanguageProficiency', match_3, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-LanguageQualifier-extension');
      if (match_4 != null) {
        inst.languageQualifier = FHIRHelper.createInstanceFromFHIR('shr.entity.LanguageQualifier', match_4, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default LanguageUsed;
