import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Race.
 */
class Race {

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
   * Get the RaceDetail array.
   * @returns {Array<RaceDetail>} The shr.entity.RaceDetail array
   */
  get raceDetail() {
    return this._raceDetail;
  }

  /**
   * Set the RaceDetail array.
   * @param {Array<RaceDetail>} raceDetail - The shr.entity.RaceDetail array
   */
  set raceDetail(raceDetail) {
    this._raceDetail = raceDetail;
  }

  /**
   * Deserializes JSON data to an instance of the Race class.
   * The JSON must be valid against the Race JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Race} An instance of Race populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Race();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Race;
