import AdverseEventGrade from './AdverseEventGrade';
import AdverseEventOutcome from './AdverseEventOutcome';
import AssociatedStudy from '../observation/AssociatedStudy';
import CauseCategory from './CauseCategory';
import CodeableConcept from '../core/CodeableConcept';
import Entry from '../base/Entry';
import SeriousAdverseEvent from './SeriousAdverseEvent';

/** Generated from SHR definition for shr.adverse.AdverseEvent */
class AdverseEvent {
    constructor(json) {
        if (json) {
            this._entryInfo = new Entry(json);
            this._codeableConcept = new CodeableConcept(json.value);
            this.codeableConcept = this._codeableConcept;
            if (json.adverseEventGrade) this._adverseEventGrade = new AdverseEventGrade(json.adverseEventGrade);
            if (json.seriousAdverseEvent) this._seriousAdverseEvent = new SeriousAdverseEvent(json.seriousAdverseEvent);
            if (json.adverseEventOutcome) this._adverseEventOutcome = new AdverseEventOutcome(json.adverseEventOutcome);
            if (json.associatedStudy) this._associatedStudy = new AssociatedStudy(json.associatedStudy);
            if (json.causeCategory) this._causeCategory = new CauseCategory(json.causeCategory);
        } else {
            this._entryInfo = Entry.createEntry("http://standardhealthrecord.org/adverse/AdverseEvent");
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
   * Getter for shr.adverse.AdverseEventGrade
   */
  get adverseEventGrade() {
    return this._adverseEventGrade;
  }

  /**
   * Setter for shr.adverse.AdverseEventGrade
   */
  set adverseEventGrade(adverseEventGradeVal) {
    this._adverseEventGrade = adverseEventGradeVal;
  }

  /**
   * Getter for shr.adverse.SeriousAdverseEvent
   */
  get seriousAdverseEvent() {
    return this._seriousAdverseEvent;
  }

  /**
   * Setter for shr.adverse.SeriousAdverseEvent
   */
  set seriousAdverseEvent(seriousAdverseEventVal) {
    this._seriousAdverseEvent = seriousAdverseEventVal;
  }

  // Ommitting getter/setter for field: TBD<PatternOfEvent>

  /**
   * Getter for shr.adverse.AdverseEventOutcome
   */
  get adverseEventOutcome() {
    return this._adverseEventOutcome;
  }

  /**
   * Setter for shr.adverse.AdverseEventOutcome
   */
  set adverseEventOutcome(adverseEventOutcomeVal) {
    this._adverseEventOutcome = adverseEventOutcomeVal;
  }

  /**
   * Getter for shr.observation.AssociatedStudy
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Setter for shr.observation.AssociatedStudy
   */
  set associatedStudy(associatedStudyVal) {
    this._associatedStudy = associatedStudyVal;
  }

  /**
   * Getter for shr.adverse.CauseCategory
   */
  get causeCategory() {
    return this._causeCategory;
  }

  /**
   * Setter for shr.adverse.CauseCategory
   */
  set causeCategory(causeCategoryVal) {
    this._causeCategory = causeCategoryVal;
  }

}

export default AdverseEvent;
