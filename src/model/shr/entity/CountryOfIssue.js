import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.CountryOfIssue.
 */
class CountryOfIssue {

  /**
   * Get the value (aliases country).
   * @returns {Country} The shr.core.Country
   */
  get value() {
    return this._country;
  }

  /**
   * Set the value (aliases country).
   * @param {Country} value - The shr.core.Country
   */
  set value(value) {
    this._country = value;
  }

  /**
   * Get the Country.
   * @returns {Country} The shr.core.Country
   */
  get country() {
    return this._country;
  }

  /**
   * Set the Country.
   * @param {Country} country - The shr.core.Country
   */
  set country(country) {
    this._country = country;
  }

  /**
   * Deserializes JSON data to an instance of the CountryOfIssue class.
   * The JSON must be valid against the CountryOfIssue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CountryOfIssue} An instance of CountryOfIssue populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CountryOfIssue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CountryOfIssue;
