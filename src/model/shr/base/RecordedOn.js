import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.RecordedOn.
 */
class RecordedOn {

  /**
   * Get the value (aliases instant).
   * @returns {instant} The instant
   */
  get value() {
    return this._instant;
  }

  /**
   * Set the value (aliases instant).
   * This field/value is required.
   * @param {instant} value - The instant
   */
  set value(value) {
    this._instant = value;
  }

  /**
   * Set the value (aliases instant) and return 'this' for chaining.
   * This field/value is required.
   * @param {instant} value - The instant
   * @returns {RecordedOn} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the instant.
   * @returns {instant} The instant
   */
  get instant() {
    return this._instant;
  }

  /**
   * Set the instant.
   * This field/value is required.
   * @param {instant} instant - The instant
   */
  set instant(instant) {
    this._instant = instant;
  }

  /**
   * Set the instant and return 'this' for chaining.
   * This field/value is required.
   * @param {instant} instant - The instant
   * @returns {RecordedOn} this.
   */
  withInstant(instant) {
    this.instant = instant; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RecordedOn class.
   * The JSON must be valid against the RecordedOn JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecordedOn} An instance of RecordedOn populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RecordedOn();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RecordedOn class to a JSON object.
   * The JSON is expected to be valid against the RecordedOn JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/RecordedOn' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the RecordedOn class to a FHIR object.
   * The FHIR is expected to be valid against the RecordedOn FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-RecordedOn-extension';
      inst['valueInstant'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RecordedOn class.
   * The FHIR must be valid against the RecordedOn FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {RecordedOn} An instance of RecordedOn populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new RecordedOn();
    if (asExtension) {
      inst.value = fhir['valueInstant'];
    }
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default RecordedOn;
