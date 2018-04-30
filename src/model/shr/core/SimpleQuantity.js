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
   * Set the Comparator and return 'this' for chaining.
   * @param {Comparator} comparator - The shr.core.Comparator
   * @returns {SimpleQuantity} this.
   */
  withComparator(comparator) {
    this.comparator = comparator; return this;
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
  /**
   * Serializes an instance of the SimpleQuantity class to a JSON object.
   * The JSON is expected to be valid against the SimpleQuantity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/SimpleQuantity' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.comparator != null) {
      inst['Comparator'] = typeof this.comparator.toJSON === 'function' ? this.comparator.toJSON() : this.comparator;
    }
    if (this.units != null) {
      inst['Units'] = typeof this.units.toJSON === 'function' ? this.units.toJSON() : this.units;
    }
    return inst;
  }
}
export default SimpleQuantity;
