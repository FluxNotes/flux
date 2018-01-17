import { setPropertiesFromJSON } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for shr.entity.RelatedPerson.
 * @extends Role
 */
class RelatedPerson extends Role {

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
   * Get the RelationshipType.
   * @returns {RelationshipType} The shr.entity.RelationshipType
   */
  get relationshipType() {
    return this._relationshipType;
  }

  /**
   * Set the RelationshipType.
   * @param {RelationshipType} relationshipType - The shr.entity.RelationshipType
   */
  set relationshipType(relationshipType) {
    this._relationshipType = relationshipType;
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
   * Deserializes JSON data to an instance of the RelatedPerson class.
   * The JSON must be valid against the RelatedPerson JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedPerson} An instance of RelatedPerson populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedPerson();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RelatedPerson;
