import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.DriversLicenseNumber.
 */
class DriversLicenseNumber {

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
   * Get the StateOfIssue.
   * @returns {StateOfIssue} The shr.entity.StateOfIssue
   */
  get stateOfIssue() {
    return this._stateOfIssue;
  }

  /**
   * Set the StateOfIssue.
   * @param {StateOfIssue} stateOfIssue - The shr.entity.StateOfIssue
   */
  set stateOfIssue(stateOfIssue) {
    this._stateOfIssue = stateOfIssue;
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
   * Deserializes JSON data to an instance of the DriversLicenseNumber class.
   * The JSON must be valid against the DriversLicenseNumber JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DriversLicenseNumber} An instance of DriversLicenseNumber populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DriversLicenseNumber();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DriversLicenseNumber;
