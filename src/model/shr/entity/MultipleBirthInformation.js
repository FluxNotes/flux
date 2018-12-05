import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MultipleBirthInformation.
 */
class MultipleBirthInformation {

  /**
   * Get the IsMultipleBirth.
   * @returns {IsMultipleBirth} The shr.entity.IsMultipleBirth
   */
  get isMultipleBirth() {
    return this._isMultipleBirth;
  }

  /**
   * Set the IsMultipleBirth.
   * This field/value is required.
   * @param {IsMultipleBirth} isMultipleBirth - The shr.entity.IsMultipleBirth
   */
  set isMultipleBirth(isMultipleBirth) {
    this._isMultipleBirth = isMultipleBirth;
  }

  /**
   * Set the IsMultipleBirth and return 'this' for chaining.
   * This field/value is required.
   * @param {IsMultipleBirth} isMultipleBirth - The shr.entity.IsMultipleBirth
   * @returns {MultipleBirthInformation} this.
   */
  withIsMultipleBirth(isMultipleBirth) {
    this.isMultipleBirth = isMultipleBirth; return this;
  }

  /**
   * Get the MultipleBirthOrder.
   * @returns {MultipleBirthOrder} The shr.entity.MultipleBirthOrder
   */
  get multipleBirthOrder() {
    return this._multipleBirthOrder;
  }

  /**
   * Set the MultipleBirthOrder.
   * @param {MultipleBirthOrder} multipleBirthOrder - The shr.entity.MultipleBirthOrder
   */
  set multipleBirthOrder(multipleBirthOrder) {
    this._multipleBirthOrder = multipleBirthOrder;
  }

  /**
   * Set the MultipleBirthOrder and return 'this' for chaining.
   * @param {MultipleBirthOrder} multipleBirthOrder - The shr.entity.MultipleBirthOrder
   * @returns {MultipleBirthInformation} this.
   */
  withMultipleBirthOrder(multipleBirthOrder) {
    this.multipleBirthOrder = multipleBirthOrder; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MultipleBirthInformation class.
   * The JSON must be valid against the MultipleBirthInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MultipleBirthInformation} An instance of MultipleBirthInformation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MultipleBirthInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MultipleBirthInformation class to a JSON object.
   * The JSON is expected to be valid against the MultipleBirthInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/MultipleBirthInformation' } };
    if (this.isMultipleBirth != null) {
      inst['IsMultipleBirth'] = typeof this.isMultipleBirth.toJSON === 'function' ? this.isMultipleBirth.toJSON() : this.isMultipleBirth;
    }
    if (this.multipleBirthOrder != null) {
      inst['MultipleBirthOrder'] = typeof this.multipleBirthOrder.toJSON === 'function' ? this.multipleBirthOrder.toJSON() : this.multipleBirthOrder;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MultipleBirthInformation class to a FHIR object.
   * The FHIR is expected to be valid against the MultipleBirthInformation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MultipleBirthInformation class.
   * The FHIR must be valid against the MultipleBirthInformation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MultipleBirthInformation} An instance of MultipleBirthInformation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new MultipleBirthInformation();
    return inst;
  }

}
export default MultipleBirthInformation;
