import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.DriversLicenseNumber.
 */
class DriversLicenseNumber {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {DriversLicenseNumber} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {DriversLicenseNumber} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Get the StateOfIssue.
   * @returns {StateOfIssue} The shr.entity.StateOfIssue
   */
  get stateOfIssue() {
    return this._stateOfIssue;
  }

  /**
   * Set the StateOfIssue.
   * @param {StateOfIssue} stateOfIssue - The shr.entity.StateOfIssue
   */
  set stateOfIssue(stateOfIssue) {
    this._stateOfIssue = stateOfIssue;
  }

  /**
   * Set the StateOfIssue and return 'this' for chaining.
   * @param {StateOfIssue} stateOfIssue - The shr.entity.StateOfIssue
   * @returns {DriversLicenseNumber} this.
   */
  withStateOfIssue(stateOfIssue) {
    this.stateOfIssue = stateOfIssue; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {DriversLicenseNumber} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DriversLicenseNumber class.
   * The JSON must be valid against the DriversLicenseNumber JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DriversLicenseNumber} An instance of DriversLicenseNumber populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new DriversLicenseNumber();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DriversLicenseNumber class to a JSON object.
   * The JSON is expected to be valid against the DriversLicenseNumber JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/DriversLicenseNumber' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.stateOfIssue != null) {
      inst['StateOfIssue'] = typeof this.stateOfIssue.toJSON === 'function' ? this.stateOfIssue.toJSON() : this.stateOfIssue;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the DriversLicenseNumber class to a FHIR object.
   * The FHIR is expected to be valid against the DriversLicenseNumber FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.string.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.stateOfIssue.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.effectiveTimePeriod.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-DriversLicenseNumber-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default DriversLicenseNumber;
