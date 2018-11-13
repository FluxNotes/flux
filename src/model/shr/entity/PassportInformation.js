import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PassportInformation.
 */
class PassportInformation {

  /**
   * Get the PassportNumber.
   * @returns {PassportNumber} The shr.entity.PassportNumber
   */
  get passportNumber() {
    return this._passportNumber;
  }

  /**
   * Set the PassportNumber.
   * This field/value is required.
   * @param {PassportNumber} passportNumber - The shr.entity.PassportNumber
   */
  set passportNumber(passportNumber) {
    this._passportNumber = passportNumber;
  }

  /**
   * Set the PassportNumber and return 'this' for chaining.
   * This field/value is required.
   * @param {PassportNumber} passportNumber - The shr.entity.PassportNumber
   * @returns {PassportInformation} this.
   */
  withPassportNumber(passportNumber) {
    this.passportNumber = passportNumber; return this;
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
   * @returns {PassportInformation} this.
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
   * @returns {PassportInformation} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PassportInformation class.
   * The JSON must be valid against the PassportInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PassportInformation} An instance of PassportInformation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PassportInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PassportInformation class to a JSON object.
   * The JSON is expected to be valid against the PassportInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/PassportInformation' } };
    if (this.passportNumber != null) {
      inst['PassportNumber'] = typeof this.passportNumber.toJSON === 'function' ? this.passportNumber.toJSON() : this.passportNumber;
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
   * Serializes an instance of the PassportInformation class to a FHIR object.
   * The FHIR is expected to be valid against the PassportInformation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PassportInformation class.
   * The FHIR must be valid against the PassportInformation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {PassportInformation} An instance of PassportInformation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new PassportInformation();
    return inst;
  }

}
export default PassportInformation;
