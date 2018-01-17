import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.RecurrenceRange.
 */
class RecurrenceRange {

  /**
   * Get the choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats.
   * @returns {(TimePeriod|NumberOfRepeats)} The choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats.
   * @param {(TimePeriod|NumberOfRepeats)} value - The choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the RecurrenceRange class.
   * The JSON must be valid against the RecurrenceRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecurrenceRange} An instance of RecurrenceRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RecurrenceRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RecurrenceRange;
