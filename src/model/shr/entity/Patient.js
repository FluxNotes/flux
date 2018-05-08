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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Patient} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Person reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Set the value (aliases party) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Person reference
   * @returns {Patient} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Person reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Set the shr.entity.Person reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Person reference
   * @returns {Patient} this.
   */
  withParty(party) {
    this.party = party; return this;
  }

  /**
   * Get the MedicalRecordNumber array.
   * @returns {Array<MedicalRecordNumber>} The shr.entity.MedicalRecordNumber array
   */
  get medicalRecordNumber() {
    return this._medicalRecordNumber;
  }

  /**
   * Set the MedicalRecordNumber array.
   * @param {Array<MedicalRecordNumber>} medicalRecordNumber - The shr.entity.MedicalRecordNumber array
   */
  set medicalRecordNumber(medicalRecordNumber) {
    this._medicalRecordNumber = medicalRecordNumber;
  }

  /**
   * Set the MedicalRecordNumber array and return 'this' for chaining.
   * @param {Array<MedicalRecordNumber>} medicalRecordNumber - The shr.entity.MedicalRecordNumber array
   * @returns {Patient} this.
   */
  withMedicalRecordNumber(medicalRecordNumber) {
    this.medicalRecordNumber = medicalRecordNumber; return this;
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
   * Set the PlaceOfBirth and return 'this' for chaining.
   * @param {PlaceOfBirth} placeOfBirth - The shr.entity.PlaceOfBirth
   * @returns {Patient} this.
   */
  withPlaceOfBirth(placeOfBirth) {
    this.placeOfBirth = placeOfBirth; return this;
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
   * Set the MultipleBirth and return 'this' for chaining.
   * @param {MultipleBirth} multipleBirth - The shr.entity.MultipleBirth
   * @returns {Patient} this.
   */
  withMultipleBirth(multipleBirth) {
    this.multipleBirth = multipleBirth; return this;
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
   * @returns {Patient} this.
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
   * @returns {Patient} this.
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
   * @returns {Patient} this.
   */
  withEthnicity(ethnicity) {
    this.ethnicity = ethnicity; return this;
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
   * @returns {Patient} this.
   */
  withMaritalStatus(maritalStatus) {
    this.maritalStatus = maritalStatus; return this;
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
   * Set the MothersMaidenName and return 'this' for chaining.
   * @param {MothersMaidenName} mothersMaidenName - The shr.entity.MothersMaidenName
   * @returns {Patient} this.
   */
  withMothersMaidenName(mothersMaidenName) {
    this.mothersMaidenName = mothersMaidenName; return this;
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
   * Set the FathersName and return 'this' for chaining.
   * @param {FathersName} fathersName - The shr.entity.FathersName
   * @returns {Patient} this.
   */
  withFathersName(fathersName) {
    this.fathersName = fathersName; return this;
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
   * Set the SocialSecurityNumber and return 'this' for chaining.
   * @param {SocialSecurityNumber} socialSecurityNumber - The shr.entity.SocialSecurityNumber
   * @returns {Patient} this.
   */
  withSocialSecurityNumber(socialSecurityNumber) {
    this.socialSecurityNumber = socialSecurityNumber; return this;
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
   * Set the DriversLicenseNumber and return 'this' for chaining.
   * @param {DriversLicenseNumber} driversLicenseNumber - The shr.entity.DriversLicenseNumber
   * @returns {Patient} this.
   */
  withDriversLicenseNumber(driversLicenseNumber) {
    this.driversLicenseNumber = driversLicenseNumber; return this;
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
   * Set the PassportNumber array and return 'this' for chaining.
   * @param {Array<PassportNumber>} passportNumber - The shr.entity.PassportNumber array
   * @returns {Patient} this.
   */
  withPassportNumber(passportNumber) {
    this.passportNumber = passportNumber; return this;
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
   * Set the MedicalInterpreterNeeded and return 'this' for chaining.
   * @param {MedicalInterpreterNeeded} medicalInterpreterNeeded - The shr.entity.MedicalInterpreterNeeded
   * @returns {Patient} this.
   */
  withMedicalInterpreterNeeded(medicalInterpreterNeeded) {
    this.medicalInterpreterNeeded = medicalInterpreterNeeded; return this;
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
   * Set the Deceased and return 'this' for chaining.
   * @param {Deceased} deceased - The shr.entity.Deceased
   * @returns {Patient} this.
   */
  withDeceased(deceased) {
    this.deceased = deceased; return this;
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
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
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
    if (this.medicalRecordNumber != null) {
      inst['MedicalRecordNumber'] = this.medicalRecordNumber.map(f => f.toJSON());
    }
    if (this.placeOfBirth != null) {
      inst['PlaceOfBirth'] = typeof this.placeOfBirth.toJSON === 'function' ? this.placeOfBirth.toJSON() : this.placeOfBirth;
    }
    if (this.multipleBirth != null) {
      inst['MultipleBirth'] = typeof this.multipleBirth.toJSON === 'function' ? this.multipleBirth.toJSON() : this.multipleBirth;
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
    if (this.maritalStatus != null) {
      inst['MaritalStatus'] = typeof this.maritalStatus.toJSON === 'function' ? this.maritalStatus.toJSON() : this.maritalStatus;
    }
    if (this.mothersMaidenName != null) {
      inst['MothersMaidenName'] = typeof this.mothersMaidenName.toJSON === 'function' ? this.mothersMaidenName.toJSON() : this.mothersMaidenName;
    }
    if (this.fathersName != null) {
      inst['FathersName'] = typeof this.fathersName.toJSON === 'function' ? this.fathersName.toJSON() : this.fathersName;
    }
    if (this.socialSecurityNumber != null) {
      inst['SocialSecurityNumber'] = typeof this.socialSecurityNumber.toJSON === 'function' ? this.socialSecurityNumber.toJSON() : this.socialSecurityNumber;
    }
    if (this.driversLicenseNumber != null) {
      inst['DriversLicenseNumber'] = typeof this.driversLicenseNumber.toJSON === 'function' ? this.driversLicenseNumber.toJSON() : this.driversLicenseNumber;
    }
    if (this.passportNumber != null) {
      inst['PassportNumber'] = this.passportNumber.map(f => f.toJSON());
    }
    if (this.medicalInterpreterNeeded != null) {
      inst['MedicalInterpreterNeeded'] = typeof this.medicalInterpreterNeeded.toJSON === 'function' ? this.medicalInterpreterNeeded.toJSON() : this.medicalInterpreterNeeded;
    }
    if (this.deceased != null) {
      inst['Deceased'] = typeof this.deceased.toJSON === 'function' ? this.deceased.toJSON() : this.deceased;
    }
    return inst;
  }
}
export default Patient;
