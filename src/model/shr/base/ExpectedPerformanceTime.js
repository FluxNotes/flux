import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.ExpectedPerformanceTime.
 */
class ExpectedPerformanceTime {

  /**
   * Get the choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing.
   * @returns {(dateTime|date|TimePeriod|Timing)} The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing.
   * This field/value is required.
   * @param {(dateTime|date|TimePeriod|Timing)} value - The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|date|TimePeriod|Timing)} value - The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   * @returns {ExpectedPerformanceTime} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectedPerformanceTime class.
   * The JSON must be valid against the ExpectedPerformanceTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectedPerformanceTime} An instance of ExpectedPerformanceTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectedPerformanceTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ExpectedPerformanceTime class to a JSON object.
   * The JSON is expected to be valid against the ExpectedPerformanceTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ExpectedPerformanceTime' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ExpectedPerformanceTime class to a FHIR object.
   * The FHIR is expected to be valid against the ExpectedPerformanceTime FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformanceTime-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ExpectedPerformanceTime class.
   * The FHIR must be valid against the ExpectedPerformanceTime FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ExpectedPerformanceTime} An instance of ExpectedPerformanceTime populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ExpectedPerformanceTime();
    if (asExtension) {
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default ExpectedPerformanceTime;
