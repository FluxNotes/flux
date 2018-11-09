import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.LanguageUsed.
 */
class LanguageUsed {

  /**
   * Get the value (aliases language).
   * @returns {Language} The shr.core.Language
   */
  get value() {
    return this._language;
  }

  /**
   * Set the value (aliases language).
   * This field/value is required.
   * @param {Language} value - The shr.core.Language
   */
  set value(value) {
    this._language = value;
  }

  /**
   * Set the value (aliases language) and return 'this' for chaining.
   * This field/value is required.
   * @param {Language} value - The shr.core.Language
   * @returns {LanguageUsed} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

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
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
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
   * Serializes an instance of the LanguageUsed class to a FHIR object.
   * The FHIR is expected to be valid against the LanguageUsed FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.language != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.language.toFHIR(true));
      }
      if (this.spokenLanguageProficiency != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.spokenLanguageProficiency.toFHIR(true));
      }
      if (this.writtenLanguageProficiency != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.writtenLanguageProficiency.toFHIR(true));
      }
      if (this.languageQualifier != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.languageQualifier.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-LanguageUsed-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the LanguageUsed class.
   * The FHIR must be valid against the LanguageUsed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {LanguageUsed} An instance of LanguageUsed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new LanguageUsed();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Language-extension');
      if (match_1 != null) {
        inst.language = createInstanceFromFHIR('shr.core.Language', match_1, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-SpokenLanguageProficiency-extension');
      if (match_2 != null) {
        inst.spokenLanguageProficiency = createInstanceFromFHIR('shr.entity.SpokenLanguageProficiency', match_2, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-WrittenLanguageProficiency-extension');
      if (match_3 != null) {
        inst.writtenLanguageProficiency = createInstanceFromFHIR('shr.entity.WrittenLanguageProficiency', match_3, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-LanguageQualifier-extension');
      if (match_4 != null) {
        inst.languageQualifier = createInstanceFromFHIR('shr.entity.LanguageQualifier', match_4, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Language', fhir);
    }
    return inst;
  }

}
export default LanguageUsed;
