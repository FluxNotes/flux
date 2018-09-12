import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MothersMaidenName.
 */
class MothersMaidenName {

  /**
   * Get the value (aliases humanName).
   * @returns {HumanName} The shr.core.HumanName
   */
  get value() {
    return this._humanName;
  }

  /**
   * Set the value (aliases humanName).
   * This field/value is required.
   * @param {HumanName} value - The shr.core.HumanName
   */
  set value(value) {
    this._humanName = value;
  }

  /**
   * Set the value (aliases humanName) and return 'this' for chaining.
   * This field/value is required.
   * @param {HumanName} value - The shr.core.HumanName
   * @returns {MothersMaidenName} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the HumanName.
   * @returns {HumanName} The shr.core.HumanName
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Set the HumanName.
   * This field/value is required.
   * @param {HumanName} humanName - The shr.core.HumanName
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Set the HumanName and return 'this' for chaining.
   * This field/value is required.
   * @param {HumanName} humanName - The shr.core.HumanName
   * @returns {MothersMaidenName} this.
   */
  withHumanName(humanName) {
    this.humanName = humanName; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MothersMaidenName class.
   * The JSON must be valid against the MothersMaidenName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MothersMaidenName} An instance of MothersMaidenName populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MothersMaidenName();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MothersMaidenName class to a JSON object.
   * The JSON is expected to be valid against the MothersMaidenName JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/MothersMaidenName' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MothersMaidenName class to a FHIR object.
   * The FHIR is expected to be valid against the MothersMaidenName FHIR profile, but no validation checks are performed.
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
export default MothersMaidenName;
