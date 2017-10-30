import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.oncology.CancerLymphaticInvolvement */
class CancerLymphaticInvolvement extends Observation {

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
   * Getter for shr.oncology.LymphaticSystemSubdivision
   */
  get lymphaticSystemSubdivision() {
    return this._lymphaticSystemSubdivision;
  }

  /**
   * Setter for shr.oncology.LymphaticSystemSubdivision
   */
  set lymphaticSystemSubdivision(lymphaticSystemSubdivisionVal) {
    this._lymphaticSystemSubdivision = lymphaticSystemSubdivisionVal;
  }

  /**
   * Getter for shr.oncology.LargestLymphNodeSize
   */
  get largestLymphNodeSize() {
    return this._largestLymphNodeSize;
  }

  /**
   * Setter for shr.oncology.LargestLymphNodeSize
   */
  set largestLymphNodeSize(largestLymphNodeSizeVal) {
    this._largestLymphNodeSize = largestLymphNodeSizeVal;
  }

  /**
   * Getter for shr.oncology.NumberOfLymphNodesInvolved
   */
  get numberOfLymphNodesInvolved() {
    return this._numberOfLymphNodesInvolved;
  }

  /**
   * Setter for shr.oncology.NumberOfLymphNodesInvolved
   */
  set numberOfLymphNodesInvolved(numberOfLymphNodesInvolvedVal) {
    this._numberOfLymphNodesInvolved = numberOfLymphNodesInvolvedVal;
  }

  /**
   * Getter for shr.oncology.DegreeOfLymphaticInvolvement
   */
  get degreeOfLymphaticInvolvement() {
    return this._degreeOfLymphaticInvolvement;
  }

  /**
   * Setter for shr.oncology.DegreeOfLymphaticInvolvement
   */
  set degreeOfLymphaticInvolvement(degreeOfLymphaticInvolvementVal) {
    this._degreeOfLymphaticInvolvement = degreeOfLymphaticInvolvementVal;
  }

}

export default CancerLymphaticInvolvement;
