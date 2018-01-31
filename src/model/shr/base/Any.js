import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.Any.
 */
class Any {

  /**
   * Deserializes JSON data to an instance of the Any class.
   * The JSON must be valid against the Any JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Any} An instance of Any populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Any();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Any;
