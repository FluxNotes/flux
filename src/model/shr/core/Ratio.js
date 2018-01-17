import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Ratio.
 */
class Ratio {

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
   * Deserializes JSON data to an instance of the Ratio class.
   * The JSON must be valid against the Ratio JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ratio} An instance of Ratio populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Ratio();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Ratio;
