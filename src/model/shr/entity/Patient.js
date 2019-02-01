import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for shr.entity.Patient.
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
    const inst = new Patient();
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Patient' };
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
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Patient class.
   * The FHIR must be valid against the Patient FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Patient} An instance of Patient populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Patient();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Patient');
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
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race') {
        inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
        inst.person.reference.race = FHIRHelper.createInstanceFromFHIR('shr.entity.Race', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity') {
        inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
        inst.person.reference.ethnicity = FHIRHelper.createInstanceFromFHIR('shr.entity.Ethnicity', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex') {
        inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
        inst.person.reference.birthSex = FHIRHelper.createInstanceFromFHIR('shr.entity.BirthSex', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['active'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.activeFlag = FHIRHelper.createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['active'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_name of fhir['name'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.humanName = inst.person.reference.humanName || [];
      const inst_person_reference_humanName = FHIRHelper.createInstanceFromFHIR('shr.core.HumanName', fhir_name, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.humanName.push(inst_person_reference_humanName);
    }
    for (const fhir_telecom of fhir['telecom'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.contactPoint = inst.person.reference.contactPoint || [];
      const inst_person_reference_contactPoint = FHIRHelper.createInstanceFromFHIR('shr.core.ContactPoint', fhir_telecom, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.contactPoint.push(inst_person_reference_contactPoint);
    }
    if (fhir['gender'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.administrativeGender = FHIRHelper.createInstanceFromFHIR('shr.entity.AdministrativeGender', fhir['gender'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['birthDate'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.dateOfBirth = FHIRHelper.createInstanceFromFHIR('shr.entity.DateOfBirth', fhir['birthDate'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_address of fhir['address'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.address = inst.person.reference.address || [];
      const inst_person_reference_address = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir_address, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.address.push(inst_person_reference_address);
    }
    if (fhir['maritalStatus'] != null) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.maritalStatus = FHIRHelper.createInstanceFromFHIR('shr.entity.MaritalStatus', fhir['maritalStatus'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_photo of fhir['photo'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.photographicImage = inst.person.reference.photographicImage || [];
      const inst_person_reference_photographicImage = FHIRHelper.createInstanceFromFHIR('shr.core.PhotographicImage', fhir_photo, shrId, allEntries, mappedResources, referencesOut, false);
      inst.person.reference.photographicImage.push(inst_person_reference_photographicImage);
    }
    for (const fhir_communication of fhir['communication'] || []) {
      inst.person = inst.person || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Person', {}, shrId), referencesOut);
      inst.person.reference.languageUsed = inst.person.reference.languageUsed || [];
      const inst_person_reference_languageUsed = FHIRHelper.createInstanceFromFHIR('shr.entity.LanguageUsed', {}, shrId);
      inst.person.reference.languageUsed.push(inst_person_reference_languageUsed);
      inst_person_reference_languageUsed.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir_communication, shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Patient;
