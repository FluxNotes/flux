import { setPropertiesFromJSON } from '../../json-helper';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.Money.
 * @extends Quantity
 */
class Money extends Quantity {

  /**
   * Get the Units.
   * @returns {Units} The shr.core.Units
   */
  get units() {
    return this._units;
  }

  /**
   * Set the Units.
   * @param {Units} units - The shr.core.Units
   */
  set units(units) {
    this._units = units;
  }

  /**
   * Set the Units and return 'this' for chaining.
   * @param {Units} units - The shr.core.Units
   * @returns {Money} this.
   */
  withUnits(units) {
    this.units = units; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Money class.
   * The JSON must be valid against the Money JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Money} An instance of Money populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Money();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Money class to a JSON object.
   * The JSON is expected to be valid against the Money JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Money' } };
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
export default Money;
