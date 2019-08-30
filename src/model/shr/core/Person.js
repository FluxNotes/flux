// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Person.
 */
class Person {

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
   * @returns {DateOfBirth} The shr.core.DateOfBirth
   */
  get dateOfBirth() {
    return this._dateOfBirth;
  }

  /**
   * Set the DateOfBirth.
   * @param {DateOfBirth} dateOfBirth - The shr.core.DateOfBirth
   */
  set dateOfBirth(dateOfBirth) {
    this._dateOfBirth = dateOfBirth;
  }

  /**
   * Set the DateOfBirth and return 'this' for chaining.
   * @param {DateOfBirth} dateOfBirth - The shr.core.DateOfBirth
   * @returns {Person} this.
   */
  withDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth; return this;
  }

  /**
   * Get the AdministrativeGender.
   * @returns {AdministrativeGender} The shr.core.AdministrativeGender
   */
  get administrativeGender() {
    return this._administrativeGender;
  }

  /**
   * Set the AdministrativeGender.
   * This field/value is required.
   * @param {AdministrativeGender} administrativeGender - The shr.core.AdministrativeGender
   */
  set administrativeGender(administrativeGender) {
    this._administrativeGender = administrativeGender;
  }

  /**
   * Set the AdministrativeGender and return 'this' for chaining.
   * This field/value is required.
   * @param {AdministrativeGender} administrativeGender - The shr.core.AdministrativeGender
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
   * Get the Communication array.
   * @returns {Array<Communication>} The shr.core.Communication array
   */
  get communication() {
    return this._communication;
  }

  /**
   * Set the Communication array.
   * @param {Array<Communication>} communication - The shr.core.Communication array
   */
  set communication(communication) {
    this._communication = communication;
  }

  /**
   * Set the Communication array and return 'this' for chaining.
   * @param {Array<Communication>} communication - The shr.core.Communication array
   * @returns {Person} this.
   */
  withCommunication(communication) {
    this.communication = communication; return this;
  }

  /**
   * Get the MaritalStatus.
   * @returns {MaritalStatus} The shr.core.MaritalStatus
   */
  get maritalStatus() {
    return this._maritalStatus;
  }

  /**
   * Set the MaritalStatus.
   * @param {MaritalStatus} maritalStatus - The shr.core.MaritalStatus
   */
  set maritalStatus(maritalStatus) {
    this._maritalStatus = maritalStatus;
  }

  /**
   * Set the MaritalStatus and return 'this' for chaining.
   * @param {MaritalStatus} maritalStatus - The shr.core.MaritalStatus
   * @returns {Person} this.
   */
  withMaritalStatus(maritalStatus) {
    this.maritalStatus = maritalStatus; return this;
  }

  /**
   * Get the MultipleBirth.
   * @returns {MultipleBirth} The shr.core.MultipleBirth
   */
  get multipleBirth() {
    return this._multipleBirth;
  }

  /**
   * Set the MultipleBirth.
   * @param {MultipleBirth} multipleBirth - The shr.core.MultipleBirth
   */
  set multipleBirth(multipleBirth) {
    this._multipleBirth = multipleBirth;
  }

  /**
   * Set the MultipleBirth and return 'this' for chaining.
   * @param {MultipleBirth} multipleBirth - The shr.core.MultipleBirth
   * @returns {Person} this.
   */
  withMultipleBirth(multipleBirth) {
    this.multipleBirth = multipleBirth; return this;
  }

  /**
   * Get the BirthSex.
   * @returns {BirthSex} The shr.core.BirthSex
   */
  get birthSex() {
    return this._birthSex;
  }

  /**
   * Set the BirthSex.
   * @param {BirthSex} birthSex - The shr.core.BirthSex
   */
  set birthSex(birthSex) {
    this._birthSex = birthSex;
  }

  /**
   * Set the BirthSex and return 'this' for chaining.
   * @param {BirthSex} birthSex - The shr.core.BirthSex
   * @returns {Person} this.
   */
  withBirthSex(birthSex) {
    this.birthSex = birthSex; return this;
  }

  /**
   * Get the Race.
   * @returns {Race} The shr.core.Race
   */
  get race() {
    return this._race;
  }

  /**
   * Set the Race.
   * @param {Race} race - The shr.core.Race
   */
  set race(race) {
    this._race = race;
  }

  /**
   * Set the Race and return 'this' for chaining.
   * @param {Race} race - The shr.core.Race
   * @returns {Person} this.
   */
  withRace(race) {
    this.race = race; return this;
  }

  /**
   * Get the Ethnicity.
   * @returns {Ethnicity} The shr.core.Ethnicity
   */
  get ethnicity() {
    return this._ethnicity;
  }

  /**
   * Set the Ethnicity.
   * @param {Ethnicity} ethnicity - The shr.core.Ethnicity
   */
  set ethnicity(ethnicity) {
    this._ethnicity = ethnicity;
  }

  /**
   * Set the Ethnicity and return 'this' for chaining.
   * @param {Ethnicity} ethnicity - The shr.core.Ethnicity
   * @returns {Person} this.
   */
  withEthnicity(ethnicity) {
    this.ethnicity = ethnicity; return this;
  }

  /**
   * Get the Deceased.
   * @returns {Deceased} The shr.core.Deceased
   */
  get deceased() {
    return this._deceased;
  }

  /**
   * Set the Deceased.
   * @param {Deceased} deceased - The shr.core.Deceased
   */
  set deceased(deceased) {
    this._deceased = deceased;
  }

  /**
   * Set the Deceased and return 'this' for chaining.
   * @param {Deceased} deceased - The shr.core.Deceased
   * @returns {Person} this.
   */
  withDeceased(deceased) {
    this.deceased = deceased; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Person class.
   * The JSON must be valid against the Person JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Person} An instance of Person populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Person');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Person class to a JSON object.
   * The JSON is expected to be valid against the Person JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Person' } };
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
    if (this.communication != null) {
      inst['Communication'] = this.communication.map(f => f.toJSON());
    }
    if (this.maritalStatus != null) {
      inst['MaritalStatus'] = typeof this.maritalStatus.toJSON === 'function' ? this.maritalStatus.toJSON() : this.maritalStatus;
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
    if (this.deceased != null) {
      inst['Deceased'] = typeof this.deceased.toJSON === 'function' ? this.deceased.toJSON() : this.deceased;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Person class.
   * The FHIR must be valid against the Person FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Person} An instance of Person populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Person');
    const inst = new klass();
    return inst;
  }

}
export default Person;
