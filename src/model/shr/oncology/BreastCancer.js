import Condition from '../condition/Condition';

/** Generated from SHR definition for shr.oncology.BreastCancer */
class BreastCancer extends Condition {

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
   * Getter for shr.base.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.condition.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Setter for shr.condition.Stage
   */
  set stage(stageVal) {
    this._stage = stageVal;
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

export default BreastCancer;
