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
}
export default GeopoliticalLocation;
