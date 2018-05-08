import { setPropertiesFromJSON } from '../../json-helper';

import State from './State';

/**
 * Generated class for shr.core.UnitedStatesState.
 * @extends State
 */
class UnitedStatesState extends State {

  /**
   * Deserializes JSON data to an instance of the UnitedStatesState class.
   * The JSON must be valid against the UnitedStatesState JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UnitedStatesState} An instance of UnitedStatesState populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UnitedStatesState();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the UnitedStatesState class to a JSON object.
   * The JSON is expected to be valid against the UnitedStatesState JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/UnitedStatesState' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default UnitedStatesState;
