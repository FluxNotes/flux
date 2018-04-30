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
   * This field/value is required.
   * @param {Range} value - The shr.core.Range
   */
  set value(value) {
    this._range = value;
  }

  /**
   * Set the value (aliases range) and return 'this' for chaining.
   * This field/value is required.
   * @param {Range} value - The shr.core.Range
   * @returns {ReferenceRange} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Set the Range and return 'this' for chaining.
   * This field/value is required.
   * @param {Range} range - The shr.core.Range
   * @returns {ReferenceRange} this.
   */
  withRange(range) {
    this.range = range; return this;
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
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.entity.Type
   * @returns {ReferenceRange} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Set the ApplicableSubpopulation and return 'this' for chaining.
   * @param {ApplicableSubpopulation} applicableSubpopulation - The shr.finding.ApplicableSubpopulation
   * @returns {ReferenceRange} this.
   */
  withApplicableSubpopulation(applicableSubpopulation) {
    this.applicableSubpopulation = applicableSubpopulation; return this;
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
   * Set the ApplicableAgeRange and return 'this' for chaining.
   * @param {ApplicableAgeRange} applicableAgeRange - The shr.finding.ApplicableAgeRange
   * @returns {ReferenceRange} this.
   */
  withApplicableAgeRange(applicableAgeRange) {
    this.applicableAgeRange = applicableAgeRange; return this;
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
  /**
   * Serializes an instance of the ReferenceRange class to a JSON object.
   * The JSON is expected to be valid against the ReferenceRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/ReferenceRange' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.applicableSubpopulation != null) {
      inst['ApplicableSubpopulation'] = typeof this.applicableSubpopulation.toJSON === 'function' ? this.applicableSubpopulation.toJSON() : this.applicableSubpopulation;
    }
    if (this.applicableAgeRange != null) {
      inst['ApplicableAgeRange'] = typeof this.applicableAgeRange.toJSON === 'function' ? this.applicableAgeRange.toJSON() : this.applicableAgeRange;
    }
    return inst;
  }
}
export default ReferenceRange;
