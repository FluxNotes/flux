import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.oncology.BreastCancerReceptorStatus */
class BreastCancerReceptorStatus extends Panel {

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

  // Ommitting getter/setter for field: TBD<Specimen>

  /**
   * Getter for shr.oncology.EstrogenReceptorStatus
   */
  get estrogenReceptorStatus() {
    return this._estrogenReceptorStatus;
  }

  /**
   * Setter for shr.oncology.EstrogenReceptorStatus
   */
  set estrogenReceptorStatus(estrogenReceptorStatusVal) {
    this._estrogenReceptorStatus = estrogenReceptorStatusVal;
  }

  /**
   * Getter for shr.oncology.ProgesteroneReceptorStatus
   */
  get progesteroneReceptorStatus() {
    return this._progesteroneReceptorStatus;
  }

  /**
   * Setter for shr.oncology.ProgesteroneReceptorStatus
   */
  set progesteroneReceptorStatus(progesteroneReceptorStatusVal) {
    this._progesteroneReceptorStatus = progesteroneReceptorStatusVal;
  }

  /**
   * Getter for shr.oncology.HumanEpiduralGrowthFactorReceptor2Status
   */
  get humanEpiduralGrowthFactorReceptor2Status() {
    return this._humanEpiduralGrowthFactorReceptor2Status;
  }

  /**
   * Setter for shr.oncology.HumanEpiduralGrowthFactorReceptor2Status
   */
  set humanEpiduralGrowthFactorReceptor2Status(humanEpiduralGrowthFactorReceptor2StatusVal) {
    this._humanEpiduralGrowthFactorReceptor2Status = humanEpiduralGrowthFactorReceptor2StatusVal;
  }

}

export default BreastCancerReceptorStatus;
