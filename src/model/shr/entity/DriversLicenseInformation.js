import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.DriversLicenseInformation.
 */
class DriversLicenseInformation {

  /**
   * Get the DriversLicenseNumber.
   * @returns {DriversLicenseNumber} The shr.entity.DriversLicenseNumber
   */
  get driversLicenseNumber() {
    return this._driversLicenseNumber;
  }

  /**
   * Set the DriversLicenseNumber.
   * @param {DriversLicenseNumber} driversLicenseNumber - The shr.entity.DriversLicenseNumber
   */
  set driversLicenseNumber(driversLicenseNumber) {
    this._driversLicenseNumber = driversLicenseNumber;
  }

  /**
   * Set the DriversLicenseNumber and return 'this' for chaining.
   * @param {DriversLicenseNumber} driversLicenseNumber - The shr.entity.DriversLicenseNumber
   * @returns {DriversLicenseInformation} this.
   */
  withDriversLicenseNumber(driversLicenseNumber) {
    this.driversLicenseNumber = driversLicenseNumber; return this;
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
   * @returns {DriversLicenseInformation} this.
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
   * @returns {DriversLicenseInformation} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DriversLicenseInformation class.
   * The JSON must be valid against the DriversLicenseInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DriversLicenseInformation} An instance of DriversLicenseInformation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DriversLicenseInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DriversLicenseInformation class to a JSON object.
   * The JSON is expected to be valid against the DriversLicenseInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/DriversLicenseInformation' } };
    if (this.driversLicenseNumber != null) {
      inst['DriversLicenseNumber'] = typeof this.driversLicenseNumber.toJSON === 'function' ? this.driversLicenseNumber.toJSON() : this.driversLicenseNumber;
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
   * Serializes an instance of the DriversLicenseInformation class to a FHIR object.
   * The FHIR is expected to be valid against the DriversLicenseInformation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DriversLicenseInformation class.
   * The FHIR must be valid against the DriversLicenseInformation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DriversLicenseInformation} An instance of DriversLicenseInformation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new DriversLicenseInformation();
    return inst;
  }

}
export default DriversLicenseInformation;
