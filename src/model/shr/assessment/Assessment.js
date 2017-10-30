import Action from '../base/Action';
import AssessmentFocus from '../assessment/AssessmentFocus';
import Category from '../base/Category';
import Entry from '../base/Entry';
import Status from '../base/Status';

/** Generated from SHR definition for shr.assessment.Assessment */
class Assessment extends Action {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            if (json.category) this._category = json.category.map((c) => new Category(c));
            if (json.status) this._status = new Status(json.status);
            if (json.assessmentFocus) this._assessmentFocus = json.assessmentFocus.map((a) => new AssessmentFocus(a));
        } else {
            this._entryInfo = Entry.createEntry(    "http://standardhealthrecord.org/assessment/Assessment",
                                                    "http://standardhealthrecord.org/base/Action");
        }
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
   * Getter for shr.base.Category[]
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category[]
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.assessment.AssessmentFocus[]
   */
  get assessmentFocus() {
    return this._assessmentFocus;
  }

  /**
   * Setter for shr.assessment.AssessmentFocus[]
   */
  set assessmentFocus(assessmentFocusVal) {
    this._assessmentFocus = assessmentFocusVal;
  }

  /**
   * Getter for shr.assessment.AssessmentResult[]
   */
  get assessmentResult() {
    return this._assessmentResult;
  }

  /**
   * Setter for shr.assessment.AssessmentResult[]
   */
  set assessmentResult(assessmentResultVal) {
    this._assessmentResult = assessmentResultVal;
  }

  /**
   * Getter for shr.observation.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Setter for shr.observation.Method
   */
  set method(methodVal) {
    this._method = methodVal;
  }

  /**
   * Getter for shr.observation.ClinicallyRelevantTime
   */
  get clinicallyRelevantTime() {
    return this._clinicallyRelevantTime;
  }

  /**
   * Setter for shr.observation.ClinicallyRelevantTime
   */
  set clinicallyRelevantTime(clinicallyRelevantTimeVal) {
    this._clinicallyRelevantTime = clinicallyRelevantTimeVal;
  }

  /**
   * Getter for shr.assessment.EvidenceQuality
   */
  get evidenceQuality() {
    return this._evidenceQuality;
  }

  /**
   * Setter for shr.assessment.EvidenceQuality
   */
  set evidenceQuality(evidenceQualityVal) {
    this._evidenceQuality = evidenceQualityVal;
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

  /**
   * Getter for shr.core.Summary
   */
  get summary() {
    return this._summary;
  }

  /**
   * Setter for shr.core.Summary
   */
  set summary(summaryVal) {
    this._summary = summaryVal;
  }

}

export default Assessment;
