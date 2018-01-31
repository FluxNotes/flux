import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.RelatedEncounter.
 */
class RelatedEncounter {

  /**
   * Get the value (aliases encounterPerformed).
   * @returns {Reference} The shr.encounter.EncounterPerformed reference
   */
  get value() {
    return this._encounterPerformed;
  }

  /**
   * Set the value (aliases encounterPerformed).
   * @param {Reference} value - The shr.encounter.EncounterPerformed reference
   */
  set value(value) {
    this._encounterPerformed = value;
  }

  /**
   * Get the shr.encounter.EncounterPerformed reference.
   * @returns {Reference} The shr.encounter.EncounterPerformed reference
   */
  get encounterPerformed() {
    return this._encounterPerformed;
  }

  /**
   * Set the shr.encounter.EncounterPerformed reference.
   * @param {Reference} encounterPerformed - The shr.encounter.EncounterPerformed reference
   */
  set encounterPerformed(encounterPerformed) {
    this._encounterPerformed = encounterPerformed;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedEncounter class.
   * The JSON must be valid against the RelatedEncounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedEncounter} An instance of RelatedEncounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedEncounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RelatedEncounter;
