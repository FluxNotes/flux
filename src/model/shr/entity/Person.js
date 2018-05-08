import { setPropertiesFromJSON } from '../../json-helper';

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
   * @param {Array<HumanName>} humanName - The shr.core.HumanName array
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Set the HumanName array and return 'this' for chaining.
   * @param {Array<HumanName>} humanName - The shr.core.HumanName array
   * @returns {Person} this.
   */
  withHumanName(humanName) {
    this.humanName = humanName; return this;
  }

  /**
   * Get the AnonymizedFlag.
   * @returns {AnonymizedFlag} The shr.entity.AnonymizedFlag
   */
  get anonymizedFlag() {
    return this._anonymizedFlag;
  }

  /**
   * Set the AnonymizedFlag.
   * @param {AnonymizedFlag} anonymizedFlag - The shr.entity.AnonymizedFlag
   */
  set anonymizedFlag(anonymizedFlag) {
    this._anonymizedFlag = anonymizedFlag;
  }

  /**
   * Set the AnonymizedFlag and return 'this' for chaining.
   * @param {AnonymizedFlag} anonymizedFlag - The shr.entity.AnonymizedFlag
   * @returns {Person} this.
   */
  withAnonymizedFlag(anonymizedFlag) {
    this.anonymizedFlag = anonymizedFlag; return this;
  }

  /**
   * Get the FictionalPersonFlag.
   * @returns {FictionalPersonFlag} The shr.entity.FictionalPersonFlag
   */
  get fictionalPersonFlag() {
    return this._fictionalPersonFlag;
  }

  /**
   * Set the FictionalPersonFlag.
   * @param {FictionalPersonFlag} fictionalPersonFlag - The shr.entity.FictionalPersonFlag
   */
  set fictionalPersonFlag(fictionalPersonFlag) {
    this._fictionalPersonFlag = fictionalPersonFlag;
  }

  /**
   * Set the FictionalPersonFlag and return 'this' for chaining.
   * @param {FictionalPersonFlag} fictionalPersonFlag - The shr.entity.FictionalPersonFlag
   * @returns {Person} this.
   */
  withFictionalPersonFlag(fictionalPersonFlag) {
    this.fictionalPersonFlag = fictionalPersonFlag; return this;
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
   * @param {AdministrativeGender} administrativeGender - The shr.entity.AdministrativeGender
   */
  set administrativeGender(administrativeGender) {
    this._administrativeGender = administrativeGender;
  }

  /**
   * Set the AdministrativeGender and return 'this' for chaining.
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
   * Get the Headshot.
   * @returns {Headshot} The shr.entity.Headshot
   */
  get headshot() {
    return this._headshot;
  }

  /**
   * Set the Headshot.
   * @param {Headshot} headshot - The shr.entity.Headshot
   */
  set headshot(headshot) {
    this._headshot = headshot;
  }

  /**
   * Set the Headshot and return 'this' for chaining.
   * @param {Headshot} headshot - The shr.entity.Headshot
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
   * Get the shr.entity.ExternalHealthRecord reference array.
   * @returns {Array<Reference>} The shr.entity.ExternalHealthRecord reference array
   */
  get externalHealthRecord() {
    return this._externalHealthRecord;
  }

  /**
   * Set the shr.entity.ExternalHealthRecord reference array.
   * @param {Array<Reference>} externalHealthRecord - The shr.entity.ExternalHealthRecord reference array
   */
  set externalHealthRecord(externalHealthRecord) {
    this._externalHealthRecord = externalHealthRecord;
  }

  /**
   * Set the shr.entity.ExternalHealthRecord reference array and return 'this' for chaining.
   * @param {Array<Reference>} externalHealthRecord - The shr.entity.ExternalHealthRecord reference array
   * @returns {Person} this.
   */
  withExternalHealthRecord(externalHealthRecord) {
    this.externalHealthRecord = externalHealthRecord; return this;
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
    if (this.humanName != null) {
      inst['HumanName'] = this.humanName.map(f => f.toJSON());
    }
    if (this.anonymizedFlag != null) {
      inst['AnonymizedFlag'] = typeof this.anonymizedFlag.toJSON === 'function' ? this.anonymizedFlag.toJSON() : this.anonymizedFlag;
    }
    if (this.fictionalPersonFlag != null) {
      inst['FictionalPersonFlag'] = typeof this.fictionalPersonFlag.toJSON === 'function' ? this.fictionalPersonFlag.toJSON() : this.fictionalPersonFlag;
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
      inst['Headshot'] = typeof this.headshot.toJSON === 'function' ? this.headshot.toJSON() : this.headshot;
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
    if (this.externalHealthRecord != null) {
      inst['ExternalHealthRecord'] = this.externalHealthRecord.map(f => f.toJSON());
    }
    return inst;
  }
}
export default Person;
