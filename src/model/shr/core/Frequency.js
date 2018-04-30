import { setPropertiesFromJSON } from '../../json-helper';

import Ratio from './Ratio';

/**
 * Generated class for shr.core.Frequency.
 * @extends Ratio
 */
class Frequency extends Ratio {

  /**
   * Get the Numerator.
   * @returns {Numerator} The shr.core.Numerator
   */
  get numerator() {
    return this._numerator;
  }

  /**
   * Set the Numerator.
   * This field/value is required.
   * @param {Numerator} numerator - The shr.core.Numerator
   */
  set numerator(numerator) {
    this._numerator = numerator;
  }

  /**
   * Set the Numerator and return 'this' for chaining.
   * This field/value is required.
   * @param {Numerator} numerator - The shr.core.Numerator
   * @returns {Frequency} this.
   */
  withNumerator(numerator) {
    this.numerator = numerator; return this;
  }

  /**
   * Get the Denominator.
   * @returns {Denominator} The shr.core.Denominator
   */
  get denominator() {
    return this._denominator;
  }

  /**
   * Set the Denominator.
   * This field/value is required.
   * @param {Denominator} denominator - The shr.core.Denominator
   */
  set denominator(denominator) {
    this._denominator = denominator;
  }

  /**
   * Set the Denominator and return 'this' for chaining.
   * This field/value is required.
   * @param {Denominator} denominator - The shr.core.Denominator
   * @returns {Frequency} this.
   */
  withDenominator(denominator) {
    this.denominator = denominator; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Frequency class.
   * The JSON must be valid against the Frequency JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Frequency} An instance of Frequency populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Frequency();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Frequency class to a JSON object.
   * The JSON is expected to be valid against the Frequency JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Frequency' } };
    if (this.numerator != null) {
      inst['Numerator'] = typeof this.numerator.toJSON === 'function' ? this.numerator.toJSON() : this.numerator;
    }
    if (this.denominator != null) {
      inst['Denominator'] = typeof this.denominator.toJSON === 'function' ? this.denominator.toJSON() : this.denominator;
    }
    return inst;
  }
}
export default Frequency;
