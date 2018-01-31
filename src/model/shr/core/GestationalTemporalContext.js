import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GestationalTemporalContext.
 */
class GestationalTemporalContext {

  /**
   * Get the choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod.
   * @returns {(GestationalAge|GestationalTimePeriod)} The choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod.
   * @param {(GestationalAge|GestationalTimePeriod)} value - The choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GestationalTemporalContext class.
   * The JSON must be valid against the GestationalTemporalContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GestationalTemporalContext} An instance of GestationalTemporalContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GestationalTemporalContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GestationalTemporalContext;
