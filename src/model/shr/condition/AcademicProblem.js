import Condition from './Condition';

/** Generated from SHR definition for shr.condition.AcademicProblem */
class AcademicProblem extends Condition {

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
   * Getter for shr.core.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Setter for shr.core.BodySite
   */
  set bodySite(bodySiteVal) {
    this._bodySite = bodySiteVal;
  }

}

export default AcademicProblem;
