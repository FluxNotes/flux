import { setPropertiesFromJSON } from '../../json-helper';

import Age from './Age';

/**
 * Generated class for shr.core.GestationalAge.
 * @extends Age
 */
class GestationalAge extends Age {

  /**
   * Deserializes JSON data to an instance of the GestationalAge class.
   * The JSON must be valid against the GestationalAge JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GestationalAge} An instance of GestationalAge populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GestationalAge();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GestationalAge class to a JSON object.
   * The JSON is expected to be valid against the GestationalAge JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/GestationalAge' } };
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
export default GestationalAge;
