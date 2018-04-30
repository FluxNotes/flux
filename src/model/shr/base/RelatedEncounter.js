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
   * This field/value is required.
   * @param {Reference} value - The shr.encounter.EncounterPerformed reference
   */
  set value(value) {
    this._encounterPerformed = value;
  }

  /**
   * Set the value (aliases encounterPerformed) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.encounter.EncounterPerformed reference
   * @returns {RelatedEncounter} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Reference} encounterPerformed - The shr.encounter.EncounterPerformed reference
   */
  set encounterPerformed(encounterPerformed) {
    this._encounterPerformed = encounterPerformed;
  }

  /**
   * Set the shr.encounter.EncounterPerformed reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} encounterPerformed - The shr.encounter.EncounterPerformed reference
   * @returns {RelatedEncounter} this.
   */
  withEncounterPerformed(encounterPerformed) {
    this.encounterPerformed = encounterPerformed; return this;
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
  /**
   * Serializes an instance of the RelatedEncounter class to a JSON object.
   * The JSON is expected to be valid against the RelatedEncounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/RelatedEncounter' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default RelatedEncounter;
