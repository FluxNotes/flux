import Person from './Person';

/** Generated from SHR definition for shr.actor.Practitioner */
class Practitioner extends Person {

  /**
   * Getter for shr.core.HumanName[]
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Setter for shr.core.HumanName[]
   */
  set humanName(humanNameVal) {
    this._humanName = humanNameVal;
  }

  /**
   * Getter for shr.actor.Affiliation[]
   */
  get affiliation() {
    return this._affiliation;
  }

  /**
   * Setter for shr.actor.Affiliation[]
   */
  set affiliation(affiliationVal) {
    this._affiliation = affiliationVal;
  }

  /**
   * Getter for shr.actor.NationalProviderIdentifier
   */
  get nationalProviderIdentifier() {
    return this._nationalProviderIdentifier;
  }

  /**
   * Setter for shr.actor.NationalProviderIdentifier
   */
  set nationalProviderIdentifier(nationalProviderIdentifierVal) {
    this._nationalProviderIdentifier = nationalProviderIdentifierVal;
  }

  /**
   * Getter for shr.actor.MedicalSpecialty[]
   */
  get medicalSpecialty() {
    return this._medicalSpecialty;
  }

  /**
   * Setter for shr.actor.MedicalSpecialty[]
   */
  set medicalSpecialty(medicalSpecialtyVal) {
    this._medicalSpecialty = medicalSpecialtyVal;
  }

}

export default Practitioner;
