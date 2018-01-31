import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedAge.
 */
class GeneralizedAge {

  /**
   * Get the choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup.
   * @returns {(Age|AgeRange|AgeGroup)} The choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup.
   * @param {(Age|AgeRange|AgeGroup)} value - The choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedAge class.
   * The JSON must be valid against the GeneralizedAge JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedAge} An instance of GeneralizedAge populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedAge();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GeneralizedAge;
