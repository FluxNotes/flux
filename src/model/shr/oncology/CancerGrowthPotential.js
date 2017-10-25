import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.oncology.CancerGrowthPotential */
class CancerGrowthPotential extends Observation {

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
   * Getter for shr.oncology.Ki-67LabelingIndex
   */
  get ki-67LabelingIndex() {
    return this._ki-67LabelingIndex;
  }

  /**
   * Setter for shr.oncology.Ki-67LabelingIndex
   */
  set ki-67LabelingIndex(ki-67LabelingIndexVal) {
    this._ki-67LabelingIndex = ki-67LabelingIndexVal;
  }

  /**
   * Getter for shr.oncology.S-PhaseFraction
   */
  get s-PhaseFraction() {
    return this._s-PhaseFraction;
  }

  /**
   * Setter for shr.oncology.S-PhaseFraction
   */
  set s-PhaseFraction(s-PhaseFractionVal) {
    this._s-PhaseFraction = s-PhaseFractionVal;
  }

}

export default CancerGrowthPotential;
