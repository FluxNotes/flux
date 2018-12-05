import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.NationalProviderIdentifier.
 */
class NationalProviderIdentifier {

  /**
   * Get the value (aliases identifier).
   * @returns {Identifier} The shr.core.Identifier
   */
  get value() {
    return this._identifier;
  }

  /**
   * Set the value (aliases identifier).
   * This field/value is required.
   * @param {Identifier} value - The shr.core.Identifier
   */
  set value(value) {
    this._identifier = value;
  }

  /**
   * Set the value (aliases identifier) and return 'this' for chaining.
   * This field/value is required.
   * @param {Identifier} value - The shr.core.Identifier
   * @returns {NationalProviderIdentifier} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * This field/value is required.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier and return 'this' for chaining.
   * This field/value is required.
   * @param {Identifier} identifier - The shr.core.Identifier
   * @returns {NationalProviderIdentifier} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NationalProviderIdentifier class.
   * The JSON must be valid against the NationalProviderIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NationalProviderIdentifier} An instance of NationalProviderIdentifier populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new NationalProviderIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the NationalProviderIdentifier class to a JSON object.
   * The JSON is expected to be valid against the NationalProviderIdentifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/NationalProviderIdentifier' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the NationalProviderIdentifier class to a FHIR object.
   * The FHIR is expected to be valid against the NationalProviderIdentifier FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the NationalProviderIdentifier class.
   * The FHIR must be valid against the NationalProviderIdentifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {NationalProviderIdentifier} An instance of NationalProviderIdentifier populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new NationalProviderIdentifier();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Identifier', fhir);
    }
    return inst;
  }

}
export default NationalProviderIdentifier;
