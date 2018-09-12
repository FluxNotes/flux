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
   * @returns {IndirectSite} this.
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
   * @returns {IndirectSite} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IndirectSite class.
   * The JSON must be valid against the IndirectSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IndirectSite} An instance of IndirectSite populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new IndirectSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the IndirectSite class to a JSON object.
   * The JSON is expected to be valid against the IndirectSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/procedure/IndirectSite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the IndirectSite class to a FHIR object.
   * The FHIR is expected to be valid against the IndirectSite FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-procedure-IndirectSite-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default IndirectSite;
