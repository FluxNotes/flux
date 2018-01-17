import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.IndirectSite.
 */
class IndirectSite {

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
   * Deserializes JSON data to an instance of the IndirectSite class.
   * The JSON must be valid against the IndirectSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IndirectSite} An instance of IndirectSite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new IndirectSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default IndirectSite;
