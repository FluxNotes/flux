import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Onset.
 */
class Onset {

  /**
   * Get the choice value; one of: dateTime, shr.core.Age, shr.core.TimePeriod, shr.core.Range, string.
   * @returns {(dateTime|Age|TimePeriod|Range|string)} The choice value; one of: dateTime, shr.core.Age, shr.core.TimePeriod, shr.core.Range, string
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.Age, shr.core.TimePeriod, shr.core.Range, string.
   * This field/value is required.
   * @param {(dateTime|Age|TimePeriod|Range|string)} value - The choice value; one of: dateTime, shr.core.Age, shr.core.TimePeriod, shr.core.Range, string
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.Age, shr.core.TimePeriod, shr.core.Range, string and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|Age|TimePeriod|Range|string)} value - The choice value; one of: dateTime, shr.core.Age, shr.core.TimePeriod, shr.core.Range, string
   * @returns {Onset} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Onset class.
   * The JSON must be valid against the Onset JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Onset} An instance of Onset populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Onset();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Onset class to a JSON object.
   * The JSON is expected to be valid against the Onset JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Onset' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Onset class to a FHIR object.
   * The FHIR is expected to be valid against the Onset FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-Onset-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Onset class.
   * The FHIR must be valid against the Onset FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Onset} An instance of Onset populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Onset();
    if (asExtension) {
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default Onset;
