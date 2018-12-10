import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.medication.DosageBodySite.
 */
class DosageBodySite {

  /**
   * Get the value (aliases anatomicalLocation).
   * @returns {AnatomicalLocation} The shr.core.AnatomicalLocation
   */
  get value() {
    return this._anatomicalLocation;
  }

  /**
   * Set the value (aliases anatomicalLocation).
   * This field/value is required.
   * @param {AnatomicalLocation} value - The shr.core.AnatomicalLocation
   */
  set value(value) {
    this._anatomicalLocation = value;
  }

  /**
   * Set the value (aliases anatomicalLocation) and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocation} value - The shr.core.AnatomicalLocation
   * @returns {DosageBodySite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The shr.core.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * This field/value is required.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   * @returns {DosageBodySite} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DosageBodySite class.
   * The JSON must be valid against the DosageBodySite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DosageBodySite} An instance of DosageBodySite populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new DosageBodySite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DosageBodySite class to a JSON object.
   * The JSON is expected to be valid against the DosageBodySite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/DosageBodySite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the DosageBodySite class to a FHIR object.
   * The FHIR is expected to be valid against the DosageBodySite FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the DosageBodySite class.
   * The FHIR must be valid against the DosageBodySite FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DosageBodySite} An instance of DosageBodySite populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new DosageBodySite();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.AnatomicalLocation', fhir);
    }
    return inst;
  }

}
export default DosageBodySite;
