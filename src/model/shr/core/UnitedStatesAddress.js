import { setPropertiesFromJSON } from '../../json-helper';

import Address from './Address';

/**
 * Generated class for shr.core.UnitedStatesAddress.
 * @extends Address
 */
class UnitedStatesAddress extends Address {

  /**
   * Get the UnitedStatesState.
   * @returns {UnitedStatesState} The shr.core.UnitedStatesState
   */
  get state() {
    return this._state;
  }

  /**
   * Set the UnitedStatesState.
   * @param {UnitedStatesState} state - The shr.core.UnitedStatesState
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Deserializes JSON data to an instance of the UnitedStatesAddress class.
   * The JSON must be valid against the UnitedStatesAddress JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UnitedStatesAddress} An instance of UnitedStatesAddress populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UnitedStatesAddress();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default UnitedStatesAddress;
