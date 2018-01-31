import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.encounter.ReferralDate.
 */
class ReferralDate {

  /**
   * Get the value (aliases date).
   * @returns {date} The date
   */
  get value() {
    return this._date;
  }

  /**
   * Set the value (aliases date).
   * @param {date} value - The date
   */
  set value(value) {
    this._date = value;
  }

  /**
   * Get the date.
   * @returns {date} The date
   */
  get date() {
    return this._date;
  }

  /**
   * Set the date.
   * @param {date} date - The date
   */
  set date(date) {
    this._date = date;
  }

  /**
   * Deserializes JSON data to an instance of the ReferralDate class.
   * The JSON must be valid against the ReferralDate JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReferralDate} An instance of ReferralDate populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ReferralDate();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ReferralDate;
