import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Get the Headshot array.
   * @returns {Array<Headshot>} The shr.entity.Headshot array
   */
  get headshot() {
    return this._headshot;
  }

  /**
   * Set the Headshot array.
   * @param {Array<Headshot>} headshot - The shr.entity.Headshot array
   */
  set headshot(headshot) {
    this._headshot = headshot;
  }

  /**
   * Set the Headshot array and return 'this' for chaining.
   * @param {Array<Headshot>} headshot - The shr.entity.Headshot array
   * @returns {Person} this.
   */
  withHeadshot(headshot) {
    this.headshot = headshot; return this;
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
    if (this.headshot != null) {
      inst['Headshot'] = this.headshot.map(f => f.toJSON());
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
    return inst;
  }

  /**
   * Serializes an instance of the Person class to a FHIR object.
   * The FHIR is expected to be valid against the Person FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.humanName != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.humanName.toFHIR === 'function' ? this.humanName.toFHIR(true) : this.humanName);
    }
    if (this.dateOfBirth != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.dateOfBirth.toFHIR === 'function' ? this.dateOfBirth.toFHIR(true) : this.dateOfBirth);
    }
    if (this.administrativeGender != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.administrativeGender.toFHIR === 'function' ? this.administrativeGender.toFHIR(true) : this.administrativeGender);
    }
    if (this.address != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.address.toFHIR === 'function' ? this.address.toFHIR(true) : this.address);
    }
    if (this.headshot != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.headshot.toFHIR === 'function' ? this.headshot.toFHIR(true) : this.headshot);
    }
    if (this.contactPoint != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.contactPoint.toFHIR === 'function' ? this.contactPoint.toFHIR(true) : this.contactPoint);
    }
    if (this.languageUsed != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.languageUsed.toFHIR === 'function' ? this.languageUsed.toFHIR(true) : this.languageUsed);
    }
    if (this.activeFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.activeFlag.toFHIR === 'function' ? this.activeFlag.toFHIR(true) : this.activeFlag);
    }
    if (this.maritalStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.maritalStatus.toFHIR === 'function' ? this.maritalStatus.toFHIR(true) : this.maritalStatus);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Person class.
   * The FHIR must be valid against the Person FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Person} An instance of Person populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Person();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    return inst;
  }

}
export default Person;
