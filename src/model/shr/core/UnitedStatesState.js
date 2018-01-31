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
}
export default UnitedStatesState;
