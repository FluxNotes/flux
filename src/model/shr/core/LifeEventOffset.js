import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.LifeEventOffset.
 */
class LifeEventOffset {

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
   * @returns {LifeEventOffset} this.
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
   * @returns {LifeEventOffset} this.
   */
  withUnsignedInt(unsignedInt) {
    this.unsignedInt = unsignedInt; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LifeEventOffset class.
   * The JSON must be valid against the LifeEventOffset JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LifeEventOffset} An instance of LifeEventOffset populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LifeEventOffset();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the LifeEventOffset class to a JSON object.
   * The JSON is expected to be valid against the LifeEventOffset JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/LifeEventOffset' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the LifeEventOffset class to a FHIR object.
   * The FHIR is expected to be valid against the LifeEventOffset FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the LifeEventOffset class.
   * The FHIR must be valid against the LifeEventOffset FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {LifeEventOffset} An instance of LifeEventOffset populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new LifeEventOffset();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default LifeEventOffset;
