import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.SampledData.
 */
class SampledData {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Get the Origin.
   * @returns {Origin} The shr.core.Origin
   */
  get origin() {
    return this._origin;
  }

  /**
   * Set the Origin.
   * @param {Origin} origin - The shr.core.Origin
   */
  set origin(origin) {
    this._origin = origin;
  }

  /**
   * Get the MillisecondsBetweenSamples.
   * @returns {MillisecondsBetweenSamples} The shr.core.MillisecondsBetweenSamples
   */
  get millisecondsBetweenSamples() {
    return this._millisecondsBetweenSamples;
  }

  /**
   * Set the MillisecondsBetweenSamples.
   * @param {MillisecondsBetweenSamples} millisecondsBetweenSamples - The shr.core.MillisecondsBetweenSamples
   */
  set millisecondsBetweenSamples(millisecondsBetweenSamples) {
    this._millisecondsBetweenSamples = millisecondsBetweenSamples;
  }

  /**
   * Get the CorrectionFactor.
   * @returns {CorrectionFactor} The shr.core.CorrectionFactor
   */
  get correctionFactor() {
    return this._correctionFactor;
  }

  /**
   * Set the CorrectionFactor.
   * @param {CorrectionFactor} correctionFactor - The shr.core.CorrectionFactor
   */
  set correctionFactor(correctionFactor) {
    this._correctionFactor = correctionFactor;
  }

  /**
   * Get the LowerLimit.
   * @returns {LowerLimit} The shr.core.LowerLimit
   */
  get lowerLimit() {
    return this._lowerLimit;
  }

  /**
   * Set the LowerLimit.
   * @param {LowerLimit} lowerLimit - The shr.core.LowerLimit
   */
  set lowerLimit(lowerLimit) {
    this._lowerLimit = lowerLimit;
  }

  /**
   * Get the UpperLimit.
   * @returns {UpperLimit} The shr.core.UpperLimit
   */
  get upperLimit() {
    return this._upperLimit;
  }

  /**
   * Set the UpperLimit.
   * @param {UpperLimit} upperLimit - The shr.core.UpperLimit
   */
  set upperLimit(upperLimit) {
    this._upperLimit = upperLimit;
  }

  /**
   * Get the Dimensions.
   * @returns {Dimensions} The shr.core.Dimensions
   */
  get dimensions() {
    return this._dimensions;
  }

  /**
   * Set the Dimensions.
   * @param {Dimensions} dimensions - The shr.core.Dimensions
   */
  set dimensions(dimensions) {
    this._dimensions = dimensions;
  }

  /**
   * Deserializes JSON data to an instance of the SampledData class.
   * The JSON must be valid against the SampledData JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SampledData} An instance of SampledData populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SampledData();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SampledData;
