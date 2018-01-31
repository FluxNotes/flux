import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Manufacturer.
 */
class Manufacturer {

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
   * Deserializes JSON data to an instance of the Manufacturer class.
   * The JSON must be valid against the Manufacturer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Manufacturer} An instance of Manufacturer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Manufacturer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Manufacturer;
