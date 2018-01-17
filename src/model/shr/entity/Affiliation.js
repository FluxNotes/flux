import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Affiliation.
 */
class Affiliation {

  /**
   * Get the value (aliases organization).
   * @returns {Organization} The shr.entity.Organization
   */
  get value() {
    return this._organization;
  }

  /**
   * Set the value (aliases organization).
   * @param {Organization} value - The shr.entity.Organization
   */
  set value(value) {
    this._organization = value;
  }

  /**
   * Get the Organization.
   * @returns {Organization} The shr.entity.Organization
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the Organization.
   * @param {Organization} organization - The shr.entity.Organization
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Deserializes JSON data to an instance of the Affiliation class.
   * The JSON must be valid against the Affiliation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Affiliation} An instance of Affiliation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Affiliation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Affiliation;
