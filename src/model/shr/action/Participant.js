import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.Participant.
 */
class Participant {

  /**
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Party reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * @param {Reference} value - The shr.entity.Party reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Get the shr.entity.Party reference.
   * @returns {Reference} The shr.entity.Party reference
   */
  get party() {
    return this._party;
  }

  /**
   * Set the shr.entity.Party reference.
   * @param {Reference} party - The shr.entity.Party reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Get the ParticipationType.
   * @returns {ParticipationType} The shr.action.ParticipationType
   */
  get participationType() {
    return this._participationType;
  }

  /**
   * Set the ParticipationType.
   * @param {ParticipationType} participationType - The shr.action.ParticipationType
   */
  set participationType(participationType) {
    this._participationType = participationType;
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
   * Get the OnBehalfOf.
   * @returns {OnBehalfOf} The shr.core.OnBehalfOf
   */
  get onBehalfOf() {
    return this._onBehalfOf;
  }

  /**
   * Set the OnBehalfOf.
   * @param {OnBehalfOf} onBehalfOf - The shr.core.OnBehalfOf
   */
  set onBehalfOf(onBehalfOf) {
    this._onBehalfOf = onBehalfOf;
  }

  /**
   * Deserializes JSON data to an instance of the Participant class.
   * The JSON must be valid against the Participant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Participant} An instance of Participant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Participant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Participant;
