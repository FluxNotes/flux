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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {RelatedPerson} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {RelatedPerson} this.
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
   * @returns {RelatedPerson} this.
   */
  withParty(party) {
    this.party = party; return this;
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
   * Set the RelationshipType and return 'this' for chaining.
   * @param {RelationshipType} relationshipType - The shr.entity.RelationshipType
   * @returns {RelatedPerson} this.
   */
  withRelationshipType(relationshipType) {
    this.relationshipType = relationshipType; return this;
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
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {RelatedPerson} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedPerson class.
   * The JSON must be valid against the RelatedPerson JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedPerson} An instance of RelatedPerson populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new RelatedPerson();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RelatedPerson class to a JSON object.
   * The JSON is expected to be valid against the RelatedPerson JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/RelatedPerson' };
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
    if (this.relationshipType != null) {
      inst['RelationshipType'] = typeof this.relationshipType.toJSON === 'function' ? this.relationshipType.toJSON() : this.relationshipType;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the RelatedPerson class to a FHIR object.
   * The FHIR is expected to be valid against the RelatedPerson FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'RelatedPerson';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.relationshipType != null) {
      inst['relationship'] = typeof this.relationshipType.toFHIR === 'function' ? this.relationshipType.toFHIR() : this.relationshipType;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-RelatedPerson-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default RelatedPerson;
