import { setPropertiesFromJSON } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for shr.entity.Practitioner.
 * @extends Role
 */
class Practitioner extends Role {

  /**
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Person reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * @param {Reference} value - The shr.entity.Person reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Get the shr.entity.Person reference.
   * @returns {Reference} The shr.entity.Person reference
   */
  get party() {
    return this._party;
  }

  /**
   * Set the shr.entity.Person reference.
   * @param {Reference} party - The shr.entity.Person reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Get the NationalProviderIdentifier.
   * @returns {NationalProviderIdentifier} The shr.entity.NationalProviderIdentifier
   */
  get nationalProviderIdentifier() {
    return this._nationalProviderIdentifier;
  }

  /**
   * Set the NationalProviderIdentifier.
   * @param {NationalProviderIdentifier} nationalProviderIdentifier - The shr.entity.NationalProviderIdentifier
   */
  set nationalProviderIdentifier(nationalProviderIdentifier) {
    this._nationalProviderIdentifier = nationalProviderIdentifier;
  }

  /**
   * Get the Qualification array.
   * @returns {Array<Qualification>} The shr.entity.Qualification array
   */
  get qualification() {
    return this._qualification;
  }

  /**
   * Set the Qualification array.
   * @param {Array<Qualification>} qualification - The shr.entity.Qualification array
   */
  set qualification(qualification) {
    this._qualification = qualification;
  }

  /**
   * Deserializes JSON data to an instance of the Practitioner class.
   * The JSON must be valid against the Practitioner JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Practitioner} An instance of Practitioner populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Practitioner();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Practitioner;
