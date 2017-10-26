import CodeableConcept from '../core/CodeableConcept';
import Entry from '../base/Entry';
import Observation from '../observation/Observation';
import ReceptorType from './ReceptorType';

/** Generated from SHR definition for shr.oncology.ReceptorStatusObservation */
class ReceptorStatusObservation extends Observation {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        this.codeableConcept = new CodeableConcept(json.value);
        this._codeableConcept = this.codeableConcept;
        if (json.receptorType) this._receptorType = new ReceptorType(json.receptorType);
    }

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
   * Getter for shr.oncology.ReceptorType
   */
  get receptorType() {
    return this._receptorType;
  }

  /**
   * Setter for shr.oncology.ReceptorType
   */
  set receptorType(receptorTypeVal) {
    this._receptorType = receptorTypeVal;
  }

  /**
   * Getter for shr.oncology.ReceptorPositivityPercentage
   */
  get receptorPositivityPercentage() {
    return this._receptorPositivityPercentage;
  }

  /**
   * Setter for shr.oncology.ReceptorPositivityPercentage
   */
  set receptorPositivityPercentage(receptorPositivityPercentageVal) {
    this._receptorPositivityPercentage = receptorPositivityPercentageVal;
  }

  /**
   * Getter for shr.oncology.ReceptorAllredTotalScore
   */
  get receptorAllredTotalScore() {
    return this._receptorAllredTotalScore;
  }

  /**
   * Setter for shr.oncology.ReceptorAllredTotalScore
   */
  set receptorAllredTotalScore(receptorAllredTotalScoreVal) {
    this._receptorAllredTotalScore = receptorAllredTotalScoreVal;
  }

  /**
   * Getter for shr.oncology.ReceptorProportionScore
   */
  get receptorProportionScore() {
    return this._receptorProportionScore;
  }

  /**
   * Setter for shr.oncology.ReceptorProportionScore
   */
  set receptorProportionScore(receptorProportionScoreVal) {
    this._receptorProportionScore = receptorProportionScoreVal;
  }

  /**
   * Getter for shr.oncology.ReceptorIntensityScore
   */
  get receptorIntensityScore() {
    return this._receptorIntensityScore;
  }

  /**
   * Setter for shr.oncology.ReceptorIntensityScore
   */
  set receptorIntensityScore(receptorIntensityScoreVal) {
    this._receptorIntensityScore = receptorIntensityScoreVal;
  }

}

export default ReceptorStatusObservation;
