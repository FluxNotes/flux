import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.AgeAtDeath.
 */
class AgeAtDeath {

  /**
   * Get the value (aliases generalizedAge).
   * @returns {GeneralizedAge} The shr.core.GeneralizedAge
   */
  get value() {
    return this._generalizedAge;
  }

  /**
   * Set the value (aliases generalizedAge).
   * @param {GeneralizedAge} value - The shr.core.GeneralizedAge
   */
  set value(value) {
    this._generalizedAge = value;
  }

  /**
   * Get the GeneralizedAge.
   * @returns {GeneralizedAge} The shr.core.GeneralizedAge
   */
  get generalizedAge() {
    return this._generalizedAge;
  }

  /**
   * Set the GeneralizedAge.
   * @param {GeneralizedAge} generalizedAge - The shr.core.GeneralizedAge
   */
  set generalizedAge(generalizedAge) {
    this._generalizedAge = generalizedAge;
  }

  /**
   * Deserializes JSON data to an instance of the AgeAtDeath class.
   * The JSON must be valid against the AgeAtDeath JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AgeAtDeath} An instance of AgeAtDeath populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AgeAtDeath();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AgeAtDeath;
