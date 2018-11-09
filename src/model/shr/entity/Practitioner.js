import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for shr.entity.Practitioner.
 * @extends Role
 */
class Practitioner extends Role {

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
   * @returns {Practitioner} this.
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
   * This field/value is required.
   * @param {Reference} person - The shr.entity.Person reference
   */
  set person(person) {
    this._person = person;
  }

  /**
   * Set the shr.entity.Person reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} person - The shr.entity.Person reference
   * @returns {Practitioner} this.
   */
  withPerson(person) {
    this.person = person; return this;
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
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Practitioner' };
    if (this.person != null) {
      inst['Person'] = typeof this.person.toJSON === 'function' ? this.person.toJSON() : this.person;
    }
    if (this.nationalProviderIdentifier != null) {
      inst['NationalProviderIdentifier'] = typeof this.nationalProviderIdentifier.toJSON === 'function' ? this.nationalProviderIdentifier.toJSON() : this.nationalProviderIdentifier;
    }
    if (this.qualification != null) {
      inst['Qualification'] = this.qualification.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Practitioner class to a FHIR object.
   * The FHIR is expected to be valid against the Practitioner FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Practitioner';
    if (this.nationalProviderIdentifier != null) {
      inst['identifier'] = inst ['identifier'] || [];
      inst['identifier'].push(typeof this.nationalProviderIdentifier.toFHIR === 'function' ? this.nationalProviderIdentifier.toFHIR() : this.nationalProviderIdentifier);
    }
    if (this.person != null && this.person.activeFlag != null) {
      inst['active'] = typeof this.person.activeFlag.toFHIR === 'function' ? this.person.activeFlag.toFHIR() : this.person.activeFlag;
    }
    if (this.person != null && this.person.humanName != null) {
      inst['name'] = inst ['name'] || [];
      inst['name'].push(typeof this.person.humanName.toFHIR === 'function' ? this.person.humanName.toFHIR() : this.person.humanName);
    }
    if (this.person != null && this.person.contactPoint != null) {
      inst['telecom'] = inst ['telecom'] || [];
      inst['telecom'].push(typeof this.person.contactPoint.toFHIR === 'function' ? this.person.contactPoint.toFHIR() : this.person.contactPoint);
    }
    if (this.person != null && this.person.address != null) {
      inst['address'] = inst ['address'] || [];
      inst['address'].push(typeof this.person.address.toFHIR === 'function' ? this.person.address.toFHIR() : this.person.address);
    }
    if (this.person != null && this.person.administrativeGender != null) {
      inst['gender'] = typeof this.person.administrativeGender.toFHIR === 'function' ? this.person.administrativeGender.toFHIR() : this.person.administrativeGender;
    }
    if (this.person != null && this.person.headshot != null) {
      inst['photo'] = inst ['photo'] || [];
      inst['photo'].push(typeof this.person.headshot.toFHIR === 'function' ? this.person.headshot.toFHIR() : this.person.headshot);
    }
    if (this.qualification != null) {
      inst['qualification'] = inst ['qualification'] || [];
      inst['qualification'] = inst['qualification'].concat(this.qualification.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.qualification != null && this.qualification.type != null) {
      if(inst['qualification'] === undefined) {
        inst['qualification'] = {};
      }
      inst['qualification']['code'] = inst ['qualification']['code'] || [];
      inst['qualification']['code'] = inst['qualification']['code'].concat(this.qualification.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.qualification != null && this.qualification.effectiveTimePeriod != null) {
      if(inst['qualification'] === undefined) {
        inst['qualification'] = {};
      }
      inst['qualification']['period'] = inst ['qualification']['period'] || [];
      inst['qualification']['period'] = inst['qualification']['period'].concat(this.qualification.effectiveTimePeriod.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.qualification != null && this.qualification.issuer != null) {
      if(inst['qualification'] === undefined) {
        inst['qualification'] = {};
      }
      inst['qualification']['issuer'] = inst ['qualification']['issuer'] || [];
      inst['qualification']['issuer'] = inst['qualification']['issuer'].concat(this.qualification.issuer.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.person != null && this.person.languageUsed != null) {
      inst['communication'] = inst ['communication'] || [];
      inst['communication'].push(typeof this.person.languageUsed.toFHIR === 'function' ? this.person.languageUsed.toFHIR() : this.person.languageUsed);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Practitioner class.
   * The FHIR must be valid against the Practitioner FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Practitioner} An instance of Practitioner populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Practitioner();
    if (fhir['identifier'] != null) {
      inst.nationalProviderIdentifier = createInstanceFromFHIR('shr.entity.NationalProviderIdentifier', fhir['identifier'][0]);
    }
    if (fhir['active'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.activeFlag = createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['active']);
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
    if (fhir['address'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.address = inst.person.address || [];
      inst.person.address = inst.person.address.concat(fhir['address'].map(f => createInstanceFromFHIR('shr.core.Address', f)));
    }
    if (fhir['gender'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.administrativeGender = createInstanceFromFHIR('shr.entity.AdministrativeGender', fhir['gender']);
    }
    if (fhir['photo'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.headshot = inst.person.headshot || [];
      inst.person.headshot = inst.person.headshot.concat(fhir['photo'].map(f => createInstanceFromFHIR('shr.entity.Headshot', f)));
    }
    if (fhir['qualification'] != null) {
      inst.qualification = inst.qualification || [];
      inst.qualification = inst.qualification.concat(fhir['qualification'].map(f => createInstanceFromFHIR('shr.entity.Qualification', f)));
    }
    if (fhir['qualification'] != null && fhir['qualification']['code'] != null) {
      if(inst.qualification == null) {
        inst.qualification = createInstanceFromFHIR('shr.entity.Qualification', {});
      }
      inst.qualification.type = createInstanceFromFHIR('shr.core.Type', fhir['qualification']['code']);
    }
    if (fhir['qualification'] != null && fhir['qualification']['period'] != null) {
      if(inst.qualification == null) {
        inst.qualification = createInstanceFromFHIR('shr.entity.Qualification', {});
      }
      inst.qualification.effectiveTimePeriod = createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['qualification']['period']);
    }
    if (fhir['qualification'] != null && fhir['qualification']['issuer'] != null) {
      if(inst.qualification == null) {
        inst.qualification = createInstanceFromFHIR('shr.entity.Qualification', {});
      }
      inst.qualification.issuer = createInstanceFromFHIR('shr.core.Issuer', fhir['qualification']['issuer']);
    }
    if (fhir['communication'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.languageUsed = inst.person.languageUsed || [];
      inst.person.languageUsed = inst.person.languageUsed.concat(fhir['communication'].map(f => createInstanceFromFHIR('shr.entity.LanguageUsed', f)));
    }
    return inst;
  }

}
export default Practitioner;
