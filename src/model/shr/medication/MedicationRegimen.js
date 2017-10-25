/** Generated from SHR definition for shr.medication.MedicationRegimen */
class MedicationRegimen {

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
   * Getter for shr.medication.MedicationPrescription[]
   */
  get medicationPrescription() {
    return this._medicationPrescription;
  }

  /**
   * Setter for shr.medication.MedicationPrescription[]
   */
  set medicationPrescription(medicationPrescriptionVal) {
    this._medicationPrescription = medicationPrescriptionVal;
  }

}

export default MedicationRegimen;
