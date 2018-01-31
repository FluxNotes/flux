import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedDuration.
 */
class GeneralizedDuration {

  /**
   * Get the choice value; one of: shr.core.Duration, shr.core.SemiquantDuration.
   * @returns {(Duration|SemiquantDuration)} The choice value; one of: shr.core.Duration, shr.core.SemiquantDuration
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Duration, shr.core.SemiquantDuration.
   * @param {(Duration|SemiquantDuration)} value - The choice value; one of: shr.core.Duration, shr.core.SemiquantDuration
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedDuration class.
   * The JSON must be valid against the GeneralizedDuration JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedDuration} An instance of GeneralizedDuration populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedDuration();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GeneralizedDuration;
