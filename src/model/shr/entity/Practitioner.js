import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

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
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
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
   * Deserializes FHIR JSON data to an instance of the Practitioner class.
   * The FHIR must be valid against the Practitioner FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Practitioner} An instance of Practitioner populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Practitioner();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Practitioner');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['identifier'] != null && fhir['identifier'][0] != null) {
      inst.nationalProviderIdentifier = FHIRHelper.createInstanceFromFHIR('shr.entity.NationalProviderIdentifier', fhir['identifier'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['active'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.activeFlag = FHIRHelper.createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['active'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['name'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.humanName = inst.person.reference.humanName || [];
      const inst_person_reference_humanName = FHIRHelper.createInstanceFromFHIR('shr.core.HumanName', fhir['name'], shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.humanName.push(inst_person_reference_humanName);
    }
    for (const fhir_telecom of fhir['telecom'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.contactPoint = inst.person.reference.contactPoint || [];
      const inst_person_reference_contactPoint = FHIRHelper.createInstanceFromFHIR('shr.core.ContactPoint', fhir_telecom, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.contactPoint.push(inst_person_reference_contactPoint);
    }
    for (const fhir_address of fhir['address'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.address = inst.person.reference.address || [];
      const inst_person_reference_address = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir_address, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.address.push(inst_person_reference_address);
    }
    if (fhir['gender'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.administrativeGender = FHIRHelper.createInstanceFromFHIR('shr.entity.AdministrativeGender', fhir['gender'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_photo of fhir['photo'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.photographicImage = inst.person.reference.photographicImage || [];
      const inst_person_reference_photographicImage = FHIRHelper.createInstanceFromFHIR('shr.core.PhotographicImage', fhir_photo, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.photographicImage.push(inst_person_reference_photographicImage);
    }
    for (const fhir_qualification of fhir['qualification'] || []) {
      inst.qualification = inst.qualification || [];
      const inst_qualification = FHIRHelper.createInstanceFromFHIR('shr.entity.Qualification', fhir_qualification, shrId, allEntries, mappedResources, referencesOut, false);
      inst.qualification.push(inst_qualification);
      if (fhir_qualification['code'] != null) {
        inst_qualification.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_qualification['code'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_qualification['period'] != null) {
        inst_qualification.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir_qualification['period'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_qualification['issuer'] != null) {
        const entryId = fhir_qualification['issuer']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        if (mappedResources[entryId]) {
          inst_qualification.issuer = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
        }
        else {
          const entryType = 'http://standardhealthrecord.org/spec/shr/entity/Organization';
          inst_qualification.issuer = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
        }
      }
    }
    for (const fhir_communication of fhir['communication'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.languageUsed = inst.person.reference.languageUsed || [];
      const inst_person_reference_languageUsed = FHIRHelper.createInstanceFromFHIR('shr.entity.LanguageUsed', {}, shrId);
      inst.person.reference.languageUsed.push(inst_person_reference_languageUsed);
      inst_person_reference_languageUsed.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir_communication, shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default Practitioner;
