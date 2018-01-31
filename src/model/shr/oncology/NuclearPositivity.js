import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.NuclearPositivity.
 * @extends ObservationComponent
 */
class NuclearPositivity extends ObservationComponent {

  /**
   * Get the value (aliases range).
   * @returns {Range} The shr.core.Range
   */
  get value() {
    return this._range;
  }

  /**
   * Set the value (aliases range).
   * @param {Range} value - The shr.core.Range
   */
  set value(value) {
    this._range = value;
  }

  /**
   * Get the Range.
   * @returns {Range} The shr.core.Range
   */
  get range() {
    return this._range;
  }

  /**
   * Set the Range.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Deserializes JSON data to an instance of the NuclearPositivity class.
   * The JSON must be valid against the NuclearPositivity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NuclearPositivity} An instance of NuclearPositivity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NuclearPositivity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NuclearPositivity;
