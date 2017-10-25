import MedicationUse from './MedicationUse';

/** Generated from SHR definition for shr.medication.MedicationNotAdministered */
class MedicationNotAdministered extends MedicationUse {

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
   * Getter for shr.medication.Medication
   */
  get medication() {
    return this._medication;
  }

  /**
   * Setter for shr.medication.Medication
   */
  set medication(medicationVal) {
    this._medication = medicationVal;
  }

  /**
   * Getter for shr.medication.MedicationWasTaken
   */
  get medicationWasTaken() {
    return this._medicationWasTaken;
  }

  /**
   * Setter for shr.medication.MedicationWasTaken
   */
  set medicationWasTaken(medicationWasTakenVal) {
    this._medicationWasTaken = medicationWasTakenVal;
  }

  /**
   * Getter for shr.medication.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Setter for shr.medication.Dosage
   */
  set dosage(dosageVal) {
    this._dosage = dosageVal;
  }

  /**
   * Getter for shr.medication.Adherence
   */
  get adherence() {
    return this._adherence;
  }

  /**
   * Setter for shr.medication.Adherence
   */
  set adherence(adherenceVal) {
    this._adherence = adherenceVal;
  }

}

export default MedicationNotAdministered;
