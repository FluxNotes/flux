import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ActionContext.
 */
class ActionContext {

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.core.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.core.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Deserializes JSON data to an instance of the ActionContext class.
   * The JSON must be valid against the ActionContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionContext} An instance of ActionContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ActionContext;
