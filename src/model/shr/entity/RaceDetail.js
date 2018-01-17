import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.RaceDetail.
 */
class RaceDetail {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept.
   * @returns {CodeableConcept} The choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept.
   * @param {CodeableConcept} value - The choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the RaceDetail class.
   * The JSON must be valid against the RaceDetail JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RaceDetail} An instance of RaceDetail populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RaceDetail();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RaceDetail;
