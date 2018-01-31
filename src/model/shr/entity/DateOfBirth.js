import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.DateOfBirth.
 */
class DateOfBirth {

  /**
   * Get the choice value; one of: date, shr.core.TimePeriod.
   * @returns {(date|TimePeriod)} The choice value; one of: date, shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: date, shr.core.TimePeriod.
   * @param {(date|TimePeriod)} value - The choice value; one of: date, shr.core.TimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the DateOfBirth class.
   * The JSON must be valid against the DateOfBirth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DateOfBirth} An instance of DateOfBirth populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DateOfBirth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DateOfBirth;
