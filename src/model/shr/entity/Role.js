import { setPropertiesFromJSON } from '../../json-helper';

import Party from './Party';

/**
 * Generated class for shr.entity.Role.
 * @extends Party
 */
class Role extends Party {

  /**
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Party reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Party reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Set the value (aliases party) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Party reference
   * @returns {Role} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Party reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Set the shr.entity.Party reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Party reference
   * @returns {Role} this.
   */
  withParty(party) {
    this.party = party; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Role class.
   * The JSON must be valid against the Role JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Role} An instance of Role populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Role();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Role class to a JSON object.
   * The JSON is expected to be valid against the Role JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Role' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    return inst;
  }
}
export default Role;
