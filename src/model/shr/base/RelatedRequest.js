import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.RelatedRequest.
 */
class RelatedRequest {

  /**
   * Get the value (aliases actionRequested).
   * @returns {Reference} The shr.base.ActionRequested reference
   */
  get value() {
    return this._actionRequested;
  }

  /**
   * Set the value (aliases actionRequested).
   * This field/value is required.
   * @param {Reference} value - The shr.base.ActionRequested reference
   */
  set value(value) {
    this._actionRequested = value;
  }

  /**
   * Set the value (aliases actionRequested) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.ActionRequested reference
   * @returns {RelatedRequest} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.ActionRequested reference.
   * @returns {Reference} The shr.base.ActionRequested reference
   */
  get actionRequested() {
    return this._actionRequested;
  }

  /**
   * Set the shr.base.ActionRequested reference.
   * This field/value is required.
   * @param {Reference} actionRequested - The shr.base.ActionRequested reference
   */
  set actionRequested(actionRequested) {
    this._actionRequested = actionRequested;
  }

  /**
   * Set the shr.base.ActionRequested reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} actionRequested - The shr.base.ActionRequested reference
   * @returns {RelatedRequest} this.
   */
  withActionRequested(actionRequested) {
    this.actionRequested = actionRequested; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedRequest class.
   * The JSON must be valid against the RelatedRequest JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedRequest} An instance of RelatedRequest populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedRequest();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RelatedRequest class to a JSON object.
   * The JSON is expected to be valid against the RelatedRequest JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/RelatedRequest' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the RelatedRequest class to a FHIR object.
   * The FHIR is expected to be valid against the RelatedRequest FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-RelatedRequest-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RelatedRequest class.
   * The FHIR must be valid against the RelatedRequest FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RelatedRequest} An instance of RelatedRequest populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new RelatedRequest();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.ActionRequested', fhir);
    }
    return inst;
  }

}
export default RelatedRequest;
