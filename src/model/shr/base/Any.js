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
  /**
   * Serializes an instance of the Any class to a JSON object.
   * The JSON is expected to be valid against the Any JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Any' } };
    return inst;
  }
}
export default Any;
