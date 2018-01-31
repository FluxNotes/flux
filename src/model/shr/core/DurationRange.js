import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.DurationRange.
 */
class DurationRange {

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
   * Deserializes JSON data to an instance of the DurationRange class.
   * The JSON must be valid against the DurationRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DurationRange} An instance of DurationRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DurationRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DurationRange;
