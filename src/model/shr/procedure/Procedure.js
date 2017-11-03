import Action from '../base/Action';
import Entry from '../base/Entry';
import Facility from '../encounter/Facility';
import Status from '../base/Status';

/** Generated from SHR definition for shr.procedure.Procedure */
class Procedure extends Action {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        this._status = new Status(json.status);
        this._facility = new Facility(json.facility);
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
