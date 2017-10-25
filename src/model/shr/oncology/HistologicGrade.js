import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.oncology.HistologicGrade */
class HistologicGrade extends Observation {

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
   * Getter for shr.oncology.TubuleFormationScore
   */
  get tubuleFormationScore() {
    return this._tubuleFormationScore;
  }

  /**
   * Setter for shr.oncology.TubuleFormationScore
   */
  set tubuleFormationScore(tubuleFormationScoreVal) {
    this._tubuleFormationScore = tubuleFormationScoreVal;
  }

  /**
   * Getter for shr.oncology.NuclearPleomorphismScore
   */
  get nuclearPleomorphismScore() {
    return this._nuclearPleomorphismScore;
  }

  /**
   * Setter for shr.oncology.NuclearPleomorphismScore
   */
  set nuclearPleomorphismScore(nuclearPleomorphismScoreVal) {
    this._nuclearPleomorphismScore = nuclearPleomorphismScoreVal;
  }

  /**
   * Getter for shr.oncology.MitoticCountScore
   */
  get mitoticCountScore() {
    return this._mitoticCountScore;
  }

  /**
   * Setter for shr.oncology.MitoticCountScore
   */
  set mitoticCountScore(mitoticCountScoreVal) {
    this._mitoticCountScore = mitoticCountScoreVal;
  }

}

export default HistologicGrade;
