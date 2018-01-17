import { setPropertiesFromJSON } from '../../json-helper';

import Role from '../entity/Role';

/**
 * Generated class for shr.research.ResearchSubject.
 * @extends Role
 */
class ResearchSubject extends Role {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Patient reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * @param {Reference} value - The shr.entity.Patient reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Get the shr.entity.Patient reference.
   * @returns {Reference} The shr.entity.Patient reference
   */
  get party() {
    return this._party;
  }

  /**
   * Set the shr.entity.Patient reference.
   * @param {Reference} party - The shr.entity.Patient reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Get the shr.research.Study reference.
   * @returns {Reference} The shr.research.Study reference
   */
  get study() {
    return this._study;
  }

  /**
   * Set the shr.research.Study reference.
   * @param {Reference} study - The shr.research.Study reference
   */
  set study(study) {
    this._study = study;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
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
   * Get the TerminationReason.
   * @returns {TerminationReason} The shr.research.TerminationReason
   */
  get terminationReason() {
    return this._terminationReason;
  }

  /**
   * Set the TerminationReason.
   * @param {TerminationReason} terminationReason - The shr.research.TerminationReason
   */
  set terminationReason(terminationReason) {
    this._terminationReason = terminationReason;
  }

  /**
   * Deserializes JSON data to an instance of the ResearchSubject class.
   * The JSON must be valid against the ResearchSubject JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResearchSubject} An instance of ResearchSubject populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ResearchSubject();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ResearchSubject;
