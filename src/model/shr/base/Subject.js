import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.Subject.
 */
class Subject {

  /**
   * Get the choice value; one of: shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.core.Location reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference.
   * @returns {Reference} The choice value; one of: shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.core.Location reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.core.Location reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.core.Location reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.core.Location reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.core.Location reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference
   * @returns {Subject} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Subject class.
   * The JSON must be valid against the Subject JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Subject} An instance of Subject populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Subject();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Subject class to a JSON object.
   * The JSON is expected to be valid against the Subject JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Subject' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Subject;
