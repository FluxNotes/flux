import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Member.
 */
class Member {

  /**
   * Get the choice value; one of: shr.entity.Patient reference, shr.entity.Practitioner reference, shr.device.Device reference, shr.entity.Medication reference, shr.entity.Substance reference.
   * @returns {Reference} The choice value; one of: shr.entity.Patient reference, shr.entity.Practitioner reference, shr.device.Device reference, shr.entity.Medication reference, shr.entity.Substance reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.entity.Patient reference, shr.entity.Practitioner reference, shr.device.Device reference, shr.entity.Medication reference, shr.entity.Substance reference.
   * @param {Reference} value - The choice value; one of: shr.entity.Patient reference, shr.entity.Practitioner reference, shr.device.Device reference, shr.entity.Medication reference, shr.entity.Substance reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The shr.action.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * @param {ParticipationPeriod} participationPeriod - The shr.action.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The shr.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Deserializes JSON data to an instance of the Member class.
   * The JSON must be valid against the Member JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Member} An instance of Member populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Member();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Member;
