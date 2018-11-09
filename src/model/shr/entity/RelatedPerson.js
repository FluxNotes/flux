import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Get the shr.entity.Person reference.
   * @returns {Reference} The shr.entity.Person reference
   */
  get person() {
    return this._person;
  }

  /**
   * Set the shr.entity.Person reference.
   * @param {Reference} person - The shr.entity.Person reference
   */
  set person(person) {
    this._person = person;
  }

  /**
   * Set the shr.entity.Person reference and return 'this' for chaining.
   * @param {Reference} person - The shr.entity.Person reference
   * @returns {RelatedPerson} this.
   */
  withPerson(person) {
    this.person = person; return this;
  }

  /**
   * Get the RelationshipToPersonOfRecord.
   * @returns {RelationshipToPersonOfRecord} The shr.base.RelationshipToPersonOfRecord
   */
  get relationshipToPersonOfRecord() {
    return this._relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The shr.base.RelationshipToPersonOfRecord
   */
  set relationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this._relationshipToPersonOfRecord = relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord and return 'this' for chaining.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The shr.base.RelationshipToPersonOfRecord
   * @returns {RelatedPerson} this.
   */
  withRelationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this.relationshipToPersonOfRecord = relationshipToPersonOfRecord; return this;
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
  static fromJSON(json={}) {
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/RelatedPerson' };
    if (this.person != null) {
      inst['Person'] = typeof this.person.toJSON === 'function' ? this.person.toJSON() : this.person;
    }
    if (this.relationshipToPersonOfRecord != null) {
      inst['RelationshipToPersonOfRecord'] = typeof this.relationshipToPersonOfRecord.toJSON === 'function' ? this.relationshipToPersonOfRecord.toJSON() : this.relationshipToPersonOfRecord;
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
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'RelatedPerson';
    if (this.person != null && this.person.activeFlag != null) {
      inst['active'] = typeof this.person.activeFlag.toFHIR === 'function' ? this.person.activeFlag.toFHIR() : this.person.activeFlag;
    }
    if (this.relationshipToPersonOfRecord != null) {
      inst['relationship'] = typeof this.relationshipToPersonOfRecord.toFHIR === 'function' ? this.relationshipToPersonOfRecord.toFHIR() : this.relationshipToPersonOfRecord;
    }
    if (this.person != null && this.person.humanName != null) {
      inst['name'] = typeof this.person.humanName.toFHIR === 'function' ? this.person.humanName.toFHIR() : this.person.humanName;
    }
    if (this.person != null && this.person.contactPoint != null) {
      inst['telecom'] = typeof this.person.contactPoint.toFHIR === 'function' ? this.person.contactPoint.toFHIR() : this.person.contactPoint;
    }
    if (this.person != null && this.person.administrativeGender != null) {
      inst['gender'] = typeof this.person.administrativeGender.toFHIR === 'function' ? this.person.administrativeGender.toFHIR() : this.person.administrativeGender;
    }
    if (this.person != null && this.person.dateOfBirth != null) {
      inst['birthDate'] = typeof this.person.dateOfBirth.toFHIR === 'function' ? this.person.dateOfBirth.toFHIR() : this.person.dateOfBirth;
    }
    if (this.person != null && this.person.address != null) {
      inst['address'] = typeof this.person.address.toFHIR === 'function' ? this.person.address.toFHIR() : this.person.address;
    }
    if (this.person != null && this.person.headshot != null) {
      inst['photo'] = typeof this.person.headshot.toFHIR === 'function' ? this.person.headshot.toFHIR() : this.person.headshot;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RelatedPerson class.
   * The FHIR must be valid against the RelatedPerson FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {RelatedPerson} An instance of RelatedPerson populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new RelatedPerson();
    if (fhir['active'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.activeFlag = createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['active']);
    }
    if (fhir['relationship'] != null) {
      inst.relationshipToPersonOfRecord = createInstanceFromFHIR('shr.base.RelationshipToPersonOfRecord', fhir['relationship']);
    }
    if (fhir['name'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.humanName = inst.person.humanName || [];
      inst.person.humanName = inst.person.humanName.concat(fhir['name'].map(f => createInstanceFromFHIR('shr.core.HumanName', f)));
    }
    if (fhir['telecom'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.contactPoint = inst.person.contactPoint || [];
      inst.person.contactPoint = inst.person.contactPoint.concat(fhir['telecom'].map(f => createInstanceFromFHIR('shr.core.ContactPoint', f)));
    }
    if (fhir['gender'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.administrativeGender = createInstanceFromFHIR('shr.entity.AdministrativeGender', fhir['gender']);
    }
    if (fhir['birthDate'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.dateOfBirth = createInstanceFromFHIR('shr.entity.DateOfBirth', fhir['birthDate']);
    }
    if (fhir['address'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.address = inst.person.address || [];
      inst.person.address = inst.person.address.concat(fhir['address'].map(f => createInstanceFromFHIR('shr.core.Address', f)));
    }
    if (fhir['photo'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.headshot = inst.person.headshot || [];
      inst.person.headshot = inst.person.headshot.concat(fhir['photo'].map(f => createInstanceFromFHIR('shr.entity.Headshot', f)));
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period']);
    }
    return inst;
  }

}
export default RelatedPerson;
