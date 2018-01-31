import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MothersMaidenName.
 */
class MothersMaidenName {

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
   * Deserializes JSON data to an instance of the MothersMaidenName class.
   * The JSON must be valid against the MothersMaidenName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MothersMaidenName} An instance of MothersMaidenName populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MothersMaidenName();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MothersMaidenName;
