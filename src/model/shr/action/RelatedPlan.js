import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.RelatedPlan.
 */
class RelatedPlan {

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
   * Deserializes JSON data to an instance of the RelatedPlan class.
   * The JSON must be valid against the RelatedPlan JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedPlan} An instance of RelatedPlan populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedPlan();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RelatedPlan;
