import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Person.
 * @extends Entity
 */
class Person extends Entity {

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
   * @returns {Person} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the HumanName array.
   * @returns {Array<HumanName>} The shr.core.HumanName array
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Set the HumanName array.
   * This field/value is required.
   * @param {Array<HumanName>} humanName - The shr.core.HumanName array
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Set the HumanName array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<HumanName>} humanName - The shr.core.HumanName array
   * @returns {Person} this.
   */
  withHumanName(humanName) {
    this.humanName = humanName; return this;
  }

  /**
   * Get the DateOfBirth.
   * @returns {DateOfBirth} The shr.entity.DateOfBirth
   */
  get dateOfBirth() {
    return this._dateOfBirth;
  }

  /**
   * Set the DateOfBirth.
   * @param {DateOfBirth} dateOfBirth - The shr.entity.DateOfBirth
   */
  set dateOfBirth(dateOfBirth) {
    this._dateOfBirth = dateOfBirth;
  }

  /**
   * Set the DateOfBirth and return 'this' for chaining.
   * @param {DateOfBirth} dateOfBirth - The shr.entity.DateOfBirth
   * @returns {Person} this.
   */
  withDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth; return this;
  }

  /**
   * Get the AdministrativeGender.
   * @returns {AdministrativeGender} The shr.entity.AdministrativeGender
   */
  get administrativeGender() {
    return this._administrativeGender;
  }

  /**
   * Set the AdministrativeGender.
   * This field/value is required.
   * @param {AdministrativeGender} administrativeGender - The shr.entity.AdministrativeGender
   */
  set administrativeGender(administrativeGender) {
    this._administrativeGender = administrativeGender;
  }

  /**
   * Set the AdministrativeGender and return 'this' for chaining.
   * This field/value is required.
   * @param {AdministrativeGender} administrativeGender - The shr.entity.AdministrativeGender
   * @returns {Person} this.
   */
  withAdministrativeGender(administrativeGender) {
    this.administrativeGender = administrativeGender; return this;
  }

  /**
   * Get the Address array.
   * @returns {Array<Address>} The shr.core.Address array
   */
  get address() {
    return this._address;
  }

  /**
   * Set the Address array.
   * @param {Array<Address>} address - The shr.core.Address array
   */
  set address(address) {
    this._address = address;
  }

  /**
   * Set the Address array and return 'this' for chaining.
   * @param {Array<Address>} address - The shr.core.Address array
   * @returns {Person} this.
   */
  withAddress(address) {
    this.address = address; return this;
  }

  /**
   * Get the PhotographicImage array.
   * @returns {Array<PhotographicImage>} The shr.core.PhotographicImage array
   */
  get photographicImage() {
    return this._photographicImage;
  }

  /**
   * Set the PhotographicImage array.
   * @param {Array<PhotographicImage>} photographicImage - The shr.core.PhotographicImage array
   */
  set photographicImage(photographicImage) {
    this._photographicImage = photographicImage;
  }

  /**
   * Set the PhotographicImage array and return 'this' for chaining.
   * @param {Array<PhotographicImage>} photographicImage - The shr.core.PhotographicImage array
   * @returns {Person} this.
   */
  withPhotographicImage(photographicImage) {
    this.photographicImage = photographicImage; return this;
  }

  /**
   * Get the ContactPoint array.
   * @returns {Array<ContactPoint>} The shr.core.ContactPoint array
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint array.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Set the ContactPoint array and return 'this' for chaining.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   * @returns {Person} this.
   */
  withContactPoint(contactPoint) {
    this.contactPoint = contactPoint; return this;
  }

  /**
   * Get the LanguageUsed array.
   * @returns {Array<LanguageUsed>} The shr.entity.LanguageUsed array
   */
  get languageUsed() {
    return this._languageUsed;
  }

  /**
   * Set the LanguageUsed array.
   * @param {Array<LanguageUsed>} languageUsed - The shr.entity.LanguageUsed array
   */
  set languageUsed(languageUsed) {
    this._languageUsed = languageUsed;
  }

  /**
   * Set the LanguageUsed array and return 'this' for chaining.
   * @param {Array<LanguageUsed>} languageUsed - The shr.entity.LanguageUsed array
   * @returns {Person} this.
   */
  withLanguageUsed(languageUsed) {
    this.languageUsed = languageUsed; return this;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The shr.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   * @returns {Person} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Get the MaritalStatus.
   * @returns {MaritalStatus} The shr.entity.MaritalStatus
   */
  get maritalStatus() {
    return this._maritalStatus;
  }

  /**
   * Set the MaritalStatus.
   * @param {MaritalStatus} maritalStatus - The shr.entity.MaritalStatus
   */
  set maritalStatus(maritalStatus) {
    this._maritalStatus = maritalStatus;
  }

  /**
   * Set the MaritalStatus and return 'this' for chaining.
   * @param {MaritalStatus} maritalStatus - The shr.entity.MaritalStatus
   * @returns {Person} this.
   */
  withMaritalStatus(maritalStatus) {
    this.maritalStatus = maritalStatus; return this;
  }

  /**
   * Get the BirthSex.
   * @returns {BirthSex} The shr.entity.BirthSex
   */
  get birthSex() {
    return this._birthSex;
  }

  /**
   * Set the BirthSex.
   * @param {BirthSex} birthSex - The shr.entity.BirthSex
   */
  set birthSex(birthSex) {
    this._birthSex = birthSex;
  }

  /**
   * Set the BirthSex and return 'this' for chaining.
   * @param {BirthSex} birthSex - The shr.entity.BirthSex
   * @returns {Person} this.
   */
  withBirthSex(birthSex) {
    this.birthSex = birthSex; return this;
  }

  /**
   * Get the Race.
   * @returns {Race} The shr.entity.Race
   */
  get race() {
    return this._race;
  }

  /**
   * Set the Race.
   * @param {Race} race - The shr.entity.Race
   */
  set race(race) {
    this._race = race;
  }

  /**
   * Set the Race and return 'this' for chaining.
   * @param {Race} race - The shr.entity.Race
   * @returns {Person} this.
   */
  withRace(race) {
    this.race = race; return this;
  }

  /**
   * Get the Ethnicity.
   * @returns {Ethnicity} The shr.entity.Ethnicity
   */
  get ethnicity() {
    return this._ethnicity;
  }

  /**
   * Set the Ethnicity.
   * @param {Ethnicity} ethnicity - The shr.entity.Ethnicity
   */
  set ethnicity(ethnicity) {
    this._ethnicity = ethnicity;
  }

  /**
   * Set the Ethnicity and return 'this' for chaining.
   * @param {Ethnicity} ethnicity - The shr.entity.Ethnicity
   * @returns {Person} this.
   */
  withEthnicity(ethnicity) {
    this.ethnicity = ethnicity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Person class.
   * The JSON must be valid against the Person JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Person} An instance of Person populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Person();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Person class to a JSON object.
   * The JSON is expected to be valid against the Person JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Person' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.humanName != null) {
      inst['HumanName'] = this.humanName.map(f => f.toJSON());
    }
    if (this.dateOfBirth != null) {
      inst['DateOfBirth'] = typeof this.dateOfBirth.toJSON === 'function' ? this.dateOfBirth.toJSON() : this.dateOfBirth;
    }
    if (this.administrativeGender != null) {
      inst['AdministrativeGender'] = typeof this.administrativeGender.toJSON === 'function' ? this.administrativeGender.toJSON() : this.administrativeGender;
    }
    if (this.address != null) {
      inst['Address'] = this.address.map(f => f.toJSON());
    }
    if (this.photographicImage != null) {
      inst['PhotographicImage'] = this.photographicImage.map(f => f.toJSON());
    }
    if (this.contactPoint != null) {
      inst['ContactPoint'] = this.contactPoint.map(f => f.toJSON());
    }
    if (this.languageUsed != null) {
      inst['LanguageUsed'] = this.languageUsed.map(f => f.toJSON());
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    if (this.maritalStatus != null) {
      inst['MaritalStatus'] = typeof this.maritalStatus.toJSON === 'function' ? this.maritalStatus.toJSON() : this.maritalStatus;
    }
    if (this.birthSex != null) {
      inst['BirthSex'] = typeof this.birthSex.toJSON === 'function' ? this.birthSex.toJSON() : this.birthSex;
    }
    if (this.race != null) {
      inst['Race'] = typeof this.race.toJSON === 'function' ? this.race.toJSON() : this.race;
    }
    if (this.ethnicity != null) {
      inst['Ethnicity'] = typeof this.ethnicity.toJSON === 'function' ? this.ethnicity.toJSON() : this.ethnicity;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Person class.
   * The FHIR must be valid against the Person FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Person} An instance of Person populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Person();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Person');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-HumanName-extension') {
        inst.humanName = inst.humanName || [];
        const inst_humanName = FHIRHelper.createInstanceFromFHIR('shr.core.HumanName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.humanName.push(inst_humanName);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-DateOfBirth-extension') {
        inst.dateOfBirth = FHIRHelper.createInstanceFromFHIR('shr.entity.DateOfBirth', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-AdministrativeGender-extension') {
        inst.administrativeGender = FHIRHelper.createInstanceFromFHIR('shr.entity.AdministrativeGender', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Address-extension') {
        inst.address = inst.address || [];
        const inst_address = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.address.push(inst_address);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-PhotographicImage-extension') {
        inst.photographicImage = inst.photographicImage || [];
        const inst_photographicImage = FHIRHelper.createInstanceFromFHIR('shr.core.PhotographicImage', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.photographicImage.push(inst_photographicImage);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-ContactPoint-extension') {
        inst.contactPoint = inst.contactPoint || [];
        const inst_contactPoint = FHIRHelper.createInstanceFromFHIR('shr.core.ContactPoint', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.contactPoint.push(inst_contactPoint);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-LanguageUsed-extension') {
        inst.languageUsed = inst.languageUsed || [];
        const inst_languageUsed = FHIRHelper.createInstanceFromFHIR('shr.entity.LanguageUsed', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.languageUsed.push(inst_languageUsed);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-ActiveFlag-extension') {
        inst.activeFlag = FHIRHelper.createInstanceFromFHIR('shr.entity.ActiveFlag', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-MaritalStatus-extension') {
        inst.maritalStatus = FHIRHelper.createInstanceFromFHIR('shr.entity.MaritalStatus', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-BirthSex-extension') {
        inst.birthSex = FHIRHelper.createInstanceFromFHIR('shr.entity.BirthSex', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Race-extension') {
        inst.race = FHIRHelper.createInstanceFromFHIR('shr.entity.Race', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Ethnicity-extension') {
        inst.ethnicity = FHIRHelper.createInstanceFromFHIR('shr.entity.Ethnicity', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default Person;
