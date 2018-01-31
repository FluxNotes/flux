import { setPropertiesFromJSON } from '../../json-helper';

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
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Person reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * @param {Reference} value - The shr.entity.Person reference
   */
  set value(value) {
    this._party = value;
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
   * @param {Reference} party - The shr.entity.Person reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Get the PlaceOfBirth.
   * @returns {PlaceOfBirth} The shr.entity.PlaceOfBirth
   */
  get placeOfBirth() {
    return this._placeOfBirth;
  }

  /**
   * Set the PlaceOfBirth.
   * @param {PlaceOfBirth} placeOfBirth - The shr.entity.PlaceOfBirth
   */
  set placeOfBirth(placeOfBirth) {
    this._placeOfBirth = placeOfBirth;
  }

  /**
   * Get the MultipleBirth.
   * @returns {MultipleBirth} The shr.entity.MultipleBirth
   */
  get multipleBirth() {
    return this._multipleBirth;
  }

  /**
   * Set the MultipleBirth.
   * @param {MultipleBirth} multipleBirth - The shr.entity.MultipleBirth
   */
  set multipleBirth(multipleBirth) {
    this._multipleBirth = multipleBirth;
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
   * Get the MothersMaidenName.
   * @returns {MothersMaidenName} The shr.entity.MothersMaidenName
   */
  get mothersMaidenName() {
    return this._mothersMaidenName;
  }

  /**
   * Set the MothersMaidenName.
   * @param {MothersMaidenName} mothersMaidenName - The shr.entity.MothersMaidenName
   */
  set mothersMaidenName(mothersMaidenName) {
    this._mothersMaidenName = mothersMaidenName;
  }

  /**
   * Get the FathersName.
   * @returns {FathersName} The shr.entity.FathersName
   */
  get fathersName() {
    return this._fathersName;
  }

  /**
   * Set the FathersName.
   * @param {FathersName} fathersName - The shr.entity.FathersName
   */
  set fathersName(fathersName) {
    this._fathersName = fathersName;
  }

  /**
   * Get the SocialSecurityNumber.
   * @returns {SocialSecurityNumber} The shr.entity.SocialSecurityNumber
   */
  get socialSecurityNumber() {
    return this._socialSecurityNumber;
  }

  /**
   * Set the SocialSecurityNumber.
   * @param {SocialSecurityNumber} socialSecurityNumber - The shr.entity.SocialSecurityNumber
   */
  set socialSecurityNumber(socialSecurityNumber) {
    this._socialSecurityNumber = socialSecurityNumber;
  }

  /**
   * Get the DriversLicenseNumber.
   * @returns {DriversLicenseNumber} The shr.entity.DriversLicenseNumber
   */
  get driversLicenseNumber() {
    return this._driversLicenseNumber;
  }

  /**
   * Set the DriversLicenseNumber.
   * @param {DriversLicenseNumber} driversLicenseNumber - The shr.entity.DriversLicenseNumber
   */
  set driversLicenseNumber(driversLicenseNumber) {
    this._driversLicenseNumber = driversLicenseNumber;
  }

  /**
   * Get the PassportNumber array.
   * @returns {Array<PassportNumber>} The shr.entity.PassportNumber array
   */
  get passportNumber() {
    return this._passportNumber;
  }

  /**
   * Set the PassportNumber array.
   * @param {Array<PassportNumber>} passportNumber - The shr.entity.PassportNumber array
   */
  set passportNumber(passportNumber) {
    this._passportNumber = passportNumber;
  }

  /**
   * Get the MedicalInterpreterNeeded.
   * @returns {MedicalInterpreterNeeded} The shr.entity.MedicalInterpreterNeeded
   */
  get medicalInterpreterNeeded() {
    return this._medicalInterpreterNeeded;
  }

  /**
   * Set the MedicalInterpreterNeeded.
   * @param {MedicalInterpreterNeeded} medicalInterpreterNeeded - The shr.entity.MedicalInterpreterNeeded
   */
  set medicalInterpreterNeeded(medicalInterpreterNeeded) {
    this._medicalInterpreterNeeded = medicalInterpreterNeeded;
  }

  /**
   * Get the Deceased.
   * @returns {Deceased} The shr.entity.Deceased
   */
  get deceased() {
    return this._deceased;
  }

  /**
   * Set the Deceased.
   * @param {Deceased} deceased - The shr.entity.Deceased
   */
  set deceased(deceased) {
    this._deceased = deceased;
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
}
export default Patient;
