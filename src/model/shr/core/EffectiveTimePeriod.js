import { setPropertiesFromJSON } from '../../json-helper';

import TimePeriod from './TimePeriod';

/**
 * Generated class for shr.core.EffectiveTimePeriod.
 * @extends TimePeriod
 */
class EffectiveTimePeriod extends TimePeriod {

  /**
   * Deserializes JSON data to an instance of the EffectiveTimePeriod class.
   * The JSON must be valid against the EffectiveTimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EffectiveTimePeriod} An instance of EffectiveTimePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EffectiveTimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default EffectiveTimePeriod;
