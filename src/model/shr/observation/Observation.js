import Lang from 'lodash';
import Action from '../base/Action';
import CodeableConcept from '../core/CodeableConcept';
import Entry from '../base/Entry';
import Status from '../base/Status';

/** Generated from SHR definition for shr.observation.Observation */
class Observation extends Action {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        if (Lang.isObject(json.value)) {
            if (json.value.coding) {
                this._value = new CodeableConcept(json.value);
            } else {
                //TODO: Quanity, Range, Ratio, TimePeriod
            }
        } else {
            //TODO
        }
        this._status = new Status(json.status);
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
   * Getter for choice value
   * - shr.core.Quantity
   * - shr.core.CodeableConcept
   * - string
   * - boolean
   * - shr.core.Range
   * - shr.core.Ratio
   * - time
   * - dateTime
   * - shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Quantity
   * - shr.core.CodeableConcept
   * - string
   * - boolean
   * - shr.core.Range
   * - shr.core.Ratio
   * - time
   * - dateTime
   * - shr.core.TimePeriod
   */
  set value(val) {
    this._value = val;
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
   * Getter for shr.core.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Setter for shr.core.BodySite
   */
  set bodySite(bodySiteVal) {
    this._bodySite = bodySiteVal;
  }

  /**
   * Getter for shr.core.Reason
   */
  get reason() {
    return this._reason;
  }

  /**
   * Setter for shr.core.Reason
   */
  set reason(reasonVal) {
    this._reason = reasonVal;
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
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
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
   * Getter for shr.base.AssertionNegationModifier
   */
  get assertionNegationModifier() {
    return this._assertionNegationModifier;
  }

  /**
   * Setter for shr.base.AssertionNegationModifier
   */
  set assertionNegationModifier(assertionNegationModifierVal) {
    this._assertionNegationModifier = assertionNegationModifierVal;
  }

  /**
   * Getter for shr.observation.ObservationQualifier[]
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Setter for shr.observation.ObservationQualifier[]
   */
  set observationQualifier(observationQualifierVal) {
    this._observationQualifier = observationQualifierVal;
  }

  /**
   * Getter for shr.observation.DataAbsentReason
   */
  get dataAbsentReason() {
    return this._dataAbsentReason;
  }

  /**
   * Setter for shr.observation.DataAbsentReason
   */
  set dataAbsentReason(dataAbsentReasonVal) {
    this._dataAbsentReason = dataAbsentReasonVal;
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
   * Getter for shr.observation.ReferenceRange[]
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Setter for shr.observation.ReferenceRange[]
   */
  set referenceRange(referenceRangeVal) {
    this._referenceRange = referenceRangeVal;
  }

  /**
   * Getter for shr.lab.Interpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Setter for shr.lab.Interpretation
   */
  set interpretation(interpretationVal) {
    this._interpretation = interpretationVal;
  }

  /**
   * Getter for shr.core.Comment
   */
  get comment() {
    return this._comment;
  }

  /**
   * Setter for shr.core.Comment
   */
  set comment(commentVal) {
    this._comment = commentVal;
  }

  /**
   * Getter for shr.observation.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Setter for shr.observation.PanelMembers
   */
  set panelMembers(panelMembersVal) {
    this._panelMembers = panelMembersVal;
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
   * Getter for shr.actor.Participant[]
   */
  get participant() {
    return this._participant;
  }

  /**
   * Setter for shr.actor.Participant[]
   */
  set participant(participantVal) {
    this._participant = participantVal;
  }

  /**
   * Getter for shr.core.Setting[]
   */
  get setting() {
    return this._setting;
  }

  /**
   * Setter for shr.core.Setting[]
   */
  set setting(settingVal) {
    this._setting = settingVal;
  }

  /**
   * Getter for shr.core.Location[]
   */
  get location() {
    return this._location;
  }

  /**
   * Setter for shr.core.Location[]
   */
  set location(locationVal) {
    this._location = locationVal;
  }

}

export default Observation;
