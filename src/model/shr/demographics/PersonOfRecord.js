import AddressUsed from './AddressUsed';
import AdministrativeGender from '../actor/AdministrativeGender';
import BirthSex from './BirthSex';
import DateOfBirth from '../actor/DateOfBirth';
import DriversLicenseNumber from './DriversLicenseNumber';
import Entry from '../base/Entry';
import Ethnicity from './Ethnicity';
import FamilialRelationship from './FamilialRelationship';
import FathersName from './FathersName';
import LanguageUsed from '../actor/LanguageUsed';
import MaritalStatus from './MaritalStatus';
import MedicalInterpreterNeeded from './MedicalInterpreterNeeded';
import MothersMaidenName from './MothersMaidenName';
import MultipleBirth from './MultipleBirth';
import PassportNumber from './PassportNumber';
import Person from '../actor/Person';
import PlaceOfBirth from './PlaceOfBirth';
import Race from './Race';
import SocialSecurityNumber from './SocialSecurityNumber';
import Telecom from './Telecom';

/** Generated from SHR definition for shr.demographics.PersonOfRecord */
class PersonOfRecord extends Person {
  constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            if (json.dateOfBirth) this._dateOfBirth = new DateOfBirth(json.dateOfBirth);
            if (json.placeOfBirth) this._placeOfBirth = new PlaceOfBirth(json.placeOfBirth);
            if (json.multipleBirth) this._multipleBirth = new MultipleBirth(json.multipleBirth);
            if (json.birthSex) this._birthSex = new BirthSex(json.birthSex);
            if (json.administrativeGender) this._administrativeGender = new AdministrativeGender(json.administrativeGender);
            if (json.race) this._race = new Race(json.race);
            if (json.ethnicity) this._ethnicity = new Ethnicity(json.ethnicity);
            if (json.maritalStatus) this._maritalStatus = new MaritalStatus(json.maritalStatus);
            if (json.mothersMaidenName) this._mothersMaidenName = new MothersMaidenName(json.mothersMaidenName);
            if (json.fathersName) this._fathersName = new FathersName(json.fathersName);
            if (json.socialSecurityNumber) this._socialSecurityNumber = new SocialSecurityNumber(json.socialSecurityNumber);
            if (json.driversLicenseNumber) this._driversLicenseNumber = json.driversLicenseNumber.map((dln) => new DriversLicenseNumber(dln));
            if (json.passportNumber) this._passportNumber = json.passportNumber.map((pn) => new PassportNumber(pn));
            if (json.addressUsed) this._addressUsed = json.addressUsed.map((au) => new AddressUsed(au));
            if (json.telecom) this._telecom = json.telecom.map((t) => new Telecom(t));
            if (json.languageUsed) this._languageUsed = json.languageUsed.map((l) => new LanguageUsed(l));
            if (json.medicalInterpreterNeeded) this._medicalInterpreterNeeded = new MedicalInterpreterNeeded(json.medicalInterpreterNeeded);
            if (json.familialRelationship) this._familialRelationship = json.familialRelationship.map((fr) => new FamilialRelationship(fr));
        } else {
            this._entryInfo = Entry.createEntry(    "http://standardhealthrecord.org/demographics/PersonOfRecord",
                                                    "http://standardhealthrecord.org/actor/Person");
        }
  }

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.actor.DateOfBirth
   */
  get dateOfBirth() {
    return this._dateOfBirth;
  }

  /**
   * Setter for shr.actor.DateOfBirth
   */
  set dateOfBirth(dateOfBirthVal) {
    this._dateOfBirth = dateOfBirthVal;
  }

  /**
   * Getter for shr.demographics.PlaceOfBirth
   */
  get placeOfBirth() {
    return this._placeOfBirth;
  }

  /**
   * Setter for shr.demographics.PlaceOfBirth
   */
  set placeOfBirth(placeOfBirthVal) {
    this._placeOfBirth = placeOfBirthVal;
  }

  /**
   * Getter for shr.demographics.MultipleBirth
   */
  get multipleBirth() {
    return this._multipleBirth;
  }

  /**
   * Setter for shr.demographics.MultipleBirth
   */
  set multipleBirth(multipleBirthVal) {
    this._multipleBirth = multipleBirthVal;
  }

  /**
   * Getter for shr.demographics.BirthSex
   */
  get birthSex() {
    return this._birthSex;
  }

  /**
   * Setter for shr.demographics.BirthSex
   */
  set birthSex(birthSexVal) {
    this._birthSex = birthSexVal;
  }

  /**
   * Getter for shr.actor.AdministrativeGender
   */
  get administrativeGender() {
    return this._administrativeGender;
  }

  /**
   * Setter for shr.actor.AdministrativeGender
   */
  set administrativeGender(administrativeGenderVal) {
    this._administrativeGender = administrativeGenderVal;
  }

  /**
   * Getter for shr.demographics.Race
   */
  get race() {
    return this._race;
  }

  /**
   * Setter for shr.demographics.Race
   */
  set race(raceVal) {
    this._race = raceVal;
  }

  /**
   * Getter for shr.demographics.Ethnicity
   */
  get ethnicity() {
    return this._ethnicity;
  }

  /**
   * Setter for shr.demographics.Ethnicity
   */
  set ethnicity(ethnicityVal) {
    this._ethnicity = ethnicityVal;
  }

  /**
   * Getter for shr.demographics.MaritalStatus
   */
  get maritalStatus() {
    return this._maritalStatus;
  }

  /**
   * Setter for shr.demographics.MaritalStatus
   */
  set maritalStatus(maritalStatusVal) {
    this._maritalStatus = maritalStatusVal;
  }

  /**
   * Getter for shr.demographics.MothersMaidenName
   */
  get mothersMaidenName() {
    return this._mothersMaidenName;
  }

  /**
   * Setter for shr.demographics.MothersMaidenName
   */
  set mothersMaidenName(mothersMaidenNameVal) {
    this._mothersMaidenName = mothersMaidenNameVal;
  }

  /**
   * Getter for shr.demographics.FathersName
   */
  get fathersName() {
    return this._fathersName;
  }

  /**
   * Setter for shr.demographics.FathersName
   */
  set fathersName(fathersNameVal) {
    this._fathersName = fathersNameVal;
  }

  /**
   * Getter for shr.demographics.SocialSecurityNumber
   */
  get socialSecurityNumber() {
    return this._socialSecurityNumber;
  }

  /**
   * Setter for shr.demographics.SocialSecurityNumber
   */
  set socialSecurityNumber(socialSecurityNumberVal) {
    this._socialSecurityNumber = socialSecurityNumberVal;
  }

  /**
   * Getter for shr.demographics.DriversLicenseNumber[]
   */
  get driversLicenseNumber() {
    return this._driversLicenseNumber;
  }

  /**
   * Setter for shr.demographics.DriversLicenseNumber[]
   */
  set driversLicenseNumber(driversLicenseNumberVal) {
    this._driversLicenseNumber = driversLicenseNumberVal;
  }

  /**
   * Getter for shr.demographics.PassportNumber[]
   */
  get passportNumber() {
    return this._passportNumber;
  }

  /**
   * Setter for shr.demographics.PassportNumber[]
   */
  set passportNumber(passportNumberVal) {
    this._passportNumber = passportNumberVal;
  }

  /**
   * Getter for shr.demographics.AddressUsed[]
   */
  get addressUsed() {
    return this._addressUsed;
  }

  /**
   * Setter for shr.demographics.AddressUsed[]
   */
  set addressUsed(addressUsedVal) {
    this._addressUsed = addressUsedVal;
  }

  /**
   * Getter for shr.demographics.Telecom[]
   */
  get telecom() {
    return this._telecom;
  }

  /**
   * Setter for shr.demographics.Telecom[]
   */
  set telecom(telecomVal) {
    this._telecom = telecomVal;
  }

  /**
   * Getter for shr.actor.LanguageUsed[]
   */
  get languageUsed() {
    return this._languageUsed;
  }

  /**
   * Setter for shr.actor.LanguageUsed[]
   */
  set languageUsed(languageUsedVal) {
    this._languageUsed = languageUsedVal;
  }

  /**
   * Getter for shr.demographics.MedicalInterpreterNeeded
   */
  get medicalInterpreterNeeded() {
    return this._medicalInterpreterNeeded;
  }

  /**
   * Setter for shr.demographics.MedicalInterpreterNeeded
   */
  set medicalInterpreterNeeded(medicalInterpreterNeededVal) {
    this._medicalInterpreterNeeded = medicalInterpreterNeededVal;
  }

  /**
   * Getter for shr.demographics.FamilialRelationship[]
   */
  get familialRelationship() {
    return this._familialRelationship;
  }

  /**
   * Setter for shr.demographics.FamilialRelationship[]
   */
  set familialRelationship(familialRelationshipVal) {
    this._familialRelationship = familialRelationshipVal;
  }

}

export default PersonOfRecord;
