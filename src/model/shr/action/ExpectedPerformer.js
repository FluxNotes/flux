import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ExpectedPerformer.
 */
class ExpectedPerformer {

  /**
   * Get the choice value; one of: shr.entity.Role reference, shr.entity.Organization reference.
   * @returns {Reference} The choice value; one of: shr.entity.Role reference, shr.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.entity.Role reference, shr.entity.Organization reference.
   * @param {Reference} value - The choice value; one of: shr.entity.Role reference, shr.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectedPerformer class.
   * The JSON must be valid against the ExpectedPerformer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectedPerformer} An instance of ExpectedPerformer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectedPerformer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ExpectedPerformer;
