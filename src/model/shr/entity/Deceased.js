import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Deceased.
 */
class Deceased {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * This field/value is required.
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Set the value (aliases boolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} value - The boolean
   * @returns {Deceased} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Set the boolean and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   * @returns {Deceased} this.
   */
  withBoolean(boolean) {
    this.boolean = boolean; return this;
  }

  /**
   * Get the DateOfDeath.
   * @returns {DateOfDeath} The shr.entity.DateOfDeath
   */
  get dateOfDeath() {
    return this._dateOfDeath;
  }

  /**
   * Set the DateOfDeath.
   * @param {DateOfDeath} dateOfDeath - The shr.entity.DateOfDeath
   */
  set dateOfDeath(dateOfDeath) {
    this._dateOfDeath = dateOfDeath;
  }

  /**
   * Set the DateOfDeath and return 'this' for chaining.
   * @param {DateOfDeath} dateOfDeath - The shr.entity.DateOfDeath
   * @returns {Deceased} this.
   */
  withDateOfDeath(dateOfDeath) {
    this.dateOfDeath = dateOfDeath; return this;
  }

  /**
   * Get the AgeAtDeath.
   * @returns {AgeAtDeath} The shr.entity.AgeAtDeath
   */
  get ageAtDeath() {
    return this._ageAtDeath;
  }

  /**
   * Set the AgeAtDeath.
   * @param {AgeAtDeath} ageAtDeath - The shr.entity.AgeAtDeath
   */
  set ageAtDeath(ageAtDeath) {
    this._ageAtDeath = ageAtDeath;
  }

  /**
   * Set the AgeAtDeath and return 'this' for chaining.
   * @param {AgeAtDeath} ageAtDeath - The shr.entity.AgeAtDeath
   * @returns {Deceased} this.
   */
  withAgeAtDeath(ageAtDeath) {
    this.ageAtDeath = ageAtDeath; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Deceased class.
   * The JSON must be valid against the Deceased JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Deceased} An instance of Deceased populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Deceased();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Deceased class to a JSON object.
   * The JSON is expected to be valid against the Deceased JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Deceased' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.dateOfDeath != null) {
      inst['DateOfDeath'] = typeof this.dateOfDeath.toJSON === 'function' ? this.dateOfDeath.toJSON() : this.dateOfDeath;
    }
    if (this.ageAtDeath != null) {
      inst['AgeAtDeath'] = typeof this.ageAtDeath.toJSON === 'function' ? this.ageAtDeath.toJSON() : this.ageAtDeath;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Deceased class to a FHIR object.
   * The FHIR is expected to be valid against the Deceased FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
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
}
export default Deceased;
