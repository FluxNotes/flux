import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.sex.SexualBehavior */
class SexualBehavior extends Panel {

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
   * Getter for Reference<shr.sex.SexualActivity>[]
   */
  get sexualActivity() {
    return this._sexualActivity;
  }

  /**
   * Setter for Reference<shr.sex.SexualActivity>[]
   */
  set sexualActivity(sexualActivityVal) {
    this._sexualActivity = sexualActivityVal;
  }

  /**
   * Getter for Reference<shr.sex.NumberOfSexualPartnersPastYear>
   */
  get numberOfSexualPartnersPastYear() {
    return this._numberOfSexualPartnersPastYear;
  }

  /**
   * Setter for Reference<shr.sex.NumberOfSexualPartnersPastYear>
   */
  set numberOfSexualPartnersPastYear(numberOfSexualPartnersPastYearVal) {
    this._numberOfSexualPartnersPastYear = numberOfSexualPartnersPastYearVal;
  }

  /**
   * Getter for Reference<shr.sex.IntercourseDifficulty>[]
   */
  get intercourseDifficulty() {
    return this._intercourseDifficulty;
  }

  /**
   * Setter for Reference<shr.sex.IntercourseDifficulty>[]
   */
  set intercourseDifficulty(intercourseDifficultyVal) {
    this._intercourseDifficulty = intercourseDifficultyVal;
  }

}

export default SexualBehavior;
