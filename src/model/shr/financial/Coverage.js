import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.financial.Coverage.
 */
class Coverage {

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
   * Get the InsuranceMemberId.
   * @returns {InsuranceMemberId} The shr.financial.InsuranceMemberId
   */
  get insuranceMemberId() {
    return this._insuranceMemberId;
  }

  /**
   * Set the InsuranceMemberId.
   * @param {InsuranceMemberId} insuranceMemberId - The shr.financial.InsuranceMemberId
   */
  set insuranceMemberId(insuranceMemberId) {
    this._insuranceMemberId = insuranceMemberId;
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
   * Deserializes JSON data to an instance of the Coverage class.
   * The JSON must be valid against the Coverage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Coverage} An instance of Coverage populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Coverage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Coverage;
