import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.behavior.ReligiousPractice */
class ReligiousPractice extends Panel {

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
   * Getter for Reference<shr.behavior.Religion>
   */
  get religion() {
    return this._religion;
  }

  /**
   * Setter for Reference<shr.behavior.Religion>
   */
  set religion(religionVal) {
    this._religion = religionVal;
  }

  /**
   * Getter for Reference<shr.behavior.ReligiousPracticeStatus>
   */
  get religiousPracticeStatus() {
    return this._religiousPracticeStatus;
  }

  /**
   * Setter for Reference<shr.behavior.ReligiousPracticeStatus>
   */
  set religiousPracticeStatus(religiousPracticeStatusVal) {
    this._religiousPracticeStatus = religiousPracticeStatusVal;
  }

  /**
   * Getter for Reference<shr.behavior.ReligiousRestriction>[]
   */
  get religiousRestriction() {
    return this._religiousRestriction;
  }

  /**
   * Setter for Reference<shr.behavior.ReligiousRestriction>[]
   */
  set religiousRestriction(religiousRestrictionVal) {
    this._religiousRestriction = religiousRestrictionVal;
  }

  /**
   * Getter for Reference<shr.behavior.ReligiousCongregation>
   */
  get religiousCongregation() {
    return this._religiousCongregation;
  }

  /**
   * Setter for Reference<shr.behavior.ReligiousCongregation>
   */
  set religiousCongregation(religiousCongregationVal) {
    this._religiousCongregation = religiousCongregationVal;
  }

  // Ommitting getter/setter for field: TBD<ReligiousRepresentative>

}

export default ReligiousPractice;
