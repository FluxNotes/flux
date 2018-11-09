import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.MultipleBirth.
 */
class MultipleBirth {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * This field/value is required.
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Set the value (aliases boolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} value - The boolean
   * @returns {MultipleBirth} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Set the boolean and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   * @returns {MultipleBirth} this.
   */
  withBoolean(boolean) {
    this.boolean = boolean; return this;
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
   * @returns {MultipleBirth} this.
   */
  withMultipleBirthOrder(multipleBirthOrder) {
    this.multipleBirthOrder = multipleBirthOrder; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MultipleBirth class.
   * The JSON must be valid against the MultipleBirth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MultipleBirth} An instance of MultipleBirth populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MultipleBirth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MultipleBirth class to a JSON object.
   * The JSON is expected to be valid against the MultipleBirth JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/MultipleBirth' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.multipleBirthOrder != null) {
      inst['MultipleBirthOrder'] = typeof this.multipleBirthOrder.toJSON === 'function' ? this.multipleBirthOrder.toJSON() : this.multipleBirthOrder;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MultipleBirth class to a FHIR object.
   * The FHIR is expected to be valid against the MultipleBirth FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MultipleBirth class.
   * The FHIR must be valid against the MultipleBirth FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {MultipleBirth} An instance of MultipleBirth populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MultipleBirth();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default MultipleBirth;
