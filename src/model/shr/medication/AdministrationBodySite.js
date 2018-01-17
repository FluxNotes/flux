import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.AdministrationBodySite.
 */
class AdministrationBodySite {

  /**
   * Get the value (aliases bodySite).
   * @returns {BodySite} The shr.entity.BodySite
   */
  get value() {
    return this._bodySite;
  }

  /**
   * Set the value (aliases bodySite).
   * @param {BodySite} value - The shr.entity.BodySite
   */
  set value(value) {
    this._bodySite = value;
  }

  /**
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Deserializes JSON data to an instance of the AdministrationBodySite class.
   * The JSON must be valid against the AdministrationBodySite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdministrationBodySite} An instance of AdministrationBodySite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdministrationBodySite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AdministrationBodySite;
