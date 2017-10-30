/** Generated from SHR definition for shr.adverse.AdverseReactionAttribution */
class AdverseReactionAttribution {

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
   * Getter for choice value
   * - Reference<shr.medication.MedicationUse>
   * - Reference<shr.procedure.Procedure>
   * - Reference<shr.medication.Medication>
   * - Reference<shr.device.Device>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - Reference<shr.medication.MedicationUse>
   * - Reference<shr.procedure.Procedure>
   * - Reference<shr.medication.Medication>
   * - Reference<shr.device.Device>
   */
  set value(val) {
    this._value = val;
  }

  /**
   * Getter for shr.core.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Setter for shr.core.Certainty
   */
  set certainty(certaintyVal) {
    this._certainty = certaintyVal;
  }

}

export default AdverseReactionAttribution;
