import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.condition.Onset.
 */
class Onset {

  /**
   * Get the value (aliases generalizedTemporalContext).
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get value() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the value (aliases generalizedTemporalContext).
   * This field/value is required.
   * @param {GeneralizedTemporalContext} value - The shr.core.GeneralizedTemporalContext
   */
  set value(value) {
    this._generalizedTemporalContext = value;
  }

  /**
   * Set the value (aliases generalizedTemporalContext) and return 'this' for chaining.
   * This field/value is required.
   * @param {GeneralizedTemporalContext} value - The shr.core.GeneralizedTemporalContext
   * @returns {Onset} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the GeneralizedTemporalContext.
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get generalizedTemporalContext() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the GeneralizedTemporalContext.
   * This field/value is required.
   * @param {GeneralizedTemporalContext} generalizedTemporalContext - The shr.core.GeneralizedTemporalContext
   */
  set generalizedTemporalContext(generalizedTemporalContext) {
    this._generalizedTemporalContext = generalizedTemporalContext;
  }

  /**
   * Set the GeneralizedTemporalContext and return 'this' for chaining.
   * This field/value is required.
   * @param {GeneralizedTemporalContext} generalizedTemporalContext - The shr.core.GeneralizedTemporalContext
   * @returns {Onset} this.
   */
  withGeneralizedTemporalContext(generalizedTemporalContext) {
    this.generalizedTemporalContext = generalizedTemporalContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Onset class.
   * The JSON must be valid against the Onset JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Onset} An instance of Onset populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Onset();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Onset class to a JSON object.
   * The JSON is expected to be valid against the Onset JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/condition/Onset' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Onset;
