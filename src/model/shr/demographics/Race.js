/** Generated from SHR definition for shr.demographics.Race */
class Race {

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
   * Getter for shr.demographics.RaceDetail[]
   */
  get raceDetail() {
    return this._raceDetail;
  }

  /**
   * Setter for shr.demographics.RaceDetail[]
   */
  set raceDetail(raceDetailVal) {
    this._raceDetail = raceDetailVal;
  }

}

export default Race;
