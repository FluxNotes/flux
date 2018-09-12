import { setPropertiesFromJSON } from '../../json-helper';

import Role from '../../cimi/entity/Role';

/**
 * Generated class for shr.occupation.Employer.
 * @extends Role
 */
class Employer extends Role {

  /**
   * Get the choice value; one of: cimi.entity.Person reference, cimi.entity.Organization reference.
   * @returns {Reference} The choice value; one of: cimi.entity.Person reference, cimi.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Person reference, cimi.entity.Organization reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Person reference, cimi.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Person reference, cimi.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Person reference, cimi.entity.Organization reference
   * @returns {Employer} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Employer class.
   * The JSON must be valid against the Employer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Employer} An instance of Employer populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Employer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Employer class to a JSON object.
   * The JSON is expected to be valid against the Employer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/Employer' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Employer;
