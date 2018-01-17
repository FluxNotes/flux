import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.ResourceLocation.
 */
class ResourceLocation {

  /**
   * Get the value (aliases uri).
   * @returns {uri} The uri
   */
  get value() {
    return this._uri;
  }

  /**
   * Set the value (aliases uri).
   * @param {uri} value - The uri
   */
  set value(value) {
    this._uri = value;
  }

  /**
   * Get the uri.
   * @returns {uri} The uri
   */
  get uri() {
    return this._uri;
  }

  /**
   * Set the uri.
   * @param {uri} uri - The uri
   */
  set uri(uri) {
    this._uri = uri;
  }

  /**
   * Deserializes JSON data to an instance of the ResourceLocation class.
   * The JSON must be valid against the ResourceLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResourceLocation} An instance of ResourceLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ResourceLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ResourceLocation;
