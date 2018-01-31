import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Signatory.
 */
class Signatory {

  /**
   * Get the choice value; one of: uri, shr.entity.Party reference.
   * @returns {(uri|Reference)} The choice value; one of: uri, shr.entity.Party reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: uri, shr.entity.Party reference.
   * @param {(uri|Reference)} value - The choice value; one of: uri, shr.entity.Party reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Signatory class.
   * The JSON must be valid against the Signatory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Signatory} An instance of Signatory populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Signatory();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Signatory;
