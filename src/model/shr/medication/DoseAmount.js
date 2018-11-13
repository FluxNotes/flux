import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.medication.DoseAmount.
 */
class DoseAmount {

  /**
   * Get the choice value; one of: shr.core.SimpleQuantity, shr.core.Range.
   * @returns {(SimpleQuantity|Range)} The choice value; one of: shr.core.SimpleQuantity, shr.core.Range
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.SimpleQuantity, shr.core.Range.
   * This field/value is required.
   * @param {(SimpleQuantity|Range)} value - The choice value; one of: shr.core.SimpleQuantity, shr.core.Range
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.SimpleQuantity, shr.core.Range and return 'this' for chaining.
   * This field/value is required.
   * @param {(SimpleQuantity|Range)} value - The choice value; one of: shr.core.SimpleQuantity, shr.core.Range
   * @returns {DoseAmount} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DoseAmount class.
   * The JSON must be valid against the DoseAmount JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DoseAmount} An instance of DoseAmount populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DoseAmount();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DoseAmount class to a JSON object.
   * The JSON is expected to be valid against the DoseAmount JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/DoseAmount' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the DoseAmount class to a FHIR object.
   * The FHIR is expected to be valid against the DoseAmount FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
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
   * Deserializes FHIR JSON data to an instance of the DoseAmount class.
   * The FHIR must be valid against the DoseAmount FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DoseAmount} An instance of DoseAmount populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new DoseAmount();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default DoseAmount;
