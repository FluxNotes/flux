import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.ReceivedTime.
 */
class ReceivedTime {

  /**
   * Get the value (aliases dateTime).
   * @returns {dateTime} The dateTime
   */
  get value() {
    return this._dateTime;
  }

  /**
   * Set the value (aliases dateTime).
   * This field/value is required.
   * @param {dateTime} value - The dateTime
   */
  set value(value) {
    this._dateTime = value;
  }

  /**
   * Set the value (aliases dateTime) and return 'this' for chaining.
   * This field/value is required.
   * @param {dateTime} value - The dateTime
   * @returns {ReceivedTime} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the dateTime.
   * @returns {dateTime} The dateTime
   */
  get dateTime() {
    return this._dateTime;
  }

  /**
   * Set the dateTime.
   * This field/value is required.
   * @param {dateTime} dateTime - The dateTime
   */
  set dateTime(dateTime) {
    this._dateTime = dateTime;
  }

  /**
   * Set the dateTime and return 'this' for chaining.
   * This field/value is required.
   * @param {dateTime} dateTime - The dateTime
   * @returns {ReceivedTime} this.
   */
  withDateTime(dateTime) {
    this.dateTime = dateTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ReceivedTime class.
   * The JSON must be valid against the ReceivedTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReceivedTime} An instance of ReceivedTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ReceivedTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ReceivedTime class to a JSON object.
   * The JSON is expected to be valid against the ReceivedTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ReceivedTime' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ReceivedTime class to a FHIR object.
   * The FHIR is expected to be valid against the ReceivedTime FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the ReceivedTime class.
   * The FHIR must be valid against the ReceivedTime FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ReceivedTime} An instance of ReceivedTime populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ReceivedTime();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default ReceivedTime;
