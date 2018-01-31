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
}
export default Person;
