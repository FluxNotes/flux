import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedDateTime.
 */
class GeneralizedDateTime {

  /**
   * Get the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime.
   * @returns {(dateTime|TimePeriod|QualitativeDateTime)} The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime.
   * This field/value is required.
   * @param {(dateTime|TimePeriod|QualitativeDateTime)} value - The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|TimePeriod|QualitativeDateTime)} value - The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.QualitativeDateTime
   * @returns {GeneralizedDateTime} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedDateTime class.
   * The JSON must be valid against the GeneralizedDateTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedDateTime} An instance of GeneralizedDateTime populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new GeneralizedDateTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GeneralizedDateTime class to a JSON object.
   * The JSON is expected to be valid against the GeneralizedDateTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/GeneralizedDateTime' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the GeneralizedDateTime class to a FHIR object.
   * The FHIR is expected to be valid against the GeneralizedDateTime FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.dateTime.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.timePeriod.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.qualitativeDateTime.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-GeneralizedDateTime-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default GeneralizedDateTime;
