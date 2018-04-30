import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.DirectSite.
 */
class DirectSite {

  /**
   * Get the value (aliases bodySite).
   * @returns {BodySite} The shr.entity.BodySite
   */
  get value() {
    return this._bodySite;
  }

  /**
   * Set the value (aliases bodySite).
   * This field/value is required.
   * @param {BodySite} value - The shr.entity.BodySite
   */
  set value(value) {
    this._bodySite = value;
  }

  /**
   * Set the value (aliases bodySite) and return 'this' for chaining.
   * This field/value is required.
   * @param {BodySite} value - The shr.entity.BodySite
   * @returns {DirectSite} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Set the BodySite and return 'this' for chaining.
   * This field/value is required.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   * @returns {DirectSite} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DirectSite class.
   * The JSON must be valid against the DirectSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DirectSite} An instance of DirectSite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DirectSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DirectSite class to a JSON object.
   * The JSON is expected to be valid against the DirectSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/DirectSite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default DirectSite;
