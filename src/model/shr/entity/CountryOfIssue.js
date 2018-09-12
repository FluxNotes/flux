import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.CountryOfIssue.
 */
class CountryOfIssue {

  /**
   * Get the value (aliases country).
   * @returns {Country} The shr.core.Country
   */
  get value() {
    return this._country;
  }

  /**
   * Set the value (aliases country).
   * This field/value is required.
   * @param {Country} value - The shr.core.Country
   */
  set value(value) {
    this._country = value;
  }

  /**
   * Set the value (aliases country) and return 'this' for chaining.
   * This field/value is required.
   * @param {Country} value - The shr.core.Country
   * @returns {CountryOfIssue} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Country.
   * @returns {Country} The shr.core.Country
   */
  get country() {
    return this._country;
  }

  /**
   * Set the Country.
   * This field/value is required.
   * @param {Country} country - The shr.core.Country
   */
  set country(country) {
    this._country = country;
  }

  /**
   * Set the Country and return 'this' for chaining.
   * This field/value is required.
   * @param {Country} country - The shr.core.Country
   * @returns {CountryOfIssue} this.
   */
  withCountry(country) {
    this.country = country; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CountryOfIssue class.
   * The JSON must be valid against the CountryOfIssue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CountryOfIssue} An instance of CountryOfIssue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CountryOfIssue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CountryOfIssue class to a JSON object.
   * The JSON is expected to be valid against the CountryOfIssue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/CountryOfIssue' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the CountryOfIssue class to a FHIR object.
   * The FHIR is expected to be valid against the CountryOfIssue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.country.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-CountryOfIssue-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default CountryOfIssue;
