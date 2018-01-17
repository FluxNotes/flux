import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.EffectiveDate.
 */
class EffectiveDate {

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
   * Deserializes JSON data to an instance of the EffectiveDate class.
   * The JSON must be valid against the EffectiveDate JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EffectiveDate} An instance of EffectiveDate populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EffectiveDate();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default EffectiveDate;
