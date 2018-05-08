import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.AmountOrSize.
 */
class AmountOrSize {

  /**
   * Get the value (aliases simpleQuantity).
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get value() {
    return this._simpleQuantity;
  }

  /**
   * Set the value (aliases simpleQuantity).
   * This field/value is required.
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   */
  set value(value) {
    this._simpleQuantity = value;
  }

  /**
   * Set the value (aliases simpleQuantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   * @returns {AmountOrSize} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the SimpleQuantity.
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get simpleQuantity() {
    return this._simpleQuantity;
  }

  /**
   * Set the SimpleQuantity.
   * This field/value is required.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   */
  set simpleQuantity(simpleQuantity) {
    this._simpleQuantity = simpleQuantity;
  }

  /**
   * Set the SimpleQuantity and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   * @returns {AmountOrSize} this.
   */
  withSimpleQuantity(simpleQuantity) {
    this.simpleQuantity = simpleQuantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AmountOrSize class.
   * The JSON must be valid against the AmountOrSize JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AmountOrSize} An instance of AmountOrSize populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AmountOrSize();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AmountOrSize class to a JSON object.
   * The JSON is expected to be valid against the AmountOrSize JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/AmountOrSize' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default AmountOrSize;
