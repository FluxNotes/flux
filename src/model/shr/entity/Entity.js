import { setPropertiesFromJSON } from '../../json-helper';

import Party from './Party';

/**
 * Generated class for shr.entity.Entity.
 * @extends Party
 */
class Entity extends Party {

  /**
   * Deserializes JSON data to an instance of the Entity class.
   * The JSON must be valid against the Entity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Entity} An instance of Entity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Entity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Entity;
