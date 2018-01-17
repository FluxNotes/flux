import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.Informant.
 */
class Informant {

  /**
   * Get the choice value; one of: string, shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.action.Participant reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference.
   * @returns {(string|Reference)} The choice value; one of: string, shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.action.Participant reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.action.Participant reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference.
   * @param {(string|Reference)} value - The choice value; one of: string, shr.entity.Patient reference, shr.entity.Group reference, shr.device.Device reference, shr.action.Participant reference, shr.entity.RelatedPerson reference, shr.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Informant class.
   * The JSON must be valid against the Informant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Informant} An instance of Informant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Informant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Informant;
