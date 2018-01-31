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
}
export default GestationalAge;
