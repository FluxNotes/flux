import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedTemporalContext.
 */
class GeneralizedTemporalContext {

  /**
   * Get the choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext.
   * @returns {(GeneralizedDateTime|GeneralizedAge|GestationalTemporalContext)} The choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext.
   * @param {(GeneralizedDateTime|GeneralizedAge|GestationalTemporalContext)} value - The choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedTemporalContext class.
   * The JSON must be valid against the GeneralizedTemporalContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedTemporalContext} An instance of GeneralizedTemporalContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedTemporalContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GeneralizedTemporalContext;
