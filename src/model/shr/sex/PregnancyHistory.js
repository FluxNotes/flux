import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.sex.PregnancyHistory */
class PregnancyHistory extends Panel {

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
   * Getter for shr.sex.CurrentPregnancyStatus
   */
  get currentPregnancyStatus() {
    return this._currentPregnancyStatus;
  }

  /**
   * Setter for shr.sex.CurrentPregnancyStatus
   */
  set currentPregnancyStatus(currentPregnancyStatusVal) {
    this._currentPregnancyStatus = currentPregnancyStatusVal;
  }

  /**
   * Getter for shr.sex.NumberOfPreviousPregnancies
   */
  get numberOfPreviousPregnancies() {
    return this._numberOfPreviousPregnancies;
  }

  /**
   * Setter for shr.sex.NumberOfPreviousPregnancies
   */
  set numberOfPreviousPregnancies(numberOfPreviousPregnanciesVal) {
    this._numberOfPreviousPregnancies = numberOfPreviousPregnanciesVal;
  }

  /**
   * Getter for shr.sex.NumberOfLivingChildren
   */
  get numberOfLivingChildren() {
    return this._numberOfLivingChildren;
  }

  /**
   * Setter for shr.sex.NumberOfLivingChildren
   */
  set numberOfLivingChildren(numberOfLivingChildrenVal) {
    this._numberOfLivingChildren = numberOfLivingChildrenVal;
  }

}

export default PregnancyHistory;
