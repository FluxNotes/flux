import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.research.Sponsor.
 */
class Sponsor {

  /**
   * Get the value (aliases organization).
   * @returns {Reference} The shr.entity.Organization reference
   */
  get value() {
    return this._organization;
  }

  /**
   * Set the value (aliases organization).
   * @param {Reference} value - The shr.entity.Organization reference
   */
  set value(value) {
    this._organization = value;
  }

  /**
   * Get the shr.entity.Organization reference.
   * @returns {Reference} The shr.entity.Organization reference
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the shr.entity.Organization reference.
   * @param {Reference} organization - The shr.entity.Organization reference
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Deserializes JSON data to an instance of the Sponsor class.
   * The JSON must be valid against the Sponsor JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Sponsor} An instance of Sponsor populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Sponsor();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Sponsor;
