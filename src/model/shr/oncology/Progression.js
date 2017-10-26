import Assessment from '../assessment/Assessment';
import AssessmentFocus from '../assessment/AssessmentFocus';
import Category from '../base/Category';
import CodeableConcept from '../core/CodeableConcept';
import Entry from '../base/Entry';
import Evidence from '../observation/Evidence';

/** Generated from SHR definition for shr.oncology.Progression */
class Progression extends Assessment {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        this.codeableConcept = new CodeableConcept(json.value);
        this._codeableConcept = this.codeableConcept;
        this._category = new Category(json.category);
        if (json.assessmentFocus) this._assessmentFocus = new AssessmentFocus(json.assessmentFocus);
        if (json.evidence) this._evidence = json.evidence.map((e) => new Evidence(e));
        this._asOfDate = json.asOfDate;
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
   * Getter for shr.base.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.assessment.AssessmentFocus
   */
  get assessmentFocus() {
    return this._assessmentFocus;
  }

  /**
   * Setter for shr.assessment.AssessmentFocus
   */
  set assessmentFocus(assessmentFocusVal) {
    this._assessmentFocus = assessmentFocusVal;
  }

  /**
   * Getter for shr.observation.Evidence[]
   */
  get evidence() {
    return this._evidence;
  }

  /**
   * Setter for shr.observation.Evidence[]
   */
  set evidence(evidenceVal) {
    this._evidence = evidenceVal;
  }

  // Flux added
  get asOfDate() {
      return this._asOfDate;
  }
  
  set asOfDate(val) {
      this._asOfDate = val;
  }
}

export default Progression;
