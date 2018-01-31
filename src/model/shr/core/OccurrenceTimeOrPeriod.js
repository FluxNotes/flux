import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.OccurrenceTimeOrPeriod.
 */
class OccurrenceTimeOrPeriod {

  /**
   * Get the choice value; one of: date, dateTime, shr.core.TimePeriod.
   * @returns {(date|dateTime|TimePeriod)} The choice value; one of: date, dateTime, shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: date, dateTime, shr.core.TimePeriod.
   * @param {(date|dateTime|TimePeriod)} value - The choice value; one of: date, dateTime, shr.core.TimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the OccurrenceTimeOrPeriod class.
   * The JSON must be valid against the OccurrenceTimeOrPeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccurrenceTimeOrPeriod} An instance of OccurrenceTimeOrPeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OccurrenceTimeOrPeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OccurrenceTimeOrPeriod;
