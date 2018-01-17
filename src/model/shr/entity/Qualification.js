import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Qualification.
 */
class Qualification {

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
   * Get the Issuer.
   * @returns {Issuer} The shr.entity.Issuer
   */
  get issuer() {
    return this._issuer;
  }

  /**
   * Set the Issuer.
   * @param {Issuer} issuer - The shr.entity.Issuer
   */
  set issuer(issuer) {
    this._issuer = issuer;
  }

  /**
   * Deserializes JSON data to an instance of the Qualification class.
   * The JSON must be valid against the Qualification JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Qualification} An instance of Qualification populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Qualification();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Qualification;
