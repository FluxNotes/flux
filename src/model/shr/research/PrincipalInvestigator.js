import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.research.PrincipalInvestigator.
 */
class PrincipalInvestigator {

  /**
   * Get the value (aliases practitioner).
   * @returns {Reference} The shr.entity.Practitioner reference
   */
  get value() {
    return this._practitioner;
  }

  /**
   * Set the value (aliases practitioner).
   * @param {Reference} value - The shr.entity.Practitioner reference
   */
  set value(value) {
    this._practitioner = value;
  }

  /**
   * Get the shr.entity.Practitioner reference.
   * @returns {Reference} The shr.entity.Practitioner reference
   */
  get practitioner() {
    return this._practitioner;
  }

  /**
   * Set the shr.entity.Practitioner reference.
   * @param {Reference} practitioner - The shr.entity.Practitioner reference
   */
  set practitioner(practitioner) {
    this._practitioner = practitioner;
  }

  /**
   * Deserializes JSON data to an instance of the PrincipalInvestigator class.
   * The JSON must be valid against the PrincipalInvestigator JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PrincipalInvestigator} An instance of PrincipalInvestigator populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PrincipalInvestigator();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PrincipalInvestigator;
