import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.Members.
 */
class Members {

  /**
   * Get the value (aliases observation) array.
   * @returns {Array<Reference>} The shr.finding.Observation reference array
   */
  get value() {
    return this._observation;
  }

  /**
   * Set the value (aliases observation) array.
   * @param {Array<Reference>} value - The shr.finding.Observation reference array
   */
  set value(value) {
    this._observation = value;
  }

  /**
   * Get the shr.finding.Observation reference array.
   * @returns {Array<Reference>} The shr.finding.Observation reference array
   */
  get observation() {
    return this._observation;
  }

  /**
   * Set the shr.finding.Observation reference array.
   * @param {Array<Reference>} observation - The shr.finding.Observation reference array
   */
  set observation(observation) {
    this._observation = observation;
  }

  /**
   * Deserializes JSON data to an instance of the Members class.
   * The JSON must be valid against the Members JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Members} An instance of Members populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Members();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Members;
