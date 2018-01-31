import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PlaceOfBirth.
 */
class PlaceOfBirth {

  /**
   * Get the value (aliases geopoliticalLocation).
   * @returns {GeopoliticalLocation} The shr.core.GeopoliticalLocation
   */
  get value() {
    return this._geopoliticalLocation;
  }

  /**
   * Set the value (aliases geopoliticalLocation).
   * @param {GeopoliticalLocation} value - The shr.core.GeopoliticalLocation
   */
  set value(value) {
    this._geopoliticalLocation = value;
  }

  /**
   * Get the GeopoliticalLocation.
   * @returns {GeopoliticalLocation} The shr.core.GeopoliticalLocation
   */
  get geopoliticalLocation() {
    return this._geopoliticalLocation;
  }

  /**
   * Set the GeopoliticalLocation.
   * @param {GeopoliticalLocation} geopoliticalLocation - The shr.core.GeopoliticalLocation
   */
  set geopoliticalLocation(geopoliticalLocation) {
    this._geopoliticalLocation = geopoliticalLocation;
  }

  /**
   * Deserializes JSON data to an instance of the PlaceOfBirth class.
   * The JSON must be valid against the PlaceOfBirth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PlaceOfBirth} An instance of PlaceOfBirth populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PlaceOfBirth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PlaceOfBirth;
