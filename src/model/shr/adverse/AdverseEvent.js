import { setPropertiesFromJSON } from '../../json-helper';

import SpecializedFinding from '../finding/SpecializedFinding';

/**
 * Generated class for shr.adverse.AdverseEvent.
 * @extends SpecializedFinding
 */
class AdverseEvent extends SpecializedFinding {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {AdverseEvent} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {AdverseEvent} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {AdverseEvent} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {AdverseEvent} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime and return 'this' for chaining.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   * @returns {AdverseEvent} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Get the AdverseEventGrade.
   * @returns {AdverseEventGrade} The shr.adverse.AdverseEventGrade
   */
  get adverseEventGrade() {
    return this._adverseEventGrade;
  }

  /**
   * Set the AdverseEventGrade.
   * This field/value is required.
   * @param {AdverseEventGrade} adverseEventGrade - The shr.adverse.AdverseEventGrade
   */
  set adverseEventGrade(adverseEventGrade) {
    this._adverseEventGrade = adverseEventGrade;
  }

  /**
   * Set the AdverseEventGrade and return 'this' for chaining.
   * This field/value is required.
   * @param {AdverseEventGrade} adverseEventGrade - The shr.adverse.AdverseEventGrade
   * @returns {AdverseEvent} this.
   */
  withAdverseEventGrade(adverseEventGrade) {
    this.adverseEventGrade = adverseEventGrade; return this;
  }

  /**
   * Get the SeriousAdverseEvent.
   * @returns {SeriousAdverseEvent} The shr.adverse.SeriousAdverseEvent
   */
  get seriousAdverseEvent() {
    return this._seriousAdverseEvent;
  }

  /**
   * Set the SeriousAdverseEvent.
   * @param {SeriousAdverseEvent} seriousAdverseEvent - The shr.adverse.SeriousAdverseEvent
   */
  set seriousAdverseEvent(seriousAdverseEvent) {
    this._seriousAdverseEvent = seriousAdverseEvent;
  }

  /**
   * Set the SeriousAdverseEvent and return 'this' for chaining.
   * @param {SeriousAdverseEvent} seriousAdverseEvent - The shr.adverse.SeriousAdverseEvent
   * @returns {AdverseEvent} this.
   */
  withSeriousAdverseEvent(seriousAdverseEvent) {
    this.seriousAdverseEvent = seriousAdverseEvent; return this;
  }

  // Ommitting getter/setter for TBD: PatternOfEvent

  /**
   * Get the Outcome.
   * @returns {Outcome} The shr.action.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The shr.action.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome and return 'this' for chaining.
   * @param {Outcome} outcome - The shr.action.Outcome
   * @returns {AdverseEvent} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Get the shr.procedure.AssociatedStudy reference.
   * @returns {Reference} The shr.procedure.AssociatedStudy reference
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Set the shr.procedure.AssociatedStudy reference.
   * @param {Reference} associatedStudy - The shr.procedure.AssociatedStudy reference
   */
  set associatedStudy(associatedStudy) {
    this._associatedStudy = associatedStudy;
  }

  /**
   * Set the shr.procedure.AssociatedStudy reference and return 'this' for chaining.
   * @param {Reference} associatedStudy - The shr.procedure.AssociatedStudy reference
   * @returns {AdverseEvent} this.
   */
  withAssociatedStudy(associatedStudy) {
    this.associatedStudy = associatedStudy; return this;
  }

  /**
   * Get the CauseCategory.
   * @returns {CauseCategory} The shr.adverse.CauseCategory
   */
  get causeCategory() {
    return this._causeCategory;
  }

  /**
   * Set the CauseCategory.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   */
  set causeCategory(causeCategory) {
    this._causeCategory = causeCategory;
  }

  /**
   * Set the CauseCategory and return 'this' for chaining.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   * @returns {AdverseEvent} this.
   */
  withCauseCategory(causeCategory) {
    this.causeCategory = causeCategory; return this;
  }

  /**
   * Get the AdverseEventAttribution array.
   * @returns {Array<AdverseEventAttribution>} The shr.adverse.AdverseEventAttribution array
   */
  get adverseEventAttribution() {
    return this._adverseEventAttribution;
  }

  /**
   * Set the AdverseEventAttribution array.
   * @param {Array<AdverseEventAttribution>} adverseEventAttribution - The shr.adverse.AdverseEventAttribution array
   */
  set adverseEventAttribution(adverseEventAttribution) {
    this._adverseEventAttribution = adverseEventAttribution;
  }

  /**
   * Set the AdverseEventAttribution array and return 'this' for chaining.
   * @param {Array<AdverseEventAttribution>} adverseEventAttribution - The shr.adverse.AdverseEventAttribution array
   * @returns {AdverseEvent} this.
   */
  withAdverseEventAttribution(adverseEventAttribution) {
    this.adverseEventAttribution = adverseEventAttribution; return this;
  }

  /**
   * Get the ActionTaken array.
   * @returns {Array<ActionTaken>} The shr.adverse.ActionTaken array
   */
  get actionTaken() {
    return this._actionTaken;
  }

  /**
   * Set the ActionTaken array.
   * @param {Array<ActionTaken>} actionTaken - The shr.adverse.ActionTaken array
   */
  set actionTaken(actionTaken) {
    this._actionTaken = actionTaken;
  }

  /**
   * Set the ActionTaken array and return 'this' for chaining.
   * @param {Array<ActionTaken>} actionTaken - The shr.adverse.ActionTaken array
   * @returns {AdverseEvent} this.
   */
  withActionTaken(actionTaken) {
    this.actionTaken = actionTaken; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseEvent class.
   * The JSON must be valid against the AdverseEvent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseEvent} An instance of AdverseEvent populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AdverseEvent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseEvent class to a JSON object.
   * The JSON is expected to be valid against the AdverseEvent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/adverse/AdverseEvent' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    if (this.adverseEventGrade != null) {
      inst['AdverseEventGrade'] = typeof this.adverseEventGrade.toJSON === 'function' ? this.adverseEventGrade.toJSON() : this.adverseEventGrade;
    }
    if (this.seriousAdverseEvent != null) {
      inst['SeriousAdverseEvent'] = typeof this.seriousAdverseEvent.toJSON === 'function' ? this.seriousAdverseEvent.toJSON() : this.seriousAdverseEvent;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.associatedStudy != null) {
      inst['AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    if (this.causeCategory != null) {
      inst['CauseCategory'] = typeof this.causeCategory.toJSON === 'function' ? this.causeCategory.toJSON() : this.causeCategory;
    }
    if (this.adverseEventAttribution != null) {
      inst['AdverseEventAttribution'] = this.adverseEventAttribution.map(f => f.toJSON());
    }
    if (this.actionTaken != null) {
      inst['ActionTaken'] = this.actionTaken.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the AdverseEvent class to a FHIR object.
   * The FHIR is expected to be valid against the AdverseEvent FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'AdverseEvent';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.focalSubject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubject.toFHIR(true));
    }
    if (this.focalSubjectReference != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubjectReference.toFHIR(true));
    }
    if (this.findingMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingMethod.toFHIR(true));
    }
    if (this.findingStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingStatus.toFHIR(true));
    }
    if (this.evidence != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.evidence.toFHIR(true));
    }
    if (this.adverseEventGrade != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.adverseEventGrade.toFHIR(true));
    }
    if (this.causeCategory != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.causeCategory.toFHIR(true));
    }
    if (this.actionTaken != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.actionTaken.toFHIR(true));
    }
    if (this.subject != null) {
      inst['subject'] = typeof this.subject.toFHIR === 'function' ? this.subject.toFHIR() : this.subject;
    }
    if (this.occurrenceTime != null) {
      inst['date'] = typeof this.occurrenceTime.toFHIR === 'function' ? this.occurrenceTime.toFHIR() : this.occurrenceTime;
    }
    if (this.seriousAdverseEvent != null) {
      inst['seriousness'] = typeof this.seriousAdverseEvent.toFHIR === 'function' ? this.seriousAdverseEvent.toFHIR() : this.seriousAdverseEvent;
    }
    if (this.outcome != null) {
      inst['outcome'] = typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR() : this.outcome;
    }
    if (this.author != null) {
      inst['recorder'] = typeof this.author.toFHIR === 'function' ? this.author.toFHIR() : this.author;
    }
    if (this.details != null) {
      inst['description'] = typeof this.details.toFHIR === 'function' ? this.details.toFHIR() : this.details;
    }
    if (this.adverseEventAttribution != null) {
      if (inst['suspectEntity'] === undefined) {
        inst['suspectEntity'] = {};
      }
      inst['suspectEntity']['instance'] = inst['suspectEntity']['instance'] || [];
      inst['suspectEntity']['instance'].concat(this.adverseEventAttribution.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.adverseEventAttribution != null && this.adverseEventAttribution.certainty != null) {
      if (inst['suspectEntity'] === undefined) {
        inst['suspectEntity'] = {};
      }
      inst['suspectEntity']['causalityAssessment'] = inst['suspectEntity']['causalityAssessment'] || [];
      inst['suspectEntity']['causalityAssessment'].concat(this.adverseEventAttribution.certainty.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.associatedStudy != null) {
      inst['study'] = typeof this.associatedStudy.toFHIR === 'function' ? this.associatedStudy.toFHIR() : this.associatedStudy;
    }
    return inst;
  }
}
export default AdverseEvent;
