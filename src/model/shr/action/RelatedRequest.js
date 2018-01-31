import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.RelatedRequest.
 */
class RelatedRequest {

  /**
   * Get the value (aliases action).
   * @returns {Reference} The shr.action.Action reference
   */
  get value() {
    return this._action;
  }

  /**
   * Set the value (aliases action).
   * @param {Reference} value - The shr.action.Action reference
   */
  set value(value) {
    this._action = value;
  }

  /**
   * Get the shr.action.Action reference.
   * @returns {Reference} The shr.action.Action reference
   */
  get action() {
    return this._action;
  }

  /**
   * Set the shr.action.Action reference.
   * @param {Reference} action - The shr.action.Action reference
   */
  set action(action) {
    this._action = action;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedRequest class.
   * The JSON must be valid against the RelatedRequest JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedRequest} An instance of RelatedRequest populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedRequest();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RelatedRequest;
