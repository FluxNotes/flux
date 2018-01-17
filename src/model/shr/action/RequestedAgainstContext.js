import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for shr.action.RequestedAgainstContext.
 * @extends ActionContext
 */
class RequestedAgainstContext extends ActionContext {

  /**
   * Deserializes JSON data to an instance of the RequestedAgainstContext class.
   * The JSON must be valid against the RequestedAgainstContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RequestedAgainstContext} An instance of RequestedAgainstContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RequestedAgainstContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RequestedAgainstContext;
