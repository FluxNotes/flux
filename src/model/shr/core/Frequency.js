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
   * @param {Numerator} numerator - The shr.core.Numerator
   */
  set numerator(numerator) {
    this._numerator = numerator;
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
   * @param {Denominator} denominator - The shr.core.Denominator
   */
  set denominator(denominator) {
    this._denominator = denominator;
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
}
export default Frequency;
