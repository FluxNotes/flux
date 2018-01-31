import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Range.
 */
class Range {

  /**
   * Get the LowerBound.
   * @returns {LowerBound} The shr.core.LowerBound
   */
  get lowerBound() {
    return this._lowerBound;
  }

  /**
   * Set the LowerBound.
   * @param {LowerBound} lowerBound - The shr.core.LowerBound
   */
  set lowerBound(lowerBound) {
    this._lowerBound = lowerBound;
  }

  /**
   * Get the UpperBound.
   * @returns {UpperBound} The shr.core.UpperBound
   */
  get upperBound() {
    return this._upperBound;
  }

  /**
   * Set the UpperBound.
   * @param {UpperBound} upperBound - The shr.core.UpperBound
   */
  set upperBound(upperBound) {
    this._upperBound = upperBound;
  }

  /**
   * Deserializes JSON data to an instance of the Range class.
   * The JSON must be valid against the Range JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Range} An instance of Range populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Range();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Range;
