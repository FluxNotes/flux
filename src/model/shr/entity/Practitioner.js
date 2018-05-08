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
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Person reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Set the value (aliases party) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Person reference
   * @returns {Practitioner} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Person reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Set the shr.entity.Person reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Person reference
   * @returns {Practitioner} this.
   */
  withParty(party) {
    this.party = party; return this;
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
   * This field/value is required.
   * @param {NationalProviderIdentifier} nationalProviderIdentifier - The shr.entity.NationalProviderIdentifier
   */
  set nationalProviderIdentifier(nationalProviderIdentifier) {
    this._nationalProviderIdentifier = nationalProviderIdentifier;
  }

  /**
   * Set the NationalProviderIdentifier and return 'this' for chaining.
   * This field/value is required.
   * @param {NationalProviderIdentifier} nationalProviderIdentifier - The shr.entity.NationalProviderIdentifier
   * @returns {Practitioner} this.
   */
  withNationalProviderIdentifier(nationalProviderIdentifier) {
    this.nationalProviderIdentifier = nationalProviderIdentifier; return this;
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
   * Set the Qualification array and return 'this' for chaining.
   * @param {Array<Qualification>} qualification - The shr.entity.Qualification array
   * @returns {Practitioner} this.
   */
  withQualification(qualification) {
    this.qualification = qualification; return this;
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
  /**
   * Serializes an instance of the Practitioner class to a JSON object.
   * The JSON is expected to be valid against the Practitioner JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Practitioner' } };
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
    if (this.nationalProviderIdentifier != null) {
      inst['NationalProviderIdentifier'] = typeof this.nationalProviderIdentifier.toJSON === 'function' ? this.nationalProviderIdentifier.toJSON() : this.nationalProviderIdentifier;
    }
    if (this.qualification != null) {
      inst['Qualification'] = this.qualification.map(f => f.toJSON());
    }
    return inst;
  }
}
export default Practitioner;
