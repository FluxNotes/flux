import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.RelatedPlan.
 */
class RelatedPlan {

  /**
   * Get the value (aliases action).
   * @returns {Reference} The shr.action.Action reference
   */
  get value() {
    return this._action;
  }

  /**
   * Set the value (aliases action).
   * This field/value is required.
   * @param {Reference} value - The shr.action.Action reference
   */
  set value(value) {
    this._action = value;
  }

  /**
   * Set the value (aliases action) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.action.Action reference
   * @returns {RelatedPlan} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.action.Action reference.
   * @returns {Reference} The shr.action.Action reference
   */
  get action() {
    return this._action;
  }

  /**
   * Set the shr.action.Action reference.
   * This field/value is required.
   * @param {Reference} action - The shr.action.Action reference
   */
  set action(action) {
    this._action = action;
  }

  /**
   * Set the shr.action.Action reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} action - The shr.action.Action reference
   * @returns {RelatedPlan} this.
   */
  withAction(action) {
    this.action = action; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedPlan class.
   * The JSON must be valid against the RelatedPlan JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedPlan} An instance of RelatedPlan populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedPlan();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RelatedPlan class to a JSON object.
   * The JSON is expected to be valid against the RelatedPlan JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/RelatedPlan' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default RelatedPlan;
