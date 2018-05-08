import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeopoliticalLocation.
 */
class GeopoliticalLocation {

  /**
   * Deserializes JSON data to an instance of the GeopoliticalLocation class.
   * The JSON must be valid against the GeopoliticalLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeopoliticalLocation} An instance of GeopoliticalLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeopoliticalLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GeopoliticalLocation class to a JSON object.
   * The JSON is expected to be valid against the GeopoliticalLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/GeopoliticalLocation' } };
    return inst;
  }
}
export default GeopoliticalLocation;
