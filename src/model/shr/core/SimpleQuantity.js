import { setPropertiesFromJSON } from '../../json-helper';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.SimpleQuantity.
 * @extends Quantity
 */
class SimpleQuantity extends Quantity {

  /**
   * Get the Comparator.
   * @returns {Comparator} The shr.core.Comparator
   */
  get comparator() {
    return this._comparator;
  }

  /**
   * Set the Comparator.
   * @param {Comparator} comparator - The shr.core.Comparator
   */
  set comparator(comparator) {
    this._comparator = comparator;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleQuantity class.
   * The JSON must be valid against the SimpleQuantity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleQuantity} An instance of SimpleQuantity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SimpleQuantity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SimpleQuantity;
