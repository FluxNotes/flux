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
   * @param {Reference} value - The shr.finding.Finding reference
   */
  set value(value) {
    this._finding = value;
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
   * @param {Reference} finding - The shr.finding.Finding reference
   */
  set finding(finding) {
    this._finding = finding;
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
}
export default RelatedFinding;
