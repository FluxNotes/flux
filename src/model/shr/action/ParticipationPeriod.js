import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ParticipationPeriod.
 */
class ParticipationPeriod {

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
   * Deserializes JSON data to an instance of the ParticipationPeriod class.
   * The JSON must be valid against the ParticipationPeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ParticipationPeriod} An instance of ParticipationPeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ParticipationPeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ParticipationPeriod;
