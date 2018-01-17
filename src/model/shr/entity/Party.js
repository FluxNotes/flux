import { setPropertiesFromJSON } from '../../json-helper';

import Content from '../base/Content';

/**
 * Generated class for shr.entity.Party.
 * @extends Content
 */
class Party extends Content {

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
   * Deserializes JSON data to an instance of the Party class.
   * The JSON must be valid against the Party JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Party} An instance of Party populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Party();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Party;
