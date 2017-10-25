import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.sex.ContraceptiveUse */
class ContraceptiveUse extends Panel {

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
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
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
   * Getter for shr.sex.ContraceptiveNotUsedReason[]
   */
  get contraceptiveNotUsedReason() {
    return this._contraceptiveNotUsedReason;
  }

  /**
   * Setter for shr.sex.ContraceptiveNotUsedReason[]
   */
  set contraceptiveNotUsedReason(contraceptiveNotUsedReasonVal) {
    this._contraceptiveNotUsedReason = contraceptiveNotUsedReasonVal;
  }

  /**
   * Getter for shr.sex.ContraceptiveMethodUsed[]
   */
  get contraceptiveMethodUsed() {
    return this._contraceptiveMethodUsed;
  }

  /**
   * Setter for shr.sex.ContraceptiveMethodUsed[]
   */
  set contraceptiveMethodUsed(contraceptiveMethodUsedVal) {
    this._contraceptiveMethodUsed = contraceptiveMethodUsedVal;
  }

}

export default ContraceptiveUse;
