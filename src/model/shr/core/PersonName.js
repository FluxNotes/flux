import { setPropertiesFromJSON, uuid } from '../../json-helper';

import Name from './Name';

/**
 * Generated class for shr.core.PersonName.
 * @extends Name
 */
class PersonName extends Name {

  /**
   * Get the Purpose array.
   * @returns {Array<Purpose>} The shr.core.Purpose array
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose array.
   * @param {Array<Purpose>} purpose - The shr.core.Purpose array
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose array and return 'this' for chaining.
   * @param {Array<Purpose>} purpose - The shr.core.Purpose array
   * @returns {PersonName} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the Prefix array.
   * @returns {Array<Prefix>} The shr.core.Prefix array
   */
  get prefix() {
    return this._prefix;
  }

  /**
   * Set the Prefix array.
   * @param {Array<Prefix>} prefix - The shr.core.Prefix array
   */
  set prefix(prefix) {
    this._prefix = prefix;
  }

  /**
   * Set the Prefix array and return 'this' for chaining.
   * @param {Array<Prefix>} prefix - The shr.core.Prefix array
   * @returns {PersonName} this.
   */
  withPrefix(prefix) {
    this.prefix = prefix; return this;
  }

  /**
   * Get the GivenName array.
   * @returns {Array<GivenName>} The shr.core.GivenName array
   */
  get givenName() {
    return this._givenName;
  }

  /**
   * Set the GivenName array.
   * @param {Array<GivenName>} givenName - The shr.core.GivenName array
   */
  set givenName(givenName) {
    this._givenName = givenName;
  }

  /**
   * Set the GivenName array and return 'this' for chaining.
   * @param {Array<GivenName>} givenName - The shr.core.GivenName array
   * @returns {PersonName} this.
   */
  withGivenName(givenName) {
    this.givenName = givenName; return this;
  }

  /**
   * Get the MiddleName array.
   * @returns {Array<MiddleName>} The shr.core.MiddleName array
   */
  get middleName() {
    return this._middleName;
  }

  /**
   * Set the MiddleName array.
   * @param {Array<MiddleName>} middleName - The shr.core.MiddleName array
   */
  set middleName(middleName) {
    this._middleName = middleName;
  }

  /**
   * Set the MiddleName array and return 'this' for chaining.
   * @param {Array<MiddleName>} middleName - The shr.core.MiddleName array
   * @returns {PersonName} this.
   */
  withMiddleName(middleName) {
    this.middleName = middleName; return this;
  }

  /**
   * Get the FamilyName array.
   * @returns {Array<FamilyName>} The shr.core.FamilyName array
   */
  get familyName() {
    return this._familyName;
  }

  /**
   * Set the FamilyName array.
   * @param {Array<FamilyName>} familyName - The shr.core.FamilyName array
   */
  set familyName(familyName) {
    this._familyName = familyName;
  }

  /**
   * Set the FamilyName array and return 'this' for chaining.
   * @param {Array<FamilyName>} familyName - The shr.core.FamilyName array
   * @returns {PersonName} this.
   */
  withFamilyName(familyName) {
    this.familyName = familyName; return this;
  }

  /**
   * Get the Suffix array.
   * @returns {Array<Suffix>} The shr.core.Suffix array
   */
  get suffix() {
    return this._suffix;
  }

  /**
   * Set the Suffix array.
   * @param {Array<Suffix>} suffix - The shr.core.Suffix array
   */
  set suffix(suffix) {
    this._suffix = suffix;
  }

  /**
   * Set the Suffix array and return 'this' for chaining.
   * @param {Array<Suffix>} suffix - The shr.core.Suffix array
   * @returns {PersonName} this.
   */
  withSuffix(suffix) {
    this.suffix = suffix; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PersonName class.
   * The JSON must be valid against the PersonName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PersonName} An instance of PersonName populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PersonName();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PersonName class to a JSON object.
   * The JSON is expected to be valid against the PersonName JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/PersonName' } };
    if (this.nameAsText != null) {
      inst['NameAsText'] = typeof this.nameAsText.toJSON === 'function' ? this.nameAsText.toJSON() : this.nameAsText;
    }
    if (this.purpose != null) {
      inst['Purpose'] = this.purpose.map(f => f.toJSON());
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    if (this.prefix != null) {
      inst['Prefix'] = this.prefix.map(f => f.toJSON());
    }
    if (this.givenName != null) {
      inst['GivenName'] = this.givenName.map(f => f.toJSON());
    }
    if (this.middleName != null) {
      inst['MiddleName'] = this.middleName.map(f => f.toJSON());
    }
    if (this.familyName != null) {
      inst['FamilyName'] = this.familyName.map(f => f.toJSON());
    }
    if (this.suffix != null) {
      inst['Suffix'] = this.suffix.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PersonName class.
   * The FHIR must be valid against the PersonName FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {PersonName} An instance of PersonName populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new PersonName();
    return inst;
  }

}
export default PersonName;
