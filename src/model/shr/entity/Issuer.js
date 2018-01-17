import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Issuer.
 */
class Issuer {

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
   * Deserializes JSON data to an instance of the Issuer class.
   * The JSON must be valid against the Issuer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Issuer} An instance of Issuer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Issuer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Issuer;
