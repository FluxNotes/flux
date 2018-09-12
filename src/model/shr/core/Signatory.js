import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Signatory.
 */
class Signatory {

  /**
   * Get the choice value; one of: uri, shr.entity.Party reference.
   * @returns {(uri|Reference)} The choice value; one of: uri, shr.entity.Party reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: uri, shr.entity.Party reference.
   * This field/value is required.
   * @param {(uri|Reference)} value - The choice value; one of: uri, shr.entity.Party reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: uri, shr.entity.Party reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(uri|Reference)} value - The choice value; one of: uri, shr.entity.Party reference
   * @returns {Signatory} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Signatory class.
   * The JSON must be valid against the Signatory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Signatory} An instance of Signatory populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Signatory();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Signatory class to a JSON object.
   * The JSON is expected to be valid against the Signatory JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Signatory' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Signatory class to a FHIR object.
   * The FHIR is expected to be valid against the Signatory FHIR profile, but no validation checks are performed.
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
export default Signatory;
