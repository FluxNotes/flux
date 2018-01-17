import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Ethnicity.
 */
class Ethnicity {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Get the EthnicityDetail array.
   * @returns {Array<EthnicityDetail>} The shr.entity.EthnicityDetail array
   */
  get ethnicityDetail() {
    return this._ethnicityDetail;
  }

  /**
   * Set the EthnicityDetail array.
   * @param {Array<EthnicityDetail>} ethnicityDetail - The shr.entity.EthnicityDetail array
   */
  set ethnicityDetail(ethnicityDetail) {
    this._ethnicityDetail = ethnicityDetail;
  }

  /**
   * Deserializes JSON data to an instance of the Ethnicity class.
   * The JSON must be valid against the Ethnicity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ethnicity} An instance of Ethnicity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Ethnicity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Ethnicity;
