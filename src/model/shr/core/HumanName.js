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
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
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
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
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
}
export default HumanName;
