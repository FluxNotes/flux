import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PassportNumber.
 */
class PassportNumber {

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
   * Get the CountryOfIssue.
   * @returns {CountryOfIssue} The shr.entity.CountryOfIssue
   */
  get countryOfIssue() {
    return this._countryOfIssue;
  }

  /**
   * Set the CountryOfIssue.
   * @param {CountryOfIssue} countryOfIssue - The shr.entity.CountryOfIssue
   */
  set countryOfIssue(countryOfIssue) {
    this._countryOfIssue = countryOfIssue;
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
   * Deserializes JSON data to an instance of the PassportNumber class.
   * The JSON must be valid against the PassportNumber JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PassportNumber} An instance of PassportNumber populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PassportNumber();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PassportNumber;
