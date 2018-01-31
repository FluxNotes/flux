import { setPropertiesFromJSON } from '../../json-helper';

import OccurrenceTimeOrPeriod from './OccurrenceTimeOrPeriod';

/**
 * Generated class for shr.core.OccurrencePeriod.
 * @extends OccurrenceTimeOrPeriod
 */
class OccurrencePeriod extends OccurrenceTimeOrPeriod {

  /**
   * Get the value (aliases timePeriod).
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get value() {
    return this._timePeriod;
  }

  /**
   * Set the value (aliases timePeriod).
   * @param {TimePeriod} value - The shr.core.TimePeriod
   */
  set value(value) {
    this._timePeriod = value;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Deserializes JSON data to an instance of the OccurrencePeriod class.
   * The JSON must be valid against the OccurrencePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccurrencePeriod} An instance of OccurrencePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OccurrencePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OccurrencePeriod;
