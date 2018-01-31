import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.ContactPoint.
 */
class ContactPoint {

  /**
   * Get the TelecomNumberOrAddress.
   * @returns {TelecomNumberOrAddress} The shr.core.TelecomNumberOrAddress
   */
  get telecomNumberOrAddress() {
    return this._telecomNumberOrAddress;
  }

  /**
   * Set the TelecomNumberOrAddress.
   * @param {TelecomNumberOrAddress} telecomNumberOrAddress - The shr.core.TelecomNumberOrAddress
   */
  set telecomNumberOrAddress(telecomNumberOrAddress) {
    this._telecomNumberOrAddress = telecomNumberOrAddress;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.entity.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.entity.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Get the Priority.
   * @returns {Priority} The shr.core.Priority
   */
  get priority() {
    return this._priority;
  }

  /**
   * Set the Priority.
   * @param {Priority} priority - The shr.core.Priority
   */
  set priority(priority) {
    this._priority = priority;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Deserializes JSON data to an instance of the ContactPoint class.
   * The JSON must be valid against the ContactPoint JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContactPoint} An instance of ContactPoint populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ContactPoint();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ContactPoint;
