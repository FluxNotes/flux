import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.StateOfIssue.
 */
class StateOfIssue {

  /**
   * Get the value (aliases state).
   * @returns {State} The shr.core.State
   */
  get value() {
    return this._state;
  }

  /**
   * Set the value (aliases state).
   * @param {State} value - The shr.core.State
   */
  set value(value) {
    this._state = value;
  }

  /**
   * Get the State.
   * @returns {State} The shr.core.State
   */
  get state() {
    return this._state;
  }

  /**
   * Set the State.
   * @param {State} state - The shr.core.State
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Deserializes JSON data to an instance of the StateOfIssue class.
   * The JSON must be valid against the StateOfIssue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StateOfIssue} An instance of StateOfIssue populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StateOfIssue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default StateOfIssue;
