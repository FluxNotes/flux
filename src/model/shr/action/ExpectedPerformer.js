import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ExpectedPerformer.
 */
class ExpectedPerformer {

  /**
   * Get the choice value; one of: shr.entity.Role reference, shr.entity.Organization reference.
   * @returns {Reference} The choice value; one of: shr.entity.Role reference, shr.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.entity.Role reference, shr.entity.Organization reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Role reference, shr.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.entity.Role reference, shr.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Role reference, shr.entity.Organization reference
   * @returns {ExpectedPerformer} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectedPerformer class.
   * The JSON must be valid against the ExpectedPerformer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectedPerformer} An instance of ExpectedPerformer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectedPerformer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ExpectedPerformer class to a JSON object.
   * The JSON is expected to be valid against the ExpectedPerformer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/ExpectedPerformer' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default ExpectedPerformer;
