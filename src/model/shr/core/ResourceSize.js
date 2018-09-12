import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.ResourceSize.
 */
class ResourceSize {

  /**
   * Get the value (aliases unsignedInt).
   * @returns {unsignedInt} The unsignedInt
   */
  get value() {
    return this._unsignedInt;
  }

  /**
   * Set the value (aliases unsignedInt).
   * This field/value is required.
   * @param {unsignedInt} value - The unsignedInt
   */
  set value(value) {
    this._unsignedInt = value;
  }

  /**
   * Set the value (aliases unsignedInt) and return 'this' for chaining.
   * This field/value is required.
   * @param {unsignedInt} value - The unsignedInt
   * @returns {ResourceSize} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the unsignedInt.
   * @returns {unsignedInt} The unsignedInt
   */
  get unsignedInt() {
    return this._unsignedInt;
  }

  /**
   * Set the unsignedInt.
   * This field/value is required.
   * @param {unsignedInt} unsignedInt - The unsignedInt
   */
  set unsignedInt(unsignedInt) {
    this._unsignedInt = unsignedInt;
  }

  /**
   * Set the unsignedInt and return 'this' for chaining.
   * This field/value is required.
   * @param {unsignedInt} unsignedInt - The unsignedInt
   * @returns {ResourceSize} this.
   */
  withUnsignedInt(unsignedInt) {
    this.unsignedInt = unsignedInt; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ResourceSize class.
   * The JSON must be valid against the ResourceSize JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResourceSize} An instance of ResourceSize populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ResourceSize();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ResourceSize class to a JSON object.
   * The JSON is expected to be valid against the ResourceSize JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/ResourceSize' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ResourceSize class to a FHIR object.
   * The FHIR is expected to be valid against the ResourceSize FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
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
}
export default ResourceSize;
