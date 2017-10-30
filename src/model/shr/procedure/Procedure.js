import Action from '../base/Action';

/** Generated from SHR definition for shr.procedure.Procedure */
class Procedure extends Action {

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
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.encounter.Facility
   */
  get facility() {
    return this._facility;
  }

  /**
   * Setter for shr.encounter.Facility
   */
  set facility(facilityVal) {
    this._facility = facilityVal;
  }

}

export default Procedure;
