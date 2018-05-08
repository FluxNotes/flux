import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.RelatedFinding.
 */
class RelatedFinding {

  /**
   * Get the value (aliases finding).
   * @returns {Reference} The shr.finding.Finding reference
   */
  get value() {
    return this._finding;
  }

  /**
   * Set the value (aliases finding).
   * This field/value is required.
   * @param {Reference} value - The shr.finding.Finding reference
   */
  set value(value) {
    this._finding = value;
  }

  /**
   * Set the value (aliases finding) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.finding.Finding reference
   * @returns {RelatedFinding} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.finding.Finding reference.
   * @returns {Reference} The shr.finding.Finding reference
   */
  get finding() {
    return this._finding;
  }

  /**
   * Set the shr.finding.Finding reference.
   * This field/value is required.
   * @param {Reference} finding - The shr.finding.Finding reference
   */
  set finding(finding) {
    this._finding = finding;
  }

  /**
   * Set the shr.finding.Finding reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} finding - The shr.finding.Finding reference
   * @returns {RelatedFinding} this.
   */
  withFinding(finding) {
    this.finding = finding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedFinding class.
   * The JSON must be valid against the RelatedFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedFinding} An instance of RelatedFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RelatedFinding class to a JSON object.
   * The JSON is expected to be valid against the RelatedFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/RelatedFinding' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default RelatedFinding;
