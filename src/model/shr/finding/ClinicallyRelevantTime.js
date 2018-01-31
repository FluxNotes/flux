import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.ClinicallyRelevantTime.
 */
class ClinicallyRelevantTime {

  /**
   * Get the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing.
   * @returns {(dateTime|TimePeriod|Timing)} The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing.
   * @param {(dateTime|TimePeriod|Timing)} value - The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the ClinicallyRelevantTime class.
   * The JSON must be valid against the ClinicallyRelevantTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClinicallyRelevantTime} An instance of ClinicallyRelevantTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ClinicallyRelevantTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ClinicallyRelevantTime;
