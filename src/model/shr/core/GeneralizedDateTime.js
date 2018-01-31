import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedDateTime.
 */
class GeneralizedDateTime {

  /**
   * Get the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime.
   * @returns {(dateTime|TimePeriod|QualitativeDateTime)} The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime.
   * @param {(dateTime|TimePeriod|QualitativeDateTime)} value - The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedDateTime class.
   * The JSON must be valid against the GeneralizedDateTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedDateTime} An instance of GeneralizedDateTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedDateTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GeneralizedDateTime;
