import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.Attribution.
 */
class Attribution {

  /**
   * Get the shr.entity.Role reference.
   * @returns {Reference} The shr.entity.Role reference
   */
  get role() {
    return this._role;
  }

  /**
   * Set the shr.entity.Role reference.
   * @param {Reference} role - The shr.entity.Role reference
   */
  set role(role) {
    this._role = role;
  }

  /**
   * Get the ParticipationType.
   * @returns {ParticipationType} The shr.action.ParticipationType
   */
  get participationType() {
    return this._participationType;
  }

  /**
   * Set the ParticipationType.
   * @param {ParticipationType} participationType - The shr.action.ParticipationType
   */
  set participationType(participationType) {
    this._participationType = participationType;
  }

  /**
   * Deserializes JSON data to an instance of the Attribution class.
   * The JSON must be valid against the Attribution JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Attribution} An instance of Attribution populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Attribution();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Attribution;
