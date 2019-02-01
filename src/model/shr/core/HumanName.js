import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import PersonName from './PersonName';

/**
 * Generated class for shr.core.HumanName.
 * @extends PersonName
 */
class HumanName extends PersonName {

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
   * @returns {HumanName} this.
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
   * @returns {HumanName} this.
   */
  withFamilyName(familyName) {
    this.familyName = familyName; return this;
  }

  /**
   * Deserializes JSON data to an instance of the HumanName class.
   * The JSON must be valid against the HumanName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HumanName} An instance of HumanName populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new HumanName();
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
   * Deserializes FHIR JSON data to an instance of the HumanName class.
   * The FHIR must be valid against the HumanName FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {HumanName} An instance of HumanName populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new HumanName();
    if (fhir['use'] != null) {
      inst.purpose = inst.purpose || [];
      const inst_purpose = FHIRHelper.createInstanceFromFHIR('shr.core.Purpose', fhir['use'], shrId, allEntries, mappedResources, referencesOut, false);
      inst.purpose.push(inst_purpose);
    }
    if (fhir['text'] != null) {
      inst.nameAsText = FHIRHelper.createInstanceFromFHIR('shr.core.NameAsText', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['family'] != null) {
      inst.familyName = inst.familyName || [];
      const inst_familyName = FHIRHelper.createInstanceFromFHIR('shr.core.FamilyName', fhir['family'], shrId, allEntries, mappedResources, referencesOut, false);
      inst.familyName.push(inst_familyName);
    }
    for (const fhir_given of fhir['given'] || []) {
      inst.givenName = inst.givenName || [];
      const inst_givenName = FHIRHelper.createInstanceFromFHIR('shr.core.GivenName', fhir_given, shrId, allEntries, mappedResources, referencesOut, false);
      inst.givenName.push(inst_givenName);
    }
    for (const fhir_prefix of fhir['prefix'] || []) {
      inst.prefix = inst.prefix || [];
      const inst_prefix = FHIRHelper.createInstanceFromFHIR('shr.core.Prefix', fhir_prefix, shrId, allEntries, mappedResources, referencesOut, false);
      inst.prefix.push(inst_prefix);
    }
    for (const fhir_suffix of fhir['suffix'] || []) {
      inst.suffix = inst.suffix || [];
      const inst_suffix = FHIRHelper.createInstanceFromFHIR('shr.core.Suffix', fhir_suffix, shrId, allEntries, mappedResources, referencesOut, false);
      inst.suffix.push(inst_suffix);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueHumanName'];
    }
    return inst;
  }

}
export default HumanName;
