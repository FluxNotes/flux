import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PassportNumber.
 */
class PassportNumber {

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
   * @returns {PassportNumber} this.
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
   * @returns {PassportNumber} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Get the CountryOfIssue.
   * @returns {CountryOfIssue} The shr.entity.CountryOfIssue
   */
  get countryOfIssue() {
    return this._countryOfIssue;
  }

  /**
   * Set the CountryOfIssue.
   * This field/value is required.
   * @param {CountryOfIssue} countryOfIssue - The shr.entity.CountryOfIssue
   */
  set countryOfIssue(countryOfIssue) {
    this._countryOfIssue = countryOfIssue;
  }

  /**
   * Set the CountryOfIssue and return 'this' for chaining.
   * This field/value is required.
   * @param {CountryOfIssue} countryOfIssue - The shr.entity.CountryOfIssue
   * @returns {PassportNumber} this.
   */
  withCountryOfIssue(countryOfIssue) {
    this.countryOfIssue = countryOfIssue; return this;
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
   * @returns {PassportNumber} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PassportNumber class.
   * The JSON must be valid against the PassportNumber JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PassportNumber} An instance of PassportNumber populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PassportNumber();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PassportNumber class to a JSON object.
   * The JSON is expected to be valid against the PassportNumber JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/PassportNumber' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.countryOfIssue != null) {
      inst['CountryOfIssue'] = typeof this.countryOfIssue.toJSON === 'function' ? this.countryOfIssue.toJSON() : this.countryOfIssue;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PassportNumber class to a FHIR object.
   * The FHIR is expected to be valid against the PassportNumber FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.string.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.countryOfIssue.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.effectiveTimePeriod.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-PassportNumber-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default PassportNumber;
