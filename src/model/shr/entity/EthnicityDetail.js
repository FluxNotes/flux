import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.EthnicityDetail.
 */
class EthnicityDetail {

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
   * Deserializes JSON data to an instance of the EthnicityDetail class.
   * The JSON must be valid against the EthnicityDetail JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EthnicityDetail} An instance of EthnicityDetail populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EthnicityDetail();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default EthnicityDetail;
