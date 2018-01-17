import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.ReferenceRange.
 */
class ReferenceRange {

  /**
   * Get the value (aliases range).
   * @returns {Range} The shr.core.Range
   */
  get value() {
    return this._range;
  }

  /**
   * Set the value (aliases range).
   * @param {Range} value - The shr.core.Range
   */
  set value(value) {
    this._range = value;
  }

  /**
   * Get the Range.
   * @returns {Range} The shr.core.Range
   */
  get range() {
    return this._range;
  }

  /**
   * Set the Range.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the ApplicableSubpopulation.
   * @returns {ApplicableSubpopulation} The shr.finding.ApplicableSubpopulation
   */
  get applicableSubpopulation() {
    return this._applicableSubpopulation;
  }

  /**
   * Set the ApplicableSubpopulation.
   * @param {ApplicableSubpopulation} applicableSubpopulation - The shr.finding.ApplicableSubpopulation
   */
  set applicableSubpopulation(applicableSubpopulation) {
    this._applicableSubpopulation = applicableSubpopulation;
  }

  /**
   * Get the ApplicableAgeRange.
   * @returns {ApplicableAgeRange} The shr.finding.ApplicableAgeRange
   */
  get applicableAgeRange() {
    return this._applicableAgeRange;
  }

  /**
   * Set the ApplicableAgeRange.
   * @param {ApplicableAgeRange} applicableAgeRange - The shr.finding.ApplicableAgeRange
   */
  set applicableAgeRange(applicableAgeRange) {
    this._applicableAgeRange = applicableAgeRange;
  }

  /**
   * Deserializes JSON data to an instance of the ReferenceRange class.
   * The JSON must be valid against the ReferenceRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReferenceRange} An instance of ReferenceRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ReferenceRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ReferenceRange;
