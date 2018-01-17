import { setPropertiesFromJSON } from '../../json-helper';

import Content from '../base/Content';

/**
 * Generated class for shr.action.Action.
 * @extends Content
 */
class Action extends Content {

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the ActionContext.
   * @returns {ActionContext} The shr.action.ActionContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the ActionContext.
   * @param {ActionContext} actionContext - The shr.action.ActionContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Deserializes JSON data to an instance of the Action class.
   * The JSON must be valid against the Action JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Action} An instance of Action populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Action();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Action;
