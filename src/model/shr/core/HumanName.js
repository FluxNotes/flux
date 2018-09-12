import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.HumanName.
 */
class HumanName {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {HumanName} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {HumanName} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Get the HumanNamePrefix.
   * @returns {HumanNamePrefix} The shr.core.HumanNamePrefix
   */
  get humanNamePrefix() {
    return this._humanNamePrefix;
  }

  /**
   * Set the HumanNamePrefix.
   * @param {HumanNamePrefix} humanNamePrefix - The shr.core.HumanNamePrefix
   */
  set humanNamePrefix(humanNamePrefix) {
    this._humanNamePrefix = humanNamePrefix;
  }

  /**
   * Set the HumanNamePrefix and return 'this' for chaining.
   * @param {HumanNamePrefix} humanNamePrefix - The shr.core.HumanNamePrefix
   * @returns {HumanName} this.
   */
  withHumanNamePrefix(humanNamePrefix) {
    this.humanNamePrefix = humanNamePrefix; return this;
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
   * Get the HumanNameSuffix array.
   * @returns {Array<HumanNameSuffix>} The shr.core.HumanNameSuffix array
   */
  get humanNameSuffix() {
    return this._humanNameSuffix;
  }

  /**
   * Set the HumanNameSuffix array.
   * @param {Array<HumanNameSuffix>} humanNameSuffix - The shr.core.HumanNameSuffix array
   */
  set humanNameSuffix(humanNameSuffix) {
    this._humanNameSuffix = humanNameSuffix;
  }

  /**
   * Set the HumanNameSuffix array and return 'this' for chaining.
   * @param {Array<HumanNameSuffix>} humanNameSuffix - The shr.core.HumanNameSuffix array
   * @returns {HumanName} this.
   */
  withHumanNameSuffix(humanNameSuffix) {
    this.humanNameSuffix = humanNameSuffix; return this;
  }

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.entity.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.entity.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose and return 'this' for chaining.
   * @param {Purpose} purpose - The shr.entity.Purpose
   * @returns {HumanName} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {HumanName} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the HumanName class.
   * The JSON must be valid against the HumanName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HumanName} An instance of HumanName populated with the JSON data
   */
  static fromJSON(json = {}) {
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
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/HumanName' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.humanNamePrefix != null) {
      inst['HumanNamePrefix'] = typeof this.humanNamePrefix.toJSON === 'function' ? this.humanNamePrefix.toJSON() : this.humanNamePrefix;
    }
    if (this.givenName != null) {
      inst['GivenName'] = this.givenName.map(f => f.toJSON());
    }
    if (this.familyName != null) {
      inst['FamilyName'] = typeof this.familyName.toJSON === 'function' ? this.familyName.toJSON() : this.familyName;
    }
    if (this.humanNameSuffix != null) {
      inst['HumanNameSuffix'] = this.humanNameSuffix.map(f => f.toJSON());
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the HumanName class to a FHIR object.
   * The FHIR is expected to be valid against the HumanName FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.purpose != null) {
      inst['use'] = typeof this.purpose.toFHIR === 'function' ? this.purpose.toFHIR() : this.purpose;
    }
    if (this.value != null) {
      inst['text'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    if (this.familyName != null) {
      inst['family'] = typeof this.familyName.toFHIR === 'function' ? this.familyName.toFHIR() : this.familyName;
    }
    if (this.givenName != null) {
      inst['given'] = inst['given'] || [];
      inst['given'].concat(this.givenName.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.humanNamePrefix != null) {
      inst['prefix'] = typeof this.humanNamePrefix.toFHIR === 'function' ? this.humanNamePrefix.toFHIR() : this.humanNamePrefix;
    }
    if (this.humanNameSuffix != null) {
      inst['suffix'] = inst['suffix'] || [];
      inst['suffix'].concat(this.humanNameSuffix.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-HumanName-extension';
      inst['valueHumanName'] = this.value;
    }
    return inst;
  }
}
export default HumanName;
