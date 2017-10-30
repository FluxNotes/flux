import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.lifehistory.Employment */
class Employment extends Observation {

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
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
  }

  /**
   * Getter for shr.lifehistory.EmploymentStatus
   */
  get employmentStatus() {
    return this._employmentStatus;
  }

  /**
   * Setter for shr.lifehistory.EmploymentStatus
   */
  set employmentStatus(employmentStatusVal) {
    this._employmentStatus = employmentStatusVal;
  }

  /**
   * Getter for shr.lifehistory.Employer
   */
  get employer() {
    return this._employer;
  }

  /**
   * Setter for shr.lifehistory.Employer
   */
  set employer(employerVal) {
    this._employer = employerVal;
  }

  /**
   * Getter for shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Setter for shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTimeVal) {
    this._occurrenceTime = occurrenceTimeVal;
  }

}

export default Employment;
