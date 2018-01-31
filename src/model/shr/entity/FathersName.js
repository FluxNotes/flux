import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.FathersName.
 */
class FathersName {

  /**
   * Get the value (aliases humanName).
   * @returns {HumanName} The shr.core.HumanName
   */
  get value() {
    return this._humanName;
  }

  /**
   * Set the value (aliases humanName).
   * @param {HumanName} value - The shr.core.HumanName
   */
  set value(value) {
    this._humanName = value;
  }

  /**
   * Get the HumanName.
   * @returns {HumanName} The shr.core.HumanName
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Set the HumanName.
   * @param {HumanName} humanName - The shr.core.HumanName
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Deserializes JSON data to an instance of the FathersName class.
   * The JSON must be valid against the FathersName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FathersName} An instance of FathersName populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FathersName();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default FathersName;
