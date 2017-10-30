import Procedure from '../procedure/Procedure';

/** Generated from SHR definition for shr.medication.MedicationChange */
class MedicationChange extends Procedure {

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
   * Getter for shr.core.EffectiveDate
   */
  get effectiveDate() {
    return this._effectiveDate;
  }

  /**
   * Setter for shr.core.EffectiveDate
   */
  set effectiveDate(effectiveDateVal) {
    this._effectiveDate = effectiveDateVal;
  }

  /**
   * Getter for shr.medication.MedicationChangeType
   */
  get medicationChangeType() {
    return this._medicationChangeType;
  }

  /**
   * Setter for shr.medication.MedicationChangeType
   */
  set medicationChangeType(medicationChangeTypeVal) {
    this._medicationChangeType = medicationChangeTypeVal;
  }

  /**
   * Getter for shr.medication.MedicationBeforeChange[]
   */
  get medicationBeforeChange() {
    return this._medicationBeforeChange;
  }

  /**
   * Setter for shr.medication.MedicationBeforeChange[]
   */
  set medicationBeforeChange(medicationBeforeChangeVal) {
    this._medicationBeforeChange = medicationBeforeChangeVal;
  }

  /**
   * Getter for shr.medication.MedicationAfterChange[]
   */
  get medicationAfterChange() {
    return this._medicationAfterChange;
  }

  /**
   * Setter for shr.medication.MedicationAfterChange[]
   */
  set medicationAfterChange(medicationAfterChangeVal) {
    this._medicationAfterChange = medicationAfterChangeVal;
  }

  // Ommitting getter/setter for field: TBD<ReasonForMedicationChange>

}

export default MedicationChange;
