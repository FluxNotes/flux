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
   * This field/value is required.
   * @param {Reference} role - The shr.entity.Role reference
   */
  set role(role) {
    this._role = role;
  }

  /**
   * Set the shr.entity.Role reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} role - The shr.entity.Role reference
   * @returns {Attribution} this.
   */
  withRole(role) {
    this.role = role; return this;
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
   * This field/value is required.
   * @param {ParticipationType} participationType - The shr.action.ParticipationType
   */
  set participationType(participationType) {
    this._participationType = participationType;
  }

  /**
   * Set the ParticipationType and return 'this' for chaining.
   * This field/value is required.
   * @param {ParticipationType} participationType - The shr.action.ParticipationType
   * @returns {Attribution} this.
   */
  withParticipationType(participationType) {
    this.participationType = participationType; return this;
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
  /**
   * Serializes an instance of the Attribution class to a JSON object.
   * The JSON is expected to be valid against the Attribution JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Attribution' } };
    if (this.role != null) {
      inst['Role'] = typeof this.role.toJSON === 'function' ? this.role.toJSON() : this.role;
    }
    if (this.participationType != null) {
      inst['ParticipationType'] = typeof this.participationType.toJSON === 'function' ? this.participationType.toJSON() : this.participationType;
    }
    return inst;
  }
}
export default Attribution;
