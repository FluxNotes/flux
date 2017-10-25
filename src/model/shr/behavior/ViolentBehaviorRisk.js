import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.behavior.ViolentBehaviorRisk */
class ViolentBehaviorRisk extends Panel {

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
   * Getter for shr.behavior.ViolentRiskToOthers
   */
  get violentRiskToOthers() {
    return this._violentRiskToOthers;
  }

  /**
   * Setter for shr.behavior.ViolentRiskToOthers
   */
  set violentRiskToOthers(violentRiskToOthersVal) {
    this._violentRiskToOthers = violentRiskToOthersVal;
  }

  /**
   * Getter for shr.behavior.ViolentRiskToSelf
   */
  get violentRiskToSelf() {
    return this._violentRiskToSelf;
  }

  /**
   * Setter for shr.behavior.ViolentRiskToSelf
   */
  set violentRiskToSelf(violentRiskToSelfVal) {
    this._violentRiskToSelf = violentRiskToSelfVal;
  }

}

export default ViolentBehaviorRisk;
