import { setPropertiesFromJSON } from '../../json-helper';

import Party from './Party';

/**
 * Generated class for shr.entity.Role.
 * @extends Party
 */
class Role extends Party {

  /**
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Party reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * @param {Reference} value - The shr.entity.Party reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Get the shr.entity.Party reference.
   * @returns {Reference} The shr.entity.Party reference
   */
  get party() {
    return this._party;
  }

  /**
   * Set the shr.entity.Party reference.
   * @param {Reference} party - The shr.entity.Party reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Deserializes JSON data to an instance of the Role class.
   * The JSON must be valid against the Role JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Role} An instance of Role populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Role();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Role;
