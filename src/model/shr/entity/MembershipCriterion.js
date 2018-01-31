import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MembershipCriterion.
 */
class MembershipCriterion {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range.
   * @returns {(CodeableConcept|boolean|Quantity|Range)} The choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range.
   * @param {(CodeableConcept|boolean|Quantity|Range)} value - The choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Get the ExcludeFlag.
   * @returns {ExcludeFlag} The shr.entity.ExcludeFlag
   */
  get excludeFlag() {
    return this._excludeFlag;
  }

  /**
   * Set the ExcludeFlag.
   * @param {ExcludeFlag} excludeFlag - The shr.entity.ExcludeFlag
   */
  set excludeFlag(excludeFlag) {
    this._excludeFlag = excludeFlag;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Deserializes JSON data to an instance of the MembershipCriterion class.
   * The JSON must be valid against the MembershipCriterion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MembershipCriterion} An instance of MembershipCriterion populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MembershipCriterion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MembershipCriterion;
