import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.environment.ExposureAmount.
 * @extends ObservationComponent
 */
class ExposureAmount extends ObservationComponent {

  /**
   * Get the value (aliases ratio).
   * @returns {Ratio} The shr.core.Ratio
   */
  get value() {
    return this._ratio;
  }

  /**
   * Set the value (aliases ratio).
   * @param {Ratio} value - The shr.core.Ratio
   */
  set value(value) {
    this._ratio = value;
  }

  /**
   * Get the Ratio.
   * @returns {Ratio} The shr.core.Ratio
   */
  get ratio() {
    return this._ratio;
  }

  /**
   * Set the Ratio.
   * @param {Ratio} ratio - The shr.core.Ratio
   */
  set ratio(ratio) {
    this._ratio = ratio;
  }

  /**
   * Deserializes JSON data to an instance of the ExposureAmount class.
   * The JSON must be valid against the ExposureAmount JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExposureAmount} An instance of ExposureAmount populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExposureAmount();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ExposureAmount;
