import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Abatement.
 */
class Abatement {

  /**
   * Get the choice value; one of: dateTime, shr.core.Age, boolean, shr.core.TimePeriod, shr.core.Range, string.
   * @returns {(dateTime|Age|boolean|TimePeriod|Range|string)} The choice value; one of: dateTime, shr.core.Age, boolean, shr.core.TimePeriod, shr.core.Range, string
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.Age, boolean, shr.core.TimePeriod, shr.core.Range, string.
   * This field/value is required.
   * @param {(dateTime|Age|boolean|TimePeriod|Range|string)} value - The choice value; one of: dateTime, shr.core.Age, boolean, shr.core.TimePeriod, shr.core.Range, string
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.Age, boolean, shr.core.TimePeriod, shr.core.Range, string and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|Age|boolean|TimePeriod|Range|string)} value - The choice value; one of: dateTime, shr.core.Age, boolean, shr.core.TimePeriod, shr.core.Range, string
   * @returns {Abatement} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Abatement class.
   * The JSON must be valid against the Abatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Abatement} An instance of Abatement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Abatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Abatement class to a JSON object.
   * The JSON is expected to be valid against the Abatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/base/Abatement' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Abatement class to a FHIR object.
   * The FHIR is expected to be valid against the Abatement FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the Abatement class.
   * The FHIR must be valid against the Abatement FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Abatement} An instance of Abatement populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Abatement();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default Abatement;
