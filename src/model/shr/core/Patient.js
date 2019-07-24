// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Role from './Role';

/**
 * Generated class for shr.core.Patient.
 * @extends Role
 */
class Patient extends Role {

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
   * @returns {Patient} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * @param {Status} status - The shr.core.Status
   * @returns {Patient} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Identifier array.
   * @returns {Array<Identifier>} The shr.core.Identifier array
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier array.
   * This field/value is required.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   * @returns {Patient} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the Person.
   * @returns {Person} The shr.core.Person
   */
  get person() {
    return this._person;
  }

  /**
   * Set the Person.
   * This field/value is required.
   * @param {Person} person - The shr.core.Person
   */
  set person(person) {
    this._person = person;
  }

  /**
   * Set the Person and return 'this' for chaining.
   * This field/value is required.
   * @param {Person} person - The shr.core.Person
   * @returns {Patient} this.
   */
  withPerson(person) {
    this.person = person; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Patient class.
   * The JSON must be valid against the Patient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Patient} An instance of Patient populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Patient');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Patient class to a JSON object.
   * The JSON is expected to be valid against the Patient JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Patient' };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.person != null) {
      inst['Person'] = typeof this.person.toJSON === 'function' ? this.person.toJSON() : this.person;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Patient class.
   * The FHIR must be valid against the Patient FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Patient} An instance of Patient populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Patient');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Patient', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://fhir.org/guides/argonaut/StructureDefinition/argo-race') {
        inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
        inst.person.race = FHIRHelper.createInstanceFromFHIR('shr.core.Race', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://fhir.org/guides/argonaut/StructureDefinition/argo-ethnicity') {
        inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
        inst.person.ethnicity = FHIRHelper.createInstanceFromFHIR('shr.core.Ethnicity', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://fhir.org/guides/argonaut/StructureDefinition/argo-birthsex') {
        inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
        inst.person.birthSex = FHIRHelper.createInstanceFromFHIR('shr.core.BirthSex', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.status.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    for (const fhir_name of fhir['name'] || []) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.humanName = inst.person.humanName || [];
      const inst_person_humanName = FHIRHelper.createInstanceFromFHIR('shr.core.HumanName', fhir_name, 'HumanName', shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.humanName.push(inst_person_humanName);
    }
    for (const fhir_telecom of fhir['telecom'] || []) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.contactPoint = inst.person.contactPoint || [];
      const inst_person_contactPoint = FHIRHelper.createInstanceFromFHIR('shr.core.ContactPoint', fhir_telecom, 'ContactPoint', shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.contactPoint.push(inst_person_contactPoint);
    }
    if (fhir['gender'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.administrativeGender = FHIRHelper.createInstanceFromFHIR('shr.core.AdministrativeGender', fhir['gender'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['birthDate'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.dateOfBirth = FHIRHelper.createInstanceFromFHIR('shr.core.DateOfBirth', fhir['birthDate'], 'date', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['deceasedBoolean'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.deceased = FHIRHelper.createInstanceFromFHIR('shr.core.Deceased', fhir['deceasedBoolean'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['deceasedDateTime'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.deceased = FHIRHelper.createInstanceFromFHIR('shr.core.Deceased', fhir['deceasedDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_address of fhir['address'] || []) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.address = inst.person.address || [];
      const inst_person_address = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir_address, 'Address', shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.address.push(inst_person_address);
    }
    if (fhir['maritalStatus'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.maritalStatus = FHIRHelper.createInstanceFromFHIR('shr.core.MaritalStatus', fhir['maritalStatus'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['multipleBirthBoolean'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.multipleBirth = FHIRHelper.createInstanceFromFHIR('shr.core.MultipleBirth', fhir['multipleBirthBoolean'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['multipleBirthInteger'] != null) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.multipleBirth = FHIRHelper.createInstanceFromFHIR('shr.core.MultipleBirth', fhir['multipleBirthInteger'], 'integer', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_photo of fhir['photo'] || []) {
      inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
      inst.person.photographicImage = inst.person.photographicImage || [];
      const inst_person_photographicImage = FHIRHelper.createInstanceFromFHIR('shr.core.PhotographicImage', fhir_photo, 'Attachment', shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.photographicImage.push(inst_person_photographicImage);
    }
    if (fhir['communication'] != null && fhir['communication'][0] != null) {
      if (fhir['communication'][0]['language'] != null) {
        inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
        inst.person.communication = inst.person.communication || [];
        const inst_person_communication = FHIRHelper.createInstanceFromFHIR('shr.core.Communication', {}, null, shrId);
        inst.person.communication.push(inst_person_communication);
        inst_person_communication.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['communication'][0]['language'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['communication'][0]['preferred'] != null) {
        inst.person = inst.person || FHIRHelper.createInstanceFromFHIR('shr.core.Person', {}, null, shrId);
        inst.person.communication = inst.person.communication || [];
        const inst_person_communication = FHIRHelper.createInstanceFromFHIR('shr.core.Communication', {}, null, shrId);
        inst.person.communication.push(inst_person_communication);
        inst_person_communication.preferred = FHIRHelper.createInstanceFromFHIR('shr.core.Preferred', fhir['communication'][0]['preferred'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Patient;
