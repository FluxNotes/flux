// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Name from './Name';

/**
 * Generated class for shr.core.HumanName.
 * @extends Name
 */
class HumanName extends Name {

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
   * @returns {HumanName} this.
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
   * @returns {HumanName} this.
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
   * @returns {HumanName} this.
   */
  withGivenName(givenName) {
    this.givenName = givenName; return this;
  }

  /**
   * Get the FamilyName.
   * @returns {FamilyName} The shr.core.FamilyName
   */
  get familyName() {
    return this._familyName;
  }

  /**
   * Set the FamilyName.
   * @param {FamilyName} familyName - The shr.core.FamilyName
   */
  set familyName(familyName) {
    this._familyName = familyName;
  }

  /**
   * Set the FamilyName and return 'this' for chaining.
   * @param {FamilyName} familyName - The shr.core.FamilyName
   * @returns {HumanName} this.
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
   * @returns {HumanName} this.
   */
  withSuffix(suffix) {
    this.suffix = suffix; return this;
  }

  /**
   * Deserializes JSON data to an instance of the HumanName class.
   * The JSON must be valid against the HumanName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HumanName} An instance of HumanName populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'HumanName');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the HumanName class to a JSON object.
   * The JSON is expected to be valid against the HumanName JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/HumanName' } };
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
    if (this.familyName != null) {
      inst['FamilyName'] = typeof this.familyName.toJSON === 'function' ? this.familyName.toJSON() : this.familyName;
    }
    if (this.suffix != null) {
      inst['Suffix'] = this.suffix.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the HumanName class.
   * The FHIR must be valid against the HumanName FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {HumanName} An instance of HumanName populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'HumanName');
    const inst = new klass();
    if (fhir['use'] != null) {
      inst.purpose = inst.purpose || [];
      const inst_purpose = FHIRHelper.createInstanceFromFHIR('shr.core.Purpose', fhir['use'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
      inst.purpose.push(inst_purpose);
    }
    if (fhir['text'] != null) {
      inst.nameAsText = FHIRHelper.createInstanceFromFHIR('shr.core.NameAsText', fhir['text'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['family'] != null && fhir['family'][0] != null) {
      inst.familyName = FHIRHelper.createInstanceFromFHIR('shr.core.FamilyName', fhir['family'][0], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_given of fhir['given'] || []) {
      inst.givenName = inst.givenName || [];
      const inst_givenName = FHIRHelper.createInstanceFromFHIR('shr.core.GivenName', fhir_given, 'string', shrId, allEntries, mappedResources, referencesOut, false);
      inst.givenName.push(inst_givenName);
    }
    for (const fhir_prefix of fhir['prefix'] || []) {
      inst.prefix = inst.prefix || [];
      const inst_prefix = FHIRHelper.createInstanceFromFHIR('shr.core.Prefix', fhir_prefix, 'string', shrId, allEntries, mappedResources, referencesOut, false);
      inst.prefix.push(inst_prefix);
    }
    for (const fhir_suffix of fhir['suffix'] || []) {
      inst.suffix = inst.suffix || [];
      const inst_suffix = FHIRHelper.createInstanceFromFHIR('shr.core.Suffix', fhir_suffix, 'string', shrId, allEntries, mappedResources, referencesOut, false);
      inst.suffix.push(inst_suffix);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueHumanName'];
    }
    return inst;
  }

}
export default HumanName;
