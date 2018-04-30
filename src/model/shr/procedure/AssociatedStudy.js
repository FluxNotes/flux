import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.AssociatedStudy.
 */
class AssociatedStudy {

  /**
   * Get the value (aliases study).
   * @returns {Reference} The shr.research.Study reference
   */
  get value() {
    return this._study;
  }

  /**
   * Set the value (aliases study).
   * This field/value is required.
   * @param {Reference} value - The shr.research.Study reference
   */
  set value(value) {
    this._study = value;
  }

  /**
   * Set the value (aliases study) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.research.Study reference
   * @returns {AssociatedStudy} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.research.Study reference.
   * @returns {Reference} The shr.research.Study reference
   */
  get study() {
    return this._study;
  }

  /**
   * Set the shr.research.Study reference.
   * This field/value is required.
   * @param {Reference} study - The shr.research.Study reference
   */
  set study(study) {
    this._study = study;
  }

  /**
   * Set the shr.research.Study reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} study - The shr.research.Study reference
   * @returns {AssociatedStudy} this.
   */
  withStudy(study) {
    this.study = study; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AssociatedStudy class.
   * The JSON must be valid against the AssociatedStudy JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AssociatedStudy} An instance of AssociatedStudy populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AssociatedStudy();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AssociatedStudy class to a JSON object.
   * The JSON is expected to be valid against the AssociatedStudy JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/AssociatedStudy' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default AssociatedStudy;
