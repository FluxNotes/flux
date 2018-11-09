import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

/**
 * Generated class for mcode.RegimenStopDate.
 */
class RegimenStopDate {

  /**
   * Get the value (aliases date).
   * @returns {date} The date
   */
  get value() {
    return this._date;
  }

  /**
   * Set the value (aliases date).
   * This field/value is required.
   * @param {date} value - The date
   */
  set value(value) {
    this._date = value;
  }

  /**
   * Set the value (aliases date) and return 'this' for chaining.
   * This field/value is required.
   * @param {date} value - The date
   * @returns {RegimenStopDate} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the date.
   * @returns {date} The date
   */
  get date() {
    return this._date;
  }

  /**
   * Set the date.
   * This field/value is required.
   * @param {date} date - The date
   */
  set date(date) {
    this._date = date;
  }

  /**
   * Set the date and return 'this' for chaining.
   * This field/value is required.
   * @param {date} date - The date
   * @returns {RegimenStopDate} this.
   */
  withDate(date) {
    this.date = date; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RegimenStopDate class.
   * The JSON must be valid against the RegimenStopDate JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RegimenStopDate} An instance of RegimenStopDate populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RegimenStopDate();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RegimenStopDate class to a JSON object.
   * The JSON is expected to be valid against the RegimenStopDate JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/mcode/RegimenStopDate' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the RegimenStopDate class to a FHIR object.
   * The FHIR is expected to be valid against the RegimenStopDate FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/mcode-RegimenStopDate-extension';
      inst['valueDate'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RegimenStopDate class.
   * The FHIR must be valid against the RegimenStopDate FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {RegimenStopDate} An instance of RegimenStopDate populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new RegimenStopDate();
    if (asExtension) {
      inst.value = fhir['valueDate'];
    }
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default RegimenStopDate;
