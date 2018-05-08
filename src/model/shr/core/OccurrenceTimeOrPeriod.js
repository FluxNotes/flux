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
   * This field/value is required.
   * @param {(date|dateTime|TimePeriod)} value - The choice value; one of: date, dateTime, shr.core.TimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: date, dateTime, shr.core.TimePeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {(date|dateTime|TimePeriod)} value - The choice value; one of: date, dateTime, shr.core.TimePeriod
   * @returns {OccurrenceTimeOrPeriod} this.
   */
  withValue(value) {
    this.value = value; return this;
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
  /**
   * Serializes an instance of the OccurrenceTimeOrPeriod class to a JSON object.
   * The JSON is expected to be valid against the OccurrenceTimeOrPeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/OccurrenceTimeOrPeriod' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default OccurrenceTimeOrPeriod;
